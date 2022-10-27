import { motion, useTransform } from "framer-motion";
import { useTime } from "framer-motion";
import Card from "./Components/Card";

import "./main.css";

function App() {

  const copa = {
    hidden: {y: 20, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        x: { duration: 1 },
        default: { ease: "linear" }
      }
    },
  }


  


  return (
    <div className="items-center flex flex-col justify-center w-full h-[100vh]">
      <motion.div 
      variants={copa}
      initial="hidden"
      animate="visible" className="mt-[-10rem] pb-40">
        <img src="/Logo.svg" alt="logo" />
      </motion.div>
      <Card />
    </div>
  );
}

export default App;
