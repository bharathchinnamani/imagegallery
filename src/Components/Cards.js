import React from 'react'

const Cards = ({image}) => {
    let tags=image.tags.split(",");
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img className="w-full" alt="" src={image.webformatURL}/>
      <div className="px-6 py-4">
        <div className="font-bold dark:text-teal-400 text-purple-800 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li><strong>Views: </strong>{image.views}</li>
          <li><strong>Downloads: </strong>{image.downloads}</li>
          <li><strong>Likes: </strong>{image.likes}</li>
        </ul>
      </div>
      <div className="px-6 py-4">
      {tags.map((tag,ind)=>{
        return (
        <span key={ind} className="inline-block rounded-full bg-gray-200 text-sm font-semibold px-3 py-1 text-gray-700 mr-2">#{tag}</span>)
    })}

        </div>

   

    </div>
  )
}

export default Cards;