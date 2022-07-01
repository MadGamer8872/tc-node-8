import React from "react";
import { APIService } from "../services/API.service";

export const PeopleView = (props) => {
  const [people, setPeople] = React.useState([]);

  const fetchPeople = async () => {
    let data = await APIService.getList("people");
    if (data) setPeople(data);
  };

  React.useEffect(() => {
    fetchPeople();
  }, []);

  return (
    <main>
      <h1>People</h1>
      <div className="container">
        {people.map(({ id, name, gender, age }) => (
          <div key={id} className="card">
            <h3>{name}</h3>
            <ul>
              <li>{gender}</li>
              <li>{age}</li>
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
};
