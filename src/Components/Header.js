const Header = () => {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-gray-500">
      <h1 className="font-mono font-bold text-2xl cursor-pointer">
        ThermoCraft
      </h1>
      <ul className="flex space-x-4  font-medium text-lg">
        <li className="cursor-pointer hover:text-white">Home</li>
        <li className="cursor-pointer hover:text-white">Categories</li>
        <li className="cursor-pointer hover:text-white">Collections</li>
        <li className="cursor-pointer hover:text-white">Cart</li>
        <li className="cursor-pointer hover:text-white">AboutUs</li>
        <li className="cursor-pointer hover:text-white">Login</li>
        <li className="cursor-pointer hover:text-white">Admin</li>
      </ul>
    </div>
  );
};

export default Header;
