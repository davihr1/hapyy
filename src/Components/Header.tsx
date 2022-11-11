import { motion } from "framer-motion";

import Logo from "../assets/LOGO-DOWHILE-2022.svg";

export function Header() {
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
    <>
        <motion.div
            variants={copa}
            initial="hidden"
            animate="visible"
          >
            <img src={Logo} alt="logo" />
          </motion.div>
    </>
  );
}