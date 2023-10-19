import React from 'react'
import styled from 'styled-components'
import Aside from './Aside.cmp'
import SpaceshipView from './SpaceshipView.cmp'

const App = () => {
  return (
    <AppContainer>
      <MainView>
        <SpaceshipView />
      </MainView>
      <Aside />
    </AppContainer>
  )
}

const MainView = styled.main`
  flex: 4;
  display: grid;
  place-items: center;
`

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
`

export default App