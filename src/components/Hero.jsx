import ideas from "../assets/ideas.svg";
import vinyl from "../assets/vinyl.svg";
import shirt from "../assets/shirtPortion.png";

function Hero() {
  return (
    <div className="relative mb-72">
      <div className="absolute top-32 -z-10 md:invisible">
        <img src={shirt} alt="shirt" />
      </div>
      <div className="flex justify-center flex-col md:flex-row h-auto w-auto mt-32">
        <div className="flex justify-left flex-col text-center">
          <img src={ideas} alt="hero-text" className="h-16 mt-24" />
          <img src={vinyl} alt="hero-text" className="h-16" />
          <div className="font-robo font-bold text-xl">
            Based in Miami, Florida
          </div>
          <div className="font-robo font-bold text-xl">since 2015</div>
          <div className="mt-6">
            <button className="h-11 w-36 bg-black text-xl font-robo text-white rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
