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
    <Container className="my-4">
      <h1 className="text-center">My Classmates</h1>
      <Container className="w-50 d-flex flex-column gap-3">
        {people.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </Container>
    </Container>
  );
}

export default App;
