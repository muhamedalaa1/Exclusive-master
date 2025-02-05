/* eslint-disable no-unused-vars */
import React from 'react'
import MainTitle from './MainTitle'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'
import ArrowsSlider from './ArrowsSlider'
import { boxData, sliderSettings } from '../../data'
import Box from './Box'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import arrowLeft from '../assets/arrows/icons_arrow-left.png'
import arrowRight from '../assets/arrows/icons arrow-right.png'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';


const Category = () => {
  return <>
    
    <div className='px-50 md:px-20'>
        <div className='w-full mt-[5vw] flex justify-between items-center'>
        <MainTitle title={"category"} heading={"browse by category"} />
        {/* <div className="flex">
            <img src={arrowLeft} className="custom-prev text-xl px-3 py-2 cursor-pointer" />
            <img src={arrowRight} className="custom-next text-xl px-3 py-2 cursor-pointer" />
        </div> */}
        <ArrowsSlider />
        </div>
    
        <div className=' w-full overflow-hidden mt-[3vw]  py-[3vw] border-b-[1px] border-gray-200 '>

            {/* try on swiper */}

            <Swiper 
            slidesPerView={'auto'}

            spaceBetween={30}
            loop={true}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
                }}  
            modules={[Pagination, Navigation]} className="mySwiper">
            
                {boxData.map((box,idx)=>{
                    return <SwiperSlide key={idx}>

                                <Box box={box} />

                            </SwiperSlide>

                })}
            
            </Swiper>

                

            {/* <div className="row g-4">
            
                {boxData.map((box , idx)=>{
                
                    
                    return <Box key={idx}  box= {box} />
                })}
            </div> */}
        </div>
    </div>

   
  </>
}

export default Category


