import React from "react";

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div>
      <button onClick={() => console.log("hi")}>Click</button>{" "}
    </div>
  );
};
