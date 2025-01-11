import "./App.css";
import Navbar from "./components/Navbar"; // Importing Navbar
import TextForm from "./components/TextForm"; // Importing Navbar

function App() {
  return (
    <>
      <div className="container">
        <Navbar navTitle="TextUtils" /> {/* Displaying Navbar */}
      </div>
      <div className="container" id="form">
        <TextForm heading="Enter the text to analyze" />{" "}
        {/* Displaying Navbar */}
      </div>
    </>
  );
}

export default App;
