import { motion } from "framer-motion";
import Card from "./Components/Card";
import Footer from "./Components/Footer";
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
    <div className="items-center my-auto flex justify-between mx-auto w-[70vw] h-[100vh] max-[600px]:flex-col touch-pan-down">
      <div className="max-[600px]:hidden">
        <div>
          <motion.div
            variants={copa}
            initial="hidden"
            animate="visible"
            className="mt-[-10rem] pb-5"
          >
            <img src="/Logo.svg" alt="logo" />
          </motion.div>
        </div>

        <div>
          <h1 className="text-primary-100 font-bold text-6xl">
            Developer Frontend
          </h1>
          <p className="text-primary-100 font-medium text-base mt-3">
            HTML, CSS, JAVASCRIPT TAYPESCRIPT and REACTJS
          </p>

          <div className="w-[20rem] h-14 bg-black-100 rounded-lg my-9">
          <a href="https://www.linkedin.com/in/davihr/" target='_blank' className="flex items-center justify-center w-full h-14 my-2 ">
          <img src="/discord-6.svg" alt="discord" className="w-6 h-6 mx-4" />
          <strong className="text-primary-100 text-lg">Discord</strong>
        </a>
          </div>
        </div>
      </div>

      <div className="max-[600px]:my-[10rem]">
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
