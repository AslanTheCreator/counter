import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container text-center mx-auto h-screen text-4xl text-white font-bold">
      <div className="h-full flex flex-col items-center justify-center">
        <h1 className="mb-5 text-gray-500">Счетчик:</h1>
        <div className="">
          <div className="text-8xl text-black">{count}</div>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setCount(count - 1)}
              className=" text-2xl active:scale-110 p-3 bg-red-500 rounded-xl">
              -Минус
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="text-2xl active:scale-110 p-3 bg-teal-600 rounded-xl">
              Плюс+
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
