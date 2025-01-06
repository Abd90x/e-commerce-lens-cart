import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="pt-16 border-t  dark:border-none dark:bg-primary">
      <div className="container mx-auto">
        <div className=" text-center ">
          <h2 className="h2 uppercase mb-6 font-semibold">
            Subscribe to our newsletter
          </h2>
          <p className=" dark:text-white/70">
            Be the first to get latest news about trends, promotions and much
            more!
          </p>
        </div>
        <form className=" w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14 ">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
            className="input"
            required
          />
          <button className="btn btn-accent min-w-[150px]">Subscribe</button>
        </form>
        <div className="text-base dark:text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9">
          <a href="#header" className="dark:hover:text-white transition-all">
            Returns Policy
          </a>
          <a href="#header" className="dark:hover:text-white transition-all">
            Track your order
          </a>
          <a href="#header" className="dark:hover:text-white transition-all">
            Shipping & Delivery
          </a>
        </div>
        <div className="flex gap-x-6 max-w-max mx-auto text-xl mb-16">
          <a
            href="https://www.facebook.com"
            className="dark:hover:text-white transition-all"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/"
            className="dark:hover:text-white transition-all"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.x.com/"
            className="dark:hover:text-white transition-all"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.youtube.com/"
            className="dark:hover:text-white transition-all"
          >
            <FaYoutube />
          </a>
        </div>
        <div className=" py-10 border-t dark:border-t-white/10 ">
          <div className="container mx-auto">
            <div className=" text-center text-sm dark:text-white/60">
              Copyrights &copy; LensCart {new Date().getFullYear()}. All righrs
              reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
