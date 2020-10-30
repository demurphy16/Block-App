import React, {useState} from "react"

function Title(props) {
  const [title, setTitle] = useState("Crown Heights")
  return (
    <div>
      <h1>{title}</h1>

      <form>
        <input
        name="Search"
        placeholder="Explore other neighborhoods"
        type="text"
        />
      </form>

    </div>
  )
}

export default Title