/** @format */
import React from "react";

function Main() {
  const user = {
    name: "jesse",
    sex: "male",
    profession: "developer",
  };

  const students = [
    {
      name: "jesse",
      class: "class 1",
    },
    {
      name: "miracle",
      class: "class 2",
    },
  ];

  return (
    <div>
      hello {user.name ? user.name : "stranger"} your profession is{" "}
      {user.profession ? user.profession : "unknown"}
      {/* students */}
      <div>
        {students.map((student) => (
          <div>
            <h3>{student.name}</h3>
            <p>student's class:{student.class}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
