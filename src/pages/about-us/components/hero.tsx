import images from "../../../assets/images";

export default function AboutUsHero() {
  return (
    <div className="py-10 px-10">
      <div
        className="flex flex-col justify-center items-center w-full object-center object-cover h-[300px] rounded-[40px] mb-10"
        style={{
          backgroundImage: `url(${images.home.home_hero_bg})`,
        }}
      >
        <h2 className="font-bold text-white text-4xl text-center leading-relaxed mb-2">
        About Us
        </h2>
        <p className="max-w-[800px] text-center leading-relaxed font-light text-white text-base">
        HOME - ABOUT US
        </p>
      </div>
    </div>
  );
}