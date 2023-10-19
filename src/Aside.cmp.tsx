import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
import { rawHoldState, loadingCapacityState } from './app.state'
import React, {useEffect, useState} from 'react'

const Aside = () => {
  const [hold, setHold] = useRecoilState(rawHoldState)
  const loadingCapacity = useRecoilValue(loadingCapacityState)

  type Change = React.ChangeEvent<HTMLInputElement>
  const onHoldChange = ({ target }: Change) => {
    setHold(target.value)
  }

  return (
    <AsideContainer>
      <h2> &#128640; Control Panel: </h2>
      <div>
        <label htmlFor='spaceship-input'>Spaceship: </label>
        <StyledInput
          value={hold}
          onChange={onHoldChange}
          type='text'
          id='spaceship-input'
          placeholder='Separated by comma...'
        />
      </div>
      <div>
        <label htmlFor='material-capacity-input'>Material Capacity: </label>
        <StyledInput
          readOnly
          value={loadingCapacity}
          type='text'
          id='material-capacity-input'
          placeholder='Resulting capacity...'
        />
      </div>
      <Story />
    </AsideContainer>
  )
}

const prepareText = (text: string) => {
  return text
    .trim()
    .split('\n')
    .map(line => line.trim())
    .join(' ')
}

const repeat = (text: string, times: number) => {
  return Array(times)
    .fill(null)
    .map(() => text)
    .join('')
}

const Story = () => {
  const interval = 50
  const fullText = prepareText(`
    You are a star pilot trying
    to transport an important
    and super-secret cargo to Mars.
    Design your hold
    to contain all of the cargo.
    Write configuration of your hold
    into 'Spaceship' field separating
    each number by comma.
  `)

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex(index => {
        return Math.min(index + 1, fullText.length)
      })
    }, interval)
    return () => clearInterval(intervalId)
  }, [fullText.length])

  return (
    <StoryText>
      {
        fullText.slice(0, index) +
          repeat('_', fullText.length - index)
      }
    </StoryText>
  )
}

const StoryText = styled.p`
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: rgba(255, 255, 255, 0.3) 0 2px 8px 0;
  padding: 0.5em;
  border-radius: 8px;
  word-break: break-all;
`

const StyledInput = styled.input`
  --styled-input-color: white;
  width: 100%;
  display: block;
  border: none;
  outline: none;
  background-color: transparent;
  color: var(--styled-input-color, white);
  font-family: inherit;
  font-size: inherit;
  padding: 0.2em 0;
  border-bottom: 1px solid var(--styled-input-color, white);

  transition-property: --styled-input-color;
  transition: 0.1s all ease-in; 
  &:focus {
    --styled-input-color: rgb(245, 157, 255);
  }
`

const AsideContainer = styled.aside`
  flex: 1.25;
  flex-direction: column;
  background-color: rgba(65, 65, 65, 0.51);
  box-shadow: black 0 2px 8px 0;
  color: white;
  font-size: 1.25em;
  padding: 1em 2em;

  & > * + * {
    margin-top: 1em;
  }
`

export default Aside