import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import Input from "./Input"
import CreateTask from "./CreateTask"
import { XMarkIcon } from "@heroicons/react/24/outline"

const people = [
    {
        name: "Leonard Krasner",
        handle: "leonardkrasner",
        imageUrl:
            "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Floyd Miles",
        handle: "floydmiles",
        imageUrl:
            "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Emily Selman",
        handle: "emilyselman",
        imageUrl:
            "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
        name: "Kristin Watson",
        handle: "kristinwatson",
        imageUrl:
            "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
]

export default function TodoList() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <div className="lg:w-1/3">
            <Input />
            <CreateTask />
            <div className="flow-root">
                <ul role="list">
                    {people.map((person) => (
                        <li
                            key={person.handle}
                            className="group/task p-3 mt-2 hover:bg-gray-100 border border-white hover:border-slate-300 hover:rounded-md"
                        >
                            <div
                                className="flex items-center space-x-4 cursor-pointer"
                                onClick={openModal}
                            >
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src={person.imageUrl}
                                        alt=""
                                    />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900">
                                        {person.name}
                                    </p>
                                    <p className="truncate text-sm text-gray-500">
                                        {"@" + person.handle}
                                    </p>
                                </div>
                                <div className="xl:hidden xl:group-hover/task:block">
                                    <button
                                        href="#"
                                        className="inline-flex items-center rounded-full hover:bg-indigo-600/20 px-3 py-1 text-sm font-semibold leading-5 text-indigo-600 shadow-lg ring-1 ring-inset ring-indigo-600/20"
                                    >
                                        Done
                                    </button>
                                </div>
                                <div className="xl:hidden xl:group-hover/task:block">
                                    <button
                                        name="delete"
                                        href="#"
                                        className="inline-flex items-center rounded-md shadow-xl px-1 py-1 text-sm font-semibold leading-5 text-gray-600 ring-1 ring-inset ring-slate-600/20 hover:bg-slate-600/10"
                                    >
                                        <XMarkIcon className="h-5 w-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Todo
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Fare compiti matematica
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:ring-0"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
            <div className="mt-6">
                <button
                    href="#"
                    className="flex w-full items-center justify-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md hover:bg-gray-50"
                >
                    View all
                </button>
            </div>
        </div>
    )
}
