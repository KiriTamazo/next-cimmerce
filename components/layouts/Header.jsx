import Image from "next/image";
import Link from "next/link";
import {
  Bars3Icon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
const Header = () => {
  return (
    <header className="bg-white py-2 border-b">
      <nav className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="flex-shrink-0 mr-5">
            <a href="">
              <Image
                src="/images/reshop-dark-logo.png"
                alt="ReShop"
                width="120"
                height="40"
              />
            </a>
          </div>
          {/* <Search /> */}
          <div className="flex items-center space-x-2 ml-auto">
            <Link href="/cart" className="nav-links">
              <ShoppingBagIcon className="text-gray-400 w-5" />

              <span className="hidden lg:inline ml-1">
                Cart (<b>0</b>)
              </span>
            </Link>
            <Link href="/login" className="nav-links">
              <UserIcon className="icon" />
              <span className="hidden lg:inline ml-1">Sign in</span>
            </Link>
            <Link href="/me">
              <div className="flex items-center mb-4 space-x-3 mt-4 cursor-pointer">
                <Image
                  width={40}
                  height={40}
                  className="rounded-full"
                  alt="User Image"
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
              <Bars3Icon className="icon" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
