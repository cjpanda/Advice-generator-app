import { useState, useEffect } from "react";
import dividerDesktop from "../src/assets/pattern-divider-desktop.svg";
import dividerMobile from "../src/assets/pattern-divider-mobile.svg";
import dice from "../src/assets/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const fetchAdvice = async () => {
    setIsFetching(true);

    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();

      console.log(data);

      setAdvice(data.slip);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
    setIsFetching(false);
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <section className="padding-x mx-auto flex flex-col h-screen items-center justify-center">
      <div className="container relative">
        <h1 className="text-sm font-extralight text-accent tracking-widest">
          Advice #{advice.id}
        </h1>
        <p className="text-center text-xl md:text-lg text-[#cee3e9] p-3">
          {advice.advice}
        </p>

        <picture className="p-5">
          <source media="(min-width: 768px)" srcSet={dividerDesktop} />
          <img src={dividerMobile} alt="" />
        </picture>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-1.5rem] cursor-pointer transition-all duration-300 bg-accent rounded-full  hover:shadow-lg  hover:shadow-accent ">
          <button
            className={`bg-accent p-3 rounded-full relative ${
              isFetching ? "animate-spin" : ""
            } ${isFetching ? "opacity-50" : ""}`}
            onClick={fetchAdvice}
            disabled={isFetching}
          >
            <img
              src={dice}
              alt="Dice"
              className={`transition-opacity duration-300 ${
                isFetching ? "opacity-50" : "opacity-100"
              }`}
            />
          </button>
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-accent opacity-80" href="https://github.com/cjpanda">
          Cjpanda_dev
        </a>
        .
      </div>
    </section>
  );
}

export default App;
