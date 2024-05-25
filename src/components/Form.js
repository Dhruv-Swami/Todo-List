import React, { useState } from "react";

export const Form = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };

  return (
    <form className="mb-4 font-primary w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none bg transparent border border-gray-500 p-4 w-[300px]
        text-black mb-8 rounded placeholder:text-gray-300"
        placeholder="what task do you have"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">
        Add Task
      </button>
    </form>
  );
};
