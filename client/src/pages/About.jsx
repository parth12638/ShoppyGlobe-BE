
import React from "react";

const About = () => {
  return (
    <div
      className="pt-8 min-h-screen flex flex-col"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/abstract-black-shapes-background-design_1017-31904.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Ensures the image doesn't scroll
        height: "auto", // Let it grow with content
      }}
    >
      {/* Title Section */}
      <div className="text-2xl text-center border-t">
        <div className="text-4xl font-bold">
          <span className="text-[#eacda3]">ABOUT</span>{" "}
          <span className="text-[#d6ae7b]">US</span>
        </div>
      </div>

      {/* About Section */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src="https://png.pngtree.com/png-vector/20231214/ourmid/pngtree-man-shopping-online-png-image_11348210.png"
          alt="About Shoppy Globe"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-[#eacda3]">
          <p>
            Welcome to Shoppy Globe, your one-stop destination for premium
            products from around the world. Our journey began with a simple
            idea: to provide a platform where customers can easily discover,
            explore, and purchase a wide range of products from the comfort of
            their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-[#eacda3]">Our Mission</b>
          <p>
            Our mission at Shoppy Globe is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a
            seamless shopping experience that exceeds expectations, from
            browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl py-4 text-center">
        <div className="text-4xl font-bold">
          <span className="text-[#eacda3]">WHY</span>{" "}
          <span className="text-[#d6ae7b]">CHOOSE US</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-[#eacda3]"> Quality Assurance:</b>
          <p className="text-[#eacda3]">
            We meticulously select and vet each product to ensure it meets our
            stringent quality standards.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-[#eacda3]">Convenience:</b>
          <p className="text-[#eacda3]">
            With our user-friendly interface and hassle-free ordering process,
            shopping has never been easier.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b className="text-[#eacda3]">Exceptional Customer Service:</b>
          <p className="text-[#eacda3]">
            Our team of dedicated professionals is here to assist you every
            step of the way, ensuring your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
