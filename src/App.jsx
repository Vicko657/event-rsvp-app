import Header from "./Header";
import RSVP from "./RSVP";
import Giftlist from "./Giftlist";
import Info from "./Info";
import "./App.css";

export default function App() {
  return (
    <div className="container-fluid p-0 m-0  App d-flex row vh-100">
      <div className="card align-self-center p-0">
        <div className="row full-header p-0 m-0">
          <div className="left-column p-0 col-lg-6 d-flex flex-column d-lg-flex position-lg-fixed position-none vh-100  ">
            <div className=" d-flex row align-content-center vh-100">
              <img className="title-imgs" src="/imgs/theme_img.png" alt="img" />
              <div className="mt-lg-5">
                <h3 className="text-center sub-heading">
                  Please wear something blue & <br /> join us celebrating
                </h3>
                <img
                  className="logo d-lg-block"
                  src="/imgs/bride_name_img.png"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="right-column d-flex col-lg-6 offset-lg-6 d-flex flex-column overflow-auto vh-100">
            <Header />
            <RSVP />
            <Info />
            <Giftlist />
          </div>
        </div>
      </div>
    </div>
  );
}
