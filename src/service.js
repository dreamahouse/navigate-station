import axios from "axios";

const getQuestionData = async (id) => {
  const url = `/api/questons/${id}`;
  const data = await axios.get(url);
  return data;
};
