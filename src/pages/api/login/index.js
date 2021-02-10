import cookie from "cookie";
import User from "@/models/user";

export default (req, res) => {
  console.log("asdfasdfsdf", req.method);
  switch (req.method) {
    case "GET":
      console.log("GET REQUEST INIATED");
      return res.status(200).json({ text: "do some auth stuff" });
    case "POST":
      // do some auth stuff
      console.log("POST REQUEST INIATED");

      return res.status(200).json({ text: "do some auth stuff" });
    default:
      return res.status(400).json({ error: true });
  }
};
