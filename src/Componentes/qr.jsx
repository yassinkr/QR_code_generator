import React from 'react'
import "./qr.css"
import Button from './button'
const qr = ({qr}) => {
   
  return (
    <div className='qr'>
       <div className='nav'> <div className='mini_logo'></div></div>
       <div className='container'>
               <div className='QR_sqr'>
                <div className='img_qr'> <img src={`${qr}`} alt="Generated QR Code" /></div>
    </div>
    <div className='btns'>
    <Button text={"Download"}/>
    <Button text={"Share"}/>
    </div>
    </div>

    </div>
  )
}

export default qr