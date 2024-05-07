import styles from "../style"
import airbnb from "/src/assets/airbnb.png";
import dropbox from "/src/assets/dropbox.png";
import binance from "/src/assets/binance.png";
import coinbase from "/src/assets/coinbase.png"

const Clients = () => {
    return (
      <section className={`${styles.flexCenter} flex-row flex-wrap justify-around py-4 px-16 gap-y-6 lg:gap-y-0 md:gap-x-4`}>
      <img width={150} height={150} alt="airbnb" src={airbnb}/> 
      <img width={150} height={150} alt="dropbox" src={dropbox}/> 
      <img width={150} height={150} alt="binance" src={binance}/> 
      <img width={150} height={150} alt="coinbase" src={coinbase}/> 
      </section>
    )
  }
  
  export default Clients
  