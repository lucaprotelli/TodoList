import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import Input from "./Input"
import CreateTask from "./CreateTask"

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
        <div>
            <Input />
            <CreateTask />
            <div className="flow-root">
                <ul role="list" className="">
                    {people.map((person) => (
                        <a key={person.handle} onClick={openModal}>
                            <li className="p-3 mt-2 hover:bg-gray-50 hover:border hover:rounded-md hover:border-gray-200">
                                <div className="flex items-center space-x-4">
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
                                    <div>
                                        <button
                                            href="#"
                                            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                                        >
                                            View
                                        </button>
                                    </div>
                                    <div>
                                        <button
                                            href="#"
                                            className="inline-flex items-center rounded-full border border-red-200 bg-red-50 px-2.5 py-0.5 text-sm font-medium leading-5 text-red-600 shadow-sm hover:bg-red-100"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </a>
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
                    className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                    View all
                </button>
            </div>
        </div>
    )
}
