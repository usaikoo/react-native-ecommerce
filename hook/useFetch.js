import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://10.0.0.8:3000/api/products");
    //   console.log(response);
      setData(response.data);
      setIsLoading(false);
    } catch (err) {
        console.log(err);
      setError(err);
    }finally{
        setIsLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refresh = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refresh };
};

export default useFetch;
