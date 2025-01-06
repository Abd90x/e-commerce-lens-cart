import React, { useContext, useState } from "react";
import Logo from "../assets/img/Logo.png";
import LogoLight from "../assets/img/LogoLight.png";
import { SlBag } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

import { Link } from "react-router-dom";

import SearchForm from "../components/SearchForm";
import CategoryNavMobile from "../components/CategoryNavMobile";
import Cart from "../components/Cart";
import { CartContext } from "../context/CartContext";

import Switcher from "./Switcher";

const Header = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className=" bg-light dark:bg-primary  py-6 fixed w-full top-0 z-40 lg:relative xl:mb-[30px]">
      <div className="container mx-auto ">
        <div className="flex flex-row gap-4 items-center justify-between mb-4 xl:mb-0">
          {/* Menu */}
          <div
            onClick={() => setCatNavMobile(true)}
            className="text-3xl xl:hidden cursor-pointer "
          >
            <FiMenu />
          </div>

          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}
          >
            {/* Category nav mobile */}
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>
          {/* Logo */}
          <Link to={"/"}>
            <img
              className="w-[250px] hidden dark:block "
              src={Logo}
              alt="Logo"
            />
            <img className="w-[250px] dark:hidden" src={LogoLight} alt="Logo" />
          </Link>
          {/* Searchform show only on desktop */}
          <div className=" hidden w-full xl:flex xl:max-w[734px]">
            <SearchForm />
          </div>
          {/* Phone, Cart */}
          <div className=" flex items-center gap-x-[10px]">
            <div className="hidden xl:flex uppercase ">
              Need Help? +962 000 000 000
            </div>
            <div>
              {" "}
              <Switcher />
            </div>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className=" relative cursor-pointer"
            >
              <SlBag className="text-2xl" />
              <div className=" bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]">
                {itemsAmount}
              </div>
            </div>
            {/* Cart */}

            <div
              className={`
              ${isOpen ? "right-0" : "-right-full"}
               bg-gray-100 opacity-95 dark:bg-primary shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300`}
            >
              <Cart />
            </div>
          </div>
        </div>

        {/* Searchfrom - show on mobile only */}
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Header;
