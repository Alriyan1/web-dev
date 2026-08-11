const App = () => {
  function btnclick() {
    console.log("clicked");
  }

  function mEnter() {
    console.log("Mouse entered");
  }

  function inputchanging(val) {
    console.log(val);
  }

  return (
    <div>
      <button onMouseEnter={mEnter} onClick={btnclick}>
        Click Here
      </button>
      <button
        onClick={function () {
          console.log("aise bhi chl skta hu");
        }}
      >
        mjhe bhi dbao
      </button>
      <br />
      <input
        onChange={function (elem) {
          inputchanging(elem.target.value);
        }}
        type="text"
        placeholder="Enter Name"
      />
    </div>
  );
};

export default App;
