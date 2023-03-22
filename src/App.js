import { useState } from "react";
import CategoryForm from "./Component/CategoryForm";
import NavBar from "./Component/NavBar";
import ProductForm from "./Component/ProductForm";

// const products = [
//   {
//     id: 1,
//     title: "html",
//     category: "frontend",
//     createdAt: "2021-11-03",
//   },
//   {
//     id: 2,
//     title: "css",
//     category: "frontend",
//     createdAt: "2021-10-01",
//   },
//   {
//     id: 3,
//     title: "php",
//     category: "backend",
//     createdAt: "2022-01-01",
//   },
//   {
//     id: 4,
//     title: "node.js",
//     category: "backend",
//     createdAt: "2022-04-03",
//   },
// ];

// const categories = [
//   {
//     id: 1,
//     title: "frontend",
//     description: "frontEnd applications",
//     createdAt: "2021-03-02",
//   },
//   {
//     id: 1,
//     title: "backend",
//     description: "backEnd applications",
//     createdAt: "2022-08-03",
//   },
// ];

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  console.log(products)

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductForm setProducts={setProducts} categories={categories} />
        </div>
      </div>
    </div>
  );
}

export default App;
