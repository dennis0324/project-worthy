import React from 'react';
import './App.css';
import styled from 'styled-components';
import tw from 'twin.macro';
import Homepage from './app/containers/Hompage';

const AppContainer = styled.div`
${tw`
  w-full
  h-full
  flex
  flex-col
  overflow-x-hidden
`}
`

function App() {
  return <AppContainer>
    <Homepage/>
  </AppContainer>;
}

export default App;
