import { useState, useEffect } from "react";

const useApiAuth = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(true); // Assume there is an error initially
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
          setIsError(false); // Set isError to false if the request succeeds
        } else {
          setIsError(true); // Set isError to true if the request fails
        }
      } catch (error) {
        console.log(error);
        setIsError(true); // Set isError to true if an error occurs
      } finally {
        setIsLoading(false); // Always set isLoading to false after the request is complete
      }
    };

    getData();
  }, [url, token]);

  return { data, isLoading, isError };
};

export default useApiAuth;
