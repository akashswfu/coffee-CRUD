import { Link } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const AddCoffe = () => {
  const handleAddCoffe = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedID) {
          Swal.fire({
            title: "success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] px-24 md:px-32">
      <div className="rounded px-1 py-2 w-46  text-center flex gap-1 items-center text-xl italic">
        <BiLeftArrowAlt className="text-blue-800" />
        <Link to="/" className="text-blue-800 font-semibold text-xl">
          Back To Home
        </Link>
      </div>
      <div className=" pt-5 pb-10">
        <h1 className="text-center font-bold text-4xl pb-10 italic drop-shadow-lg">
          Add New Coffee
        </h1>
        <form onSubmit={handleAddCoffe}>
          {/* first Row */}
          <div className="md:flex gap-10 justify-center mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  placeholder="Available Quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form supplierrow */}
          <div className="md:flex gap-10 justify-center mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  placeholder="Supplier"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  placeholder="Taste"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* category and details */}
          <div className="md:flex gap-10 justify-center mb-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mb-5">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="mt-10">
            <input
              className="rounded py-2 hover:bg-orange-500  btn-block bg-orange-400 text-white text-lg font-semibold"
              type="submit"
              value="ADD COFFEE"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffe;
