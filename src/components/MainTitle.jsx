/* eslint-disable react/prop-types */

const MainTitle = ({heading , title}) => {
  return <>
  
  <div>
  <div className='flex items-center gap-[8px]'>
            <div className="sqrColored w-4 h-8 bg-red-700 rounded-[4px] "></div>
            <span className='font-semibold'>{title}</span>
    </div>
    <h2 className='font-bold'>{heading}</h2>


  </div>
  </>
}

export default MainTitle