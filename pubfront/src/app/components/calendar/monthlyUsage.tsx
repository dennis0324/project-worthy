import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const MonthlyUsageContainer = styled.div`
  ${tw`
    mx-5
  `}
`

function MonthlyUsage(){
  const [usage, setUsage ] = useState(0);

  return <MonthlyUsageContainer>
    한달 사용량:<span>{usage}Wh</span>
  </MonthlyUsageContainer>
}

export default MonthlyUsage