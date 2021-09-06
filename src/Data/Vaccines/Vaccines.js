import React from "react";

import divideNumber from "../../helpers/divideNumber";

function Vaccines(props) {
  const population = props.population;
  const dataVaccines = props.dataVaccines;
  const partiallyVaccinated = dataVaccines?.All.people_partially_vaccinated;
  const percentPartiallyVaccinated =
    ((partiallyVaccinated / population) * 100).toFixed(2) + "%";

  const fullyVaccinated = dataVaccines?.All.people_vaccinated;
  const percentFullyVaccinated =
    ((fullyVaccinated / population) * 100).toFixed(2) + "%";

  if (dataVaccines) {
    return (
      <React.Fragment>
        <p>
          Fully Vaccinated: {divideNumber(fullyVaccinated)}
          {population ? " - " + percentFullyVaccinated : null}
        </p>
        <p>
          Partially Vaccinated: {divideNumber(partiallyVaccinated)}
          {population ? " - " + percentPartiallyVaccinated : null}
        </p>
      </React.Fragment>
    );
  } else return null;
}

export default Vaccines;
