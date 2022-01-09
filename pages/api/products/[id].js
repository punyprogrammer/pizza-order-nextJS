import dbConnect from "../../../utils/connectDB";
import Pizza from "../../../models/Pizza";
export default async function handler(req, res) {
  const { method, query: {id} } = req;
  console.log(id);
  dbConnect();
  if (method === "GET") {
    try {
      const pizza = await Pizza.findById(id);
      res.status(200).json(pizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      const pizza = await Pizza.findByIdAndDelete(id);
      res.status(201).json(pizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const pizza = await Pizza.findByIdAndDelete(id);
      res.status(201).json(pizza);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
