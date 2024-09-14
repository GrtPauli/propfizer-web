import images from "../../../assets/images";

export default function HomeSection3() {
  return (
    <div className="bg-[#6BBADC21] py-24 px-10 flex items-center gap-5">
    <div className="flex flex-col items-start">
      <h2 className="text-primary font-black leading-relaxed text-3xl mb-3">
        Buying, Selling & Renting. We Make It Simple
      </h2>
      <p className="text-black font-normal text-sm leading-loose mb-5">
        Whether you're buying your dream home, selling your property, or
        looking for the perfect rental, we've got you covered. Buying,
        Selling & Renting. We Make It Simple.
      </p>
      <button className="bg-primary text-white rounded-full px-5 py-2.5 text-sm font-semibold">
        Get Started Today!
      </button>
    </div>

    <img className="max-w-[350px]" src={images.home.home_h5} />
    <img className="max-w-[350px]" src={images.home.home_h6} />
  </div>
  )
}
