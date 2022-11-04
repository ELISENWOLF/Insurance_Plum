import React, { useState } from "react";
import { VscChevronLeft } from "react-icons/vsc";
import Confirminfo from "./Confirminfo";
import Declarationinfo from "./Declarationinfo";
import Deductinfo from "./Deductinfo";
import Planinfo from "./Planinfo";
import "./register.scss";

const Register = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    email:"",
    address1:"",
    pincode:"",
    number:"",
    address2:"",
    State:""
  })

  const FormTitles = ["Choose your plan", "Select your deductible amount", "Declaration", "Review and confirm payment"];
  const PageDisplay = () => {
    if (page === 0) {
      return <Planinfo formData={formData} setFormData={setFormData}/>;
    } else if (page === 1) {
      return <Deductinfo />;
    } else if (page === 2) {
      return <Declarationinfo />;
    } else {
      return <Confirminfo />;
    }
  };

  return (
    <div className="register_page">
      <div className="register_progress">
        <div style={{width : page === 0 ? "25%" : page == 1 ? "50%" : page == 2 ? "75%" : "100%"}}></div>
      </div>
      <div className="main_container">
      <div className="main_body">
        <button
          className="prev"
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          <VscChevronLeft className="Vs_prev" />
        </button>
        <div className="header">
          <h2 className="main_header">{FormTitles[page]}</h2>
        </div>
      </div>
      <div className="body">{PageDisplay()}</div>
      </div>
      <div className="footer">
        <button
          className="next"
          onClick={() => {
            if( page === FormTitles.length - 1 ){
              alert("Form Submitted")
            }else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length-1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Register;
