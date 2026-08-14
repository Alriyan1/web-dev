import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(details);

    const copyTask = [...task];
    copyTask.push({ title, details });

    setTask(copyTask);
    setTitle("");
    setDetails("");
    // console.log(copyTask);
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    // console.log(copyTask[idx]);
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div className="min-h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-col lg:w-1/2 gap-4 p-10"
      >
        <h1 className="text-3xl font-bold">Add Notes</h1>
        <input
          className="px-5 py-2 rounded border-2"
          type="text"
          placeholder="Enter Notes Heading"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 py-2 h-30 rounded border-2"
          type="text"
          placeholder="Write Details"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 active:bg-gray-300 text-black px-5 py-2 rounded">
          Add Notes
        </button>
      </form>
      <div className="lg:border-l-2 lg:w-1/2 lg:border-t-0 border-t-2 px-25 py-10">
        <h1 className="text-3xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 overflow-auto">
          {task.map((elem, idx) => {
            return (
              <div
                key={idx}
                className="h-52 w-40 justify-between flex flex-col item-start relative rounded-2xl text-black pt-9 pb-4 px-4 bg-white bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
              >
                <div>
                  <h3 className="leading-tight text-xl font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-4 leading-tight font-medium text-gray-500">
                    {elem.details}
                  </p>
                </div>
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 font-bold bg-red-500 py-1 text-xs rounded text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
