import React, { useState } from "react";
import { MyButton } from "./Components/Button/Button";
import { Count } from "./Components/Count/Count"
import "./app.css"

export const App = () => {

  const [click, setclick] = useState(0)


  const sumClick = () => {

    setclick(click + 1)
  }

  const resetClick = () => {
    setclick(0)
  }

  return (

    <div className="app-container">
      <Count container={"count-container"} clicks={click} />
      <div className="buttons">
        <MyButton type={"contained"} text={"Click"} color={"success"} click={sumClick} />
        <MyButton type={"contained"} text={"Reset"} color={"error"} click={resetClick} />
      </div>
    </div>
  )

}