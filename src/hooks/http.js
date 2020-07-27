import { useState, useEffect } from "react";
import axios from "axios";

const useHttp = (url, dependecies) => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    axios.get(url).then((res) => {
      setFetchedData(res.data);
    });
  }, [url, dependecies]);
  return [fetchedData];
};

export default useHttp;
