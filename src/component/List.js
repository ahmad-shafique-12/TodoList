import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const List = ({todoList,remove,update}) => {
 
    var abc= todoList.map((e,i)=>{
        return(<>
             <div className=" border w-[400px] flex justify-between">
             {e}
        <div className="w-max flex border gap-5">
          <p onClick={()=>remove(i)} className="text-2xl cursor-pointer">
            <MdOutlineDelete />
          </p>
          <p onClick={()=>update(i)} className="text-2xl cursor-pointer">
            <FaEdit />
          </p>
        </div>
      </div>
        </>)
    })
  return (
     
    <>
    {abc}
    </>
  );
};
export default List;
