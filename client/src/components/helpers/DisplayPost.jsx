import React from "react";
import { Card } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function DisplayPost(props) {
  const navigate = useNavigate();
  const handleOpen = () => {
    navigate(`/post/${props.postNumber}`);
  };
  return (
    <>
      <Card
        className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90 mt-5"
        onClick={handleOpen}
      >
        <img
          alt="nature"
          className="h-auto w-full object-cover object-center"
          src={props.image}
        />
      </Card>
    </>
  );
}