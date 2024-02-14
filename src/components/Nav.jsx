import { AiOutlineShoppingCart } from "react-icons/ai";
import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav() {
  const [IsMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className=" flex flex-wrap items-center justify-between">
      {/* {This is the logo} */}
      <a href="#">
        <NikeLogo className="h-10 w-10" />
      </a>
      {/* {Burger button} */}
      <button
        onClick={() => setIsMobileMenuShown(!IsMobileMenuShown)}
        className="rounded-lg p-2 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 lg:hidden"
      >
        <RxHamburgerMenu size={25} />
      </button>

      <div
        className={`${!IsMobileMenuShown && "hidden"} w-full lg:block lg:w-auto`}
      >
        <ul className="lg:space-x-8 flex flex-col rounded-lg border border-gray-100 lg:border-none bg-gray-50 lg:bg-transparent p-4 text-lg lg:flex-row  ">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`rounded cursor-pointer px-3 py-2 ${i === 0 ? "bg-[#030637] text-white lg:bg-transparent lg:text-[#720455]" : "hover:bg-gray-100 "}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* {Shopping Cart} */}

      <div className="fixed bottom-4 left-4 lg:static">
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md ">
          <AiOutlineShoppingCart />
        </div>
      </div>
    </nav>
  );
}
