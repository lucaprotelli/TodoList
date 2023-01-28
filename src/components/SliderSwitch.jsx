import { useState } from "react"
import { Switch } from "@headlessui/react"

function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
}

export default function SliderSwitch() {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className={classNames(
                enabled
                    ? "bg-neutral-800 border-neutral-400 hover:border-white"
                    : "bg-gray-50 border-gray-300 hover:border-gray-600",
                "mx-3 md:mx-5 inline-flex items-center h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border transition-colors duration-500 ease-in-out focus:outline-none"
            )}
        >
            <span className="sr-only">Use setting</span>
            <span
                className={classNames(
                    enabled
                        ? "translate-x-5 bg-black"
                        : "translate-x-0 bg-white",
                    "pointer-events-none inline-block h-5 w-5 transform rounded-full shadow ring-0 transition duration-200 ease-in-out"
                )}
            >
                <span
                    className={classNames(
                        enabled
                            ? "opacity-0 ease-out duration-100"
                            : "opacity-100 ease-in duration-200",
                        "inset-0 flex h-full w-full items-center justify-center transition-opacity"
                    )}
                    aria-hidden="true"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4 text-gray-900"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        />
                    </svg>
                </span>
                <span
                    className={classNames(
                        enabled
                            ? "opacity-100 ease-in duration-200"
                            : "opacity-0 ease-out duration-100",
                        "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                    )}
                    aria-hidden="true"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-3 h-3 text-white"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                        />
                    </svg>
                </span>
            </span>
        </Switch>
    )
}
