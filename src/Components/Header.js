import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full p-4 bg-gray-500">
      <Link to={"/home"}>
        <h1 className="font-mono font-bold text-2xl cursor-pointer">
          ThermoCraft
        </h1>
      </Link>
      <ul className="flex space-x-4  font-medium text-lg">
        <Link to={"/home"}>
          <li className="cursor-pointer hover:text-white">Home</li>
        </Link>
        <Link to={"/categories"}>
          <li className="cursor-pointer hover:text-white">Categories</li>
        </Link>
        <Link to={"/collections"}>
          <li className="cursor-pointer hover:text-white">Collections</li>
        </Link>

        <Link to={"/cart"}>
          <li className="cursor-pointer hover:text-white">Cart</li>
        </Link>
        <Link to={"/aboutus"}>
          <li className="cursor-pointer hover:text-white">AboutUs</li>
        </Link>

        <Link to={"/loginpage"}>
          <li className="cursor-pointer hover:text-white">Login</li>
        </Link>
        <Link to={"/adminpage"}>
          <li className="cursor-pointer hover:text-white">Admin</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
