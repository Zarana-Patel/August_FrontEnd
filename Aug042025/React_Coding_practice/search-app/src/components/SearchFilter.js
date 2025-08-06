import React,{useState} from "react";

const SearchFilter =({products})=>{
    let [searchTerm,setSearchTerm]= useState('');
    let filterlist = products.filter((product)=>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
        <div>
            <label name="search">
                <input type="text" placeholder="search term" name="search" onChange={(e)=>setSearchTerm(e.target.value)}/></label>
                <ul>
                    {filterlist.map((product)=>(
                            <li key={product.id}>{product.name}</li>
                    ))}
                </ul>
        </div>
    )
}
export default SearchFilter;