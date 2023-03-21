const Product = () => {
    return ( 
        <div className="mb-6">
            <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
            <form className="bg-slate-700 p-4 rounded-xl flex flex-col gay-y-4">
                <div>
                    <label htmlFor="product-title" className="block mb-1 text-slate-400">title</label>
                    <input type="text" name="product-title" id="product-title" className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto" />
                </div>
                <div>
                    <label htmlFor="product-quantity" className="block mb-1 text-slate-400">quantity</label>
                    <input type="text" name="product-quantity" id="product-quantity" className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto" />
                </div>
            </form>
        </div>
     );
}
 
export default Product;