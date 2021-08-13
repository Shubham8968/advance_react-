import React, { useState, useEffect } from "react";
import { data } from "../data";
import { Link, useParams } from "react-router-dom";

function Person() {
  console.log(useParams());
  const [name, setName] = useState("Deafult State");
  const { id } = useParams();
  useEffect(() => {
    const newPerson = data.find((person) => person.id === parseInt(id));
    setName(newPerson.name);
  }, []);
  return (
    <>
      <div>
        <hi>{name}</hi>
        <Link to="/people" className="btn">
          Back to people
        </Link>
      </div>
    </>
  );
}

export default Person;
