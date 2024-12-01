import { Router } from "express";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.send("Hello Users");
});

// this route will ask for a name in the headers
usersRouter.get("/headerTest", (req, res) => {
  const { name } = req.headers;
  res.send(name);
});

// this route will ask for a password in the params
usersRouter.delete("/:password", (req, res) => {
  const { password } = req.params;
  if (password === "1234") {
    res.status(403).send("Password is correct");
  } else {
    res.send("Password is incorrect");
  }
});

export default usersRouter;
