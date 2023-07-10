import { NavLink } from "react-router-dom";
import Logo from "/vite.png";
import { Certificate, CurrencyBtc, IdentificationBadge, LinkedinLogo, SealCheck, } from "@phosphor-icons/react";


export function Header() {
    return (
        <header className="flex items-center justify-start px-7 mt-5 mobile:px-0 mobile:justify-center ">

            <div className="flex items-center justify-between px-7 w-[402px] h-16 bg-primary-100 bg-opacity-20 rounded-[2.5rem]">
                <a href="https://www.linkedin.com/in/davifavaro/" className="text-primary-100 dark:text-dark-1000 flex items-center"><LinkedinLogo size={28} className="text-black-200 dark:text-dark-1000" /></a>
                <a href="https://www.linkedin.com/in/davifavaro/" className="text-primary-100 dark:text-dark-1000 text-[1rem] flex items-center"><CurrencyBtc size={28} className="text-black-200 dark:text-dark-1000 mr-1" /></a>

                <nav className="gap-1 flex ml-16">
                    <NavLink to='/certificates' className='mr-2'>
                        <span className="text-black-900 text-[1rem]"><Certificate size={28} className="text-black-200 dark:text-dark-1000 mr-1" /></span>

                    </NavLink>

                    <NavLink to='/' >
                        <span className="text-black-900 text-[1rem]"><IdentificationBadge size={28} className="text-black-200 dark:text-dark-1000 mr-1" /></span>

                    </NavLink>

                    <NavLink to='/verified' >
                        <span className="text-black-900 text-[1rem]"><SealCheck size={28} className="text-black-200 dark:text-dark-1000 mr-1" /></span>

                    </NavLink>
                </nav>
            </div>



        </header>
    );
}