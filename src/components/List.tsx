import React from 'react'
// import {wordtype} from "./Types"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

interface listinet {
handleDelete:(id:number)=>void,
handleEdit:(id:number)=>void,
id:number,
word:string,
isedit:boolean
}
 const List:React.FC<listinet> = ({handleDelete, handleEdit, word, isedit, id}) => {
    // const {word, isedit, id} = wordtype
  return (
    <ul className="w-full">
    <li className='w-full flex flex-row items-center'>
      <div className='w-10/12 text-center'>
      {word}
      </div>
        <div className='w-1/6 flex flex-row items-center space-x-3'>
        <button onClick={()=>handleDelete(id)}  ><MdDelete className='text-red-400' /></button>
        <button onClick={()=>handleEdit(id)}><FaEdit  className={isedit?"text-green-600 text-lg":"text-green-200 text-lg"} /></button>
        </div>
    </li>

    </ul>
  )
}

export default List