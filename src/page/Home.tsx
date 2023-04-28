import { GithubLogo, ArrowCircleRight } from '@phosphor-icons/react'
import { Card } from "../Components/Card";
import { Hub } from '../Components/hub';

export function Home() {
  return (
    <div className="flex items-center justify-center flex-col mt-10 ">
      <Card />
      <footer className="flex flex-wrap justify-evenly bg-main-100 w-full items-center -mt-10 mobile:flex-col mobile:flex
      mobile:flex-nowrap mobile:space-y-6 h-full overflow-hidden mobile:h-full py-5">
        <div className="flex flex-col items-center justify-start">
          <div className="border-2 border-solid border-main-200 rounded-md w-[16rem] p-4 mobile:w-[90vw] mobile:items-center">
            <h1 className="text-[2rem] text-primary-100 mx-2">Frontend</h1>

            <li className="text-primary-100">
              HTML
            </li>
            <li className="text-primary-100">
              CSS
            </li>
            <li className="text-primary-100">
              REACT
            </li>
            <li className="text-primary-100">
              NEXT
            </li>
            <li className="text-primary-100">
              TAILWIND
            </li>
            <li className="text-primary-100">
              STYLED-COMPONENT
            </li>
          </div>
        </div>

        
          <Hub />
      
      </footer>
    </div>
  );
}