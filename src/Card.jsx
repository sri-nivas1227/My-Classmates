import { useState } from "react";

const Card = ({ person }) => {
  // This component is a card that displays the person's details and a like button

  // The like button increments the likes count when clicked using useState
  const [likes, setLikes] = useState(0);
  return (
    // The bootstrap classes are referred from ChatGPT
    <div className="bg-secondary text-white p-4 rounded-4 w-auto d-flex justify-content-between">
      <div className="m-0">
        <p className="m-0 cursor-default">Name: {person.name}</p>
        <p className="m-0">Favorite Color: {person.favoriteColor}</p>
        <p className="m-0">Favorite Food: {person.favoriteFood}</p>
      </div>
      <div className="d-flex justify-content-end align-items-end p-0 m-0 ">
        <button
          onClick={() => {
            // Increment the likes count when the button is clicked
            setLikes((prev) => prev + 1);
          }}
          className="bg-light text-black px-3 p-1 rounded-pill"
        >
          Like ({likes})
        </button>
      </div>
    </div>
  );
};

export default Card;
