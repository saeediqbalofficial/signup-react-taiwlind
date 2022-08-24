import React from "react";
import { useState } from "react";

const OTP = (props) => {

  

  const [digitOne, setDigitOne] = useState();
  const [digitTwo, setDigitTwo] = useState();
  const [digitThree, setDigitThree] = useState();
  const [digitFour, setDigitFour] = useState();
  const [digitFive, setDigitFive] = useState();
  const [digitSix, setDigitSix] = useState();
  

  

  
  return (
    // Body Main Dev
    <div className="flex w-[100vw] h-[100vh] justify-center items-center bg-[#EAFEFF] ">
      {/* Main SignupDiv */}
      <div className=" flex flex-col w-[450px] h-[472px] bg-[white] border-2 border-indigo-700">
        {/* Header Div*/}
        <div className="flex flex-col justify-center items-start m-[41px]">
          <h1 className="text-[#15A7AD] text-[20px] font-[700] leading-10">
            UDDOKTA &#174;{" "}
          </h1>
          <p className="text-[12px] text-[#696969] font-[400] leading-6">
            Continue With Uddokta
          </p>
          <h1 className="text-[#15A7AD] text-[18px] font-[700] leading-10">
            Start your free 7-days trial
          </h1>
            
          <div className="">
              <span className="text-[12px] text-[#696969] ">
                Cool! We've send code to
              </span>
              <span className="text-[#15A7AD] font-bold  cursor-pointer">
              " Example@domain.com "
              
              
              </span>
            </div>
        </div>

        
        {/* Footer Div */}

          {/* OTP Boxes */}
        <div className="flex gap-1 justify-between  items-start m-10 " >

        <input
            type="text"
            value={digitOne}
            placeholder="0"
            className="outline-[#15A7AD] border border-[#15A7AD] w-[40px] rounded-sm h-[37px]  px-2"
            onChange={(e)=>{
                setDigitOne(e.target.value);
            }}
          />
          
          <input
            type="text"
            value={digitTwo}
            placeholder="0"
            className="outline-[#15A7AD] border border-[#15A7AD] w-[40px] rounded-sm h-[37px]  px-2"
            onChange={(e)=>{
                setDigitTwo(e.target.value);
            }}
          />
           <input
            type="text"
            value={digitThree}
            placeholder="0"
            className="outline-[#15A7AD] border border-[#15A7AD] w-[40px] rounded-sm h-[37px]  px-2"
            onChange={(e)=>{
                setDigitThree(e.target.value);
            }}
          />
          <span className="font-extrabold text-xl text-[#15A7AD]">--</span>
          <input
            type="text"
            value={digitFour}
            placeholder="0"
            className="outline-[#15A7AD] border border-[#15A7AD] w-[40px] rounded-sm h-[37px]  px-2"
            onChange={(e)=>{
                setDigitFour(e.target.value);
            }}
          />
          
          <input
            type="text"
            value={digitFive}
            placeholder="0"
            className="outline-[#15A7AD] border border-[#15A7AD] w-[40px] rounded-sm h-[37px]  px-2"
            onChange={(e)=>{
                setDigitFive(e.target.value);
            }}
          />
           <input
            type="text"
            value={digitSix}
            placeholder="0"
            className="outline-[#15A7AD] border border-[#15A7AD] w-[40px] rounded-sm h-[37px]  px-2"
            onChange={(e)=>{
                setDigitSix(e.target.value);
            }}
          />
        </div>

        <div className="flex flex-col justify-center items-start m-[41px] mt-0">
          
          <br />
        

          <button className="bg-[#15A7AD] h-39 w-full my-4 py-2 px-4 text-[18px] font-semibold text-white">Confirm Code</button>

          {/*  */}
          <div className="mb-20">
              <span className="text-[12px] text-[#696969] ml-1">
                
                Already have Uddokta id?
              </span>
              <span className="text-[#15A7AD] font-bold pl-2 cursor-pointer">
                Login
              </span>
            </div>

        </div>
      </div>
    </div>
  );
};

export default OTP;
