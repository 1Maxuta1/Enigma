import styles from "../style";
import { CiDiscount1 } from "react-icons/ci";
import card from "../assets/bank-card.png";
import hand from "../assets/hand.png";
import handCard from "../assets/hand-with-card.png";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`bg-gradient-to-tl from-fuchsia-950 to-purple-950 flex-row px-16 ${styles.paddingY} `}
    >
      <div
        className={` ${styles.flexStart} flex-col`}
      >
        <div className=" text-white flex flex-row items-center px-4 py-[6px] bg-discount-gradient rounded-lg mb-2">
          <p>20</p>
          <CiDiscount1 className="w-[30px] h-[30px]" />
          <p className={` text-white ${styles.paragraph}`}>
            Discount for 1 month
          </p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-white text-6xl font-bold font-poppins sm:block hidden ss:leading-[100px] leading-[75px]">
          The <span className="text-red-400"> Future </span>of Payment Methods 
        </h1>
      <div className="flex md:mr-4 mr-0">
        <GetStarted/>
      </div>
      <div className="overflow-hidden relative rounded-full">
      <img className="relative drop-shadow-lg z-[10]" src={handCard} width={500} height={500} alt="handWithCard"/>
      <div className="absolute z-[0] w-[20%] h-[30%] top-20 bg-gradient-to-r from-pink-200 to-pink-600 bg-opacity-30 blur-3xl"/>
      <div className="absolute z-[1] w-[80%] h-[80%] top-20 bottom-40  bg-white bg-opacity-30 blur-3xl"/>
      </div>
      </div>
      <div className="text-white w-1/2">
        Our team of experts employs a systematic approach to identify the credit
        cards that best match your requirements. We meticulously evaluate
        factors such as annual percentage rates (APRs), annual fees, rewards
        programs, and introductory offers to ensure that we recommend the most
        suitable options for you.
      </div>
    </section>
  );
};

export default Hero;
