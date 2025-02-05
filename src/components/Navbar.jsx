import { useState } from "react"
import { FiHeart } from "react-icons/fi"


import { IoCartOutline, IoSearchOutline } from "react-icons/io5"
import { HiBars3BottomRight } from "react-icons/hi2"
import RespNav from "./RespNav"

const Navbar = () => {
    const [openNav, setOpenNav] = useState(false)
  return <>

        <header className={`container py-4 flex items-center justify-between border-b-[1px] border-gray-400 `}>
            <h1 className="text-[2vw] font-semibold">Exclusive</h1>
            <div className="navLinks hidden lg:block">
                <ul className="flex items-center gap-3  ">
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Sign up</a></li>
            </ul>
            </div>
            <div className="searchWithIcons lg:flex hidden lg:static items-center gap-3">
                <div className="search bg-[#F5F5F5] py-1 px-4 flex items-center gap-2">
                    <input className=" px-1"  type="text" placeholder="What you looking for? " />
                    <IoSearchOutline className=""/>
                </div>

                <div className="navIcons flex items-center gap-3">
                    <FiHeart />
                    <IoCartOutline />
                </div>
            </div>
            <div className="humburgerMenu cursor-[pointer] lg:hidden " onClick={()=> setOpenNav(!openNav)} >
                <HiBars3BottomRight className="text-[2.5vw]"/>
            </div>
        </header>

        {/* mobileSideBar */}
        <RespNav open={openNav} />
    
  </>
}

export default Navbar


