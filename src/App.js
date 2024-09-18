import List from "./component/List";

function App() {
  return (
    <div className="bg-white shadow-sm shadow-black md:mx-80 mx-4 md:mt-10 mt-20 pb-10 ">
      <div className="mx-8 ">
        <div className="flex justify-between items-center pt-4">
          <h1 className="text-3xl ">TODO-EASE</h1>
          <img
            src="https://img.freepik.com/free-photo/rag-doll-with-giant-magnifying-glass-question-mark_1156-263.jpg?ga=GA1.1.148381924.1699598539"
            alt=""
            className="h-12 w-12 object-contain"
          />
        </div>
        <hr className="mt-4" />
        <h1 className="text-center text-xl p-2">What needs to be done?</h1>
        <input type="text" className="w-full h-12 border-2 border-blue-200 " />
        <button className="w-full bg-blue-300 mt-2 p-2 font-bold">Add</button>

        <div className="flex mx-6 mt-2 justify-between gap-2 ">
          <button className="border border-blue-200 w-full p-1">All</button>
          <button className="border border-blue-200 w-full p-1"> Active</button>
          <button className="border border-blue-200 w-full p-1">
            Completed
          </button>
        </div>

        <h1 className="font-bold mt-4 mx-6 text-xl">3 tasks remaining</h1>
        <List todo="sleep" />
        <List todo="sleep again" />
        <List todo="sleep again you need it" />
      </div>
    </div>
  );
}

export default App;
