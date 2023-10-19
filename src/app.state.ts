import { atom, selector } from 'recoil'
import material from './material.func'

const MIN_HOLD_WIDTH = 10
const MAX_HOLD_WIDTH = 50
const MIN_HOLD_HEIGHT = 10
const MAX_HOLD_HEIGHT = 50

const limited = (min: number, max: number) => {
  return (value: number) => {
    return Math.max(min, Math.min(max, value))
  }
}

const limitedWidth = limited(MIN_HOLD_WIDTH, MAX_HOLD_WIDTH)
const limitedHeight = limited(MIN_HOLD_HEIGHT, MAX_HOLD_HEIGHT)
const possibleHeight = limited(0, MAX_HOLD_HEIGHT)

const prepareHold = (raw: string) => {
  return raw
    .trim()
    .split(/\D+/)
    .filter(elem => /^\d+$/.test(elem))
    .map(Number)
    .map(elem => possibleHeight(elem))
    .slice(0, MAX_HOLD_WIDTH)
}

export const rawHoldState = atom({
  key: 'rawHoldState',
  default: ''
})

export const holdState = selector({
  key: 'holdState',
  get: ({ get }) => {
    const rawHold = get(rawHoldState)
    return prepareHold(rawHold)
  }
})

export const holdSizeState = selector({
  key: 'holdSizeState',
  get: ({ get }) => {
    const hold = get(holdState)
    const width = limitedWidth(hold.length)
    const height = limitedHeight(hold.reduce((acc, elem) => {
      return Math.max(acc, elem)
    }, MIN_HOLD_HEIGHT))
    return { width, height } as const
  }
})

export const loadingState = selector({
  key: 'loadingState',
  get: ({ get }) => {
    const hold = get(holdState)
    return material(hold)
  }
})

export const loadingCapacityState = selector({
  key: 'loadingCapacityState',
  get: ({ get }) => {
    const history = get(loadingState)
    return history
      .map(({ amount }) => amount)
      .reduce((acc, elem) => acc + elem, 0)
  }
})