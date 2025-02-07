import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <NavLink
          to="/demo"
          className="underline cursor-pointer text-blue-500 font-bold"
        >
          Demo page
        </NavLink>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
