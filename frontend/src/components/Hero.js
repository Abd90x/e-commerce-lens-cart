import React from "react";
// Components
import CategoryNav from "../components/CategoryNav";
import MainSlider from "../components/MainSlider";

// Images
import PromoImg1 from "../assets/img/promo_img1.png";
import PromoImg2 from "../assets/img/promo_img2.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" mb-[30px] pt-44 lg:pt-0">
      <div className="container mx-auto">
        <div className=" flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* Sidebar */}
          <div>
            <CategoryNav />
          </div>

          <div className=" w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>

          {/* Promo */}
          <div className=" flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/* Promo 1 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px]uppercase font-medium leading-tight mb-4">
                  Save 35% All DSLR Cameras
                </div>
                <Link to="/products/1" className=" uppercase text-accent">
                  Shop Now
                </Link>
              </div>
              <img
                className=" absolute z-20 -top-2 -right-4"
                src={PromoImg1}
                alt="Promo"
              />
            </div>
            {/* Promo 1 */}

            {/* Promo 2 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 25% All Mirrorless Cameras
                </div>
                <Link to="/products/2" className=" uppercase text-accent">
                  Shop Now
                </Link>
              </div>
              <img
                className=" absolute z-20 top-4 -right-6"
                src={PromoImg2}
                alt="Promo"
              />
            </div>
            {/* Promo 2 */}
          </div>
          {/* Promo */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
