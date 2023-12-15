import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from '../redux/slices/postsSlices';
import toast from 'react-hot-toast';
import { MyContext } from '../context/appcontext';
function CreateBlogConfirmation() {
  const dispatch = useDispatch();

  const {setCreateBlogBox,setcreatepost,title,description,settitle,setDescription} = useContext(MyContext);

  function confirmHandler(){
    dispatch(addPost({title:title,description:description}));
    settitle("")
    setDescription("")
    setcreatepost(false);
    toast("Posted!",{
      icon: "✔",
      style : {
          border : "4px solid green",
          fontWeight : "800",
          color: "green"
      },
      duration: 4000
     })
    setCreateBlogBox(false)
  }

  return (
    <div className='hover:bg-slate-100 p-8 rounded-[35px] flex flex-col gap-4 border-4 border-black bg-white ' >
        <p>Do you want to Post this Blog ?</p>
        <div className='flex justify-around'>
          <button 
          onClick={()=>setCreateBlogBox(false)}
           className='border rounded-2xl border-black hover:bg-slate-300 p-1'>No, go back</button>
          <button
          onClick={confirmHandler} 
          
           className='border border-black hover:bg-slate-300 rounded-2xl p-1'>Yes,Create Blog</button>
        </div>
    </div>
  )
}

export default CreateBlogConfirmation
