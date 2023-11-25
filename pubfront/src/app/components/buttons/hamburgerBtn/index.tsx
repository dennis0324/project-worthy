import classNames from 'classnames';
import React,{ useState } from 'react';
import styled from 'styled-components';
// ${tw`flex-shrink-0`}
const HamburgerContainer = styled.div`

`

export default function HamburgerBtn() {
  const [opened, setOpened] = useState(false);

  return <HamburgerContainer>
      <div onClick={() => setOpened(!opened)} className={classNames(` tham tham-e-squeeze tham-w-7`, { 'tham-active': opened })}>
        <div className="tham-box">
          <div className="bg-dark1 tham-inner" />
        </div>
      </div>
    </HamburgerContainer>
}