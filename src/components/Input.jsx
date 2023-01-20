import React, { useState } from "react"

export default function Input() {
    const [open, setOpen] = useState(false)

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
                <label
                    htmlFor="task"
                    class="block mb-2 text-md font-medium text-gray-900 dark:text-white"
                >
                    Task:
                </label>
                <div className="relative mt-1 flex items-center">
                    <input
                        type="text"
                        name="task"
                        id="task"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
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
