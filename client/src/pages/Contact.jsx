
import { useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

// Contact page with validation
const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form Data: ", values);
      setFormSubmitted(true);
    },
  });

  return (
    <div
      className="pt-10 border-t bg-cover bg-no-repeat min-h-screen"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-black-shapes-background-design_1017-31904.jpg')",
      }}
    >
      <div className="text-center text-2xl mb-10">
        <h1 className="font-bold text-[#eacda3]">
          CONTACT <span className="text-[#d6ae7b]">US</span>
        </h1>
      </div>

      {formSubmitted ? (
        <div className="text-center text-[#eacda3] h-full flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold">Thank you for contacting us!</h2>
          <p className="mt-4">We will get back to you soon.</p>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-10 justify-center items-start container mx-auto px-4 text-[#eacda3]">
          <div className="flex flex-col justify-center items-start gap-6 max-w-md animate-slide-in-left">
            <p className="font-semibold text-xl">Our Store</p>
            <p>
              Andheri Station <br /> Virar 402308, Mumbai, India
            </p>
            <p>
              Tel: 123457890 <br /> Email: parthran3@gmail.com
            </p>
            <p className="font-semibold text-xl">Careers at Shoppy Globe</p>
            <p>Learn more about our teams and job openings.</p>
            <button className="border border-[#eacda3] px-8 py-4 text-sm text-[#eacda3] hover:bg-[#d6ae7b] hover:text-white transition-all duration-500 ease-in-out">
              Explore Jobs
            </button>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 w-full max-w-lg animate-slide-in-right"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-[#d6ae7b] text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#d6ae7b] leading-tight focus:outline-none focus:ring-2 focus:ring-[#eacda3] ${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : ""
                }`}
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-[#d6ae7b] text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#d6ae7b] leading-tight focus:outline-none focus:ring-2 focus:ring-[#eacda3] ${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : ""
                }`}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.email}
                </p>
              )}
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-[#d6ae7b] text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#d6ae7b] leading-tight focus:outline-none focus:ring-2 focus:ring-[#eacda3] ${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : ""
                }`}
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500 text-xs italic">
                  {formik.errors.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#eacda3] hover:bg-[#d6ae7b] text-white px-4 py-2 rounded flex items-center gap-1 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
