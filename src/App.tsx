import { useEffect, useState } from "react";
import CategoryForm from "./Component/CategoryForm";
import Filter from "./Component/Filter";
import NavBar from "./Component/NavBar";
import ProductForm from "./Component/ProductForm";
import ProductList from "./Component/ProductList";
import { CategoriesType, ProductsType } from "./types";

function App() {
  const [categories, setCategories] = useState<CategoriesType>([]);
  const [products, setProducts] = useState<ProductsType>([]);
  const [filteredProducts, setFilteredProducts] = useState<ProductsType>([]);
  const [sort, setSort] = useState<string>("latest");
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  // this coding help us to control all of the filters (EASIEST)
  useEffect(() => {
    let result = products;
    result = filterSearchTitle(result);
    result = filterCategory(result);
    result = dateSort(result);
    setFilteredProducts(result);
  }, [products, sort, searchValue, selectedCategory]);

  const dateSort = (array: ProductsType) => {
    let sortedProducts = [...array];
    return sortedProducts.sort((a, b) => {
      if (sort === "latest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "earliest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
      return 1;
    });
  };

  const filterSearchTitle = (array: ProductsType) =>
    array.filter((p) => p.title.toLowerCase().includes(searchValue));

  const filterCategory = (array: ProductsType) =>
    array.filter((p) => p.category.includes(selectedCategory));

  // save data in localStorage
  useEffect(() => {
    let savedProducts = JSON.parse(localStorage.getItem("products")!) || [];
    let savedCategories = JSON.parse(localStorage.getItem("categories")!) || [];
    setProducts(savedProducts);
    setCategories(savedCategories);
  }, []);

  useEffect(() => {
    categories.length &&
      localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  useEffect(() => {
    products.length &&
      localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  return (
    <div>
      <div className="bg-slate-800 min-h-screen">
        <NavBar products={products} />
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
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                categories={categories}
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
