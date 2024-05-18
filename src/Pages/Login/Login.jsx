import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../img/images/login/login.svg'
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useContext } from 'react';
import { AuthCotext } from '../../AuthProvider/AuthProvider';
import axios from 'axios';


const Login = () => {
  const { signIn } = useContext(AuthCotext);

  const location = useLocation();
  const navigate = useNavigate()

  const hendleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const logedInUser = result.user;
        console.log(logedInUser);
        const user = { email };
        
        // get access token
        axios.post('http://localhost:5000/jwt', user, {withCredentials: true})
          .then(res => {
            console.log(res.data);
            if(res.data.success) {
              navigate(location?.state ? location?.state : '/')
            }
        })

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
            <form onSubmit={hendleLogin} className="card-body">
              <h1 className="text-4xl text-center font-bold mb-4">Login now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name='email'
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
                  name='password'
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
                  value='Login'
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
                  New to Care Doctors{' '}
                  <Link to="/signIn" className="text-red-500 font-bold">
                    Sign In
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

export default Login;