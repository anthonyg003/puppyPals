import { puppyList } from "./data.js";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupID, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupID);

  console.log("pup found --->", featuredPup);
  return (
    <>
      <div>
        <h1>Puppies</h1>
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => {
                setFeatPupId(puppy.id);
              }}
              key={puppy.id}
            >
              <img src="./images/pup.png" alt="" />
              {puppy.name}
            </p>
          );
        })}
        {featPupID && (
          <div className="pupInfo">
            <h2 className="feat">{featuredPup.name}</h2>
            <ul>
              <li className="feat">Age: {featuredPup.age}</li>
              <li className="feat">Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
