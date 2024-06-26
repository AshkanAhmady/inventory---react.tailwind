import { ProductsType } from "../types";

type NavBarProps = {
  products: ProductsType;
};

const NavBar: React.FC<NavBarProps> = ({ products }) => {
  return (
    <div className="h-12 sticky top-0 w-full flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
      <h1 className="md:text-xl text-sm font-bold text-slate-300">
        Inventory App
      </h1>
      {products.length ? (
        <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500 border-2 border-slate-300 font-bold text-slate-300">
          {products.length}
        </span>
      ) : null}
    </div>
  );
};

export default NavBar;
