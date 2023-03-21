import NavBar from "./Component/NavBar";

const products = [
  {
    id: 1,
    title: "html",
    category: "frontend",
    createdAt: "2021-11-03",
  },
  {
    id: 2,
    title: "css",
    category: "frontend",
    createdAt: "2021-10-01",
  },
  {
    id: 3,
    title: "php",
    category: "backend",
    createdAt: "2022-01-01",
  },
  {
    id: 4,
    title: "node.js",
    category: "backend",
    createdAt: "2022-04-03",
  },
];

const categories = [
  {
    id: 1,
    title: "frontend",
    description: "frontEnd applications",
    createdAt: "2021-03-02",
  },
  {
    id: 1,
    title: "backend",
    description: "backEnd applications",
    createdAt: "2022-08-03",
  },
];

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
