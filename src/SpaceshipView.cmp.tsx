import styled from 'styled-components'
import {useRecoilValue} from 'recoil'
import { holdSizeState } from './app.state'

const SpaceshipView = () => {
  const { width, height } = useRecoilValue(holdSizeState)

  return (
    <SpaceshipViewContainer>
      <SpaceshipGrid width={width} height={height}>
        {
          Array(width * height)
            .fill(null)
            .map((_, index) => {
              return (
                <SpaceshipCell
                  key={index}
                />
              )
            })
        }
      </SpaceshipGrid>
    </SpaceshipViewContainer>
  )
}

const SpaceshipCell = styled.div<{ color?: string }>`
  background-color: ${({ color }) => color ?? 'rgba(220,220,220,0.3)'};
  
`

const SpaceshipGrid = styled.div<{ width: number, height: number }>`
  height: 100%;
  display: grid;
  grid-template-rows: repeat(${({ height }) => height}, 1fr);
  grid-template-columns: repeat(${({ width }) => width}, 1fr);
  gap: 5px;
`

const SpaceshipViewContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 15px;
  box-shadow: rgba(255, 255, 255, 0.3) 0 2px 8px 0;
  overflow: hidden;
`

export default SpaceshipView