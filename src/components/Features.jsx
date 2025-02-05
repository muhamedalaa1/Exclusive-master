import MainTitle from "./MainTitle"
import imgPs from "../assets/features/ps.png"
import womenImg from '../assets/features/women.jpeg'
import perfumeImg from '../assets/features/pefume.png'
import soundImg from '../assets/features/sound.png'

const Features = () => {
    
  return <>
  
    <div className="container">
        <MainTitle title={'Features'} heading={'New Arrival'} />
        <div className="wrapper mt-[4vw]">
            <div className="row g-3 ">
                <div className="col-lg-6  bg-black">
                    <div className="leftPart relative w-full h-full">
                        <img className="w-[100%] h-[100%] " src={imgPs} alt="" />
                        <div className=" text-white absolute bottom-8 left-2 z-[999]">
                            <h5 className="">PlayStation 5</h5>
                            <p className="font-light w-[55%] my-1">Black and White version of the PS5 coming out on sale.</p>
                            <a className="underline" href="#">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 ">
                    <div className="row g-2">
                        <div className="col-lg-12 p-0  h-[284px]">
                            <div className="rightUpper h-full w-full relative">
                                 <img className="w-full h-full" src={womenImg} alt="" />
                                <div className=" text-white absolute bottom-5 left-2 z-[999]">
                                    <h5 className="">Women’s Collections 5</h5>
                                    <p className="font-light w-[55%] my-1">Featured woman collections that give you another vibe.</p>
                                    <a className="underline" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6   bg-white  h-[284px] ">
                            <div className="bottomLeft  h-full w-full bg-black relative">
                                <img className="w-full h-full" src={soundImg} alt="" />
                                <div className=" text-white absolute bottom-8 left-2 z-[999]">
                                    <h5 className="">Speakers</h5>
                                    <p className="font-light w-[100%] my-1">Amazon wireless speakers.</p>
                                    <a className="underline" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 p-0 bg-green-600 h-[284px]">
                            <div className="bottomRight h-full w-full bg-black relative">
                                <img className="w-full h-full" src={perfumeImg} alt="" />
                                <div className=" text-white absolute bottom-8 left-2 z-[999]">
                                    <h5 className="">Speakers</h5>
                                    <p className="font-light w-[100%] my-1">Amazon wireless speakers.</p>
                                    <a className="underline" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
  </>
}

export default Features







                // <div className="bg-black h-[50%]">
                //         <div className="rightUpper h-full relative">
                //             <img className="w-full h-full" src={womenImg} alt="" />
                //             <div className=" text-white absolute bottom-5 left-2 z-[999]">
                //                 <h5 className="">Women’s Collections 5</h5>
                //                 <p className="font-light w-[55%] my-1">Featured woman collections that give you another vibe.</p>
                //                 <a className="underline" href="#">Shop Now</a>
                //             </div>
                //         </div>
                //     </div>
                //     <div className="h-[50%] flex gap-3 mt-3">
                //         <div className="col-lg-6 bg-black pr-3 h-[100%] ">
                //             <div className="bottomLeft bg-black relative">
                //                 <img src={soundImg} alt="" />
                //                 <div className=" text-white absolute bottom-8 left-2 z-[999]">
                //                     <h5 className="">Speakers</h5>
                //                     <p className="font-light w-[100%] my-1">Amazon wireless speakers.</p>
                //                     <a className="underline" href="#">Shop Now</a>
                //                 </div>
                //             </div>
                //         </div>
                //         <div className="col-lg-6 bg-black pr-3 h-[100%] ">
                //             <div className="bottomRight bg-black relative">
                //                 <img className="w-full h-full" src={perfumeImg} alt="" />
                //                 <div className=" text-white absolute bottom-8 left-2 z-[999]">
                //                     <h5 className="">Speakers</h5>
                //                     <p className="font-light w-[100%] my-1">Amazon wireless speakers.</p>
                //                     <a className="underline" href="#">Shop Now</a>
                //                 </div>
                //             </div>
                //         </div>
                        
                //     </div>