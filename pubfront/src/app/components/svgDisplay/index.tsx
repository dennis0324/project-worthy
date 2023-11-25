import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
const SvgDisplayContainer = styled.div`
  ${tw`
    stroke-[#404040]
    cursor-pointer
    transition
    duration-500
    ease-in-out
  `}
`
function SvgDisplay({children}:{children:React.ReactNode}){
  return <SvgDisplayContainer>
    {children}
  </SvgDisplayContainer>
}

export default SvgDisplay