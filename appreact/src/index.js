import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Post";

const root = ReactDOM.createRoot(document.getElementById("root"));

const users = [
  {
    id: 1,
    name: "Ryan Ray",
    image: "https://robohash.org/user 1",
  },
  {
    id: 2,
    name: "Joe",
    image: "https://robohash.org/user 2",
  },
];

root.render(
  <>
    {users.map((user, i) => {
      return <h1 key = {i}>{user.name}</h1>;
    })}
  </>
);
