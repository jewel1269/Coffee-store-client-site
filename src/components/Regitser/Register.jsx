import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleLogin = e =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const email =form.email.value;
        const password =form.password.value;
        console.log(name, email, password)
        createUser(email, password)
        .then(result =>{
            console.log(result);
            const createdAt = result.user?.metadata?.creationTime;

         const people = {email, createdAt: createdAt};
         fetch('http://localhost:5000/peoples',{
            method:"POST",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(people)
         })
         .then(res=> res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
               alert("Successfully Register")
               form.reset()
            }
        })
        })
        .catch(error => console.log(error.message))


    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
              </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
            <h4 className="text-center">Have account <Link to={'/login'}><strong>Login</strong></Link></h4>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
