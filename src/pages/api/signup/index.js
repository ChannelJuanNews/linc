import cookie from "cookie";
import User from "@/models/user";

export default async (req, res) => {
  console.log("asdfasdfsdf", req.method);
  switch (req.method) {
    case "GET":
      return res.status(400).json({
        error: true,
        error_message: "GET method not supported on this route",
      });
    case "POST":
      const { username, email, password } = req.body;
      let result = await User.signup(username, email, password);
      if (result.error) return res.status(400).json(result);
      else return res.status(200).json();

    default:
      return res.status(400).json({ error: true });
  }
};
