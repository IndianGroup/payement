import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import Card from "./components/card/Card";
import Header from "./layout/Header";
import { useRef } from "react";
import Kotak from "./components/Kotak/Kotak";

export function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState();
  const [IFSC, setIFSC]= useState<any | null>(null);

  const [reference, setReference]=  useState<any | null>(null);

  const change = (event) => {
    setAmount(event.target.value);

    let a =(Math.floor(100000000000 + Math.random() * 900000000000));  
    let ifsc= (Math.floor(1000000 + Math.random() * 9000000))
    setIFSC(ifsc)
    setReference(a)
  };

  return (
    <>
      <div className="app">
        <div className="app__header"></div>
        <div className="app__content">


          <div className="content__card">
            {/* <div className="app__payment">
              <div> Debit </div>
              <div> Credit</div>
            </div> */}
   

<Kotak amount={amount} reference={reference} ifsc={IFSC} />

          
          </div>




          <div className="app__sidebar">

          <form action="" onSubmit={change} className="form__submit">
            <select name="" id="" className="app__select" onClick={change}>
              <option value="2000">2000</option>
              <option value="5000">5000</option>
              <option value="9000">9000</option>
              <option value="15000">15000</option>
              <option value="30000">30000</option>
              <option value="40000">40000</option>
              <option value="59000">59000</option>
              <option value="69000">69000</option>
              <option value="89000">89000</option>
              <option value="99000">99000</option>
              <option value="105000">105000</option>
              <option value="155000">155000</option>
              <option value="185000">185000</option>
              <option value="225000">225000</option>
              <option value="255000">255000</option>
            </select>


            <input type="text" name="" placeholder="Benificiary name"  id="" />
            <input type="text" name="" placeholder="Bank name"   />
            <input type="text" name="" placeholder="Acount Number"   />
            <input type="text" name="" placeholder="IfSC name"   />


            <div className="generate"> Generate</div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}
