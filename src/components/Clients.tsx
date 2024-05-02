import styles from "../style"

const Clients = () => {
    return (
      <section className={`${styles.flexCenter} flex-row flex-wrap justify-around py-4 px-16 gap-y-6 lg:gap-y-0 md:gap-x-4`}>
      <img width={150} height={150} alt="airbnb" src="/src/assets/airbnb.png"/> 
      <img width={150} height={150} alt="dropbox" src="/src/assets/dropbox.png"/> 
      <img width={150} height={150} alt="binance" src="/src/assets/binance.png"/> 
      <img width={150} height={150} alt="coinbase" src="/src/assets/coinbase.png"/> 
      </section>
    )
  }
  
  export default Clients
  