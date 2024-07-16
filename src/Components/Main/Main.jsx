import React, { useContext } from 'react'
import User from "./user.jpg";
import "./Main.css"
import { FaRegCompass } from "react-icons/fa6";
import { IoBulbOutline } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";
import { FaCode } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { MdKeyboardVoice } from "react-icons/md";
import { RiSendPlaneFill } from "react-icons/ri";
import { Context } from '../../context/Context';
import { ImCompass2 } from "react-icons/im";
import { HashLoader } from "react-spinners"
function Main() {


const{prevPrompts,setprevPrompts,newChat,resultData,showResult,onSent,recentPrompt,setShowResult,loading,input,setInput} =useContext(Context)


return (
    <div className='manu'>
        <div className="nav">
            <p>talk with <span>Seya</span></p>
            <img src={User} alt=""/>
        </div>
        <div className='main-container'>
            {!showResult ? 
                <>
                    <div className="greet">
                        <p><span>ጤናይስጥልኝ, አለቃ</span></p>
                        <p>ዛሬ በምን ልንረዳዎት ይፈልጋሉ..?</p>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <p>Suggest beautiful places to see on an upcoming road trip</p>
                            <FaRegCompass size={70} />
                        </div>
                        <div className="card">
                            <p>Briefly summarize this concept: urban planning</p>
                            <IoBulbOutline size={70} />
                        </div>
                        <div className="card">
                            <p>Brainstorm team bonding activities for our work retreat</p>
                            <RiMessage2Fill size={70} />
                        </div>
                        <div className="card">
                            <p>Improve the readability of the following code</p>
                            <FaCode size={70} />
                        </div>
                    </div>
                </>
                : <div className='result'>
                <div className="result-title">
                    <img src={User} alt=""/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <ImCompass2 size={35}/>
                    {loading?
                    <div className="loding">
                        <HashLoader />
                    </div>
                    :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                }
                    
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='ሀሳቦትን እዚህ ጋር ያስፍሩ..'/>
                    <div>
                        <GrGallery size={18}/>
                        <MdKeyboardVoice size={18}/>
                        
                        <RiSendPlaneFill onClick={()=>onSent()} size={18}/>
                        
                    </div>
                </div>
                <p className="bottom-info">
                   ለተየቁት ጥያቄ ተገቢውን ምላሽ እና የእርሶን privacy እናስጠብቃለን::
                </p>
            </div>
        </div>
    </div>
)
}

export default Main