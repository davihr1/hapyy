import { motion } from "framer-motion";
import Card from "./Components/Card";
import Modal from "./Components/Modal";

import "./main.css";

function App() {
  const copa = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5,
        x: { duration: 1 },
        default: { ease: "linear" },
      },
    },
  };

  return (
    <div className="items-center flex flex-col justify-center w-full h-[100vh]">
      {/* <Modal /> */}
      <motion.div
        variants={copa}
        initial="hidden"
        animate="visible"
        className="mt-[-10rem] pb-20"
      >
        <img src="/Logo.svg" alt="logo" />
      </motion.div>

      <Card />

      <footer className="flex p-10 items-center justify-between w-[300px]">

        <div className="flex items-center">
        <img className="w-[40px] h-[40px] mr-4" src="/rock.png" alt="logo_rocketseat" />

        <div className="border-r-[2px]  border-[#F7DD43] w-[1px] h-[25px]"></div>

        </div>

        <a href="https://github.com/davihr1" target='_blank'>
          <img src="/github.png" alt="github" />
        </a>

        <a href="https://www.linkedin.com/in/davihr/" target='_blank'>
          <img src="/linkedin.png" alt="github" />
        </a>
      </footer>
    </div>
  );
}

export default App;
