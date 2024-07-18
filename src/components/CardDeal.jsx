import { card } from "../assets";
import Button from "./Button";

export default function CardDeal() {
  return (
    <section className='flex md:flex-row flex-col md:py-16 py-6'>
      
      <div className="flex-1 flex justify-center items-start flex-col">
        <h2 className="font-poppins font-semibold xl:text-[48px] text-[40px] xl:leading-[76.6px] leading-[66.6px] text-white ">Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className="font-poppins font-normal text-[18px] leading-[30px] text-dimWhite max-w-[470px] ">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button style="mt-10" />
      </div>

      <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <img src={card} alt="card" className="w-[100%] h-[100%] object-contain " />
      </div>
    </section>
  )
}
