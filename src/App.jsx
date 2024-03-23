import backraund from "./assets/backraund.png";
import logo from "./assets/logo.svg";
import search from "./assets/SearchButton.svg";
import Style from "./styles/App.module.css";
// import "./App.css";

function App() {
  return (
    <>
      <div
        className={Style.container}
        style={{
          backgroundImage: `url(${backraund})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <header className={Style.header}>
          <img src={logo} alt="logo" />
        </header>
        <div className={Style.hero}>
          <h1 className={Style.h1}>
            Search Our Customer <span className={Style.span}>Database</span>
          </h1>
          <div className={Style.search}>
            <input
              className={Style.input}
              type="text"
              placeholder="Find your customer here..."
            />
            <img src={search} alt="search" />
          </div>
          <p className={Style.p}>
            Get your customers onboarded with our technolgy
          </p>
          <button className={Style.button}>Let’s go</button>
        </div>
      </div>
    </>
  );
}

export default App;
