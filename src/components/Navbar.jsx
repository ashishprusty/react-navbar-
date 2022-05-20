import React from "react";


const Navbar = (props) => {
  return (
    <div>
      <div className="container">
        <h1 className="logoname">Logobakery</h1>
        <ul className="navlink">
          {props.itemlink.map((el) => (
            <li>
              <a href="">{el}</a>
            </li>
          ))}
        </ul>
        <button className="btn-1">{props.buttoname}</button>
      </div>
    </div>
  );
};

export default Navbar;
