import React from 'react'
import { AiOutlineLeft,AiOutlineRight } from "react-icons/ai";
import './Main.css'
function Main() {
  return (
    <div className='main'>
      <div className="mains">
    <div className="ff">
    <div className="bts">
    <button><AiOutlineLeft/></button>
    </div>
    </div>
    <div className="ss">
    <img src="https://www.rollingstone.com/wp-content/uploads/2021/06/ACTION-FMOIVES_WEB-1.jpg" alt="image" srcset="" />
    </div>
    <div className="tt">
    <div className="bts">
    <button><AiOutlineRight/></button>
    </div>
    </div>
      </div>
    </div>
  )
}

export default Main
