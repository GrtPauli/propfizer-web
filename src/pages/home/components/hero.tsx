import images from "../../../assets/images";

export default function HomeHero() {
  return (
    <div className="py-10 px-10">
      <div
        className="flex flex-col justify-center items-center w-full object-center object-cover h-[600px] rounded-[40px] mb-10"
        style={{
          backgroundImage: `url(${images.home.home_hero_bg})`,
        }}
      >
        <h2 className="font-bold text-white text-4xl text-center leading-relaxed mb-2">
          Discover Your Perfect Space
          <br /> with Us!
        </h2>
        <p className="max-w-[800px] text-center leading-relaxed font-light text-white text-base">
          Whether you're looking to rent your dream home, list your property, or
          make a smart investment, we have the resources and expertise to help
          you every step of the way. Explore our diverse listings and find the
          perfect match today!
        </p>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-4">
        <Card
          img={images.home.home_h1}
          title="Apartment & Unit"
        />
        <Card
          img={images.home.home_h2}
          title="Homes & Villa"
        />
        <Card
          img={images.home.home_h3}
          title="Single rooms"
        />
      </div>
    </div>
  );
}

const Card = ({ img, title }: any) => {
  return (
    <div className="border border-black rounded-2xl">
      <img src={img}/>
      <div className="px-5 py-2">
        <p>{title}</p>
      </div>
    </div>
  )
};
