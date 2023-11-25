import React from 'react'
import styled from 'styled-components'
import { IDeviceProps } from '.'
import tw from 'twin.macro'
import SvgDisplay from '../svgDisplay'

import { ReactComponent as Electric } from '../../../assets/svg/electricity.svg'
import { ReactComponent as Time } from '../../../assets/svg/time.svg'
import { ReactComponent as More } from '../../../assets/svg/more.svg'
import { ReactComponent as Score } from '../../../assets/svg/score.svg'

const DeviceContainer = styled.li`
  ${tw`
    flex
    flex-row
    p-4
  `}
`

const DeviceImage = styled.div`
  min-width: 80px;
  ${tw`
  w-20
  h-20
  bg-gray-300
  mr-4
  `}
`

const DeviceInfo = styled.div`
  ${tw`
  flex
  flex-col
  grow
  `}
`

const DeviceInfoName = styled.div`
  ${tw`
    flex
    flex-row
    grow
    items-center
  `}
`

const DeviceInfoSpec = styled.div`
  ${tw`
    flex
    flex-row
    grow-0
  `}
`

const DeviceEtc = styled.div`
  ${tw`
  flex
  flex-row
  items-center
  `}
`
function Device(props:IDeviceProps){
  const {name,comsumeElectric,cost,usedTime} = props
  return <DeviceContainer>
    <DeviceImage/>
    <DeviceInfo>
      <DeviceInfoName>
        {name.split('-')[0]}
        <DeviceEtc>
          <SvgDisplay><Score height={16} className='mx-2'/></SvgDisplay>
          <SvgDisplay><More width={16} height={10} className='mx-2'/></SvgDisplay>
        </DeviceEtc>
      </DeviceInfoName>
      <DeviceInfoSpec>
        <span className="inline-flex mx-2 text-[#EBCA5D]">
          <SvgDisplay><Electric width={18} stroke='none'/></SvgDisplay>{comsumeElectric}Wh
        </span>
        <span className="inline-flex mx-2 text-[#FF6868]">
          -{cost}원
        </span>
        <span className="inline-flex mx-2">
          <SvgDisplay><Time width={18}/></SvgDisplay>{usedTime}
        </span>
      </DeviceInfoSpec>
    </DeviceInfo>
  </DeviceContainer>
}

export default Device