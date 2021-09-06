import React from "react";

import divideNumber from "../../helpers/divideNumber";

function Cases(props) {
  const population = props.population;
  const dataCases = props.dataCases;
  const confirmed = dataCases?.All.confirmed;
  const percentConfirmed = ((confirmed / population) * 100).toFixed(2);

  const deaths = dataCases?.All.deaths;
  const percentDeaths = ((deaths / population) * 100).toFixed(2);

  if (population) {
    return (
      <React.Fragment>
        <p>
          Confirmed: {divideNumber(confirmed)} - {percentConfirmed}%
        </p>
        <p>
          Death's: {divideNumber(deaths)} - {percentDeaths}%
        </p>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Confirmed: {confirmed}</p>
        <p>Death's: {deaths}</p>
      </React.Fragment>
    );
  }
}

export default Cases;
