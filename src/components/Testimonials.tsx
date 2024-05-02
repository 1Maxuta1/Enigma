import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      className={`text-white bg-gradient-to-tr from-fuchsia-950 to-purple-950 px-16 flex w-full  md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`w-full flex-1 flex-col flex-grow`}>
        <h2 className="font-poppins flex justify-center font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full mb-5">
          Here's what people are saying about us!
        </h2>
        <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1]">
          {feedback.map((card)=>(
            <FeedbackCard key={card.id} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
