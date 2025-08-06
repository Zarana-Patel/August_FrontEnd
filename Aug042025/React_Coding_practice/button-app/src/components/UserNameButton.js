import React, { useState } from "react";

const UserNameButton = ()=>{
    let [name,setName] = useState('');
    let [inputValue,setInputValue]= useState('');
   
    function handleClick(e){
        e.preventDefault();
        setName(inputValue);
    }
    return(
        <div className="form-wrapper">
            <form id="form-container">
                <div className="form-row">
                <label htmlFor="username" className="form-label">UserName:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="e.g Alice"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
            
                </div>
                <button onClick={handleClick}>Click</button>
            </form>
            {name && (
            <h2 style={{ textAlign: "center", marginTop: "1rem", color: "#333" }}>
            Hello, {name}!
          </h2>
        )}
        </div>
       
    )
}

export default UserNameButton;