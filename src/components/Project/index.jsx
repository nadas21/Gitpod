import "./index.css";
import ProjectImg from "../../assets/img/project-img.png";

import React from "react";

export const Project = () => {
  return (
    <section className="project">
      <div className="container">
        <div className="project-inner">
          <h2 className="project-title">Select project,</h2>
          <p className="project-text">
            check dependencies, checkout branch, view
          </p>
          <p className="project-text">
            readme.txt, install tools, run build, run test,
          </p>
          <h2 className="project-title">start coding.</h2>
          <div className="project-box">
            <div className="project-left">
              <h3 className="project-mini-title">
                Think CI/CD for dev environments
              </h3>
              <p className="project-box-text">
                We invented prebuilds so application code, configuration and
                infrastructure can all be stored as machine-executable code in
                your git repositories and applied to dev environments
                automatically and continuously.
              </p>
              <div className="project-bottom">
                <button className="project-btn">
                More on prebuilds
                </button>
                <button className="project-btn">
                Documentation
                </button>
              </div>
            </div>
            <img src={ProjectImg} alt="img" className="project-img" width={590} height={472}/>
          </div>
        </div>
      </div>
    </section>
  );
};
