import { IoCheckmarkDoneCircle } from "react-icons/io5"
import { MdHeadsetMic } from "react-icons/md"
import { TbTruckDelivery } from "react-icons/tb"

const Circles = () => {
   

  return <>
    <div className="container my-[7vw]">
        <div className="row g-5">
            <div className="col-lg-4 col-md-12"> 
                <div className="cricleInner text-center ">
                    <div className="w-17 mx-auto h-17 flex items-center justify-center rounded-full bg-[#c1c0c1]">
                        <TbTruckDelivery className=" bg-black text-white w-15 h-15 p-2 rounded-full"/>
                    </div>
                    <div>
                        <h6 className="lg:text-[0.8vw] font-medium mt-2 md:text-[1vw]">FREE AND FAST DELIVERY</h6>
                        <p className="lg:text-[0.7vw] font-light md:text-[1.2vw]">Free delivery for all orders over $140</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12"> 
                <div className="cricleInner text-center ">
                    <div className="w-17 mx-auto h-17 flex items-center justify-center rounded-full bg-[#c1c0c1]">
                        <MdHeadsetMic className=" bg-black text-white w-15 h-15 p-2 rounded-full"/>
                    </div>
                    <div>
                        <h6 className="lg:text-[0.8vw] font-medium mt-2 md:text-[1vw]">24/7 CUSTOMER SERVICE</h6>
                        <p className="lg:text-[0.7vw] font-light mt-2 md:text-[1.2vw]">Friendly 24/7 customer support</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12"> 
                <div className="cricleInner text-center ">
                    <div className="w-17 mx-auto h-17 flex items-center justify-center rounded-full bg-[#c1c0c1]">
                        <IoCheckmarkDoneCircle className=" bg-black text-white w-10 h-10 p-2 rounded-full"/>
                    </div>
                    <div>
                        <h6 className="lg:text-[0.8vw] font-medium mt-2 md:text-[1vw]">MONEY BACK GUARANTEE</h6>
                        <p className="lg:text-[0.8vw] font-light mt-2 md:text-[1vw]">We reurn money within 30 days</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  
  </>
}

export default Circles