import React,{useState,} from "react";
import {wordtype} from "../components/Types"
import List from "@/components/List";
export default function Home() {
  const [data, Setdata] = useState<wordtype[]>([])
  const [currentword, Setcurrentword] = useState<string>("")
  const [issdit, Setisedit] = useState(false)
  const [currentobj, Setcurrentobj] = useState<wordtype|null>(null)
  const handleWord =(e:React.ChangeEvent<HTMLInputElement>)=>{
   Setcurrentword(e.target.value)
  }

  const handleClick = (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault()
    if(data.length == 0){
      const obj  = {id:1, word:currentword, isedit:false }
      Setdata([
        ...data,
        obj
      ])
      Setcurrentword("")
    }else{
      const newId =data[data.length - 1].id + 1;
      const obj  = {id:newId, word:currentword, isedit:false }
      Setdata([
        ...data,
        obj
      ])
      Setcurrentword("")
    }
  }

 const handleDelete =(id:number)=>{
const  ansdata = data.filter((item)=>item.id != id)
Setdata(ansdata)
 }

 const handleEdit = (id:number)=>{
   const datafind = data.find((item)=>item.id == id)
   if(datafind){
    Setisedit(true)
    Setcurrentobj(datafind)
    Setcurrentword(datafind.word)
   }
 }


 const handleClickEdit = (e:React.MouseEvent<HTMLButtonElement>)=>{
  e.preventDefault()
 const editdata = data.map((item)=>{
    return item.id == currentobj?.id?{...item, word:currentword}:item
  })
  Setdata(editdata)
  Setcurrentword("")
 }
  return (
<div className="w-full flex items-center justify-center">

  <section className="w-2/4 rounded-[8px] border  shadow-md mt-20">
  <div className="w-full">
    <span className="w-full text-center text-blue-500 font-serif flex items-center justify-center font-semibold">Todo</span>

    <div className="w-full flex items-center justify-center mt-2">
      <input type="text" value={currentword} onChange={(e)=>handleWord(e)} className="w-11/12 py-2 px-2 rounded-md border m-auto" />
    </div>


    <section className="w-11/12 m-auto mt-5">
    {issdit?
      <button onClick={(e)=>handleClickEdit(e)} className="w-full py-3  bg-green-500 text-white rounded-md">
      Edit
    </button>
  : 
  <button onClick={(e)=>handleClick(e)} className="w-full py-3  bg-blue-500 text-white rounded-md">
      submit
    </button>
  
  }
  
    </section>

    <div className="w-full mt-4">
      {data.map((item:wordtype, index)=>{
           return(<List key={index} {...item} handleDelete={handleDelete} handleEdit={handleEdit} />)
      })}
   
    </div>

  </div>
  </section>

</div>
  );
}
