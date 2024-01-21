import "./logos.css"
import bash from "../../assets/img2/githab.png";
import fre from "../../assets/img2/fre.png";
import wark from "../../assets/img2/wark.png";
import google from "../../assets/img2/google.png";
import amazon from "../../assets/img2/amazon.png";
import facebok from "../../assets/img2/facebokk.png";
import uber from "../../assets/img2/uber.png";
import open from "../../assets/img2/open.png";
import intel from "../../assets/img2/intel.png";
import thera from "../../assets/img2/thera.png";
import code from "../../assets/img2/code.png";
import inter from "../../assets/img2/inter.png";

export const Logos = () => {
    return (
        <section className="logos">
            <div className="container">
                <div className="logos-inner">
                <ul className="logos-list">
                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={bash} alt="" width={95} height={42}/>
                      </a>
                    </li>

                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={fre} alt="" width={130} height={16}/>
                      </a>
                    </li>

                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={wark} alt="" width={124} height={82}/>
                      </a>
                    </li>

                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={google} alt="" width={85} height={29}/>
                      </a>
                    </li>

                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={amazon} alt="" width={88} height={26}/>
                      </a>
                    </li>

                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={facebok} alt=""width={95} height={18} />
                      </a>
                    </li>
                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={uber} alt="" width={95} height={32}/>
                      </a>
                    </li>
                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={open} alt="" width={138} height={32}/>
                      </a>
                    </li>
                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={intel} alt="" width={76} height={50}/>
                      </a>
                    </li>
                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={thera} alt="" width={105} height={15}/>
                      </a>
                    </li>

                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={code} alt=""width={95} height={42} />
                      </a>
                    </li>

                    <li className="logos-item">
                      <a href="#" className="logos-item-link">
                        <img className="logos-item-img" src={inter} alt="" width={86} height={30}/>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
        </section>
    )
}