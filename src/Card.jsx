import deleteIcon from "./assets/delete-icon.svg";
import editIcon from "./assets/edit-icon.svg";
import { useDispatch } from "react-redux";
import { personLike } from "./personSlice";
import axios from "axios";

const Card = ({
  person,
  handleEditPerson,
  handleDeletePerson,
  getPersonById,
}) => {
  /* 
    This component is a card that displays the person's details and a like button
  */
  const dispatch = useDispatch();

  const handleEdit = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmEdit = confirm(`Editing ${person.name}`);
    if (!confirmEdit) return;
    // setFormActive("edit");
    handleEditPerson(person);
  };
  const handleDelete = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm(`Deleting ${person.name}`);
    if (!confirmDelete) return;
    handleDeletePerson(person);
  };
  const handleLike = () => {
    // setLikes(likes + 1);
    // dispatch(personLike({ id: person.id, option: "like" }));
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/profiles/${person.id}/like`
      )
      .then((res) => {
        console.log(res.data);
        getPersonById(person.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDislike = () => {
    axios
      .patch(
        `${process.env.REACT_APP_BACKEND_URL}/api/profiles/${person.id}/dislike`
      )
      .then((res) => {
        console.log(res.data);
        getPersonById(person.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    // The bootstrap classes are referred from ChatGPT
    <div
      style={{
        backgroundColor: person.favoriteColor,
      }}
      className="text-white fs-4 p-4 rounded-4 w-auto d-flex justify-content-between"
    >
      <div className="m-0">
        <p className="m-0 cursor-default">Name: {person.name}</p>
        <p className="m-0">Favorite Color: {person.favoriteColorName}</p>
        <p className="m-0">Favorite Food: {person.favoriteFood}</p>
      </div>
      <div className="d-flex flex-column justify-content-between align-items-between gap-2 p-0 m-0 ">
        <div className="d-flex justify-content-end gap-2">
          <img
            src={editIcon}
            onClick={handleEdit}
            alt="edit"
            width={24}
            className="pointer "
          />
          <img
            src={deleteIcon}
            onClick={handleDelete}
            alt="delete"
            width={24}
            className="pointer "
          />
        </div>
        <div className="d-flex gap-2">
          <button
            onClick={handleLike}
            className="bg-light text-black px-3 p-1 rounded-pill"
          >
            Like ({person.likes})
          </button>
          <button
            onClick={handleDislike}
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
