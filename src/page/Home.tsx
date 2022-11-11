import { useNavigate } from "react-router-dom";

import { Card } from "../Components/Card";
import { Footer } from "../Components/Footer";
import { Header } from "../Components/Header";

export function Home() {
    const navigate = useNavigate()

    function handleSubscriber() {
        navigate('/Projects');
    }
  return (
    <div className="items-center my-auto flex justify-between mx-auto w-[70vw] h-[100vh] max-[600px]:flex-col touch-pan-down">
      <div className="max-[600px]:hidden">
        <div>
          <Header />
        </div>

        <div>
          <h1 className="text-primary-100 font-bold text-6xl">
            Developer Frontend
          </h1>
          <p className="text-primary-100 font-semibold text-base mt-3">
            HTML,  CSS, JAVASCRIPT,  TAYPESCRIPT and REACTJS
          </p>

          <div className="w-[20rem] h-14 bg-black-200 rounded-lg my-9 transition duration-700 hover:bg-sucess-900 ">
          <button onClick={ handleSubscriber } className="flex items-center justify-center w-full h-14 my-2 ">
          <img src="/discord-6.svg" alt="code icon" className="mr-5" />
          <strong className="text-primary-100 text-lg">Projetos</strong>
        </button>
          </div>
        </div>
      </div>

      <div className="max-[600px]:my-[4rem]">
        <Card />
        <Footer />
      </div>
    </div>
  );
}