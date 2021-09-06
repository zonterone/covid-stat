import { Container } from "@material-ui/core";
import React from "react";

import Cases from "./Cases/Cases";
import Vaccines from "./Vaccines/Vaccines";

import divideNumber from "../helpers/divideNumber";

import style from "./Data.module.css";

function Data(props) {
  const selectedCountry = props.selectedCountry;
  const data = props.data[selectedCountry];
  const dataVaccines = props.dataVaccinated[selectedCountry];

  const capitalCity = data?.All.capital_city || "No data";
  const population = data?.All.population || "No data";

  if (data) {
    return (
      <Container
        style={{
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "50px",
        }}
      >
        <h2>{selectedCountry}</h2>
        <p>Capital city: {capitalCity}</p>
        <p>Population: {divideNumber(population)} </p>
        <Cases
          population={population === "No data" ? false : population}
          dataCases={data}
        ></Cases>
        <Vaccines
          population={population === "No data" ? false : population}
          dataVaccines={dataVaccines}
        ></Vaccines>
      </Container>
    );
  } else
    return (
      <p className={style.description}>
        To&nbsp;see the data start entering the country name or&nbsp;select from
        the list
      </p>
    );
}

export default Data;
