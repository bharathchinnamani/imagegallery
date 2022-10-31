import React,{useState} from 'react'

const Search = ({searchText}) => {
    const[text,setText]=useState("");
    const handler=(event)=>{event.preventDefault();searchText(text);}
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
        <form className="w-full max-w-sm" onSubmit={handler}>
            <div className="flex items-center border-b border-b-2 dark:border-teal-500 border-purple-800 py-2">
                <input onChange={(e)=>setText(e.target.value)}className="font-bold appearance-none bg-transparent border-none w-full text-purple-800 dark:text-teal-500 mr-3 py-1 px-2 leading-light focus:outline-none"
                type="text" placeholder="Search image term ..."/>
                <button className="flex-shrink-0 dark:bg-teal-500 bg-purple-800 hover:bg-purple-500 dark:border-teal-500 border-purple-800 
                text-sm border-4 text-white py-1 px-2 rounded font-bold" type="submit">Search</button>
            </div>
        </form>
    </div>
  )
}

export default Search