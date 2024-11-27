import React, { useState } from "react";
import CountryCard from "./CountryCard";
import countriesData from "../countriesData";
// eslint-disable-next-line react/prop-types
const CountryList = ({ query }) => {
  return (
    <div className="row w-100">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .map((e, index) => {
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
