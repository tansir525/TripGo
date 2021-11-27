import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/">
        <div className="btn btn-warning">Go Back</div>
      </Link>
    </div>
  );
};

export default NotFound;
