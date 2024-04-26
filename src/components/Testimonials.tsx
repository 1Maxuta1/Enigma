import styles from "../style";

const Testimonials = () => {
  return (
    <section
      className={`text-white bg-gradient-to-tr from-fuchsia-950 to-purple-950 px-16 flex w-full  md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className={`w-full flex-1 flex-col flex-grow`}>
        <h2 className="font-poppins flex justify-center font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full mb-5">
          Here's what people are saying about us!
        </h2>
        <p>
          Enigma Bank has completely changed the way I manage my finances. From
          seamless transactions to personalized financial insights, their
          digital platform makes everything so convenient.
        </p>
        <img
          width={100}
          height={100}
          className="rounded-full"
          src="/public/testimonials-1.jpg"
        />
        <h2>Emily Thompson</h2>
        <p>
          Enigma Bank has been a game-changer for me. Their innovative digital
          solutions have made managing my finances effortless. I can track my
          spending, set savings goals, and access financial advice—all in one
          place.
        </p>
        <img
          width={100}
          height={100}
          className="rounded-full"
          src="/public/testimonials-2.jpg"
        />
        <h2>Michael Rodriguez</h2>
        <p>Enigma Bank has exceeded my expectations. Their user-friendly app makes banking a breeze, and I love the rewards and perks that come with their credit cards. Enigma Bank has made my financial life so much more rewarding and enjoyable.</p>
        <img
          width={100}
          height={100}
          className="rounded-full"
          src="/public/testimonials-3.jpg"
        />
        <h2>William Johnson</h2>
      </div>

      {/* <img src="/src/assets/companies.png"/> */}
    </section>
  );
};

export default Testimonials;
