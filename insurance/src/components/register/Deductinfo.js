import React, { useState } from "react";
import Slider from "rc-slider";
import { CgProfile } from "react-icons/cg";
import "./deduction.scss";

const Deductinfo = () => {
  const [value, setValue] = useState(0.2);

  const sliderProps = {
    min: 0.0,
    max: 0.7,
    step: 0.3,
    marks: { 0.01: "₹1L", 0.1: "₹2L", 0.3: "₹3L", 0.69: "₹5L" },
    color: "",
  };

  return (
    <div className="deduction_main">
      <div className="left_deduct">
        <p>
          Select the deductible amount for the policy (or policies) below. (what
          is a deductible?){" "}
        </p>
        <div className="self_deduction">
          <div className="self_head">
            <div className="self_head1">
              Self (Individual)
            </div>
            <div className="self_head2">
              <CgProfile /><span className="name">John Doe</span>
            </div>
          </div>
          <hr />
          <p>
            Sum insured of ₹20,00,000 with a deductible of <b>₹3,00,000</b>
          </p>
          <div className="slider">
            <Slider
              value={value}
              onChange={(val) => setValue(val)}
              {...sliderProps}
            />
          </div>
        </div>
        <div className="deduct">
          <input type="checkbox" />
          <p>
            I understand that this insurance will not be utilized until
            ₹3,00,000 (deductible) is exhausted.
          </p>
        </div>
      </div>
      <div className="right_deduct">
        <div className="right_deduct_head">
          <h2>Form Preview</h2>
        </div>
        <hr />
        <div className="">
          <h4>Personal email address</h4>
          <h4>Mobile number</h4>
          <h4>Address line 01</h4>
          <h4>Address line 02</h4>
          <h4>Pincode</h4>
          <h4>State</h4>
        </div>
      </div>
    </div>
  );
};

export default Deductinfo;
