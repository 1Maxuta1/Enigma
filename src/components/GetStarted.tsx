import { BsArrowUpRight } from "react-icons/bs";
import styles from "../style";

const GetStarted = () => {
    return (
      <div className={`${styles.flexCenter} w-[140px] h-[140px] text-white bg-gray-700 hover:bg-blue-500 ease-in-out transition duration-300 p-[2px] cursor-pointer rounded-full`}>
        <div className={`${styles.flexCenter} w-[100%] h-[100%] bg-purple-950 rounded-full flex-col`}>
          Get Started 
      <BsArrowUpRight/>
      </div>
      </div>
    )
  }
  
  export default GetStarted
  