import { Container } from "react-bootstrap";
import "./App.css";
import Card from "./Card";
import { useEffect, useState } from "react";
import CreatePerson from "./createPerson";
import { useSelector, useDispatch } from "react-redux";
import { addPerson, deletePerson, editPerson, people } from "./personSlice";
import TableView from "./DataGrid";
import axios from "axios";

function App() {
  const [peopleData, setPeopleData] = useState(useSelector(people));
  const dispatch = useDispatch();
  const [formActive, setFormActive] = useState("");
  const [view, setView] = useState("table");
  const [personForm, setPersonForm] = useState({
    name: "",
    favoriteColor: "",
    favoriteFood: "",
    id: "",
  });

  const resetPersonForm = () => {
    setPersonForm({
      name: "",
      favoriteColor: "",
      favoriteFood: "",
      id: "",
    });
  };

  const handleCreatePerson = () => {
    console.log(personForm);
    const stringRegex = /^[a-zA-Z\s]+$/;
    const colorRegex = /^#[0-9a-f]+$/;
    if (
      !stringRegex.test(personForm.name) ||
      !colorRegex.test(personForm.favoriteColor) ||
      !stringRegex.test(personForm.favoriteFood)
    ) {
      console.log(stringRegex.test(personForm.name));
      console.log(colorRegex.test(personForm.favoriteColor));
      console.log(stringRegex.test(personForm.favoriteFood));
      alert(
        "Please enter valid input and please choose a color. Only uppercase and lowercase alphabets are allowed for name and food."
      );
      return;
    }

    if (formActive === "create") {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/profiles/`, personForm)
        .then((response) => {
          const data = response.data;
          console.log(data);
          // setPeopleData(data);
          getAllProfilesFromBackend();
        });
      // dispatch(addPerson(personForm));
      resetPersonForm();

      setFormActive("");
    } else {
      // dispatch(editPerson(personForm));
      axios
        .put(
          `${process.env.REACT_APP_BACKEND_URL}/api/profiles/${personForm.id}`,
          personForm
        )
        .then((response) => {
          const data = response.data;
          console.log(data);
          // setPeopleData(data);
          getAllProfilesFromBackend();
        });
      resetPersonForm();
      setFormActive("");
    }
  };

  const handleCancel = () => {
    resetPersonForm();
    setFormActive("");
  };

  const handleEditPerson = (person) => {
    setFormActive("edit");
    setPersonForm((prev) => {
      return {
        ...prev,
        name: person.name,
        favoriteColor: person.favoriteColor,
        favoriteFood: person.favoriteFood,
        id: person.id,
      };
    });
  };
  const handleDeletePerson = (person) => {
    dispatch(deletePerson(person));
  };
  useEffect(() => {
    // Fetch data from backend api using axios
    getAllProfilesFromBackend();
  }, []);
  useEffect(() => {
    if (formActive) {
      window.scrollTo(0, 0);
    }
  }, [formActive]);

  const getAllProfilesFromBackend = (person) => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/profiles/`)
      .then((response) => {
        const data = response.data;
        console.log(data);
        setPeopleData(data);
      });
  };

  return (
    <div className="home">
      <div className="w-100 py-4 d-flex flex-column align-items-center">
        <div className="w-50 px-4 bg-dark bg-opacity-80 rounded-5 my-2 text-center d-flex justify-content-between align-items-center ">
          <h1 className="text-white p-1 rounded-4">Student Connect</h1>
          <h4
            onClick={() => {
              if (view === "tile") {
                setView("table");
              } else {
                setView("tile");
              }
            }}
            className="text-white pointer p-1 rounded-4"
          >
            {view === "tile" ? "Table view" : "Tile view"}
          </h4>
          <h4
            onClick={() => {
              if (formActive === "create") {
                setFormActive("");
              } else {
                setFormActive("create");
              }
            }}
            className="text-white pointer  p-1 rounded-4"
          >
            {"+ Create Person"}
          </h4>
        </div>

        {formActive && (
          <Container className="w-50 p-4">
            <CreatePerson
              handleCancel={handleCancel}
              handleCreatePerson={handleCreatePerson}
              personForm={personForm}
              setPersonForm={setPersonForm}
              formType={formActive}
            />
          </Container>
        )}
        {view === "tile" && (
          <Container className="w-50 d-flex flex-column gap-3">
            {peopleData &&
              peopleData.map((person, index) => (
                <Card
                  key={index}
                  person={person}
                  handleEditPerson={handleEditPerson}
                  handleDeletePerson={handleDeletePerson}
                />
              ))}
          </Container>
        )}
        {view === "table" && <TableView peopleData={peopleData} />}
      </div>
    </div>
  );
}

export default App;
