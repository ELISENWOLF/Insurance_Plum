import React from 'react'
import './Declaration.scss'

const Declarationinfo = () => {
  return (
    <div className='declaration_page'>
      <div className='left_box'>
        <div className='first_declara'>
          <input type="checkbox" />
          <p>I hereby declare that none of the proposed members are habitual consumers of alcohol, 
            tobacco, gutka or any recreational drugs.</p>
        </div>
        <div className='second_declara'>
        <input type="checkbox" />
          <p>I hereby declare that all proposed members are in good health and entirely free from any 
            mental pf physical impairements or deformities, disease/condition.</p>
        </div>
        <div className='third_declara'>
        <input type="checkbox" />
          <p>I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. 
            (list of named ailements)</p>
        </div>
        <div className='fourth_declara'>
        <input type="checkbox" />
          <p>I understand that this policy doesn't cover Pre-existing diseases.</p>
        </div>
      </div>
      <div className='right_box'>
      <div className='right_declara_head'><h2>Form Preview</h2></div>
          <hr />
          <div className=''>
            <h4>Personal email address</h4>
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

export default Declarationinfo
