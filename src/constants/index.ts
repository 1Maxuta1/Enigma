import { FaMoneyBillWave } from "react-icons/fa"; 
import { FaUserTie } from 'react-icons/fa';
import { GiPiggyBank } from 'react-icons/gi';


export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "features", title: "Features" },
  { id: "solution", title: "Solution" },
];

export const clients = [
  { id: 1, logo: "client-1.png" },
  { id: 2, logo: "client-2.png" },
];

export const features = [
  {
    id: 1,
    icon: FaMoneyBillWave,
    title: "Investor's Club",
    content: "Join our exclusive club of savvy investors. Share tips, discover new opportunities, and invest together in curated portfolios that align with your interests and values.",
  },
  {
    id: 2,
    icon: FaUserTie,
    title: "Smart Money Coach",
    content: "Imagine having a financial guru in your pocket! Our AI-powered Money Coach learns your habits, predicts your financial needs, and serves up personalized tips to help you save and invest smarter.",
  },
  {
    id: 3,
    icon: GiPiggyBank,
    title: "Dream Savings Goals",
    content: "Turn dreams into reality with our Dream Savings Goals feature. Set up personalized savings goals for that dream vacation, new car, or home renovation, and track your progress with motivating visuals.",
  },
];

export const socialMedia = [
  { id: 1, icon: "facebook.svg", link: "https://www.facebook.com/example" },
  { id: 2, icon: "twitter.svg", link: "https://twitter.com/example" },
];

export const stats = [
  { id: 1, title: "Users", value: "4200+" },
  { id: 2, title: "Transactions", value: "$290M+" },
  { id: 3, title: "Trusted companies", value: "250+" },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "About Us", link: "/about" },
      { name: "Contact Us", link: "/contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { name: "Product 1", link: "/product-1" },
      { name: "Product 2", link: "/product-2" },
    ],
  },
];
