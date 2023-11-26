import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { faker } from '@faker-js/faker';
import Device from './device';
import { SCREENS } from '../responsive';
import deviceService from '../../../services/deviceService';
import { Dispatch, createSelector } from '@reduxjs/toolkit';
import { GetDevices_devices } from '../../../services/deviceService/__generated__/GetDevices';
import { setDevices } from '../../containers/Hompage/slice';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectDevices } from '../../containers/Hompage/selector';

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

const actionDispatch = (dispath: Dispatch) => ({
  setDevices: (devices: GetDevices_devices[]) => dispath(setDevices(devices))
})

const stateSelector = createSelector(makeSelectDevices,(devices) => ({devices}))
function DevicesList(){
  const ttest = faker.helpers.multiple(createRandomUser, {
    count: 8,
  });

  const { devices } = useSelector(stateSelector)
  const { setDevices } = actionDispatch(useDispatch())

  const fetchDevices = async () => {
    const data = await deviceService.getDevices().catch((err) => {
      console.log(err);
    })
    console.log(data)
    if(data){
      setDevices(data);
    }
  }
  // const [devices,setDevices] = useState<Array<IDeviceProps>>(ttest);
  
  useEffect(() => {
    fetchDevices()
  },[])

  const isDeviceEmpty = !devices || devices.length === 0;

  return <DevicesContainer>
    <Devices>
      {!isDeviceEmpty ? devices?.map((element,index) => {
        return <Device key={index} {...element}/>
      }) : <div>Empty</div>}
    </Devices>
  </DevicesContainer>
}

export default DevicesList