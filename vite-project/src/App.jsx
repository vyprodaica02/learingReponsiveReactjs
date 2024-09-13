// eslint-disable-next-line no-unused-vars
import React from "react";

const ResponsiveGrid = () => {
  return (
    <div>
      <header className="bg-gradient-to-r from-purple-500 to-red-500 text-white p-6 mb-3">
        <h1 className="text-center">Header</h1>
      </header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {/* Center (hiển thị ở trên ở màn hình tablet và màn hình nhỏ) */}
        <div className="bg-red-600 col-span-1 md:col-span-2 lg:col-span-1 lg:order-2 h-48 flex items-center justify-center">
          <h1 className="text-center text-white">center</h1>
        </div>

        {/* Left (nằm bên trái ở màn hình lớn, cùng hàng với Right ở màn hình tablet) */}
        <div className="bg-blue-600 col-span-1 md:order-2 lg:order-1 lg:col-span-1 h-48 flex items-center justify-center">
          <h1 className="text-center text-white">left</h1>
        </div>

        {/* Right (nằm bên phải ở màn hình lớn, cùng hàng với Left ở màn hình tablet) */}
        <div className="bg-yellow-400 col-span-1 md:order-3 lg:order-3 lg:col-span-1 h-48 flex items-center justify-center">
          <h1 className="text-center text-white">right</h1>
        </div>
      </div>
      <footer className="bg-gradient-to-r from-yellow-500 to-red-600 text-white p-6 mt-3 rounded">
        <h1 className="text-center ">Footer</h1>
      </footer>
    </div>
  );
};

export default ResponsiveGrid;
