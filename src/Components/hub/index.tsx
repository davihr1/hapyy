import { ArrowCircleRight, GithubLogo } from "@phosphor-icons/react";

export function Hub() {
    return (
        <a href="https://github.com/davihr1" className=' w-[40vw] h-40 bg-primary-100 bg-opacity-20 flex items-center justify-start my-10 p-5 space-x-5 rounded-sm overflow-hidden mobile:h-24
        mobile:w-[90vw] mobile:justify-start '>
            <div className="w-20 h-20 flex bg-black-200 items-center justify-center ">
                <GithubLogo size={40} className='text-primary-100' />
            </div>

            <div>
                <h1 className="text-primary-100 text-[1.25rem] font-semibold text-start flex mb-2">
                    Labs Code
                </h1>

                <p className="w-52 text-base text-primary-100 mobile:hidden">Veja meu github e descubra tantos projetos incriveis.</p>
            </div>

            <div className="flex flex-1 justify-end">
                <ArrowCircleRight size={40} className="text-black-200 animate-bounce tablet:flex-none" />
            </div>
        </a>
    );
}