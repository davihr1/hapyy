import { useNavigate } from "react-router-dom";


import arrowLeft from "../assets/arrow-left.svg";
import { Evolut } from "../Components/Evolut";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import Ifood from "../assets/ifood.svg";
import "../Components/Test.css"

export function Projects() {
  const navigate = useNavigate()

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <div className="w-full h-full flex flex-col bg-lines bg-no-repeat bg-cover">
      <div className="items-center w-full flex mt-20 mb-40 justify-self-start">
        <button onClick={handleGoBack} className="mr-10 ml-8">
          <img src={arrowLeft} alt="voltar" />
        </button>
        <Header />
        <strong className="text-[2rem] ml-4 text-primary-100 ">LAB</strong>
      </div>

      <div className="grid grid-cols-3 gap-36 ">
        <Evolut text="NLW - SPORTS (ROCKETSEAT)" url="https://github.com/davihr1/nlw-esports-ignite/blob/main/.github/Capa.png?raw=true" />
       
       
        <Evolut text="NLW - Move.it (ROCKETSEAT)" url="https://github.com/davihr1/nlw4/blob/main/.github/Capturadaweb.jpeg?raw=true" />
        <Evolut text="NLW - Proffy (Rocketseat)" url="https://github.com/davihr1/nlw-02-discovery/blob/master/.github/proffy.png?raw=true" />

        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
      </div>

      <Footer />
    </div>
  );
}