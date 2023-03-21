import { useState } from "react";

const Category = ({ setCategories }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  });

  const changeHandler = (e) => {
    setCategoryFormData({
      ...categoryFormData,
      [e.target.name]: e.target.value,
    });
  };

  const addNewCategoryHandler = (e) => {
    e.preventDefault();
    setCategories((prevState) => [
      ...prevState,
      { ...categoryFormData, createdAt: new Date().toISOString(), id: new Date().getTime() },
    ]);
    setCategoryFormData({
      title: "",
      description: "",
    });
  };

  return (
    <section>
      <div className={`mb-6 ${!isShowForm && "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>
        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gay-y-4">
          <div className="mb-4">
            <label
              htmlFor="category-title"
              className="block mb-1 text-slate-400"
            >
              title
            </label>
            <input
              onChange={(e) => changeHandler(e)}
              value={categoryFormData.title}
              type="text"
              name="title"
              id="category-title"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              onChange={(e) => changeHandler(e)}
              value={categoryFormData.description}
              rows="3"
              type="text"
              name="description"
              id="category-description"
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
            />
          </div>
          <div className="flex w-full gap-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsShowForm(!isShowForm);
              }}
              className="bg-transparent flex flex-1 justify-center items-center p-2 rounded-xl border border-slate-500 text-slate-400"
            >
              Cancel
            </button>
            <button
              onClick={(e) => addNewCategoryHandler(e)}
              className="bg-slate-500 flex flex-1 justify-center items-center p-2 rounded-xl border border-slate-500 text-slate-100"
            >
              Add Category
            </button>
          </div>
        </form>
      </div>
      <button
        id="toggle-add-category"
        className={`text-slate-600 text-lg mb-4 font-medium ${
          isShowForm && "hidden"
        }`}
        onClick={() => setIsShowForm(!isShowForm)}
      >
        Add New Category?
      </button>
    </section>
  );
};

export default Category;
