import { fetchPhotos, fetchVideo } from "./api/MediaAPI";

const App = () => {
  return (
    <div className="h-screen w-full bg-gray-900 text-white">
      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={async () => {
          const data = await fetchPhotos("cat");
          console.log(data.results);
        }}
      >
        Get Photos
      </button>
      <button
        className="bg-green-400 px-4 py-2 m-5"
        onClick={async () => {
          const data = await fetchVideo("cat");
          console.log(data.videos);
        }}
      >
        Get Video
      </button>
    </div>
  );
};

export default App;
