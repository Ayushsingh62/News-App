import React from 'react'

const Form = () => {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-3">
        Search Any News On The Planet
      </h1>
      <form className="w-full">
        <input
          type="text"
          className="border p-2  w-full md:w-3/4 my-3 md:rounded-l-lg placeholder:text-sm focus:outline-sky-200"
          placeholder="Enter Any Topic."
          required
        />
        <button className="bg-sky-500 py-2 px-4 text-white font-bold w-full md:w-1/4 md:rounded-r-lg hover:bg-sky-700 duration-200">
          Search News
        </button>
      </form>

    </div>
  )
}

export default Form
