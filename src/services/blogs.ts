// import axios from "axios";
import blogs from "@/data/blogs";

async function get(page: string = '1', perPage = 6) {
  // const BASE_URL = `https://dev.to/api/articles?username=buenno01&per_page=${perPage}`;
  // const pageQuery = page ? `&page=${page}` : '';

  // const { data, status } = await axios.get(BASE_URL + pageQuery + queryParam);

  // if (status !== 200) {
  //   throw new Error('An error occurred while fetching the blogs.');
  // }

  return blogs;
}

const blogService = {
  get
}

export default blogService;