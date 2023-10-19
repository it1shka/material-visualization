import styled from 'styled-components'
import {useRecoilValue} from 'recoil'
import {holdSizeState, holdState, loadingState} from './app.state'

const SpaceshipView = () => {
  const { width, height } = useRecoilValue(holdSizeState)
  const holdConfiguration = useRecoilValue(holdState)
  const loadingConfiguration = useRecoilValue(loadingState)

  const determineColor = (index: number): string | undefined => {
    const y = height - (~~(index / width))
    const x = index % width

    if (y <= holdConfiguration[x]) {
      return 'rgba(149,93,222,0.3)'
    }

    const loadHeight = loadingConfiguration
      .find(({ index }) => index === x)
      ?.amount ?? 0

    if (y <= loadHeight + holdConfiguration[x]) {
      return 'rgba(215,28,255,0.3)'
    }

    return undefined
  }

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
                  color={determineColor(index)}
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
  transition-property: background-color;
  transition: 0.3s all ease-in;
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