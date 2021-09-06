import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core/";

import CountrySelect from "./CountrySelect/CountrySelect";
import Data from "./Data/Data";
import Loader from "./Loader/Loader";

function App() {
  const url = "https://covid-api.mmediagroup.fr/v1/";

  const [loader, setLoader] = useState(true);
  const [data, setData] = useState("");
  const [dataVaccinated, setDataVaccinated] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  function onError(params) {
    alert("impossible to get data");
    console.log(params);
  }

  useEffect(() => {
    Promise.all([
      fetch(url + "cases")
        .then((resp) => resp.json())
        .then((resp) => {
          const arr = [];
          for (const key in resp) {
            arr.push(key);
          }
          setCountriesList(arr);
          setData(resp);
        }),
      fetch(url + "vaccines")
        .then((resp) => resp.json())
        .then((resp) => {
          setDataVaccinated(resp);
        }),
    ])
      .catch(onError)
      .finally(() => setLoader(false));
  }, []);

  if (loader) {
    return <Loader></Loader>;
  } else {
    return (
      <Container>
        <CountrySelect
          data={countriesList}
          onChange={(event, newValue) => {
            setSelectedCountry(newValue);
            console.log(newValue);
          }}
        ></CountrySelect>
        <Data
          selectedCountry={selectedCountry}
          data={data}
          dataVaccinated={dataVaccinated}
        ></Data>
      </Container>
    );
  }
}

export default App;
