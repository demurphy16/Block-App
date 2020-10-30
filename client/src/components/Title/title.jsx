import React, {useState} from "react"

function Title(props) {
  const [title, setTitle] = useState("Crown Heights")
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Title