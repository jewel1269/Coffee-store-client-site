import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {
    const coffee = useLoaderData()
    console.log(coffee)

    const handleBtn = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photoURL.value;
        const user = {title, chef, supplier, taste, category, details, photoURL}
        console.log(user);
    
        fetch(`http://localhost:5000/users/${coffee._id}`, {
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
    
        })
        .then(res => res.json())
        .then(data =>
            {
              console.log(data);
              if(data.modifiedCount> 0){
                Swal.fire({
                  title: 'Success!',
                  text: 'Coffee Updated successfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
              
              }
            }
        )
    }

    
    return (
        <>
        <h2 className="text-c text-2xl text-center mt-10 font-bold">
          Update Coffee : {coffee.chef}
        </h2>
        <form onSubmit={handleBtn}>
          <section className="p-6 text-black dark:bg-gray-100 border rounded-xl lg:w-[70%] lg:ml-64 shadow-2xl bg-slate-50  border-black dark:">
            <div>
              <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="firstname" className="text-sm">
                      Name
                    </label>
                    <input
                      id="nam"
                      type="text"
                      name="title"
                      defaultValue={coffee.title}
                      placeholder="Enter Coffee Name"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75   border-black p-2 border text-black dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="lastname" className="text-sm">
                      Chef
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="chef"
                      defaultValue={coffee.chef}
                      placeholder="Enter Coffee Chef"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75   border-black p-2 border text-black dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-3">
                    <label htmlFor="email" className="text-sm">
                      Supplier
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="supplier"
                      defaultValue={coffee.supplier}
                      placeholder="Enter Coffee supplier"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75   border-black p-2 border text-black dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full">
                    <label htmlFor="address" className="text-sm">
                      Taste
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="taste"
                      defaultValue={coffee.taste}
                      placeholder="Enter Coffee taste"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75   border-black p-2 border text-black dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="city" className="text-sm">
                      Category
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="category"
                      defaultValue={coffee.category}
                      placeholder="Enter Coffee category"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75   border-black p-2 border text-black dark:border-gray-300"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="state" className="text-sm">
                      Details
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="details"
                      defaultValue={coffee.details}
                      placeholder="Enter Coffee details"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75   border-black p-2 border text-black dark:border-gray-300"
                    />
                  </div>
                  <br />
                  <div className="col-span-full sm:col-span-2">
                    <label htmlFor="zip" className="text-sm">
                      Photo URL
                    </label>
                    <input
                      id="zip"
                      type="text"
                      name="photoURL"
                      defaultValue={coffee.photoURL}
                      placeholder="Enter Photo URL"
                      className="w-full rounded-md focus:ring focus:ring-opacity-75   border-black p-2 border text-black dark:border-gray-300"
                    />
                  </div>
                </div>
              </fieldset>
  
              <input
                type="submit"
                value="Add Coffee"
                className="btn btn-outline w-full btn-success"
              />
            </div>
          </section>
        </form>
      </>
    );
};

export default UpdateCoffee;