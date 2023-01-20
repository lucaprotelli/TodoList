import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import {
    SunIcon,
    MoonIcon,
    ComputerDesktopIcon,
} from "@heroicons/react/20/solid"

const items = [
    { name: "Light", icon: SunIcon },
    { name: "Dark", icon: MoonIcon },
    { name: "System", icon: ComputerDesktopIcon },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function Switcher() {
    return (
        <div className="inline-flex rounded-md shadow-sm">
            <Menu as="div" className="relative -ml-px block">
                <Menu.Button className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 shadow-md hover:bg-gray-50 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
                    <span className="sr-only">Open options</span>
                    <ComputerDesktopIcon
                        className="h-4 w-4"
                        aria-hidden="true"
                    />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute px-2 py-1 right-0 z-10 mt-2 -mr-1 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            {items.map((item) => (
                                <Menu.Item key={item.name}>
                                    <button className="w-full">
                                        <div className="flex items-center gap-2 px-4 py-2 text-sm w-full rounded-md hover:bg-gray-100">
                                            <div className="inline-flex items-center rounded-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 hover:text-indigo-600 shadow-md">
                                                <item.icon className="h-4 w-4" />
                                            </div>
                                            <span className="text-gray-700 font-sans font-medium tracking-tighter">
                                                {item.name}
                                            </span>
                                        </div>
                                    </button>
                                </Menu.Item>
                            ))}
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
