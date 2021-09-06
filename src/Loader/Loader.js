import React from "react";
import { CircularProgress } from "@material-ui/core";

import style from "./loader.module.css";

function Loader(params) {
  return (
    <div className={style.loader}>
      <CircularProgress />
    </div>
  );
}

export default Loader;
