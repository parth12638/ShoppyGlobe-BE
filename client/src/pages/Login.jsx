
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      name:
        currentState === "Sign Up"
          ? Yup.string().required("Name is required")
          : null,
    }),
    onSubmit: () => {
      navigate("/home2");
    },
  });

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-black-shapes-background-design_1017-31904.jpg')",
      }}
    >
      {/* Title Section */}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col items-center gap-4 w-full sm:max-w-md m-auto mt-14 bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
          <p className="text-3xl font-semibold text-[#d6ae7b]">{currentState}</p>
          <hr className="border-none h-[1.5px] w-8 bg-[#d6ae7b]" />
        </div>

        {/* Name Input for Sign-Up */}
        {currentState === "Sign Up" && (
          <div className="w-full">
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2 border border-[#d6ae7b] rounded"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.name}
              </div>
            ) : null}
          </div>
        )}

        {/* Email Input */}
        <div className="w-full">
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-[#d6ae7b] rounded"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        {/* Password Input */}
        <div className="w-full">
          <input
            id="password"
            type="password"
            placeholder="Password"
            className="w-full px-3 py-2 border border-[#d6ae7b] rounded"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm mt-1">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        {/* Links for Password Reset and Switching States */}
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer text-[#d6ae7b]">Forgot your password?</p>
          {currentState === "Login" ? (
            <p
              onClick={() => setCurrentState("Sign Up")}
              className="cursor-pointer text-[#d6ae7b]"
            >
              Create account
            </p>
          ) : (
            <p
              onClick={() => setCurrentState("Login")}
              className="cursor-pointer text-[#d6ae7b]"
            >
              Login here
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#eacda3] hover:bg-[#d6ae7b] text-[#000000] hover:text-white font-light px-8 py-2 mt-4 rounded"
        >
          {currentState === "Login" ? "Sign in" : "Sign up"}
        </button>
      </form>

      {/* Additional Text Section */}
      <div className="mt-16 text-center text-white">
        <h2 className="text-xl font-semibold mb-4 text-[#d6ae7b]">Why Choose Us?</h2>
        <p className="text-[#d6ae7b] mb-4">
          We aim to make your experience seamless and hassle-free. Whether
          you're shopping for yourself or loved ones, we've got you covered.
        </p>
        <ul className="space-y-3 text-sm text-[#d6ae7b]">
  <li>✔ Quality Assurance: We vet every product carefully.</li>
  <li>✔ Convenience: A user-friendly experience tailored for you.</li>
  <li>✔ Exceptional Customer Support: We prioritize your satisfaction.</li>
</ul>

      </div>

      {/* Space added below the text */}
      <div className="h-10"></div>
    </div>
  );
};

export default Login;
