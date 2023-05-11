import { NavLink } from "react-router-dom";
import Logo from "/vite.png";
import { LinkedinLogo } from "@phosphor-icons/react";


export function Header() {
    return (
        <header className="flex items-center justify-start px-7 mt-5 mobile:px-0 mobile:justify-center ">

            <div className="flex items-center justify-between px-7 w-[402px] h-16 bg-primary-100 bg-opacity-20 rounded-[2.5rem]">
                <a href="https://www.linkedin.com/in/davifavaro/" className="text-primary-100 text-[1rem] flex items-center"><LinkedinLogo size={28} className="text-black-200 mr-1" /> Linkedin</a>

                <nav className="gap-2 flex ml-16">
                    <NavLink to='/certificates' className='mr-2'>
                        <span className="text-primary-100 text-[1rem]">Certificados</span>

                    </NavLink>

                    <NavLink to='/' >
                        <span className="text-primary-100 text-[1rem]">Perfil</span>

                    </NavLink>
                </nav>
            </div>



        </header>
    );
}