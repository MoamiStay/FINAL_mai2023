import { useState, useEffect } from "react";

const usePostApi = (url, userData) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setData(userData);
    const postData = async () => {
      try {
        setIsLoading(true);
        const postData = {
          method: "POST",
          headers: {
            "content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        };
        const response = await fetch(url, postData);
        console.log(response);
        const json = await response.json();
        console.log(json);
        setIsError(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    postData();
  }, [url]);
  return { data, isLoading, isError };
};

export default usePostApi;
