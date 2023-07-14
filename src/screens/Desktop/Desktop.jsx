import PropTypes from "prop-types";
import React, { useReducer } from "react";
import "./style.css";

export const Group = ({ property1, className, onSubmit }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  const handleClick = () => {
    onSubmit();
  };

  return (
    <div
      className={`group ${state.property1} ${className}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={handleClick}
    >
      <div className="talk-to-an-expert">TALK TO AN EXPERT</div>
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
    default:
      return state;
  }
}

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  className: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
};
