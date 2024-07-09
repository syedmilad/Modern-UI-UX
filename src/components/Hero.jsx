import { discount } from "../assets"
import GetStarted from "./GetStarted"
export default function Hero() {
  return (
    <section className=" flex md:flex-row flex-col sm:py-12 py-6">
      <div className="flex-1 flex justify-center items-start flex-col xl:px-0 md:px-16 px-6 ">

        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-xl mb-2">
           <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className="ml-2 font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]">
          <span className="text-white">20%</span> Discount For {" "}
          <span className="text-white">1 Month</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-poppins font-semibold ss:text[77px] text-[52px] text-white ss:leading-[100px] leading-[77px]">
              The Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Generation <br /></span>{" "} 
              <span>Payment Method.</span>
            </h1>

            <div className="ss:flex hidden md:mr-4">
              <GetStarted/>
            </div>
        </div>
      </div>
    </section>
  )
}
