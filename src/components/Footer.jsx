import { IoMdSend } from "react-icons/io"

const Footer = () => {
  return <>
    
    <div className="container-fluid bg-black text-white py-5">
        <div className="row justify-between ">
            <div className="col-lg-2 col-md-6 md:mb-15 sm:mb-10">
                <h2 className="mb-[2vw] text-[1.5vw] font-bold">Exclusive</h2>
                <h3>Subscribe</h3>
                <p className="font-light">Get 10% off your first order</p>
                <div className="border-2 border-zinc-100 mt-2 py-1 px-2  flex justify-between items-center">
                    <input  type="email" placeholder="Enter email" />
                    <IoMdSend  />
                </div>
            </div>
            <div className="col-lg-2 col-md-6 md:mb-15 sm:mb-10">
                <h2 className="mb-[2vw] text-[1.5vw] font-bold">Support</h2>
                <h3>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</h3>
                <a href="#" className="font-light block my-[1vw]">exclusive@gmail.com</a>
                <a href="#">+88015-88888-9999</a>
            </div>
            <div className="col-lg-2 col-md-6 md:mb-15 sm:mb-10">
                <h2 className="mb-[2vw] text-[1.5vw] font-bold">Account</h2>
                <ul className="footerList">
                    <li className="mb-[1vw]"><a className="text-white" href="#">My account</a></li>
                    <li className="mb-[1vw]"><a className="text-white" href="#">Login / Register</a></li>
                    <li className="mb-[1vw]"><a className="text-white" href="#">Cart</a></li>
                    <li className="mb-[1vw]"><a className="text-white" href="#">Wishlist</a></li>
                    <li className="mb-[1vw]"><a className="text-white" href="#">Shop</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6 md:mb-15 sm:mb-10">
                <h2 className="mb-[2vw] text-[1.5vw] font-bold">Quick Link</h2>
                <ul className="footerList">
                    <li className="mb-[1vw]"><a href="#">Privacy Policy</a></li>
                    <li className="mb-[1vw]"><a href="#">Terms Of Use</a></li>
                    <li className="mb-[1vw]"><a href="#">FAQ</a></li>
                    <li className="mb-[1vw]"><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="col-lg-2 col-md-6 md:mb-15 sm:mb-10">
                <h2 className="mb-[2vw] text-[1.5vw] font-bold">Download App</h2>
                <p className="text-light text-[0.9vw]">Save $3 with App New User Only</p>
            </div>
        </div>
    </div>
  
  </>
}

export default Footer