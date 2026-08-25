const ResultCard = ({ item }) => {
  const addToCollection = (item) => {
    const oldData = JSON.parse(localStorage.getItem('collection')) || []
    const newData = [...oldData,item]

    localStorage.setItem('collection',JSON.stringify(newData))
  }
  return (
    <div className="w-[18vw] relative h-[18vw] bg-white rounded overflow-hidden">
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="block h-full"
      >
        {item.type == "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type == "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          ></video>
        ) : (
          ""
        )}
      </a>
      <div
        id="bottom"
        className="flex justify-between gap-3 items-center w-full px-4 py-6 absolute bottom-0 text-white"
      >
        <h5 className="text-lg h-14 capitalize overflow-hidden">
          {item.title}
        </h5>
        <button onClick={()=>{
          addToCollection(item)
        }} className="bg-indigo-600 cursor-pointer text-white rounded px-3 py-1 font-medium">
          Save
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
