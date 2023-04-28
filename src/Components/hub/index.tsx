import { ArrowCircleRight, GithubLogo } from "@phosphor-icons/react";

export function Hub() {
    return(
        <a href="https://github.com/davihr1" className=' w-[28rem] flex items-center justify-around my-10 p-5 border-2 space-x-5 border-solid border-main-200 rounded-sm overflow-hidden mobile:h-24
        mobile:w-[90vw] mobile:justify-start '>
            <div className="w-20 h-20 flex bg-black-200 items-center justify-center mr-4">
              <GithubLogo size={40} className='text-primary-100' />
            </div>

            <div>
                <h1 className="text-primary-100 text-[1.25rem] font-semibold text-start flex">
                    Labs Code
                </h1>

                <p className="w-52 text-base text-primary-100 mobile:hidden">Clique aqui para acessar meus projetos e descubra o que eu tenho de melhor</p>
            </div>

            <ArrowCircleRight size={40} className="text-primary-100 animate-bounce"/>
          </a>
    );
}