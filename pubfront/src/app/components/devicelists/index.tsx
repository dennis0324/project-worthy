import React, { useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { faker } from '@faker-js/faker';
import Device from './device';
import { SCREENS } from '../responsive';

export type IDeviceProps = {
  name:string
  usedTime:number
  comsumeElectric:number
  cost:number
} 

export function createRandomUser(): IDeviceProps {
  return {
    name: faker.string.uuid(),
    usedTime: faker.number.int({min:0,max:9999}),
    comsumeElectric: faker.number.int({min:1,max:1000}),
    cost: faker.number.int({min:1,max:25000})
  };
}



const DevicesContainer = styled.div`
  min-height: 500px;
  min-width: 600px;
  ${tw`
    w-full
    grow 
    flex
    flex-row
    justify-center
  `}
`

const Devices = styled.ul`
  ${tw`
    w-4/5
    h-full
    flex
    flex-col
    rounded-lg
    overflow-y-auto
    bg-[#f7f7f7]
  `}
  @media (max-width: ${SCREENS.lg}){
    overflow-y:visible;
    height:max-content;
  }
`
function DevicesList(){
  const ttest = faker.helpers.multiple(createRandomUser, {
    count: 8,
  });
  const [devices,setDevices] = useState<Array<IDeviceProps>>(ttest);


  return <DevicesContainer>
    <Devices>
      {devices.map(element => {
        return <Device {...element}/>
      })}
    </Devices>
  </DevicesContainer>
}

export default DevicesList