import { FaArrowRight } from 'react-icons/fa'
import headerImg from '../assets/Frame 560.png'

const MainHeader = () => {
  return <>
    
    <div className='myHeader container'>

        <div className="row ">
                <div className='sideBar col-lg-3 col-md-12 pt-[3vw]'>
                    <div className='innerSideBar lg:h-[344px] md:h-auto'>
                        <ul className='ps-0 flex lg:flex-col md:flex-row gap-4 flex-wrap md:mb-5 justify-between'>
                            <li className=' w-auto flex justify-between items-center'>
                                <a className='text-zinc-950 ' href="#">Woman’s Fashion</a>
                                <FaArrowRight />
                            </li>
                            <li className=' flex justify-between items-center'>
                                <a className='text-zinc-950 ' href="#">Men’s Fashion</a>
                                <FaArrowRight />
                            </li>
                            <li className=''><a className='text-zinc-950 ' href="#">Electronics</a></li>
                            <li className=''><a className='text-zinc-950 ' href="#">Home & Lifestyle</a></li>
                            <li className=''><a className='text-zinc-950 ' href="#">Medicine</a></li>
                            <li className=''><a className='text-zinc-950 ' href="#">Sports & Outdoor</a></li>
                            <li className=''><a className='text-zinc-950 ' href="#">Baby’s & Toys</a></li>
                            <li className=''><a className='text-zinc-950 ' href="#">Groceries & Pets</a></li>
                            <li className=''><a className='text-zinc-950 ' href="#">Health & Beauty</a></li>
                        </ul>
                        
                       
                    </div>
                </div>
                <div className='HeaderImg col-lg-9 col-md-12 border-l-[1px] border-gray-300 h-[344px]  lg:px-5 md:px-0 lg:pt-[3vw] md:pt-[1vw]'>

                        <img className='w-full h-full ' src={headerImg} alt="" />
                    
                </div>
        </div>

    </div>
  
  </>
}

export default MainHeader