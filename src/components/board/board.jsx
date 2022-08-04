import { useState } from "react";

function Board() {
  const [name, setName] = useState("");

  return (
    <div classname="">
      <div className="flex h-64 items-center px-6 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <div class="mt-1 border-b border-gray-300 focus-within:border-indigo-600">
          <label>Board Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Work"
            id="name"
            class="block w-full p-5 text center rounded-lg bg-gray-50 focus:border-indigo-600 focus:ring-0 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default Board;
