/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa"
import AddToWishlist from "./AddToWishlist"
import AddToCart from "./AddToCart"


const Product = ({product}) => {

    let {image , price , rating  , title } = product
    
  return <>
  
    <div className="col-lg-3 col-md-6 relative">
        <div className="AddIcons absolute top-1 right-1">
            <AddToWishlist />
            <AddToCart />
        </div>
                        <div className="innerProduct bg-[#f5f5f5] p-2 aspect-[250/270]">
                            <img className="w-full h-full" src={image} alt="" />
                            <div className="footProductCard py-[2vw]">
                                <h2 className="text-[1vw] font-semibold">{title.split(' ').splice(0 , 5).join(" ")}</h2>
                                <div className="flex items-center gap-2">
                                    <p className="text-[#DB4444] text-[1vw] font-semibold">{"$" + price}</p>
                                    <p className="flex items-center gap-[1px]">
                                        <span>{rating.rate}</span>
                                        <FaStar className="text-amber-400" />
                                    </p>
                                    <span className="text-gray-500 text-[0.8vw]">{"(" +rating.count + ")"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
  
  </>
}

export default Product