import axios from "axios";
import { useEffect, useState } from "react";
import Product from "./Product";
import MainTitle from "./MainTitle";

const AllProductCopm = () => {
    const [arrOfProducts, setArrOfProducts] = useState([])

    async function getProducts(){
     const {data} = await axios.get("https://fakestoreapi.com/products")
     setArrOfProducts(data);
     console.log(data);
    }
    useEffect(()=>{
        getProducts();
    },[])

  return <>
    
    <div className="container my-[5vw]">

        <MainTitle title={'our products'} heading= {'Explore our products'}  />

        <div className="w-full myWrapper mt-[5vw]">

                <div className="row g-5">
                    {arrOfProducts.map((product , idx)=>{
                        return <Product key={idx} product={product} />
                    })}
                </div>

                
        </div>
    </div>
  
  </>
}

export default AllProductCopm