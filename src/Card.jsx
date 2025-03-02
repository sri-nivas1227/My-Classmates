import { useState } from "react";
import deleteIcon from "./assets/delete-icon.svg";
import editIcon from "./assets/edit-icon.svg";
const Card = ({ person, handleEditPerson, handleDeletePerson }) => {
  // This component is a card that displays the person's details and a like button

  // The like button increments the likes count when clicked using useState
  const [likes, setLikes] = useState(0);

  // The handleEditPerson function is called when the edit icon is clicked
  const handleEdit = () => {
    alert(`Editing ${person.name}`);
    // setFormActive("edit");
    handleEditPerson(person);
  };
  // The handleDeletePerson function is called when the delete icon is clicked
  const handleDelete = () => {
    alert(`Deleting ${person.name}`);
    handleDeletePerson(person);
  };
  return (
    // The bootstrap classes are referred from ChatGPT
    <div className="bg-secondary text-white fs-4 p-4 rounded-4 w-auto d-flex justify-content-between">
      <div className="m-0">
        <p className="m-0 cursor-default">Name: {person.name}</p>
        <p className="m-0">Favorite Color: {person.favoriteColor}</p>
        <p className="m-0">Favorite Food: {person.favoriteFood}</p>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-between gap-2 p-0 m-0 ">
        <div className="d-flex justify-content-end gap-2">
          <img
            src={editIcon}
            onClick={handleEdit}
            alt="edit"
            width={24}
            className="cursor-pointer "
          />
          <img
            src={deleteIcon}
            onClick={handleDelete}
            alt="delete"
            width={24}
            className="cursor-pointer "
          />
        </div>
        <div className="d-flex gap-2">
          <button
            onClick={() => {
              // Increment the likes count when the button is clicked
              setLikes((prev) => prev + 1);
            }}
            className="bg-light text-black px-3 p-1 rounded-pill"
          >
            Like ({likes})
          </button>
          <button
            onClick={() => {
              // Increment the likes count when the button is clicked
              setLikes((prev) => (prev > 0 ? prev - 1 : 0));
            }}
            className="bg-light text-black px-3 p-1 rounded-pill"
          >
            Dislike
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
