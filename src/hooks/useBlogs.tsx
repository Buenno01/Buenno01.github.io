import { Blog } from "@/@types/Blog";
// import axios from "axios";
import { useEffect, useState } from "react";
import * as data from "@/data/blogs";

function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        // const { data, status } = await axios.get('https://dev.to/api/articles?username=buenno01');

        // if (status !== 200) {
        //   throw new Error('An error occurred while fetching the blogs.');
        // }

        setBlogs(data.default);
        setLoading(false);
      } catch (error) {
        setError(() => {
          if (error instanceof Error) {
            return error.message;
          }
          return 'An error occurred while fetching the blogs.';
        });
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
}

export default useBlogs;