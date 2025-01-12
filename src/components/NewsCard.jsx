import React from 'react'

const NewsCard = () => {
  return (
    <div className=" flex flex-col md:flex-row p-3 rounded-sm border border-sky-200">
    <div className="w-full md:w-2/5 flex items-center justify-center">
      <img
        src="https://img.freepik.com/premium-photo/breaking-news-text-design_1283504-3023.jpg"
        className="h-56 w-56"
        alt=""
      />
    </div>
    <div className="w-full md:w-3/5">
      <h1 className="font-bold my-2 text-2xl">Aaj Ki Taza Khabar </h1>
      <p className="text-sm text-gray-500 max-w-sm my-2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
        omnis vitae, esse aliquid corrupti mollitia? Quae, optio id quasi
        eaque saepe et quis totam, deserunt, maxime dolorem velit doloribus
        voluptatibus.
      </p>
      <p className="text-gray-400 text-xs my-2">Author : NDTV NEWS</p>
      <p className="text-gray-400 text-xs my-2">Date : 09-Jan-2024</p>
      <button className="float-end bg-green-500 py-1.5 px-5 rounded-md text-white font-bold hover:bg-green-600 duration-200">
        Read More
      </button>
    </div>
  </div>

  )
}

export default NewsCard
