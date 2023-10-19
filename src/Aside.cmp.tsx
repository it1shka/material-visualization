import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
import { rawHoldState, loadingCapacityState } from './app.state'
import React from 'react'

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
    </AsideContainer>
  )
}

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
    margin-top: 0.5em;
  }
`

export default Aside