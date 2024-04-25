import styles from "../style"

const Testimonials = () => {
    return (
      <section className={`text-white bg-gradient-to-tr from-fuchsia-950 to-purple-950 px-16 flex w-full  md:flex-row flex-col ${styles.paddingY}`}>
          <div className={`w-full md:w-1/2 flex-1 flex-col justify-start ${styles.flexStart} flex-grow`}>
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full mb-5">Here's what people are saying about us!</h2>
      </div>
        
        {/* <img src="/src/assets/companies.png"/> */}
      </section>
    )
  }
  
  export default Testimonials
  