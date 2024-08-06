import React from "react";
import img1 from "../assets/img/hero.png";
import img3 from "../assets/img/plant-img.jpg";
import img4 from "../assets/img/flower-03-a-400x550.jpg";
import cat1 from "../assets/img/cat-01.jpg";
import cat2 from "../assets/img/cat-02.jpg";
import "../assets/js/star.js";

const ProductCard = ({ imgSrc, category, title, price }) => (
  <div>
    <img src={imgSrc} alt="" className="[70%]" />
    <div className="px-4">
      <p className="my-1">{category}</p>
      <h2 className="text-black font-serif text-xl md:text-2xl">{title}</h2>
      <div className="rating">
        {[1, 2, 3, 4, 5].map((value) => (
          <span key={value} className="star" data-value={value}>
            ★
          </span>
        ))}
      </div>
      <p>&#8377;{price}</p>
    </div>
  </div>
);

function Home() {
  const products = [
    {
      imgSrc: `${img4}`,
      category: "Cacti",
      title: "Aloe Juvenna Plant",
      price: "350",
    },
    {
      imgSrc: `${img4}`,
      category: "Cacti",
      title: "Aloe Juvenna Plant",
      price: "350",
    },
    {
      imgSrc: `${img4}`,
      category: "Cacti",
      title: "Aloe Juvenna Plant",
      price: "350",
    },
    {
      imgSrc: `${img4}`,
      category: "Cacti",
      title: "Aloe Juvenna Plant",
      price: "350",
    },
  ];
  return (
    <>
      {/* section one */}
      <div className="bg-[#f1f5f4] md:flex py-10">
        <div className="left md:w-1/2 flex items-center">
          <div className="md:w-4/6 mx-auto text-center md:text-start px-[25px]  md:px-0 ">
            <div className="flex justify-center">
              <img
                src={img1}
                alt="plant_img"
                className="w-[90%] md:hidden block"
              />
            </div>
            <p className="font-serif my-2 text-[#586f69]">Plants</p>
            <h1 className="md:tall-text font-serif text-[26px] text-black md:text-5xl md:leading-[70px]">
              Bird of Paradise <br className="md:block hidden" /> Plant
            </h1>
            <br />
            <p className="md:text-justify text-center text-[#586f69] leading-[30px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              mattis nulla in mauris efficitur elementum.
            </p>
            <br />
            <div className="my-3">
              <del>&#8377;400</del> <span>&#8377;300</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <button className="uppercase text-white bg-[#586f69] hover:bg-[#427466] py-[12px] px-9">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="right md:w-1/2 md:flex justify-center hidden">
          <img src={img1} alt="plant_img" className="w-[70%]" />
        </div>
      </div>
      {/* section second */}
      <div className="my-[100px] md:px-0 px-5">
        <p className="text-center my-4">Special Offers</p>
        <h1 className="md:text-[40px] text-3xl font-serif text-center text-black">
          Unique deals & offers every single <br className="md:block hidden" />{" "}
          day
        </h1>
        <div className="mt-[70px] flex">
          <div className="md:w-1/2 flex justify-center items-center">
            <img src={img3} alt="img" className="md:block hidden" />
          </div>
          <div className="md:w-1/2 md:flex justify-center items-center">
            <img src={img4} alt="img" className="w-[44%]" />
          </div>
        </div>
      </div>
      {/* section third */}
      <div>
        <p className="text-center font-serif mb-6">Shop</p>
        <h1 className="text-4xl font-serif text-center text-black mb-14">
          Most Popular Plants
        </h1>
        <div className="p-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                imgSrc={product.imgSrc}
                category={product.category}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      {/* section fourth */}
      <div className="text-center px-5 md:w-8/12 mx-auto my-[100px]">
        <p> Our story</p>
        <h1 className="text-black font-serif text-3xl md:text-5xl md:leading-[50px] my-9 px-2">
          We are a family owned, retail and wholesale plant nursery, located in
          Gwalior.
        </h1>
        <p className="px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis.
        </p>
        <button className="px-8 py-3 text-white uppercase my-8 bg-[#586f69] hover:bg-[#427466]">
          read more
        </button>
      </div>
      {/* section fifth */}
      <div className="p-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-cover bg-center flex items-end">
            <img src={cat1} alt="" className="w-[100%]" />
            <div className="h-12 w-11/12 mx-auto mb-8 bg-[#ffffffa8] text-black flex items-center justify-center">
              Hello
            </div>
          </div>

          <img src={cat2} alt="" className="w-[100%]" />
        </div>
      </div>
    </>
  );
}

export default Home;
