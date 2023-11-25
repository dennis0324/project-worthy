import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import SvgDisplay from "../svgDisplay";

import { ReactComponent as Terminal } from '../../../assets/svg/terminal.svg'
import { ReactComponent as Alarm } from '../../../assets/svg/alarm.svg'

const ProfileContainer = styled.div`
  ${tw`
    p-2
    flex
    flex-row-reverse
    items-center
  `}
`
const ProfileItems = styled.div`
  ${tw`
    flex
    flex-row
    items-center
    justify-center
    mx-2
    w-9
    h-9
    rounded-full
  `}
`

function Profile(){
  return <ProfileContainer>
    <ProfileItems className="bg-[#EBCA5D]">
    </ProfileItems>
    <ProfileItems>
      <SvgDisplay>
        <Alarm width={24} height={24} />
      </SvgDisplay>
    </ProfileItems>
    <ProfileItems>
      <SvgDisplay>
        <Terminal width={24} height={24}/>
      </SvgDisplay>
    </ProfileItems>
  </ProfileContainer>
}

export default Profile