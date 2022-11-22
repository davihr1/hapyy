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
    <div className="w-full h-full flex flex-col bg-lines bg-no-repeat bg-contain">
      <div className="items-center w-full flex mt-20 mb-40 justify-self-start">
        <button onClick={handleGoBack} className="mr-10 ml-8">
          <img src={arrowLeft} alt="voltar" />
        </button>
        <Header />
        <strong className="text-[2rem] ml-4 text-primary-100 ">LAB</strong>
      </div>

      <div className="grid grid-cols-3 gap-36 ">
        <Evolut text="NLW - SPORTS (ROCKETSEAT)" url="https://github.com/davihr1/nlw-esports-ignite/blob/main/.github/Capa.png?raw=true" />
        <Evolut text="Mercado Livre" url="https://media-exp1.licdn.com/dms/image/C4D22AQFBT15I4PvGxg/feedshare-shrink_800/0/1659730643208?e=1671062400&v=beta&t=WJaHYksNDEM3C1Jyz9_ZmQ_kXGLT4I6MVbh8qEzaErM" />
        <Evolut text="Samsung Page" url="https://media-exp1.licdn.com/dms/image/C4E22AQF07IkeQIAeXQ/feedshare-shrink_800/0/1616685188385?e=1671062400&v=beta&t=_W9_101M_UE3TypTFTJ4ZQs0F14M8xJhK_yMQ8knzvs" />
        <Evolut text="DISNEY PLUS - Landingpage" url="https://media-exp1.licdn.com/dms/image/C4E22AQE-bVIilszYig/feedshare-shrink_800/0/1612807647993?e=1671062400&v=beta&t=pGsqqwZqwAXgXstRDRmPjtgTa1EiiwGx_j2P8t-UAOk" />
        <Evolut text="NLW - Move.it (ROCKETSEAT)" url="https://github.com/davihr1/nlw4/blob/main/.github/Capturadaweb.jpeg?raw=true" />
        <Evolut text="NLW - Proffy (Rocketseat)" url="https://github.com/davihr1/nlw-02-discovery/blob/master/.github/proffy.png?raw=true" />
        <Evolut text="RocketHelp - IgniteLab (Rocketseat)" url="https://media-exp1.licdn.com/dms/image/C4D22AQHVKL-7ozrU1w/feedshare-shrink_800/0/1658433557127?e=1671062400&v=beta&t=07eZQ924r34SmcMwuUXnlk97ctaZgZEzs7IT5h-L2i4" />
        <Evolut text="Tela de login Disney plus" url="https://github.com/davihr1/clone_login_dplus_ui/blob/main/img-md/print_clone_plus.jpeg?raw=true" />
      </div>
      
      <Footer />
    </div>
  );
}