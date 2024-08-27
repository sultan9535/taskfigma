import { useEffect, useState } from "react";
import axios from "axios";
import "./card.css"

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setData(res.data); 
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="card">
      {data.map((item, index) => (
        <div className="cards" key={index}>
            <img src="" alt="" />
          <h1>{item.name}</h1>
          <p>{item.email}</p>
          <p>{item.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;