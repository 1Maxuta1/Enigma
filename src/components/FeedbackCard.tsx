import { FC } from 'react';

interface FeedBackCardProps {
  content: string;
  name: string;
  image: string;
}
const FeedbackCard:FC<FeedBackCardProps>=({content, name, image}) => {
    return (
      <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-purple-900 bg-opacity-50 hover:bg-opacity-100 hover:bg-purple-800 duration-300">
        <p className="font-poppins font-normal text-[18px] leading-8 my-10">{content}</p>
        <div className="flex items-center">
        <img className="rounded-full" width={80} height={80} src={image} alt="client"/>
        <h2 className="ml-5 text-lg">{name}</h2>
        </div>
      </div>
    )
  }
  
  export default FeedbackCard
  