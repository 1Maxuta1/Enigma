import { FaMoneyBillWave } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { GiPiggyBank } from "react-icons/gi";
import testimonials1 from "../assets/testimonials1.jpg";
import testimonials2 from "../assets/testimonials2.jpg";
import testimonials3 from "../assets/testimonials3.jpg";
import testimonials4 from "../assets/testimonials4.jpg";

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
    content:
      "Join our exclusive club of savvy investors. Share tips, discover new opportunities, and invest together in curated portfolios that align with your interests and values.",
  },
  {
    id: 2,
    icon: FaUserTie,
    title: "Smart Money Coach",
    content:
      "Imagine having a financial guru in your pocket! Our AI-powered Money Coach learns your habits, predicts your financial needs, and serves up personalized tips to help you save and invest smarter.",
  },
  {
    id: 3,
    icon: GiPiggyBank,
    title: "Dream Savings Goals",
    content:
      "Turn dreams into reality with our Dream Savings Goals feature. Set up personalized savings goals for that dream vacation, new car, or home renovation, and track your progress with motivating visuals.",
  },
];

export const feedback = [
  {
    id: 1,
    content:
      " Enigma Bank has completely changed the way I manage my finances. Fromseamless transactions to personalized financial insights, their digital platform makes everything so convenient.",
    name: "Emily Thompson",
    image: testimonials1,
  },
  {
    id: 2,
    content: "Enigma Bank has been a game-changer for me. Their innovative digital solutions have made managing my finances effortless. I can track my spending, set savings goals, and access financial advice—all in one place.",
    name: "Michael Rodriguez",
    image: testimonials2,
  },
  {
    id: 3,
    content: "Enigma Bank has exceeded my expectations. Their user-friendly app makes banking a breeze, and I love the rewards and perks that come with their credit cards. Enigma Bank has made my financial life so much more rewarding and enjoyable.",
    name: "William Johnson",
    image: testimonials3,
  },
  {
    id: 4,
    content: "Enigma Bank has been an absolute lifesaver for me. Their app is so user-friendly, and I love how I can easily track my spending and savings goals. Enigma Bank has made managing my finances a breeze, and I couldn't be happier with their service.",
    name: "Olivia Fayock",
    image: testimonials4,
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
    id:"home", title: "Home",
  },
  {
    id:"about", title: "About",
  },
  {
    id:"features", title: "Features",
  },
  {
    id:"solution", title: "Solution",
  },
];
