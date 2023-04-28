import { NavLink } from "react-router-dom";
import Logo from "/vite.png";
import { LinkedinLogo } from "@phosphor-icons/react";


export function Header() {
    return (
        <header className="w-full flex items-center justify-between px-7 mt-5">
            <img src={Logo}  className="w-10" />
            <nav className="gap-5 flex">
                <NavLink to='/'>
                    <span className="text-primary-100 text-[1rem]">Perfil</span>
                </NavLink>

                <NavLink to='/projects'>
                    <span className="text-primary-100 text-[1rem]">Certificados</span>
                </NavLink>
            </nav>

            <a href="https://www.linkedin.com/in/davifavaro/" className="text-primary-100 text-[1rem] flex"><LinkedinLogo size={24} className="text-ignite-100 mr-1"/> Linkedin</a>
        </header>
    );
}