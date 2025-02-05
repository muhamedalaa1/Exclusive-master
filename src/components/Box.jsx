/* eslint-disable react/prop-types */

const Box = ({box}) => {
    let {Category , Icon} = box; 
  return <>


      {/* try swiper */}

      
        <div className="innerBox h-[145px] text-center   border-1 border-gray-300 flex flex-column justify-center items-center p-[15px]">
            <p className='text-center'>{Icon}</p>
            <h3 className='boxTitle'>{Category}</h3>
        </div>
  
       

    {/* <div className="col-lg-2 ">
        <div className="innerBox h-[145px] text-center  border-1 border-gray-300 flex flex-column justify-center items-center p-[15px]">
            <p className='text-center'>{Icon}</p>
            <h3 className='boxTitle'>{Category}</h3>
        </div>
  
    </div> */}
       
  </>
}

export default Box