import { useCallback, useState,useEffect } from 'react'
import './App.css'

function App() {
 const [set,reset]=useState(10)
 const [char,usechar]=useState(true)
 const [number,usenumber]=useState(true)
 const [password,setpassword]=useState("")
 
   const passwordgen=useCallback(()=>{
    let pass=""
    let gen="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz"
    if(number) gen+="0123456789"
    if(char) gen+="@#$*"
    for(let i=1;i<set;i++)
    {
      let ch= Math.floor(Math.random()*gen.length )
      let a=gen.charAt(ch);
      pass+=a;
    }
    setpassword(pass);

   },[set,char,number,setpassword])
   const copyit=()=>{
      window.navigator.clipboard.writeText(password)
   }

   useEffect(()=>{passwordgen()},[set,char,number,setpassword]);
    
  return (
    <>
     <h1 className=' text-center text-5xl bg-cyan-950 text-white'>PASSWORD GENERATOR</h1>
      <div className='bg-cyan-950 w-full h-screen flex justify-center items-center'>
        <div className=' h-60 w-fit rounded bg-white flex-wrap justify-center items-center' >

             <input type="text" 
             readOnly
               value={password}
               placeholder='Password'
               className=' border-black h-10 w-96 bg-gray-50 m-4'
               
             />
               <div className='flex justify-center items-center m-0'>
          <button
           className=' bg-blue-500 text-white h-10 w-20 rounded-sm m-10'
           onClick={copyit()}
           >Copy</button>
        </div>
             <label htmlFor="">{set}</label>
            <input 
            type="range" 
            className=' m-6'
            min="0"
            max="100"
            value={set}
            onChange={(event)=>{reset(event.target.value)}}
             />
             <label htmlFor="">Number</label>
            <input 
            type="checkbox" 
            className=' m-4' 
            defaultChecked={number}
            onChange={()=>usenumber((prev)=>!prev)}
            
            />
            <label htmlFor="">Character</label>
            <input
             type="checkbox"
             className='m-4'
             defaultChecked={char}
             onChange={()=>usechar((prev)=>!prev)}
             />
           
             
            
        </div>
        
       
      </div>
    </>
  )
}

export default App
