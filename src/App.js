import React,{useState,useEffect} from "react";
import './App.css';
import Cards from "./Components/Cards";
import Search from "./Components/Search";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
function App() {
  const[darkTheme,setDarkTheme]=useState(true);
  const [images,setImages]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  const [term,setTerm]=useState("");

  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&safesearch=${true}&editors_choice=${true}`)
    .then((response)=>{return response.json()})
    .then((data)=>{setImages(data.hits);setIsLoading(false);})
    .catch(err=>console.log(err))
  },[term])

  

  return (
    <div className={darkTheme ? "dark" :""}>
    <div className="mx-auto bg-gray-200 dark:bg-gray-700 dark:text-gray-100 min-h-screen min-w-screen">
      <Header darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Search searchText={(text)=>setTerm(text)}/>
      {isLoading ? <h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1> :
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image)=>{return (<Cards key={image.id} image={image}/>)})}
      </div>}
      <Footer/>
    </div>
    </div>
    
  );
}

export default App;
