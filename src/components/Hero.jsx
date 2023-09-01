import ideas from "../assets/ideas.svg";
import vinyl from "../assets/vinyl.svg";
import shirt from "../assets/shirtPortion.png";

function Hero() {
  return (
    <div className="relative">
      <div className="absolute top-32 -z-10">
        <img src={shirt} alt="shirt" />
      </div>
      <div className="flex justify-center flex-col h-auto w-auto mt-32">
        <div className="flex justify-center flex-col text-center">
          <img src={ideas} alt="hero-text" className="h-16 mt-24" />
          <img src={vinyl} alt="hero-text" className="h-16" />
          <div className="font-robo font-bold text-xl">
            Based in Miami, Florida
          </div>
          <div className="font-robo font-bold text-xl">since 2015</div>
          <div className="mt-2">
            <button className="h-9 w-36 bg-black font-robo text-white rounded-3xl">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
