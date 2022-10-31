import React from "react";


const Header=({darkTheme,setDarkTheme})=>{
    return (
    <div className="p-5 pb-0 flex flex-wrap justify-between items-center  border-b dark:border-gray-700 border-gray-200">
            <div className="text-center mx-auto">
            <p className="text-xl dark:bg-teal-400 bg-purple-800 text-white font-bold py-1 px-2 rounded  dark:text-gray-900 ">My image Gallery</p>
            
            </div>
            
        <div className="text-center mx-auto"><button type="button" onClick={()=>{setDarkTheme(!darkTheme)}} className="text-white font-bold dark:bg-teal-400 bg-purple-800  border rounded-full px-2 py-1 hover:shadow-lg ">
            {darkTheme? "Light💡" : "Dark🌙"}
        </button></div>
        
        
        
    </div>);
}

export default Header;