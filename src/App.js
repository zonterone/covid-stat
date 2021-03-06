import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core/";

import Header from "./Header/Header";
import CountrySelect from "./CountrySelect/CountrySelect";
import Data from "./Data/Data";
import Loader from "./Loader/Loader";
import Footer from "./Footer/Footer";

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
    return (
      <React.Fragment>
        <Header></Header>
        <Loader></Loader>
        <Footer></Footer>
      </React.Fragment>
    );
  } else {
    return (
      <>
        <Header></Header>
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
        <Footer></Footer>
      </>
    );
  }
}

export default App;
