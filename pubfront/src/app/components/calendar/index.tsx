import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import dayjs from 'dayjs';
import "./calendar.css"
import styled from 'styled-components';
import tw from 'twin.macro';
import SvgDisplay from '../svgDisplay';
// import 'react-calendar/dist/Calendar.css';

import { ReactComponent as Next } from '../../../assets/svg/next.svg'
import { ReactComponent as Prev } from '../../../assets/svg/prev.svg'
import { ReactComponent as Next2 } from '../../../assets/svg/next2.svg'
import { ReactComponent as Prev2 } from '../../../assets/svg/prev2.svg'

import MonthlyUsage from './monthlyUsage';
import ExpectedMoney from './expectedMoney';
import { SCREENS } from '../responsive';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarContainer = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    items-center
  `}
`
const Description = styled.div`
  ${tw`
    flex
    flex-row
    pb-4
  `}
`

const DateSpecTitle = styled.div`
  ${tw`
    text-3xl
    pb-1
    border-b-2
    border-[#404040]
  `}

  @media (max-width: ${SCREENS.lg}){
    display:none;
  }
`

function DisplayCalendar(){
  const [value, onChange] = useState<Value>(new Date());
  const tempDate = dayjs(new Date()).format('YYYY년 MM월 DD일')
  const [currentDate,setCurrentDate] = useState(tempDate);


  const nextLabel = <SvgDisplay><Next width={20} height={20}/></SvgDisplay>
  const next2Label = <SvgDisplay><Next2 width={20} height={20}/></SvgDisplay>
  const prevLabel = <SvgDisplay><Prev width={20} height={20}/></SvgDisplay>
  const prev2Label = <SvgDisplay><Prev2 width={20} height={20}/></SvgDisplay>


  const onClickDay = (date:Date,event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentDate(dayjs(date).format('YYYY년 MM월 DD일'))
  }


  return (
    <CalendarContainer>
      <Calendar 
      onChange={(e) => onChange(e)}
      calendarType="islamic"
      formatDay={(locale, date) => dayjs(date).format("DD")} 
      value={value}
      minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
      navigationLabel={undefined} 
      nextLabel={nextLabel}
      next2Label={next2Label}
      prevLabel={prevLabel}
      prev2Label={prev2Label}
      onClickDay={(date,event) => onClickDay(date,event)}
      />
      <Description>
        <MonthlyUsage/>
        <ExpectedMoney/>
      </Description>
      <DateSpecTitle>{currentDate} 세부내역</DateSpecTitle>
    </CalendarContainer>
  );
}

export default DisplayCalendar