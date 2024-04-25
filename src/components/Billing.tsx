import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section
      className={`${layout.sectionReverse} text-white flex bg-gradient-to-tr from-fuchsia-950 to-purple-950 px-16`}
    >
      <div className={layout.sectionImgReverse}>
        <div className="absolute z-[0] w-[20%] h-[30%] top-20 bg-gradient-to-r from-pink-200 to-pink-600 bg-opacity-20 blur-3xl" />
        <div className="absolute z-[1] w-[80%] h-[80%] top-20 bottom-40  bg-white bg-opacity-20 blur-3xl" />
        <img className="z-[10]" src="/src/assets/billing.png" />
      </div>
      <div
        className={`w-full md:w-1/2 flex-1 flex-col justify-start ${styles.flexStart} flex-grow`}
      >
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full mb-5">
          Effortlessly Manage Your Billing & Invoicing
        </h2>
        <p>
          Simplify your financial processes with our intuitive platform,
          ensuring seamless control over billing and invoicing tasks.
        </p>
        <div className="flex gap-x-7 mt-8">
          <a
            target="_blank"
            href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
          >
            <img src="/src/assets/appstore.png" />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/games?hl=ru&gl=US&pli=1"
          >
            <img src="/src/assets/googleplay.png" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Billing;
