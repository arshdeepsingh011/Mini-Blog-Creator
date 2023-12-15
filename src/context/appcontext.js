import { createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

export function MyContextProvider({children}){

  const [description,setDescription] = useState('')
  const [title,settitle] = useState("")
  const [createpost,setcreatepost] = useState(false);
  const [deleteBox,setDeleteBox]= useState({show:false,id:null});
  const [createBlogBox,setCreateBlogBox]= useState(false);

    const value ={
        description,
        setDescription,
        title,
        settitle,
        createpost,
        setcreatepost,
        deleteBox,
        setDeleteBox,
        createBlogBox,
        setCreateBlogBox
    };

    return <MyContext.Provider value={value}>
        {children}
    </MyContext.Provider>

}