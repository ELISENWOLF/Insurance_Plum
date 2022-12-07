import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Plan.scss";
import { VscChevronDown } from "react-icons/vsc";
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
import BoyIcon from '@mui/icons-material/Boy';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const PlanDropdown = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  // const options = ['One (Individual)','Pro (Individual)','Plus (Individual + Individual)','Max (Floater)','Grand (Floater + Individual)']

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        Select your plan
        <VscChevronDown className="Vs_down" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdwon-item">
            <div className="drop_item_head">
              <h4>One (Individual)</h4>
            </div>
            <div className="drop-item-value">
              <div className="drop_item_name"><BoyIcon className="icon_s" />Self</div>
              <h5>₹600</h5>
            </div>
            <hr />
          </div>
          <div className="dropdwon-item">
            <div className="drop_item_head">
              <h4>Pro (Individual)</h4>
            </div>
            <div className="drop-item-value">
              <div className="drop_item_name"><PeopleAltIcon className="icon_p" />Parents</div>
              <h5>₹0</h5>
            </div>
            <hr />
          </div>
          <div className="dropdwon-item">
            <div className="drop_item_head">
              <h4>Plus (Individual + Individual)</h4>
            </div>
            <div className="drop-item-value">
              <div className="drop_item_name"><Diversity3Icon className="icon_sp" />Self + Parents</div>
              <h5>₹600</h5>
            </div>
            <hr />
          </div>
          <div className="dropdwon-item">
            <div className="drop_item_head">
              <h4>Max (Floater)</h4>
            </div>
            <div className="drop-item-value">
              <div className="drop_item_name"><FamilyRestroomIcon className="icon_ssk" />Self + Spouse + Kids</div>
              <h5>₹1800</h5>
            </div>
            <hr />
          </div>
          <div className="dropdwon-item">
            <div className="drop_item_head">
              <h4>Grand (Floater + Individual)</h4>
            </div>
            <div className="drop-item-value">
              <div className="drop_item_name"><Diversity1Icon className="icon_spsk" />
                Self + Parents + Spouse + Kids
              </div>
              <h5>₹1800</h5>
            </div>
            <hr />
          </div>
        </div>
      )}
    </div>
  );
};

export default PlanDropdown;
