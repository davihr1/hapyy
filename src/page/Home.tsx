import { Card } from "../Components/Card";
import { Hub } from '../Components/hub';

import Arrowdw from './../assets/arrowdown.png'
import Filecore from './../assets/file_core.png'
import File from './../assets/file_nitro.png'

export function Home() {
  return (
    <div className="w-screen flex flex-col p-20 items-center justify-center">
      <div className="flex items-center justify-center flex-col">
        <img src="https://github.com/davihr1.png" className="rounded-full w-28" />

        <h1 className="text-primary-100 text-xl font-medium mt-2">@davihenrique</h1>
      </div>

      <nav className="m-6 flex flex-col gap-4" >
        <a href="https://www.rocketseat.com.br/ignite" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-primary-150 border-2 mobile:w-[80vw]
        text-primary-100 text-lg" >
          conheça o ignite rocketseat
        </a>

        <a href="https://www.rocketseat.com.br/nlw?utm_source=site&utm_medium=organic&utm_campaign=lead&utm_term=nlw&utm_content=topbanner_site-nlw" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-primary-150 border-2 mobile:w-[80vw]
        text-primary-100 text-lg" >
          Inscreva-se no NLW
        </a>

        <a href="https://github.com/davihr1" className="w-[50vw] h-16 flex items-center justify-center bg-primary-100 bg-opacity-20
        rounded border-solid border-primary-150 border-2 animate-pulse mobile:w-[80vw]
        text-primary-100 text-lg" >
          github - portfolio the code
        </a>

      </nav>
    </div>
  );
}