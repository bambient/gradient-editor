import axios from "axios";
import Cors from 'cors'
import initMiddleware from '../../utils/cors';

const cors = initMiddleware(Cors({methods: ['GET', 'POST', 'OPTIONS'],}));

export default async function handler(req, res) {
  await cors(req, res);
  const url = "http://text-processing.com/api/sentiment/";
  const params = new URLSearchParams();
  params.append("text", req.body.text);

  try {
    const data = await axios.post(url, params).then(res => res.data);
    return res.status(200).json(data)
  } catch(err) {
    console.log(err);
    res.status(400).json("error")
  }
}
