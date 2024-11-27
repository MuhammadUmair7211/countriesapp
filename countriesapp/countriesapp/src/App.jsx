import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountryList from "./CountryList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md offset-md-1 px-2 py-2">
            <SearchBar />
          </div>
          <div className="col-md offset-md-1 px-2 py-2">
            <SelectMenu />
          </div>
        </div>
      </div>
      <div className="country-cards mt-5">
        <CountryList />
      </div>
    </>
  );
}

export default App;
