import { Link } from 'react-router-dom';
import img from '../../img/images/login/login.svg';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthCotext } from '../../AuthProvider/AuthProvider';


const SignIn = () => {
  const { createUser } = useContext(AuthCotext);

  const handleSingin = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);

    createUser(email, password)
      .then(result => {
        console.log(result.user);
      })
    .catch(error => console.log(error))
  }


  return (
    <div className="mb-16">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-14 w-1/2 ">
            <img src={img} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSingin} className="card-body">
              <h1 className="text-4xl text-center font-bold mb-4">
                Sing Up Now!
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
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
                  placeholder="email"
                  name="email"
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
                  placeholder="password"
                  name="password"
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
                <input
                  className="btn btn-primary"
                  type="Submit"
                  name="submit"
                  value='Sign Up'
                  id=""
                />
              </div>
              <div className="text-center">
                <p>Or Sign In with</p>
                <div className="flex gap-5 justify-center my-4 text-2xl">
                  <Link>
                    <FaFacebook />
                  </Link>
                  <Link>
                    <FaLinkedin></FaLinkedin>
                  </Link>
                  <Link>
                    <FcGoogle></FcGoogle>
                  </Link>
                </div>
                <p className="">
                  Allready Have an Account? <Link to="/login" className="text-red-500 font-bold">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
