import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const FilmsView = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const controller = new AbortController();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));

    // return () => controller.abort();
  }, []);

  if (isLoading) {
    return <small>Loading...</small>;
  } else if (error) {
    return <p>{error}</p>;
  } else
    return (
      <main>
        <h1>Films</h1>
        <Link to={"/new"}>New Film</Link>
        <ul>
          {list.map(({ id, title }) => (
            <li key={id}>{title}</li>
          ))}
        </ul>
      </main>
    );
};
