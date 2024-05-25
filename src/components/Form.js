import React, { useState } from "react";

export const Form = ({ createTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTodo(value);
    setValue("");
  };

  return (
    <form
      className="mb-4 font-primary w-full flex justify-center items-center "
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="outline-none bg transparent border border-gray-500 p-4 w-[300px]
        text-black rounded placeholder:text-gray-300"
        placeholder="what task do you have"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button className="bg-gray-700 border-none p-2 text-white cursor-pointer rounded ml-2">
        Add Task
      </button>
    </form>
  );
};
