/* eslint-disable react/prop-types */
import AddToCart from "./AddToCart";
import AddToWishlist from "./AddToWishlist";

const Card = ({cardItem}) => {
    
    
    let {name , price , deletedPrice , rate , disCount , numOfItems , img} = cardItem ; 
    
    
    
  return <>

        <div className= "relative col-lg-3 col-md-6 aspect-[322/270] p-3">
            {<AddToWishlist/>}
            {<AddToCart/>}
            <div className="cardImg aspect-[250/270] relative bg-[#F5F5F5] flex justify-center items-center">
                <img className=" w-full h-full bg-cover bg-center" src={img} alt="" />
                <div className="w-10 h-6 rounded-[2px] bg-[#DB4444] absolute top-2 left-2 z-[999] text-white text-[10px] flex items-center justify-center">{disCount}</div>
            </div>
            <h2 className=" cardHeaderName">{name}</h2>
            <div className="flex items-center gap-[5px]">
                <p>{"$" + price}</p>
                <p className="line-through text-gray-400">{"$" + deletedPrice}</p>
            </div>
            <div className="stars flex items-center gap-[5px]">
                <p className="mb-0 pb-0">{rate}</p>
                <span className="text-gray-400">{"(" + numOfItems + ")"}</span>
            </div>
        </div>
    
  </>
}

export default Card