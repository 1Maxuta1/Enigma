import { features } from "../constants"
import styles from "../style"
import { FC } from 'react';
import Button from "./Button"
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  content: string;
  index: number;
}
const FeatureCard: FC<FeatureCardProps> = ({ icon: Icon, title, content, index }) => (
  <div className={`rounded-lg hover:bg-blue-900 duration-300 transition flex p-6 ${index !== features.length - 1 ? "mb-6" : "mb-0"}`} >
    <Icon size={100} className="bg-blue-700 rounded-full py-1 px-2 md:py-4 md:px-6 lg:py-6 lg:px-6 text-blue-300 max-w-[7rem] max-h-[7rem]" />
    {/* Пример использования max-w-[7rem] и max-h-[7rem] для адаптивного размера */}
    <div className="pl-4">
      <div>{title}</div>
      <div>{content}</div>
    </div>
  </div>
)

const Business = () => {
  return (
    <section className={`text-white bg-gradient-to-tl from-fuchsia-950 to-purple-950 px-16 flex w-full md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`w-full md:w-1/2 flex-1 flex-col ${styles.flexStart} flex-grow`}>
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76px] leading-[66px] w-full mb-5">Empowering Your Financial Journey, One Click at a Time</h2>
        <p>A good credit card can help you build credit, earn rewards, and save money. But with so many choices available, it can be hard to pick the right one. Let us make it easy for you by choosing our card that fits your needs and goals.</p>
        <Button/>
      </div>
      <div className="flex-shrink w-full md:w-1/2">
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business