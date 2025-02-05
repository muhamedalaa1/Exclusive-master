import imgBuy from "../assets/buy/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png";
const Buy = () => {
  return <>
    
    <div className="container mt-[5vw] p-[3vw] bg-zinc-950 text-white">
        <div className="row md:text-center lg:text-start">
            
                <div className="col-lg-6 ">
                <p className="text-green-500 text-[0.8vw] mb-[2vw] font-semibold uppercase">Categories</p>
                <h2 className="text-white text-[3vw] leading-7">Enhance Your</h2>
                <h2 className="text-white text-[3vw]">Music Experience</h2>
                <div className="dets flex items-center lg:justify-start md:justify-center   gap-3 my-[2vw]">
                        <div className="circle w-12 h-12 p-7 rounded-full bg-zinc-50 text-black flex flex-column justify-center items-center">
                                <p className="text-[1.5vw] font-medium leading-4">23</p>
                                <p className="text-[0.7vw]">Hours</p>
                        </div>
                        <div className="circle w-12 h-12 p-7 rounded-full bg-zinc-50 text-black flex flex-column justify-center items-center">
                                <p className="text-[1.5vw] font-medium leading-4">05</p>
                                <p className="text-[0.7vw]">Days</p>
                        </div>
                        <div className="circle w-12 h-12 p-7 rounded-full bg-zinc-50 text-black flex flex-column justify-center items-center">
                                <p className="text-[1.5vw] font-medium leading-4">59</p>
                                <p className="text-[0.7vw]">Minutes</p>
                        </div>
                        <div className="circle w-12 h-12 p-7 rounded-full bg-zinc-50 text-black flex flex-column justify-center items-center">
                                <p className="text-[1.5vw] font-medium leading-4">35</p>
                                <p className="text-[0.7vw]">Seconds</p>
                        </div>

                </div>
                <button className=' cardsBtn py-2 px-12 text-white bg-[#00ff66] '>View All Products</button>
                </div>
                <div className="col-lg-6 ">
                        <img className="w-full h-full" src={imgBuy} alt="" />
                </div>
            
        </div>
    </div>
  
  </>
}

export default Buy