import images from "../../../assets/images";

export default function AboutSection2() {
  return (
    <div className="flex gap-10 px-10 pb-10">
        <img src={images.about.about_h1} className="w-[500px]"/>
        <div className="flex flex-col justify-between">
            <div>
                <p className="font-normal text-base text-black mb-2">WORLDWIDE PROPERTIES</p>
                <h2 className="font-black text-3xl text-primary leading-relaxed mb-2">
                    Welcome To Our<br/> Luxurious Properties,<br/> With All The Conveniences.
                </h2>
                <p className="font-normal text-base text-black leading-relaxed text-justify">
                    Step into a world of luxury where every detail is designed to offer unparalleled comfort and convenience. Our properties combine elegance with modern amenities to create a living experience like no other. From state-of-the-art facilities to thoughtfully designed spaces, we ensure that every aspect of your stay meets the highest standards of sophistication and ease.
                    <br/><br/>Whether you're looking for a serene retreat or a vibrant urban living experience, our luxurious properties provide everything you need to live comfortably and conveniently. Welcome to a new standard of living—welcome home.
                </p>
            </div>

            <div className="flex flex-col items-start">
                <div className="flex gap-3 mb-5">
                    <div>
                        <p className="font-bold text-5xl text-primary mb-2">78k</p>
                        <p className="font-normal text-base text-black">Satisfied Customer</p>
                    </div>
                    <div>
                        <p className="font-bold text-5xl text-primary mb-2">10+</p>
                        <p className="font-normal text-base text-black">Years Experience</p>
                    </div>
                    <div>
                        <p className="font-bold text-5xl text-primary mb-2">3m</p>
                        <p className="font-normal text-base text-black">Established Housings</p>
                    </div>
                </div>

                <button className="bg-primary text-white rounded-full px-5 py-2.5 text-sm font-semibold">
                    Explore Properties
                </button>
            </div>
        </div>
    </div>
  )
}
