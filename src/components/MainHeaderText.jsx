/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { cardData } from "../../data";
import Card from "./Card";
import MainTitle from "./MainTitle";
import ArrowsSlider from "./ArrowsSlider";

const MainHeaderText = () => {
  const [setshow, setSetshow] = useState(false);
  const filteredProducts = setshow ? cardData : cardData.slice(0,4);
  const getMore = ()=>{
    setSetshow(!setshow)
  }
  return (
    <>
      <div className="container   mt-[3vw]  py-5 border-b-[1px] border-gray-300 ">
        <div className="w-full mt-[3vw] mb-[2vw] flex lg:flex-row md:flex-col  justify-between  md:gap-5 items-center">
                  <MainTitle title={"today's"} heading={"flash sales"} />

                  <div className="counter flex items-center justify-between gap-[10px]">
                    <div className="text-center">
                      <span className="">Days</span>
                      <p className="font-semibold text-[2.5vw] leading-9">03</p>
                    </div>
                    <span className="text-[3vw]">:</span>
                    <div className="text-center">
                      <span className="">Hours</span>
                      <p className="font-semibold text-[2.5vw] leading-9">23</p>
                    </div>
                    <span className="text-[3vw]">:</span>
                    <div className="text-center">
                      <span className="">Minutes</span>
                      <p className="font-semibold text-[2.5vw] leading-9">19</p>
                    </div>
                    <span className="text-[3vw]">:</span>
                    <div className="text-center">
                      <span className="">Seconds</span>
                      <p className="font-semibold text-[2.5vw] leading-9">56</p>
                    </div>
                  </div>

                  <ArrowsSlider />
        </div>

        

        <div className="cardsContainer w-full">
          <div className="row g-4">
            {filteredProducts.map((cardItem, idx) => {
              return <Card key={idx} cardItem={cardItem} />;
            })}
          </div>

          <div className="text-center mt-[2vw]">
            <button onClick={getMore} className=" cardsBtn py-2 px-12 text-white bg-[#DB4444] ">
              {setshow ? 'view less' : "view More Products"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeaderText;
