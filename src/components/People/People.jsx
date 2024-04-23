import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const People = () => {
  const loadedUser = useLoaderData();
  const [peoples, setPeoples] = useState(loadedUser);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/peoples/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount > 0){
            console.log("deleted")
            alert("successfully delete")

            
        }
    })
    .then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 50);
    });
    
   
  };

  return (
    <div className="overflow-x-auto ">
      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Email</th>
            <th>Created At</th>
            <th>last Logged in </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {peoples.map((people) => (
            <tr className="hover:bg-slate-200" key={loadedUser._id}>
              <th>1</th>
              <td>{people.email}</td>
              <td>{people.createdAt}</td>
              <td>{people.lastLoggedAt}</td>
              <td>
                <button onClick={()=>handleDelete(people._id)} className="btn">X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;
