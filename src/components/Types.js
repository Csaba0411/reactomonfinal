import React from "react";
import useHttp from "../hooks/http";

export default function Types() {
  //   const [types, setTypes] = useState([]);

  //   useEffect(() => {
  //     axios
  //       .get("https://pokeapi.co/api/v2/type")
  //       .then((res) => setTypes(res.data.results));
  //   }, []);
  const [fetchedData] = useHttp("https://pokeapi.co/api/v2/type", []);

  return (
    <div>
      {fetchedData ? (
        fetchedData.results.map((type) => <h3>{type.name}</h3>)
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
