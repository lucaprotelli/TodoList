import React, { useState } from "react"

export default function Input() {
    let [open, setOpen] = useState(false)

    // Toggle the menu when ⌘K is pressed
    React.useEffect(() => {
        const down = (e) => {
            if (e.key === "k" && e.metaKey) {
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])
    return (
        <>
            <div>
                <div className="relative mt-1 flex items-center mb-5">
                    <input
                        type="text"
                        name="task"
                        id="task"
                        className="bg-gradient-to-t from-gray-50 to-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 shadow-inner drop-shadow-md hover:from-gray-100 hover:to-white focus:bg-gray-50 focus:outline-none focus:ring focus:ring-indigo-400 "
                        placeholder="Enter task"
                        required
                    />
                    <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                        <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                            ⌘K
                        </kbd>
                    </div>
                </div>
            </div>
        </>
    )
}
