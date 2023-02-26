import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom';

import Ifood from "/vite.png";

export function Footer() {
  const navigate = useNavigate()

  function handleProject() {
    navigate('/Projects');
  }

  return (
    <footer className="flex p-10 items-center justify-between w-[300px]">

      <div className="flex items-center">
      <img src={Ifood} alt="Logo Ifood" className=" w-9 mt-1 mr-3" />

        <div className="border-r-[2px]  border-[#F7DD43] w-[1px] h-[25px]"></div>

      </div>

      <a href="https://github.com/davihr1" target='_blank'>
        <img src="/github.png" alt="github" />
      </a>

      <a href="https://www.linkedin.com/in/davihr/" target='_blank'>
        <img src="/linkedin.png" alt="github" />
      </a>

      <button onClick={handleProject} title='Projects in developer'>
        <img src="/discord-6.svg" alt="code icon" className="mr-5" />
      </button>
    </footer>
  )
}
