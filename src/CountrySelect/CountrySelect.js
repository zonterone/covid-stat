import React from "react";
import { TextField } from "@material-ui/core/";
import { Autocomplete } from "@material-ui/lab";

function CountrySelect(props) {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={props.data}
      style={{
        maxWidth: "400px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "50px",
      }}
      onChange={props.onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose country"
          variant="outlined"
          value=""
        />
      )}
    />
  );
}

export default CountrySelect;
