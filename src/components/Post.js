import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {editPost } from '../redux/slices/postsSlices';
import toast from 'react-hot-toast';

function Post({post,setDeleteBox}) {
    
    const dispatch = useDispatch() ;
    const [evereditted,seteveredited] = useState(false);
    const [isEditting,setIsEditing] = useState(false);
    const [EditedDescription,setEditedDescription] = useState(post.description);
    function SaveEditHandler(){
            if(post.description !== EditedDescription && EditedDescription !==""){

            seteveredited(true)
           dispatch(editPost({id:post.id,newDescription:EditedDescription}))
           toast("Edited!",{
            icon : "✍",
            style : {
                border : "1px solid black",
               
            }
           });
           setIsEditing(false)
        }
        else if(post.description === EditedDescription){
            setIsEditing(false)
        }
        else{
            toast('Fill Something in Description to Save', {
                icon: '⚠',
                style: {
                   border: "2px solid black"
                }
              })
        }
           
        }
    function cancelHandler(){
        setIsEditing(false);
        setEditedDescription(post.description);
    }
        

    return (
        <div className={`bg-gray-200  p-2 flex flex-col rounded-md mb-4 hover:bg-gray-300 duration-100 ${ isEditting ? "border-4 border-black":"border border-gray-400"}`}>
                <div className='flex justify-around'>
                <p>Post: {post.id}</p> 

                {
                 isEditting ? (<div className='space-x-2'><button onClick={cancelHandler} className='border border-black hover:bg-slate-400 rounded-xl duration-75 p-[2px]'>Cancel</button>
                <button onClick={SaveEditHandler} className='border border-black  hover:bg-slate-400 rounded-xl duration-75 p-[2px] font-bold'>Save</button></div>)
                :
                ( <div className='space-x-2'><button onClick={() => setDeleteBox({ show: true, id: post.id })} className='border border-black hover:bg-slate-400 rounded-xl duration-75 p-[2px]'>Delete</button>
                <button onClick={()=>setIsEditing(true)} className='border border-black hover:bg-slate-400 rounded-xl duration-75 p-[2px]'>Edit</button></div>)
                }
                </div>

                <h1 className='text-3xl text-center font-bold text-red-700'>{post.title}</h1>
                
                {isEditting ? (<textarea value={EditedDescription}
                className='w-4/5 text-xl bg-gray-100 border border-gray-400 rounded-md p-1 ml-1'
                rows={3}
                onChange={(e)=>setEditedDescription(e.target.value) }
                ></textarea>)
                :
                (<p className=' p-1 pl-2 text-xl' style={ {whiteSpace : "pre-line"}}>{post.description} 
                {evereditted? (<span className='text-sm text-gray-600'>(edited)</span>) : (<div></div>)}
                </p>)}
                <p className="text-gray-700 text-sm mt-2">{post.timestamp}</p>
        </div>
      )
    }
export default Post
