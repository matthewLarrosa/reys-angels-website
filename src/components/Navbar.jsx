import { Fragment, useState } from "react";
import { Bars3Icon} from "@heroicons/react/24/outline";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { Link } from "react-scroll";

export default function Navbar() {
  
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Reys Angels</span>
              <div className="font-nav font-bold text-xl ">Reys Angels</div>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              ></Transition>
            </Popover>

            <a
              href="#home-section"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About
            </a>
            <Link
              to="projects-section" smooth={true} duration={500}
              href="#projects-section"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Contact
            </Link>
            <Link
              to="contact-section" smooth={true} duration={500}
              href="#contact-section"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Gallery
            </Link>
            <Link
              to="about-section" smooth={true} duration={500}
              href="#about-section"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Pricing
            </Link>
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <div className="font-nav font-bold text-xl hidden">
                  Reys Angels
                </div>
              </a>
              <button
                type="button"
                className="h-10 w-10 rounded-md text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="#home-section"
                    to="home-section" smooth={true} duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#projects-section"
                    to="projects-section" smooth={true} duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link
                    href="#contact-section"
                    to="contact-section" smooth={true} duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="#about-section"
                    to="about-section" smooth={true} duration={500}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}