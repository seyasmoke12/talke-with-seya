import { createContext, useState } from "react";
import run from "../Config/gemini";




export const Context = createContext()

const ContextProvider = (props)=>{

    const[input,setInput] = useState('');
    const[recentPrompt,setRecentPrompt] = useState("");
    const[prevPrompts,setprevPrompts] = useState([]);
    const[showResult,setShowResult] = useState(false);
    const[loading,SetLoding] = useState(false);
    const[resultData,setResultData] = useState("");



    const delayPara = (index,nextWord)=>{
        setTimeout(() => {
            setResultData(prev=>prev+nextWord)
        }, 75*index);
    }
    const newChat =()=>{
        SetLoding(false)
        setShowResult(false)
    }

    const onSent = async(prompt)=>{
        setResultData("")
        SetLoding(true)
        setShowResult(true)
        let response
        if(prompt !== undefined){
            response = await run(prompt)
            setRecentPrompt(prompt)
        }else{
            setprevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }
        
        let resposeArray = response.split("**")
        let theData="";
        for(let i =0; i < resposeArray.length; i++)
        {
            if(i  === 0 || i%2 !== 1){
                theData += resposeArray[i]
            }else{
                theData += '<b>' + resposeArray[i] + "</b>"
            }
        }
        let theData2 = theData.split('*').join('</br>');
        let newResposneArray = theData2.split(" ");
        for(let i=0; i<newResposneArray.length; i++)
        {
            const nextWord = newResposneArray[i]
            delayPara(i,nextWord+" ")
        }
        SetLoding(false)
        setInput("")
    }
    const contextValue={
        prevPrompts,
        resultData,
        recentPrompt,
        setprevPrompts,
        onSent,
        setRecentPrompt,
        setShowResult,
        showResult,
        loading,
        input,
        setInput,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider