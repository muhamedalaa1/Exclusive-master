import { FaCamera, FaHeadphonesAlt, FaStar } from "react-icons/fa";
import { RiComputerLine, RiGamepadLine } from "react-icons/ri";
import { MdOutlineWatch } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";

export const cardData = [
    {
        name:'HABIT HV-G92 Gamepad',
        price:120,
        deletedPrice: 160 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-40%",
        numOfItems: 88,
        img:'./src/assets/Frame 611.png'
    },
    {
        name:'AK-900 Wired Keyboard',
        price:960,
        deletedPrice: 1160 ,
        rate: <><FaStar className="text-orange-400" /></>   ,
        disCount : "-60%",
        numOfItems: 56,
        img:'./src/assets/Frame 612.png'


    },
    {
        name:'IPS LCD Gaming Monitor',
        price:370,
        deletedPrice: 400 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-55%",
        numOfItems: 99,
        img:'./src/assets/Frame 613.png'


    },
    {
        name:'S-Series Comfort Chair ',
        price:375,
        deletedPrice: 400 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-39%",
        numOfItems: 99,
        img:'./src/assets/Frame 614.png'
    },
    {
        name:'HABIT HV-G92 Gamepad',
        price:120,
        deletedPrice: 160 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-40%",
        numOfItems: 88,
        img:'./src/assets/Frame 611.png'
    },
    {
        name:'AK-900 Wired Keyboard',
        price:960,
        deletedPrice: 1160 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-60%",
        numOfItems: 56,
        img:'./src/assets/Frame 612.png'


    },
    {
        name:'IPS LCD Gaming Monitor',
        price:370,
        deletedPrice: 400 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-55%",
        numOfItems: 99,
        img:'./src/assets/Frame 613.png'


    },
    {
        name:'S-Series Comfort Chair ',
        price:375,
        deletedPrice: 400 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-39%",
        numOfItems: 99,
        img:'./src/assets/Frame 614.png'
    }
]
export const boxData = [
    {
        Icon:<IoIosPhonePortrait />,
        Category : "Phones"

    },
    {
        Icon: <RiComputerLine /> , 
        Category : "Computers"

    },
    {
        Icon: <MdOutlineWatch />, 
        Category : "SmartWatche"

    },
    {
        Icon: <FaCamera />, 
        Category : "Camera"

    },
    {
        Icon:<FaHeadphonesAlt />, 
        Category : "HeadPhones"

    },
    {
        Icon: <RiGamepadLine />, 
        Category : "Gaming"

    },
      {
        Icon: <FaCamera />, 
        Category : "Camera"

    },
  
]
export const sellingProducts = [
    {
        name:'HABIT HV-G92 Gamepad',
        price:120,
        deletedPrice: 160 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-40%",
        numOfItems: 88,
        img:'./src/assets/sellingproductsImgs/Frame 605.png'
    },
    {
        name:'AK-900 Wired Keyboard',
        price:960,
        deletedPrice: 1160 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-60%",
        numOfItems: 56,
        img:'./src/assets/sellingproductsImgs/Frame 606.png'
    },
    {
        name:'IPS LCD Gaming Monitor',
        price:370,
        deletedPrice: 400 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-55%",
        numOfItems: 99,
        img:'./src/assets/sellingproductsImgs/Frame 610.png'
    },
    {
        name:'IPS LCD Gaming Monitor',
        price:370,
        deletedPrice: 400 ,
        rate: <FaStar className="text-orange-400" />,
        disCount : "-55%",
        numOfItems: 99,
        img:'./src/assets/sellingproductsImgs/Frame 612.png'
    },
]

export const sliderSettings = {
    slidesPerView :1 ,
    spaceBetween : 50,
    breakpoints : {
        480 :{
            slidesPerView :1 
        },
        600 :{
            slidesPerView :2 
        },
        750 :{
            slidesPerView :3 
        },
        1100 :{
            slidesPerView :14
        },
    }
}