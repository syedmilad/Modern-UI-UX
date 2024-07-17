import { discount, robot } from "../assets"
import GetStarted from "./GetStarted"
export default function Hero() {
  return (
    <section className="flex md:flex-row flex-col sm:py-12 py-6">
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
            </h1>

            <div className="ss:flex hidden md:mr-4">
              <GetStarted/>
            </div>
           
        </div>
        <h1 className="font-poppins font-semibold ss:text[68px] text-[52px] text-white ss:leading-[100px] leading-[77px]">
            Payment Method.
        </h1>

        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-4 ">Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
        We examine annual percentage rates, annual fees.</p>
      </div>

      <div className="flex flex-1 relative justify-center items-center md:my-0 my-10">
        <img src={robot} alt="bilings" className="w-[100%] h-[100%] relative z-[5]" />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "/>
        <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full top-0 white__gradient "/>
        <div className="absolute z-[0] w-[50%] h-[50%] top-0 right-20 bottom-20 blue__gradient "/>
      </div>

      <div className={`ss:hidden flex justify-center items-center`}>
        <GetStarted/>
      </div>
    </section>
  )
}
