import React from "react";
import { Card } from "@material-tailwind/react";

export default function DialogWithImage(props) {
  return (
    <>
      <Card
        className="w-full cursor-pointer overflow-hidden transition-opacity hover:opacity-90 mt-5"
      >
        <img
          alt="nature"
          className="h-20 w-full object-cover object-center"
          src={props.image}
        />
      </Card>
    </>
  );
}
