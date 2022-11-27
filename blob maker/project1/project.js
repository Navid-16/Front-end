import React from "react"
import { useState } from "react"
import projectCss from "./project.module.css"

const Project = () => {

  const [heightdiv, setHeight] = useState(100)
  const [widthdiv, setWidth] = useState(100)
  const [topLeftRadius, setTopLeftRadius] = useState(50)
  const [bottomLeftRadius, setBottomleftRadius] = useState(50)
  const [topRightRadius, setTopRightRadius] = useState(50)
  const [bottomRightRadius, setBottomRightRadius] = useState(50)
  const [colorDiv, setColorDiv] = useState("#0075ff")

  let styleDiv = {
    height: `${heightdiv}px`, 
    width: `${widthdiv}px`, 
    borderBottomLeftRadius: `${bottomLeftRadius}% ${bottomLeftRadius}%`,
    borderTopLeftRadius: `${topLeftRadius}% ${topLeftRadius}%`,
    borderBottomRightRadius: `${bottomRightRadius}% ${bottomRightRadius}%`,
    borderTopRightRadius: `${topRightRadius}% ${topRightRadius}%`,
    backgroundColor: colorDiv
}


    const setheight = e => {
     setHeight(e.target.value)
    }

    const setwidth = e => {
        setWidth(e.target.value)
    }

    const changeBottomLeftRadius = e => {
        setBottomleftRadius(e.target.value)
    }

    const changeTopLeftRadius = e => {
        setTopLeftRadius(e.target.value)
        
    }

    const changeBottomRightRadius = e => {
        setBottomRightRadius(e.target.value)
    }

    const changeTopRightRadius = e => {
        setTopRightRadius(e.target.value)
    }

    const changeColor = e => {
        setColorDiv(e.target.value)
    }

    return(
        <div className={projectCss.all}>
        <span className={projectCss.preview}>Preview of project</span>
        <div className={projectCss.container}>

            <div className={projectCss.displaydiv}>
                <div className={projectCss.editable} 
                style={styleDiv}
                >
                </div>
            </div>

            <div className={projectCss.inputsdiv}>
                <div className={projectCss.heightwidth}>
                <div className={projectCss.heightdiv}>
                    <span>Height:</span>
                    <input type="number" 
                    max="260"
                    min="1"
                    value={heightdiv}
                    onChange={setheight}
                    />
                </div>

                <div className={projectCss.widthdiv}>
                    <span>Width:</span>
                    <input type="number"
                    max="590"
                    min="1"
                    value={widthdiv}
                    onChange={setwidth}
                    />
                </div>
                 </div>

                  <div className={projectCss.rangediv}>
                <input type="range" className={projectCss.top} min="0" max="100" step="1" onChange={changeTopLeftRadius}/>
                <input type="range" className={projectCss.right} min="0" max="100" step="1" onChange={changeBottomLeftRadius}/>
                <input type="range" className={projectCss.bottom} min="0" max="100" step="1" onChange={changeTopRightRadius}/>
                <input type="range" className={projectCss.left} min="0" max="100" step="1" onChange={changeBottomRightRadius}/>
                </div>

                <span className={projectCss.borderinfo}>border-radius: {topLeftRadius}% {bottomLeftRadius}% {topRightRadius}% {bottomRightRadius}% | color: {colorDiv}</span>
                <input type="color" onChange={changeColor} value={colorDiv}/>
            </div>
        </div>
        </div>
    )
}

export default Project