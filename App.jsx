import { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-100' style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center top-5 inset-x-0 px-5">
          <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white px-3 py-2 rounded-3xl'>

            <button onClick={()=>setColor("red")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"red"}}>Red</button>

            <button onClick={()=>setColor("green")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"green"}}>Green</button>

            <button onClick={()=>setColor("purple")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"purple"}}>Purple</button>

            <button onClick={()=>setColor("yellow")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"yellow"}}>Yellow</button>

            <button onClick={()=>setColor("white")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"white"}}>White</button>

            <button onClick={()=>setColor("silver")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"silver"}}>Silver</button>

            <button onClick={()=>setColor("pink")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"pink"}}>Pink</button>

            <button onClick={()=>setColor("violet")} 
            className='outline-none px-10 py-1 rounded-full text-black shadow-lg' 
            style={{backgroundColor:"violet"}}>Violet</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
