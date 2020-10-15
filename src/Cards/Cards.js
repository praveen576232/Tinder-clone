import "./Cards.css";
import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import db from "../firebase/firebase";

function Cards() {
  const [persons, setPerson] = useState([
   
  ]);

  useEffect(() => {
     db.collection("Tinder").onSnapshot(snapshot => {
         setPerson(
             snapshot.docs.map(doc => ({
                 id:doc.id,
                 data:doc.data()
             }))
         )
     })
  }, [])
  return (
    <div className="cards">
      {persons.map((person) => (
        <TinderCard key={person?.id} className="swipe" preventSwipe={["up", "down"]}>
          <div className="card" style={{ backgroundImage: `url(${person?.data?.img})` }}>
            <h3>{person?.data?.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Cards;
