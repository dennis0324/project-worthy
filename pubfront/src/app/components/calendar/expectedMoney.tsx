import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const ExpectedMoneyContainer = styled.div`
  ${tw`
    mx-5
  `}
`
function MonthlyUsage(){
  const [cost, setCost ] = useState(0);

  return <ExpectedMoneyContainer>
    예상 가격:<span>{cost}원</span>
  </ExpectedMoneyContainer>
}

export default MonthlyUsage