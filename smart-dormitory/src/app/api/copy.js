import nc from "next-connect";
import cors from "cors";

const handler = nc()
  // use connect based middleware
  .use(cors())
  .post(async (req, res) => {
    const response = await fetch('http://localhost:8080/auth', config);
    res.json(response);
  });

export default handler;