import "./App.css";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import SelectMenu from "./components/SelectMenu";
import CountryList from "./CountryList";
import { useState } from "react";
function App() {
  const [query, setQuery] = useState("");
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          <div className="col-md offset-md-1 px-2 py-2">
            <SearchBar setQuery={setQuery} />
          </div>
          <div className="col-md offset-md-1 px-2 py-2">
            <SelectMenu />
          </div>
        </div>
      </div>
      <div className="country-cards mt-5">
        <CountryList query={query} />
      </div>
    </>
  );
}

export default App;
