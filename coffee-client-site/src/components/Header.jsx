import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between md:px-32 px-10 py-5 px-10 items-center  bg-gray-500 text-white ">
      <div className="flex items-center gap-3">
        <img
          className="w-12 h-12"
          src="../../public/images/more/2.png"
          alt=""
        />
        <h1 className="text-2xl font-semibold">Coffee Store</h1>
      </div>
      <div className="flex gap-10  text-xl">
        <Link to="/">Home</Link>
        <Link to="/addCoffee">Add Coffee</Link>
      </div>
    </div>
  );
};

export default Header;
