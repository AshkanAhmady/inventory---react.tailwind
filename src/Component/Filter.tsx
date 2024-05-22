import { CategoriesType } from "../types";

type FilterProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  categories: CategoriesType;
};

const Filter: React.FC<FilterProps> = ({
  searchValue,
  setSearchValue,
  sort,
  setSort,
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="search-input" className="text-slate-500 text-lg">
          search
        </label>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          name="search-input"
          id="search-input"
          className="bg-transparent rounded-xl border border-slate-500 text-slate-400"
        />
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          sort
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400  rounded-xl"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            select acategory
          </option>
          <option className="bg-slate-500 text-slate-300" value="latest">
            latest
          </option>
          <option className="bg-slate-500 text-slate-300" value="earliest">
            earliest
          </option>
        </select>
      </div>
      <div className="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className="text-slate-500 text-lg">
          category
        </label>
        <select
          name="sort-products"
          id="sort-products"
          className="bg-transparent text-slate-400  rounded-xl"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option className="bg-slate-500 text-slate-300" value="">
            all categories
          </option>
          {categories.map((c) => {
            return (
              <option key={c.id} className="bg-slate-500 text-slate-300">
                {c.title}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default Filter;
