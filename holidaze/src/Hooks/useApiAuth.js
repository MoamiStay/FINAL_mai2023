import { useState, useEffect } from "react";

const useApiAuth = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("authenticate");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          // Handle error
        }
      } catch (error) {
        console.log(error);
      } finally {
        console.log("done");
      }
    };

    getData();
  }, [url]);

  return { data, isLoading, isError };
};

export default useApiAuth;
