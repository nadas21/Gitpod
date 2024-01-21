import "./hero.css";
import Bg from "../../assets/img/hero-bg.png";
import Gitlab from "../../assets/img/gitlab.png";
import Github from "../../assets/img/github.png";
import Frame from "../../assets/img/Frame.png";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-box">
            <h1 className="hero-title">Always Ready to Code.</h1>
            <p className="hero-text">
              Spin up fresh, automated dev environments for each task, in the
              cloud, in seconds.
            </p>
            <div className="hero-mini-box">
              <button className="hero-btn">Try Now</button>
              <div className="hero-mini-box-inner">
                <p className="hero-mini-box-p">Open a workspace.</p>
                <p className="hero-mini-box-p">Open a workspace.</p>
              </div>
            </div>
            <div className="hero-bottom-box">
              <img
                src={Gitlab}
                alt="gitlab"
                className="hero-bottom-img"
                width={29}
                height={29}
              />
              <img
                src={Github}
                alt="github"
                className="hero-bottom-img"
                width={29}
                height={29}
              />
              <img
                src={Frame}
                alt="frame"
                className="hero-bottom-img"
                width={29}
                height={29}
              />
            </div>
          </div>
          <img src={Bg} alt="bg" className="hero-img" width={630} height={632}/>
        </div>
      </div>
    </section>
  );
};
