import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="text-white w-full bg-gradient-to-bl from-fuchsia-950 to-purple-950 px-16 flex justify-center items-center">
      <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-purple-800 rounded-[20px] box-shadow`}>
        <div className="flex-1 flex flex-col">
          <h2 className={styles.heading2}>Let’s try our service now!</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Access all the tools necessary to process card payments and expand your business globally.
          </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
          <Button />
        </div>
      </div>
    </section>
  );
};

export default CTA;