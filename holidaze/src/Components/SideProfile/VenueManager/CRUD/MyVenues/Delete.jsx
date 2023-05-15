const deleteUrl = "/api/v1/holidaze/venues/"; 

    const DeleteMe = (item) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const token = localStorage.getItem("authenticate");

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(deleteUrl + id, {
          method: "DELETE",
          headers: {
            "Authorization": `Bearer ${token}`,
          },
        });
        if (response.ok) {
            console.log("it was deleted");
        } else {
          console.log("it was not deleted..");
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
    }

    export default DeleteMe;