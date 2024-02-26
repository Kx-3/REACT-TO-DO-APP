import { useState } from "react"
import NavBar from "./components/NavBar"


const Notes = (index) => {
  const [editable, setEditable] = useState(true)
  const [isDone, setIsDone] = useState(false)
  const [value, setValue] = useState("")

  const handleEditClick = () => {
    setEditable(prevEditable => !prevEditable)
  }

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  const handleDone = () => {
    setIsDone(prevIsDone => !prevIsDone)
  }


  return (
    <div className='flex'>
      <div className="font-poppins text-slate-50">
        {editable ?
          <textarea className="w-96 h-20 text-xl border p-2 resize-none bg-ebony-500 text-slate-50 rounded-xl mr-2" type='text' value={value} onChange={handleInput}>

          </textarea> :
          isDone ?
            <div onClick={handleDone} className="bg-gray-500 w-96 h-20 text-xl border p-2 text-wrap flex gap-5 rounded-xl text-gray-200 line-through cursor-pointer mr-2">
              {value}
            </div> :
            <div onClick={handleDone} className="bg-ebony-500 w-96 h-20 text-xl border p-2 text-wrap flex gap-5 rounded-xl cursor-pointer mr-2">
              {value}
            </div>}
      </div>
      {editable ? <button className="w-16 h-8 bg-ebony-600 font-poppins rounded-xl text-slate-50" onClick={handleEditClick}>Save</button> : <button className="w-16 h-8 bg-ebony-600 font-poppins rounded-xl text-slate-50" onClick={handleEditClick}>Edit</button>}
    </div>
  )
}

const App = () => {
  const [items, setItems] = useState([])

  const handleDelete = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const handleAdd = () => {
    const newItem = `Item${items.length + 1}`
    setItems([...items, newItem])
  }
  return (
    <>
      <NavBar></NavBar>
      <div className='flex w-full gap-10 justify-center flex-col items-center p-5'>
        {items.map((index) => (
          <div className="flex gap-3" key={index}>
            <Notes></Notes>
            <button onClick={handleDelete} className="w-16 h-8 bg-slate-50 font-poppins text-ebony-600 border border-ebony-600 rounded-xl">Delete</button>
          </div>
        ))}
        <button onClick={handleAdd} className='w-16 h-16 rounded-full text-3xl bg-ebony-800 text-slate-100 font-poppins'>+</button>
      </div>
    </>
  )
}

export default App
