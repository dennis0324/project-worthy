import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import dayjs from 'dayjs'
import { SCREENS } from '../responsive'
dayjs.locale('es')

const SavedMoneyContainer = styled.h1`
  min-width: 500px;
  ${tw`
    w-4/5
    text-4xl
    flex
    flex-row
    justify-center
    my-10
    grow-0
  `}

  @media (max-width: ${SCREENS.sm}){
    ${tw`
      w-full
      flex-col
      text-3xl
    `}
  }
`

const DisplayMoney = styled.div`
  @media (max-width: ${SCREENS.sm}){
    ${tw`
    text-center
    `}
  }
`

function SavedMoney(){
  const [saved,setSaved] = useState(0);
  const time = dayjs().format('YYYY년 MM월 DD일')

  return <SavedMoneyContainer>
    <DisplayMoney>
      {time} 아끼신 전기 요금은 <br/><span className="text-[#EBCA5D]">{saved}</span> 원 입니다.
    </DisplayMoney>
  </SavedMoneyContainer>
}

export default SavedMoney