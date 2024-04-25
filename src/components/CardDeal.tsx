import styles from "../style";

const CardDeal = () => {
  return (
    <section
      className={`text-white bg-gradient-to-br from-fuchsia-950 to-purple-950 px-16 flex w-full  md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`w-full md:w-1/2 flex-1 flex-col justify-start ${styles.flexStart} flex-grow`}
      >
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full mb-5">
          Discover Better Card Deals in a Few Simple Steps
        </h2>
        <p>
          Let us help you uncover the perfect credit card offers tailored to
          your needs. With our easy process, finding the best deal becomes
          effortless. Say goodbye to endless searching and hello to savings and
          rewards that suit you best.
        </p>
      </div>
      <img width={650} height={650} src="/src/assets/carddeal.png"/>
    </section>
  );
};

export default CardDeal;
