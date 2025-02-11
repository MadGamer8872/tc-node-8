import React from "react";
import { APIService } from "../services/API.service";
import { Loading } from "../shared/Loading";

export const FilmsView = (props) => {
  const [films, setFilms] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchFilms = async () => {
    let data = await APIService.getList("films");
    if (data) setFilms(data);
    setIsLoading(false);
  };

  const getScoreColor = (score) => {
    switch (true) {
      case score >= 85:
        return "success";
      case score >= 70:
        return "warning";
      default:
        return "danger";
    }
  };

  React.useEffect(() => {
    fetchFilms();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className="my-4">
      <h1>Films</h1>
      <div className="form-group">
        <input type="radio" name="sort" id="ascending" />
        <label htmlFor="ascending">A-Z</label>
        <input type="radio" name="sort" id="descending" />
        <label htmlFor="descending">Z-A</label>
        <input type="radio" name="sort" id="rt_score" />
        <label htmlFor="rt_score">RT Score</label>
      </div>
      <div className="row p-4">
        {films.map(
          ({
            id,
            title,
            description,
            release_date,
            original_title,
            rt_score,
          }) => (
            <div key={id} className="card col-sm-4">
              <div className="card-body">
                <h3>{original_title}</h3>
                <small>{title}</small>
                <p>{description}</p>
                <ul>
                  <li>{release_date}</li>
                  <li>
                    <span className={`badge bg-${getScoreColor(rt_score)}`}>
                      {rt_score}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </main>
  );
};
