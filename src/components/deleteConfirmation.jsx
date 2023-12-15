import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/slices/postsSlices';
import toast from 'react-hot-toast';
import { MyContext } from '../context/appcontext';
function DeleteConfirmation() {
  const dispatch = useDispatch();

  const {setDeleteBox,deleteBox} = useContext(MyContext)

  function confirmHandler(){
    dispatch(deletePost(deleteBox.id));
    setDeleteBox({show:false,id:null})
    toast("Deleted!",{
      style:{
        border: "3px solid red",
        fontWeight : 800,
        color: "red"
      },
      icon: "📛"
    })
  }

  return (
    <div className='hover:bg-slate-100 p-8 rounded-[35px] flex flex-col gap-4 border-4 border-black bg-white ' >
        <p>do you want to delete it permanently?</p>
        <div className='flex justify-around'>
          <button 
          onClick={()=>setDeleteBox({show:false,id:null})}
           className='border rounded-2xl border-black hover:bg-slate-300 p-1'>No, go back</button>
          <button
          onClick={confirmHandler}
          
           className='border border-black hover:bg-slate-300 rounded-2xl p-1'>Yes,delete it</button>
        </div>
    </div>
  )
}

export default DeleteConfirmation
