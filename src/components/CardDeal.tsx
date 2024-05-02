import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section id="features"
      className={`text-white bg-gradient-to-br from-fuchsia-950 to-purple-950 px-16 flex w-full  md:flex-row flex-col ${styles.paddingY}`}
      style={{ scrollBehavior: "smooth" }}
    >
      <div
        className={`w-full md:w-1/2 flex-1 flex-col justify-start ${styles.flexStart} flex-grow`}
      >
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full mb-5">
          Discover Better Card Deals in a Few Simple Steps
        </h2>
        <p className="">
          Let us help you uncover the perfect credit card offers tailored to
          your needs. With our easy process, finding the best deal becomes
          effortless. Say goodbye to endless searching and hello to savings and
          rewards that suit you best.
        </p>
        <Button/>
      </div>
      <div className={layout.sectionImg}>
      <div className="absolute z-[0] w-[20%] h-[30%] top-20 bg-gradient-to-r from-blue-600 to-blue-900 bg-opacity-20 blur-3xl" />
        <div className="absolute z-[1] w-[80%] h-[80%] top-20 bottom-40  bg-blue-400 bg-opacity-20 blur-3xl" />
      <img className="z-[10]" width={650} height={650} src="/src/assets/carddeal.png"/>
      </div>
    </section>
  );
};

export default CardDeal;
