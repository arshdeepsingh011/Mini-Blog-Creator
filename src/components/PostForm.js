import React, { useContext } from 'react'

import toast from 'react-hot-toast';
import { MyContext } from '../context/appcontext';

function PostForm() {
  
  const {setcreatepost,setCreateBlogBox,title,description,settitle,setDescription} = useContext(MyContext);

  function clearFormHandler(){
    if(title!=="" || description!==""){settitle("");
    setDescription("")
    toast("Cleared!",{
      icon: "🌪",
      style: {
        border : "1px solid black"
      },
      duration: 1000
    })}
  }
  function submithandler(e){
    
       e.preventDefault();
       if(title!==""){
       
      if(description!==""){

        setCreateBlogBox(true);

    }
      else{
        toast('Fill the Description Please', {
          icon: '❓',
          style: {
             border: "2px solid black"
          }
        });
      }
     }

     else{
      toast('Fill the Title Please', {
        icon: '❓',
        style: {
          border: "2px solid black"
       }
      });
     }
    
    
  }
  return (
    <div>
      <form
       onSubmit={submithandler}
        className='bg-gray-200 border border-gray-400 p-2 flex flex-col rounded-md mb-4 hover:bg-gray-300 duration-100 gap-2'>

      <label
      className='text-xl font-bold'
       htmlFor='title'>Title: <span className='text-gray-500 font-normal text-lg'>(You cannot change it later, maximum character: 30)</span>
       <input type='text' 
      id='title'
      placeholder="Title..."
      maxLength={30}
      value={title}
      onChange={(e)=>settitle(e.target.value)}
      className='w-4/5 font-normal bg-gray-100 border border-gray-400 rounded-md p-1'></input>
      </label>
      

      <label className='text-xl font-bold'
       htmlFor='description'> <span>Description: </span>
       <textarea rows={5} className='w-4/5 font-normal bg-gray-100 border border-gray-400 rounded-md p-1 block'
      value={description}
      placeholder="Description..."
      id='description'
      onChange={(e)=>setDescription(e.target.value)}>
      </textarea>
      </label>
      

      <div className='w-4/5 flex justify-evenly'>
      <button type='submit' className='bg-blue-300 border border-black p-1 rounded-lg hover:bg-blue-400'>Upload Blog</button>

      <div className='flex gap-2' >
      <button className=' bg-blue-300 border border-black p-1 rounded-lg hover:bg-blue-400'
      onClick={()=>setcreatepost(false)}>Cancel</button>
      <button type='reset' className=' bg-blue-300 border border-black p-1 rounded-lg hover:bg-blue-400'
      onClick={clearFormHandler}>Clear</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default PostForm