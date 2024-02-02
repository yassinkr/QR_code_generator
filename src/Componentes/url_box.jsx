import React from 'react'
import Button from './button'
import "./url_box.css"
const url_box = ({setUrl,url, generate}) => {
    const handleinput=(e)=>{
        setUrl(e.target.value);
    }
  return (
    <div className='url_box'>
        
        <div className='logo_url'></div>
       <div className='url_container'> <input className='url_input' type='url' placeholder='Enter an url' value={url} onChange={handleinput}>

        </input>
        <div className='btn_container'><Button text={"QR code"} onClick={generate}/></div>
        </div>
    </div>
  )
}

export default url_box