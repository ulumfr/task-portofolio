import React from "react";
import { FaShare } from "react-icons/fa";

const CardProject = (props) => {
  return (
    <div className="shadow-md rounded-[10px] overflow-hidden h-full border-2 border-primary-color">
      <img
        src={props.imgPath}
        alt="project-image"
        draggable="false"
        className="h-64 w-full object-cover border-b-2 border-primary-color"
      />
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-title-color">{props.title}</h2>
          <a
            href={props.projectLink}
            className="text-primary-color hover:text-hover-first text-xl"
          >
            <FaShare />
          </a>
        </div>
        <p className="text-[13px] text-text-color-light pb-5">{props.sub}</p>
        <p className="text-sm font-medium text-justify text-text-color-light">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default CardProject;
