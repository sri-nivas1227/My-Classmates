import logo from './logo.svg';
import './App.css';

function App() {
  const people = [
    { name: "Varshith Bachu", favoriteColor: "red", favoriteFood: "Mandi" },
    {
      name: "Aakanksha Rangdal",
      favoriteColor: "Lavendar",
      favoriteFood: "ice-cream",
    },
    { name: "Bharat Vamsy", favoriteColor: "blue", favoriteFood: "Biryani" },
    {
      name: "Srinivas Mekala",
      favoriteColor: "sky blue",
      favoriteFood: "Dosa",
    },
  ];
  return (
    <Container className="my-4">
      <Container className="w-50 d-flex flex-column gap-3">
        {people.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </Container>
    </Container>
  );
}

export default App;
