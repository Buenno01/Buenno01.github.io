import axios from "axios";

async function get(page: string = '1') {
  const BASE_URL = `https://dev.to/api/articles?username=buenno01&per_page=6`;
  const pageQuery = page ? `&page=${page}` : '';

  const { data, status } = await axios.get(BASE_URL + pageQuery);

  if (status !== 200) {
    throw new Error('An error occurred while fetching the blogs.');
  }

  return data;
}

async function getTotalPages() {
  const BASE_URL = `https://dev.to/api/articles?username=buenno01`;

  const { data, status } = await axios.get(BASE_URL);

  if (status !== 200) {
    throw new Error('An error occurred while fetching the blogs.');
  }

  return data.length / 6;
}

const blogService = {
  get,
  getTotalPages,
}

export default blogService;