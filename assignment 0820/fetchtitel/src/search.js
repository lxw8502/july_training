import React, {useState, useEffect, useRef} from "react";
import axios from "axios"

export default function Search() {
    const [id, setId] = useState("");
    const [user, setUser] = useState(null);
    const inputRef = useRef();
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res)=>{
                if(id !== ""){
                    setUser(res.data);
                }
            })
    }, [id])

    function handleClick(){
        setId(inputRef.current.value);
    }
    return (
        <div>
            <input type="text" ref={inputRef}></input>
            <button onClick={handleClick}>Search</button>
            <br/>
            <p>{user ? user.title: ""}</p>  
        </div>
    )
}
