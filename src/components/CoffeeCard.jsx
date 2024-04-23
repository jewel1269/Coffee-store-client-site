import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  console.log(coffee);
  const { _id } = coffee;

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
        fetch(`http://localhost:5000/users/${_id}`, {
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              })
              .then(() => {
                setTimeout(() => {
                  window.location.reload();
                }, 50);
              });
            }
            
          });
        }
    });
  };
  return (
    <div className="card  lg:w-[80%] shadow-2xl lg:mt-10 card-side bg-base-100 border">
      <figure>
        <img
          className="w-96 h-72 border shadow-2xl rounded-2xl"
          src={coffee.photoURL}
          alt="Movie"
        />
      </figure>
      <div className="flex justify-between lg:mt-16">
        <div className="card-body">
          <h2 className="card-title">{coffee.title}</h2>
          <p>{coffee.category}.</p>
        </div>
        <div className="lg:ml-10">
          <div className="join join-vertical">
            <button className="btn rounded-2xl join-item btn-active btn-success">
              View
            </button>
            <br />
            <Link to={`/updateCoffee/${_id}`}><button className="btn rounded-2xl join-item">Edit</button></Link>
            <br />
            <button
              onClick={() => handleDelete(_id)}
              className="btn rounded-2xl join-item bg-red-500"
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
