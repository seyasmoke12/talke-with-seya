import React, { useContext, useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { RxQuestionMarkCircled } from "react-icons/rx";
import { FaHistory } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import "./Sidebar.css"
import { Context } from '../../context/Context';
function Sidebar() {

    const[extended,setExtended] = useState(false)
    const{onSent,prevPrompts,newChat,setRecentPrompt} = useContext(Context)
    
const lodePrompt = async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
}

  return (
    <>
    <div className='sidebar'>
        <div className="top">
            <IoMenuSharp onClick={()=>setExtended(prev=>!prev)}  className='menu' size={30}/>
            <div onClick={()=>newChat()} className="new-chat">
                <FaPlus  size={30}/>
                {extended?<p>New Chat</p>:null}
            </div>
            {extended?
            <div className='recent'>
                <p className="recente-title">Recent</p>
                {prevPrompts.map((item,index)=>{
                    return(
                        <div onClick={()=>lodePrompt(item)} className="recent-entry">
                    <LuMessageSquare size={30}/>
                    <p>{item.slice(0,18)}...</p>
                </div>
                    )
                })}
                
            </div>
            :null
        }
            
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <RxQuestionMarkCircled size={30}/>
                {extended?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <FaHistory size={30}/>
                {extended?<p>Activity</p>:null}
                
            </div>
            <div className="bottom-item recent-entry">
                <IoSettingsOutline size={30}/>
                {extended?<p>Settings</p>:null}
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar
