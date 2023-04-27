import { NavLink } from "react-router-dom";
import arrowLeft from "../../assets/arrow-left.svg";


export function Header() {
    return (
        <header className="flex justify-between items-center flex-row w-screen my-5 mx-auto px-16 ">
            <img src="https://startree.vercel.app/vite.png"  className="w-10" />
            <nav className="gap-4 flex">
                <NavLink to='/'>
                    <span className="text-primary-100 text-[1rem]">Perfil</span>
                </NavLink>

                <NavLink to='/projects'>
                    <span className="text-primary-100 text-[1rem]">Certificados</span>
                </NavLink>
            </nav>

            <a href="https://www.linkedin.com/in/davifavaro/" className="text-primary-100 text-[1rem]">Linkedin</a>
        </header>
    );
}