import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostForm from './components/PostForm';
import Post from './components/Post';
import DeleteConfirmation from './components/deleteConfirmation';
import CreateBlogConfirmation from './components/CreateBlogConfimation';

// install these files
// npm install react-redux
// npm i react-hot-toast


const App = () => {
  const posts = useSelector((state) => state.posts);
  const [description,setDescription] = useState('')
  const [title,settitle] = useState("")
  const [createpost,setcreatepost] = useState(false);
  const [deleteBox,setDeleteBox]= useState({show:false,id:null});
  const [createBlogBox,setCreateBlogBox]= useState(false);
  
  
  return (
    <div className='flex items-center justify-center h-screen overflow-scroll'>
      <div className={` max-w-[880px] w-10/12 mx-auto h-full mt-8 `}>
      
      <h1 className="text-3xl text-green-700 font-bold mb-4">Supreme Blogs</h1>
      {
        createpost ? 
        <PostForm setcreatepost={setcreatepost} setCreateBlogBox={setCreateBlogBox} title={title} description={description} 
        setDescription={setDescription} settitle={settitle} /> : 
        <div className='bg-gray-200 border border-gray-400 p-2 rounded-md mb-4 hover:bg-gray-300 duration-100 '>
          <button className='bg-blue-300 border border-black p-1 rounded-lg hover:bg-blue-400 '
         onClick={()=>setcreatepost(true)}> Write a Blog</button></div>
        
      }
      <div className="mt-4">
      {posts.map((post) => (
        
          <Post 
           setDeleteBox={setDeleteBox} 
          deleteBox={deleteBox}
           key={post.id} post={post}/>
        ))}
      </div>
        
     
    </div>
          {/* deletebox */}
          <div className={`absolute top-0 left-0 w-screen h-full bg-black opacity-70 ${deleteBox.show ? " scale-100":" scale-0"}` }
          onClick={()=>setDeleteBox({show:false,id:null})}
          >
          </div>
          <div className={`absolute duration-100 z-10 ${deleteBox.show ? "scale-100":"scale-0"}`}> <DeleteConfirmation setDeleteBo={setDeleteBox} postid={deleteBox.id} /></div>
          
          {/* createBlogBox */}
          <div className={`absolute top-0 left-0 w-screen h-full bg-black opacity-70 ${createBlogBox ? " scale-100":" scale-0"}` }
          onClick={()=>setCreateBlogBox(false)}
          >
          </div>
          <div className={`absolute duration-100 z-10 ${createBlogBox ? "scale-100":"scale-0"}`}> <CreateBlogConfirmation setcreatepost={setcreatepost} setCreateBlogBox={setCreateBlogBox} title={title} description={description}
          settitle={settitle} setDescription={setDescription} /></div>
    </div>
   
  );
};

export default App;
