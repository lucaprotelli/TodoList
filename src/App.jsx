import React from "react"
import TodoList from "./components/StackedList"
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                <TodoList />
            </div>
        </div>
    )
}

export default App
