import React from "react";
import CountryCard from "./CountryCard";
import countriesData from "../countriesData";
const CountryList = () => {
  return (
    <div className="row w-100">
      {countriesData.map(function (e, index) {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
            <CountryCard
              flags={e.flags.svg}
              name={e.name.common}
              population={e.population.toLocaleString()}
              region={e.region}
              capital={e.capital}
            />
          </div>
        );
      })}
    </div>
  );
};

export default CountryList;
