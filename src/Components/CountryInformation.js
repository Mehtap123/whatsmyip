import { useState, useEffect } from "react";

const CountryInformation = ({ data }) => {
  const [country, setCountry] = useState();
  const [error, setError] = useState();
  console.log(data.location.country);
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha?codes=${data.location.country}`)
      .then((res) => res.json())
      .then((data) => setCountry(data[0]))
      .catch((error) => setError(error));
  }, [data]);

  console.log(country);

  return (
    <>
      <div>
        {country ? (
          <div>
            <p>The country you are located in is {country.altSpellings[1]}</p>
            <p>{country.population} people live here.</p>
            <p>
              The capital of {country.altSpellings[1]} is {country.capital}
            </p>
            <p>
              People are driving on the {country.car.side} side of the street
            </p>
            <p>The flag look like this:</p>
            <img
              src={country.flags.png}
              alt={`flag of ${country.altSpellings[1]}`}
            />
          </div>
        ) : (
          "Loading...."
        )}
        {error && (
          <h2>
            Oh No! Something went wrong! This is the error: {error.message}
          </h2>
        )}
      </div>
    </>
  );
};

export default CountryInformation;
