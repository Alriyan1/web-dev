import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]);

  let printUserData = (
    <h3 className="text-gray-400 text-xs">No User Available</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank">
            <div className="h-40 w-44 overflow-hidden rounded-xl ">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black overflow-auto h-screen p-4 text-white">
      {/* <button
        onClick={getData}
        className="bg-green-500 active:scale-95 mb-3 px-5 py-2 rounded text-white"
      >
        Get data
      </button> */}
      <div className="flex flex-wrap gap-2">{printUserData}</div>
      <div className="flex justify-center items-center gap-6 p-4">
        <button
          onClick={() => {
            if (index>1){

              setIndex(index - 1);
            }
            console.log('prev clicked')

          }}
          className="bg-amber-300 rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold"
        >
          Prev
        </button>
        <h3>Page {index}</h3>
        <button
          onClick={() => {
            setIndex(index + 1);
            console.log('Next clicked')
          }}
          className="bg-amber-300 rounded text-sm cursor-pointer active:scale-95 px-4 py-2 font-semibold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
