import { useLoaderData } from "react-router-dom";

const Home = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div>
      <marquee>
        <h1>Coffees length: {coffees.length}</h1>{" "}
      </marquee>
    </div>
  );
};

export default Home;
