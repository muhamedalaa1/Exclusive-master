import axios from "axios"
import MainTitle from "./MainTitle"
import { useEffect } from "react";
import { useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";



const AllProducts = () => {
    const [arrOfProducts, setArrOfProducts] = useState([])

    async function getProducts(){
     const {data} = await axios.get("https://fakestoreapi.com/products")
     setArrOfProducts(data);
    }
    useEffect(()=>{
        getProducts();
    },[])

  return <>
    
    <div className="container my-[5vw]">
        <MainTitle title={'our products'} heading= {'Explore our products'}  />

        <div className="w-full myWrapper mt-[5vw]">

                <div className="row g-5">
                    {arrOfProducts.slice(0, 8).map((product , idx)=>{
                        return <Product key={idx} product={product} />
                    })}
                </div>

                <div className='text-center mt-[2vw] cursor-[pointer]'>
                     <Link to={"/all-products"} className=' cardsBtn py-2 px-12 cursor-[pointer] text-white bg-[#DB4444] '>View All Products</Link>
                </div>
        </div>
    </div>
  
  </>
}

export default AllProducts