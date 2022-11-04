import PlanDropdown from './PlanDropdown';
import './Plan.scss'
import React,{ useState } from 'react'
import { VscChevronUp } from "react-icons/vsc";


const Planinfo = () => {

  const [isPlan, setIsPlan] = useState(false)
  const [isBasic, setIsBasic] = useState(false)
  const [selected, setSelected] = useState("")

  return (
    <div className='planinfo_container'>
      <div className='left_planinfo'>
      <p className='para_plan'>Hello Anisha,<br/> Increase yours and your family's health insurance cover by
       <b> ₹20 lakhs</b> with Super top-up!</p>
       <div className='plan_main_body'>
        <div className='plan_details'>
          <div className='plan_details_head'>
            <h2>Plan details</h2>
            <VscChevronUp onClick={(e) => {setIsPlan(!isPlan)}}/>
          </div>
          <hr />
          {isPlan && (
          <div className='plan-input'>
          <label className='plan_label'>
            Your plan type
          </label>
          <PlanDropdown selected={selected} setSelected={setSelected}/>
          </div>
          )}
        </div>
        <div className='basic_details'>
        <div className='basic_details_head'>
            <h2>Basic details (required)</h2>
            <VscChevronUp onClick={(e) => {setIsBasic(!isBasic)}}/>
          </div>
          <hr />
          {isBasic && (
          <div className='basic-input_body'>
          <div className='basic_input_1'>
          <div className='basic_input1.1'>
          <label className='basic_label'>Personal email address</label>
          <input type="text" placeholder='Enter'/>
            </div>
            <div className='basic_input1.2'>
          <label className='basic_label'>Address line 01</label>
          <input type="text" placeholder='Enter'/>
            </div>
            <div className='basic_input1.3'>
          <label className='basic_label'>Pincode</label>
          <input type="number" placeholder='Enter'/>
            </div>
          </div>
          <div className='basic_input_1'>
          <div className='basic_input1.1'>
          <label className='basic_label'>Mobile number</label>
          <input type="text" placeholder='Enter'/>
            </div>
            <div className='basic_input1.2'>
          <label className='basic_label'>Address line 02</label>
          <input type="text" placeholder='Enter'/>
            </div>
            <div className='basic_input1.3'>
          <label className='basic_label'>State.</label>
          <input type="text" placeholder='Enter'/>
            </div>
          </div>
          </div>
          )}
        </div>
       </div>
       </div>
       <div className='right_planinfo'>
          <div className='right_plan_head'><h2>Form Preview</h2></div>
          <hr />
          <div className=''>
            <h4>Persona email address</h4>
            <h4>Mobile number</h4>
            <h4>Address line 01</h4>
            <h4>Address line 02</h4>
            <h4>Pincode</h4>
            <h4>State</h4>
          </div>
       </div>
    </div>
  )
}

export default Planinfo
