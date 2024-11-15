'use client'


import { useSwiper } from "swiper/react"

import {PiCaretLeftBold, PiCaretRightBold} from 'react-icons/pi'
import React from "react"


interface BtnProps {
    containerStyle: string,
    btnStyle: string,
    iconStyle: string
}

const ButtonSlider:React.FC<BtnProps>=({containerStyle, btnStyle, iconStyle})=>{
    
    const swiper = useSwiper()
    return(
        <div className={containerStyle}>
            <button className={btnStyle} onClick={()=> swiper.slidePrev()}>
                <PiCaretLeftBold className={iconStyle}/>
            </button>
            <button className={btnStyle} onClick={()=> swiper.slideNext()}>
                <PiCaretRightBold className={iconStyle}/>
            </button>
        </div>
    )
}

export default ButtonSlider