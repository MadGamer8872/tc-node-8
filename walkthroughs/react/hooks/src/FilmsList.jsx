import { useState, useEffect } from "react";

export const FilmsList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => {
        setList(films);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) return <span>Loading Films...</span>;

  return (
    <ul>
      {list.map((film) => (
        <li key={film.id}>{film.title}</li>
      ))}
    </ul>
  );
};
