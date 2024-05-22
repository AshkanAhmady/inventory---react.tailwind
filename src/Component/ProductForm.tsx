import { useState } from "react";
import { CategoriesType, ProductsType } from "../types";

type ProductProps = {
  categories: CategoriesType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

const Product: React.FC<ProductProps> = ({ categories, setProducts }) => {
  const [productFormData, setProductFormData] = useState({
    title: "",
    quantity: "",
    category: "",
  });

  const changeHandler = <T extends HTMLInputElement | HTMLSelectElement>(
    e: React.ChangeEvent<T>
  ) => {
    setProductFormData({ ...productFormData, [e.target.name]: e.target.value });
  };

  const addNewProductHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    setProducts((prevState) => [
      ...prevState,
      {
        ...productFormData,
        createdAt: new Date().toISOString(),
        id: new Date().getTime(),
      },
    ]);
    setProductFormData({
      title: "",
      quantity: "",
      category: "",
    });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gay-y-4">
        <div className="mb-4">
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            onChange={(e) => changeHandler<HTMLInputElement>(e)}
            value={productFormData.title}
            type="text"
            name="title"
            id="product-title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            quantity
          </label>
          <input
            onChange={(e) => changeHandler<HTMLInputElement>(e)}
            value={productFormData.quantity}
            type="number"
            name="quantity"
            id="product-quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-1 text-slate-400">
            category
          </label>
          <select
            onChange={(e) => changeHandler<HTMLSelectElement>(e)}
            value={productFormData.category}
            name="category"
            id="product-category"
            className="bg-transparent text-slate-400
                     rounded-xl w-full"
          >
            <option className="bg-slate-500 text-slate-300">
              select a category
            </option>
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={(e) => addNewProductHandler(e)}
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Product;
