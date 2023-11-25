import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import SavedMoney from '../../components/savedMoney'
import 'dayjs/locale/ko'
import { SCREENS } from '../../components/responsive'
import DisplayCalendar from '../../components/calendar'
import DevicesList from '../../components/devicelists'


const TopContainer = styled.div`
  height:calc(100% - 68px);
  ${tw`
      w-full
      flex
      flex-row
      py-6
  `}

  @media (max-width: ${SCREENS.lg}){
    flex-direction:column;
  }
`

const LeftContainer = styled.div`
  ${tw`
    w-2/5
    h-full
    flex
    flex-col
    items-center
  `}
  @media (max-width: ${SCREENS.lg}){
    width:100%;
  }
`

const RightContainer = styled.div`
  ${tw`
    w-3/5
    h-full
    flex
    flex-col
    items-center
    px-24
  `}
  @media (max-width: ${SCREENS.lg}){
    width:100%;
  }
`

function TopSection(){

  return <TopContainer>
    <LeftContainer>
      <DisplayCalendar/>
    </LeftContainer>
    <RightContainer>
      <SavedMoney/>
      <DevicesList/>
    </RightContainer>
  </TopContainer>
}

export default TopSection