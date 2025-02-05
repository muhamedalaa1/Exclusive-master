import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io'


const ArrowsSlider = () => {
  return <>
    
    <div className="slideArrows flex gap-[5px]">
                <div  className='custom-prev w-9 h-9 rounded-full cursor-pointer bg-gray-300   flex justify-center items-center'>
                <IoIosArrowRoundBack className='text-[30px]' />
                </div>
                <div  className='custom-next w-9 h-9 rounded-full bg-gray-300 cursor-pointer   flex justify-center items-center'>
                    <IoIosArrowRoundForward className='text-[30px]' />

                </div>
    </div>
  
  </>
}

export default ArrowsSlider