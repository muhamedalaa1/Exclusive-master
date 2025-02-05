import { FaArrowDown } from 'react-icons/fa'

const Header = () => {
  return <>
    
    <div className='relative w-full h-10 bg-zinc-950 flex justify-center items-center'>
      <div className='w-[50%] flex items-center text-center justify-center'>
          <p className='mb-0 text-[0.7vw]  text-center text-zinc-50'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <a className='text-[0.7vw]  text-zinc-50 underline ms-[10px]' href="#">ShopNow</a>   
      </div>

      <div className='text-[0.7vw]  absolute top-1/2 -translate-y-1/2 right-10 z-999 text-zinc-50 flex items-center gap-[5px]'>
        <p className='mb-0'>English</p>
        <FaArrowDown />
      </div>
    </div>
  
  </>
}

export default Header