import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import Input from "../components/Input.js";
import {useAuth} from "../hooks/useAuth.js";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Not an email")
      .required("Please enter your email"),
    password: yup
      .string()
      .required("Please enter your password")
      .min(4, "Your password must be more than 4 character")
      .max(60, "Your password must be less than 60 character"),
  })
  .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitted},
  } = useForm({resolver: yupResolver(schema), mode: "onChange"});
  const [login, setLogin] = useState(false);

  const {signIn, signUp} = useAuth();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    if (login) {
      await signIn(data.email, data.password);
    } else {
      console.log("log in fail");
    }
  };

  return (
    <div className="relative flex flex-col w-screen h-screen bg-bgColor md:items-center md:justify-center md:bg-transparent">
      {/* background image */}
      <img
        className="-z-10 visible opacity-60 sm:!inline object-cover w-screen h-screen pointer-events-none"
        src="/background.png"
        alt=""
      />

      <div className="absolute object-contain left-4 top-4 md:left-10 md:top-6">
        <Link to="/signup">
          <img
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* form */}

      <div className="absolute mt-10 w-full md:mt-0 md:w-[40rem] flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          type="submit"
          className="max-w-[30rem] w-full px-8 py-16  space-y-8 rounded md:bg-bgColor/75 md:mt-0 md:max-w-[30rem] md:w-full md:px-14 "
        >
          <h1 className="text-3xl font-semibold md:text-center">Sign In</h1>
          <div className="space-y-4">
            {/* email */}
            <Input
              className="input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              {...register("email")}
            ></Input>
            {errors && errors?.email?.message && (
              <p className="text-xs text-red-500">{errors?.email.message}</p>
            )}

            {/* password */}
            <Input
              className="input"
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              {...register("password")}
            ></Input>
            {errors && errors?.password?.message && (
              <p className="text-xs text-red-500">{errors?.password.message}</p>
            )}
          </div>
          <button
            onClick={() => isSubmitted && setLogin(true)}
            type=""
            className="w-full py-3 font-semibold rounded-md bg-primary"
          >
            Sign In
          </button>

          <div>
            <span className="text-[gray] md:text-gray-400">
              New to Netflix?
            </span>
            <Link
              onClick={() => setLogin(false)}
              // to="/signup"
              className="ml-2 text-white no-underline hover:underline"
            >
              Sign up now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
