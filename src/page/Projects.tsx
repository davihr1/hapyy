import React from "react";
import { Evolut } from "../Components/Evolut";
import { Header } from "../Components/Header";

import arrowLeft from "../assets/arrow-left.svg";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Components/Footer";

export function Projects() {
  const navigate = useNavigate()

  function handleGoBack() {
      navigate(-1);
  }

  return (
    <div className="w-full h-full flex flex-col bg-galaxy bg-no-repeat bg-cover">
      <div className="items-center w-full flex mt-20 mb-40 justify-self-start">
        <button onClick={handleGoBack} className="mr-10 ml-8">
          <img src={arrowLeft} alt="voltar" />
        </button>
        <Header />
        <strong className="text-[2rem] ml-4 text-primary-100 ">LAB</strong>
      </div>

      <div className="grid grid-cols-4 gap-36 ">
        <Evolut text="NLW - SPORTS (ROCKETSEAT)" url="https://github.com/davihr1/nlw-esports-ignite/blob/main/.github/Capa.png?raw=true" />
        <Evolut text="IGNITE LAB - EVENTS PLATFORM (ROCKETSEAT)" url="https://github.com/davihr1/event_platform/blob/main/.github/capa.jpeg?raw=true" />
        <Evolut text="NLW - Jobcalc (ROCKETSEAT)" url="https://github.com/davihr1/maratona-descover-2/blob/main/.github/jobscalc.png?raw=true" />
        <Evolut text="Movie designi" url="https://github.com/davihr1/movie_hm/blob/main/.github/capituraweb.jpeg?raw=true" />
        <Evolut text="NLW - Move.it (ROCKETSEAT)" url="https://github.com/davihr1/nlw4/blob/main/.github/Capturadaweb.jpeg?raw=true" />
        <Evolut text="Netflix Edit" url="https://github.com/davihr1/netflix-movie/raw/main/.github/Capturadaweb_localhost.jpeg" />
        <Evolut text="Tela de login Amazon" url="https://github.com/davihr1/amazon_login_clone/blob/main/.github/amazontela.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />

      </div>
      <Footer />
    </div>
  );
}