import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { name, quantity, supplier, taste, photo, _id } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "delete",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl ">
      <figure className="p-5  flex justify-center mr-3">
        <img src={photo} alt="PHOTO" />
      </figure>
      <div className="flex justify-between w-full pr-4 py-3">
        <div>
          <h2 className="card-title">{name}</h2>
          <p>{quantity}</p>
          <p>{supplier}</p>
          <p>{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-2">
            <button className="btn btn rounded bg-blue-500 hover:bg-blue-600 text-white">
              View
            </button>
            <Link to={`/updateCoffee/${_id}`}>
              <button className="btn w-full  flex items-center bg-green-700 hover:bg-green-800 text-white">
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-red-500 hover:bg-red-600 text-white"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
