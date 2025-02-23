import { Container } from "react-bootstrap";
import "./App.css";
import Card from "./Card";

function App() {
  const people = [
    { name: "Nikhil Devarakonda", favoriteColor: "red", favoriteFood: "Mandi" },
    {
      name: "Chaitanya Alwal",
      favoriteColor: "black",
      favoriteFood: "ice-cream",
    },
    {
      name: "Varun Reddy Karra",
      favoriteColor: "blue",
      favoriteFood: "Biryani",
    },
    {
      name: "Mehak Seth",
      favoriteColor: "sky blue",
      favoriteFood: "Naan",
    },
  ];
  return (
    <div className="home">
      <div className="py-4 d-flex flex-column align-items-center">
        <h1 className="text-center bg-dark bg-opacity-75 text-white p-1 rounded-4 heading">
          My Classmates
        </h1>
        <Container className="w-50 d-flex flex-column gap-3">
          {people.map((person, index) => (
            <Card key={index} person={person} />
          ))}
        </Container>
      </div>
    </div>
  );
}

export default App;
