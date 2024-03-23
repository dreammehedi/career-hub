import { useEffect, useState } from "react";

function JobCategoryItem() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const categoryDataGet = async () => {
      const response = await fetch("categories.json");
      const data = await response.json();
      setCategory(data);
    };
    categoryDataGet();
  }, []);
  return (
    <div className="container pt-8">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {category.map((singleCategory) => {
          const { id, logo, category_name, availability } = singleCategory;
          return (
            <div
              key={id}
              className="bg-headerBg rounded-lg p-10 flex flex-col space-y-4 lg:space-y-6 transition-all duration-300 ease-linear hover:ring-1 hover:shadow-md group"
            >
              <img
                src={logo}
                className="group-hover:shadow-sm transition-all duration-300 ease-linear w-16 h-16 object-contain p-4 rounded-lg bg-[#EFECFF]"
                alt="logo"
              />
              <div className="flex flex-col space-y-3">
                <h3 className="font-extrabold text-xl text-dark-dark2">
                  {category_name}
                </h3>
                <p className="font-medium text-base text-dark-dark4">
                  {availability}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default JobCategoryItem;
