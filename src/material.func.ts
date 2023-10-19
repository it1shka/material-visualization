/*
  This file incorporates solution
  of the task presented for
  'Code Wars' challenge published by
  Sofixit team
 */

type History = Array<{
  readonly index: number
  readonly amount: number
}>

const material = (spaceship: number[]) => {
  if (spaceship.length === 0) {
    return []
  }
  let leftPointer = 0
  let rightPointer = spaceship.length - 1
  let leftMax = spaceship[leftPointer]
  let rightMax = spaceship[rightPointer]

  const history: History = []

  while (leftPointer < rightPointer) {
    let index: number, amount: number
    if (leftMax < rightMax) {
      amount = leftMax - spaceship[leftPointer]
      index = leftPointer
      leftPointer++
      leftMax = Math.max(leftMax, spaceship[leftPointer])
    } else {
      amount = rightMax - spaceship[rightPointer]
      index = rightPointer
      rightPointer--
      rightMax = Math.max(rightMax, spaceship[rightPointer])
    }
    history.push({index, amount})
  }

  return history
}

export default material