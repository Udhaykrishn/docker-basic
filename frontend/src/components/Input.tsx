import React from "react";

type InputProps = {
    type:"text" | "number";
    placeholder:string;
    name:string;
    setInputData:React.Dispatch<React.SetStateAction<string | undefined>>;
    value:string;
}

const Input:React.FC<InputProps> = ({
    type,
    placeholder,
    name,
    setInputData,
    value
}:InputProps)=>{
    return(
        <>
            <input type={type}
            placeholder={placeholder}
            name={name}
            onChange={(e)=>setInputData(e.target.value)}
            value={value || ""}
            
            />
        </>
    )
}

export default Input
