import { motion } from 'framer-motion';
import React, { Component } from 'react';

export class Card extends Component {
  render() {
    const enter = {
        hidden: { opacity: 0, scale: 0.1},
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 1,
            staggerChildren: 1,
            delay: 0.5,
            x: { duration: 1 },
            default: { ease: "linear" }
          }
        }
      }
    return (
        <motion.div
        variants={enter}
        initial="hidden"
        animate="visible" className="flex flex-col items-center justify-between bg-ignite w-[300px] h-[440px] bg-no-repeat">
        <div></div>
        <motion.button whileHover={{ scale: 1.1 }} className="cursor-default">
          <img
            className="rounded-full w-36"
            src="https://github.com/davihr1.png"
            alt="Imagem de Perfil"
          />
        </motion.button>
        <div className="flex flex-col text-start mb-6 ml-[-20px]">
          <h1 className="text-primary-100 font-bold w-48">Davi Henrique</h1>
          <p className="text-primary-100 font-light text-[14px] w-48">
            Student at Rocketseat
          </p>
        </div>
      </motion.div>
    )
  }
}
