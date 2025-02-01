import axios from "axios";

async function get() {
  const { data, status } = await axios.get('https://dev.to/api/articles?username=buenno01');

  if (status !== 200) {
    throw new Error('An error occurred while fetching the blogs.');
  }

  return data;
}

const blogService = {
  get
}

export default blogService;