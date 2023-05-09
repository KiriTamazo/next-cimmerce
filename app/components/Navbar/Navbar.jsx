import React from "react";
import Link from "next/link";
import Search from "./Search";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faShoppingCart,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <header className="bg-white py-2 ">
      <nav className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <a href="/">
              <Image
                src="/images/logo.svg"
                height="40"
                width="120"
                alt="BuyItNow"
              />
            </a>
          </div>
          <Search />

          <div className="flex items-center space-x-2 ml-auto">
            <Link href="/cart" className="nav-links relative">
              {/* <i className="text-gray-400 w-5 fa fa-shopping-cart"></i>
              <span className="hidden lg:inline ml-1">
                Cart (<b>0</b>)
              </span> */}
              <span className="badge">0</span>
              <FontAwesomeIcon
                className="w-5 h-5 text-slate-500"
                icon={faShoppingCart}
              />
            </Link>
            <Link href="/login" className="nav-links">
              <FontAwesomeIcon icon={faUserCircle} />
            </Link>
            <Link href="/me">
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                <Image
                  width={10}
                  height={10}
                  alt="profile"
                  className="rounded-full"
                  src={"/images/default.png"}
                />
                <div className="space-y-1 font-medium">
                  <p>
                    Ghulam
                    <time className="block text-sm text-gray-500 dark:text-gray-400">
                      test@gmail.com
                    </time>
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="lg:hidden ml-2">
            <button
              type="button"
              className="bg-white p-3 inline-flex items-center rounded-md text-black hover:bg-gray-200 hover:text-gray-800 border border-transparent"
            >
              <span className="sr-only">Open menu</span>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
