import React from "react";
import "./kotak.css";
function Kotak(props) {
  return (
    <div className="app__kotak">
      <div className="kotak__header">
        <img src="/kotak.png" alt="" width={200} />
      </div>
      <div className="kotak__content">
        <div className="kotak__title">Transfer Details</div>

        <div className="kotak__group">
          <div className="group__form">
            <label htmlFor="">Reference No. (UTR No./RRN)</label>
            <span> {props.reference} </span>
          </div>
          <div className="group__form">
            <label htmlFor="">Date & Time</label>
            <span>21 Mar 2023-11:28 AM</span>
          </div>
          <div className="group__form">
            <label htmlFor="">Transfer Amount</label>
            <span>
                <b> ₹{props.amount}.00 </b></span>
          </div>
          <div className="group__form">
            <label htmlFor="">Benificiary name</label>
            <span>Mahendra</span>
          </div>
          <div className="group__form">
            <label htmlFor="">Bank Name</label>
            <span>UNION BANCK OF INDIA</span>
          </div>
          <div className="group__form">
            <label htmlFor="">Account number</label>
            <span>154510100064306</span>
          </div>
          <div className="group__form">
            <label htmlFor="">IFSC</label>
            <span>UBIN{props.ifsc}</span>
          </div>

        </div>
      </div>


    </div>
  );
}

export default Kotak;
