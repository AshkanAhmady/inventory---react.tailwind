import { useEffect, useState } from "react";
import CategoryForm from "./Component/CategoryForm";
import Filter from "./Component/Filter";
import NavBar from "./Component/NavBar";
import ProductForm from "./Component/ProductForm";
import ProductList from "./Component/ProductList";

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
  const [filteredProducts, setFilteredProducts] = useState();
  const [sort, setSort] = useState("latest");
  const [searchValue, setSearchValue] = useState("");

  // this coding help us to control all of the filters (EASIEST)
  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = dateSort(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue]);

  const dateSort = (array) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  };

  const filterSearchTitle = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(searchValue));
  };

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductForm setProducts={setProducts} categories={categories} />
          {products.length ? (
            <>
              <Filter
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                sort={sort}
                setSort={setSort}
              />
              <ProductList
                products={filteredProducts}
                setProducts={setProducts}
              />
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
