import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp, SlidersHorizontal } from "lucide-react";
import bgImage from "../../../assets/background/bg-collections.jpeg";

import { productsData, reviews, questions, categories } from "../../../data";

export default function CollectionsPage() {
  const [showFilter, setShowFilter] = useState(true);
  const [sortBy, setSortBy] = useState("default");
  const [sortOpen, setSortOpen] = useState(false);
  const [products, setProducts] = useState(productsData);
  const [cat, setCat] = useState(categories);

  const handleSort = (type) => {
    setSortBy(type);
    setSortOpen(false);

    const sorted = [...products].sort((a, b) => {
      if (type === "lowest") return a.price - b.price;
      if (type === "highest") return b.price - a.price;
      return 0;
    });

    setProducts(sorted);
  };

  useEffect(() => {
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      {/* HERO */}
      <section
        className="relative h-[550px] bg-fixed bg-cover bg-center flex items-center justify-center px-6 md:px-20"
        style={{
          backgroundImage: `linear-gradient(rgba(109,78,46,0.8), rgba(109,78,46,0.8)), url(${bgImage})`,
        }}
      >
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-white text-center mt-20"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            <span className="block">Grab Up to 50% Off On</span>
            <span className="block mt-4">Selected Bag.</span>
          </h1>
        </motion.div>
      </section>

      {/* COLLECTION SECTION */}
      <section className="p-6 md:px-20 md:py-10">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-8"
        >
          <div className="flex items-center justify-between">
            <h1>Collections</h1>
          </div>
        </motion.h1>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 px-3 py-2 rounded-md"
            >
              <SlidersHorizontal size={16} />
              {showFilter ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="flex items-center gap-2 text-sm text-gray-700 border border-gray-300 px-3 py-2 rounded-md"
            >
              Sort By
              {sortOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
            {sortOpen && (
              <ul className="absolute z-10 bg-white border mt-1 w-48 rounded-md shadow-md">
                <li
                  onClick={() => handleSort("lowest")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Price: Low to High
                </li>
                <li
                  onClick={() => handleSort("highest")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Price: High to Low
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="flex gap-6">
          {/* FILTER SIDEBAR */}
          {showFilter && (
            <aside className="w-64 hidden md:block sticky top-[100px] max-h-[calc(100vh-120px)] overflow-y-auto shrink-0 space-y-6 text-gray-950 border rounded p-4 bg-white">
              {/* Gender */}
              <div>
                <h2 className="font-semibold text-lg mb-2">Gender</h2>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Men
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Women
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Unisex
                </label>
              </div>

              {/* Categories */}
              <div>
                <h2 className="font-semibold text-lg mb-2">Categories</h2>
                {categories.map((cat,idx) => (
                  <label className="block" key={idx}>
                    <input type="checkbox" className="mr-2" /> {cat.label}
                  </label>
                ))}
              </div>

              {/* Price */}
              <div>
                <h4 className="font-semibold mb-2">Shop by Price</h4>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Under Rp700.000
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Rp700.000 -
                  Rp1.500.000
                </label>
                <label className="block">
                  <input type="checkbox" className="mr-2" /> Rp1.500.001 -
                  Rp2.999.999
                </label>
              </div>

              {/* Color */}
              <div>
                <h4 className="font-semibold mb-2">Colour</h4>
                <div className="flex gap-3 flex-wrap">
                  {["black", "brown", "beige"].map((color) => (
                    <div
                      key={color}
                      className="w-5 h-5 rounded-full border cursor-pointer"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </aside>
          )}

          {/* PRODUCT LIST */}
          <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 gap-6 flex-1">
            {products.map((item, idx) => (
              <motion.div
                key={idx}
                className="w-full h-full overflow-hidden rounded group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="mt-2">
                  <p className="text-black text-sm sm:text-lg font-semibold">
                    {item.name}
                  </p>
                  <p className="text-black text-sm sm:text-lg">
                    Rp{" "}
                    {item.price.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
