import { ProductsType } from "../types";

type ProductListProps = {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
};

const ProductList: React.FC<ProductListProps> = ({ products, setProducts }) => {
  const deleteProductHandler = (productId: number) => {
    let updatedProducts = products.filter((item) => item.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <div>
      <h2 className="text-xl text-slate-300 font-bold mb-2">Product List</h2>
      <div className="overflow-x-auto">
        {products.map((item) => {
          return (
            <div
              key={item.id}
              className="flex items-center justify-between mb-2 w-full min-w-[400px]"
            >
              <span className="text-slate-400">{item.title}</span>
              <div className="flex items-center gap-x-3">
                <span className="text-slate-400">
                  {new Date(item.createdAt).toLocaleDateString("fa-IR")}
                </span>
                <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                  {item.category}
                </span>
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-500  border-2 border-slate-300 text-slate-300">
                  {item.quantity}
                </span>
                <button
                  onClick={() => deleteProductHandler(item.id)}
                  className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400"
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
