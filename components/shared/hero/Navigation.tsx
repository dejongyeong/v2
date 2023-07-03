import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import Download from "../buttons/Download";

const Navigation = () => {
  return (
    <Popover className="sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-sm bg-opacity-50 ps-10 md:ps-14 pe-14">
      <nav>
        <div className="flex flex-row gap-3">
          <div className="flex-auto md:w-2/12 mt-2">
            <Link href="/" passHref>
              <a className="hover:cursor-pointer">
                <Image src="/logo.png" alt="logo" width={80} height={80} />
              </a>
            </Link>
          </div>

          <div className="flex md:w-8/12">
            <div className="hidden md:flex justify-center items-center gap-12 text-gray-600">
              <Link href="/" passHref>
                <a className="hover:text-title-blue">Home</a>
              </Link>
              <Link href="/#about" passHref>
                <a className="hover:text-title-blue">About</a>
              </Link>
              <Link href="/#portfolio" passHref>
                <a className="hover:text-title-blue">Portfolio</a>
              </Link>
              <Link href="/#contact" passHref>
                <a className="hover:text-title-blue">Contact</a>
              </Link>
            </div>
          </div>

          <div className="flex grow items-center justify-end md:hidden">
            <Popover.Button className="inline-flex items-center justify-center btn-ghost">
              <span className="sr-only">Open Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </Popover.Button>
          </div>

          <Popover.Overlay className="md:hidden h-screen fixed inset-0 bg-black opacity-40" />

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform transition md:hidden">
              <div className="bg-white shadow-lg rounded-md">
                <div className="px-7 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <Link href="/" passHref>
                      <a className="hover:cursor-pointer">
                        <Image src="/logo.png" alt="logo" width={80} height={80} />
                      </a>
                    </Link>
                    <div>
                      <Popover.Button className="inline-flex items-center justify-center btn-ghost text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                        <span className="sr-only">Close Menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-12">
                    <nav className="grid gap-y-8 pl-4 text-gray-600">
                      <Link href="/" passHref>
                        <a className="hover:text-title-blue">Home</a>
                      </Link>
                      <Link href="/#about" passHref>
                        <a className="hover:text-title-blue">About</a>
                      </Link>
                      <Link href="/#portfolio" passHref>
                        <a className="hover:text-title-blue">Portfolio</a>
                      </Link>
                      <Link href="/#contact" passHref>
                        <a className="hover:text-title-blue">Contact</a>
                      </Link>
                    </nav>
                  </div>
                  <div className="mt-11 mb-5 flex flex-col items-start pl-4">
                    <Download />
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>

          <div className="md:w-2/12 hidden md:flex justify-center items-center">
            <div>
              <Download />
            </div>
          </div>
        </div>
      </nav>
    </Popover>
  );
};

export default Navigation;
