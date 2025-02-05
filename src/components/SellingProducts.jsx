import { sellingProducts } from "../../data"
import Card from "./Card"
import MainTitle from "./MainTitle"

const SellingProducts = () => {
  return <>
    
    <div className="container mt-[4vw]">
        <div className="flex justify-between items-center">
            <MainTitle  title ={'this month'} heading={"Best selling products"} />
            <button className=' cardsBtn py-2 px-12 text-white bg-[#DB4444] '>View All</button>
        </div>


        <div className="w-full mt-[4vw]">
            <div className="row g-4">
                

                        {sellingProducts.map((pro , idx)=>{return <Card key={idx} cardItem={pro} />})}

                
            </div>
        </div>
    </div>
  
  </>
}

export default SellingProducts