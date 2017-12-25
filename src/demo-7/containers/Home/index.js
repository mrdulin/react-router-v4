import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div>
    <h2>Home</h2>
    <Link
      to={{
        pathname: "/detail/2",
        search: "?sort=name",
        state: { from: "home" }
      }}
    >
      book 2
    </Link>
  </div>
);
