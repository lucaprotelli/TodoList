import { Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Swithcer from "./Switcher"

export default function Navbar() {
    return (
        <div className="relative pt-6 pb-16 sm:pb-24">
            <Popover>
                <div className="mx-auto max-w-7xl px-6">
                    <nav
                        className="relative flex items-center justify-around sm:h-10"
                        aria-label="Global"
                    >
                        <div className="flex items-center gap-3">
                            <div className="flex items-center">
                                <Popover.Button>
                                    <span className="sr-only">
                                        Your Company
                                    </span>
                                    <img
                                        className="h-6 w-6 md:h-8 md:w-8"
                                        src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
                                        alt=""
                                    />
                                </Popover.Button>
                                {/* <div className="-mr-2 flex items-center justify-self-end md:hidden">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        <Bars3Icon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div> */}
                            </div>
                            <div className="flex flex-1 md:flex-initial items-center">
                                <h1 className="text-2xl font-bold tracking-tight sm:text-center sm:text-3xl">
                                    Todo List
                                </h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 divide-x">
                            <Swithcer />
                            <div className="inline-flex ">
                                <a
                                    href="https://github.com/lucaprotelli"
                                    target="_blank"
                                    className="inline-flex items-center px-1 text-gray-500 hover:text-gray-700"
                                >
                                    <span className="sr-only">GitHub</span>
                                    <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="h-6 w-6 md:h-8 md:w-8"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </div>
                            <div className="inline-flex rounded-md shadow">
                                <a
                                    href="#"
                                    className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>

                <Transition
                    as={Fragment}
                    enter="duration-150 ease-out"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="duration-100 ease-in"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <Popover.Panel
                        focus
                        className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                    >
                        <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                            <div className="flex items-center justify-between px-5 pt-4">
                                <div>
                                    <img
                                        className="h-8 w-8"
                                        src="https://cdn-icons-png.flaticon.com/512/3069/3069172.png"
                                        alt=""
                                    />
                                </div>
                                <div className="-mr-2">
                                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none">
                                        <span className="sr-only">
                                            Close main menu
                                        </span>
                                        <XMarkIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </Popover.Button>
                                </div>
                            </div>
                            <div className="space-y-1 px-2 pt-2 pb-3"></div>
                            <a
                                href="#"
                                className="block w-full bg-gray-50 px-5 py-3 text-center shadow-xl font-medium text-indigo-600 hover:bg-gray-100 hover:text-indigo-700"
                            >
                                Log in
                            </a>
                        </div>
                    </Popover.Panel>
                </Transition>
            </Popover>
        </div>
    )
}
