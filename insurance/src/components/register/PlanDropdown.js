import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Plan.scss'
import { VscChevronDown } from 'react-icons/vsc';

const PlanDropdown = ({selected, setSelected}) => {

    const [isActive, setIsActive] = useState(false)
    // const options = ['One (Individual)','Pro (Individual)','Plus (Individual + Individual)','Max (Floater)','Grand (Floater + Individual)']

  return (
    <div className='dropdown'>
        <div className='dropdown-btn' onClick={(e) => {setIsActive(!isActive)}}>Select your plan<VscChevronDown className='Vs_down'/></div>
        {isActive && (
            <div className='dropdown-content'>
             <div className='dropdwon-item' >
             <div className='drop_item_head'><h4>One (Individual)</h4></div>
             <div className='drop-item-value'>
                 <div className='drop_item_name'></div>
                 <h5></h5>
             </div>
         </div>
         <div className='dropdwon-item'>
             <div className='drop_item_head'><h4>Pro (Individual)</h4></div>
             <div className='drop-item-value'>
                 <div className='drop_item_name'></div>
                 <h5></h5>
             </div>
         </div>
         <div className='dropdwon-item'>
             <div className='drop_item_head'><h4>Plus (Individual + Individual)</h4></div>
             <div className='drop-item-value'>
                 <div className='drop_item_name'></div>
                 <h5></h5>
             </div>
         </div>
         <div className='dropdwon-item'>
             <div className='drop_item_head'><h4>Max (Floater)</h4></div>
             <div className='drop-item-value'>
                 <div className='drop_item_name'></div>
                 <h5></h5>
             </div>
         </div>
         <div className='dropdwon-item'>
             <div className='drop_item_head'><h4>Grand (Floater + Individual)</h4></div>
             <div className='drop-item-value'>
                 <div className='drop_item_name'></div>
                 <h5></h5>
             </div>
         </div>
        </div>
        )}
      
    </div>
  );
}

export default PlanDropdown
