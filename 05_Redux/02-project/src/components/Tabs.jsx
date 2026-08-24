import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";
const Tabs = () => {
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  const tabs = ["photos", "videos"];
  return (
    <div className="flex gap-10 p-10 items-center justify-center">
      {tabs.map(function (elem, idx) {
        return (
          <button
            className={`${(activeTab == elem ? "bg-blue-600" : "bg-gray-600")} cursor-pointer active:scale-95 px-5 py-2 rounded uppercse`}
            key={idx}
            onClick={() => {
              dispatch(setActiveTabs(elem));
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
