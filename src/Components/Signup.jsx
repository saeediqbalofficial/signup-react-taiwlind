import React from "react";
import { useState } from "react";
import OTP from "./OTP";
import { Link} from "react-router-dom";


const Signup = () => {
  const [Email, setEmail] = useState("");

  
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
        </div>

        {/* Footer Div */}

        <div className="flex flex-col justify-center items-start m-[41px] pb-8">
          <p className="text-[12px] text-[#696969] font-[400] leading-6">
            Email Address
          </p>
          <input
            type="email"
            value={Email}
            placeholder="Example@gmail.com"
            className="outline-none border rounded-sm h-[37px] w-full px-2"
            onChange={(e)=>{
                setEmail(e.target.value);
            }}
          />
          <br />
          <div className="flex flex-row items-start">
            <div>
            
              <input type="checkbox"  />
            </div>
            <div className="">
              <span className="text-[12px] text-[#696969] ml-1">
                
                By Proceeding you agree to the,
              </span>
              <span className="text-[#15A7AD] font-bold pl-2 cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>


          <Link to="/otp" className="h-39 w-full">
         
          <button className="bg-[#15A7AD] h-39 w-full my-4 py-2 px-4 text-[18px] font-semibold text-white" onClick={()=>{
           
        <OTP email={Email}/>
            
          }}>Continue With Email</button> </Link>

          {/*  */}
          <div className="">
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

export default Signup;
