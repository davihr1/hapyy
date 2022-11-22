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
    <div className="items-center my-auto flex justify-between mx-auto w-[100vw] h-[100vh] max-[600px]:flex-col touch-pan-down bg-react">
      <div className="max-[600px]:hidden ml-80 justify-center">
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

          <div className="w-[20rem] h-14 bg-sucess-500 rounded-lg my-9 transition duration-700 hover:bg-secundary-100  ">
          <button onClick={ handleSubscriber } className="flex items-center justify-center w-full h-14 my-2 ">

          <strong className="text-black-200 text-lg hover:text-primary-100 px-32 py-5">Projetos</strong>
        </button>
          </div>
        </div>
      </div>

      <div className="max-[600px]:my-[4rem] mr-80">
        <Card />
        <Footer />
      </div>
    </div>
  );
}