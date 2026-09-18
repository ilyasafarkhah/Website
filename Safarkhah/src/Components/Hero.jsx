import pic from "./Pictures/pic1.jpg"
import pic3 from "./Pictures/pic3.svg"
import pic4 from "./Pictures/pic4.svg"
import pic5 from "./Pictures/pic5.svg"
import pic6 from "./Pictures/pic6.svg"
 
function Hero(){
    return(
        <>
        <div className="mainhero">
            <div className="mainherotext">
                <span className="herobadge">🤝 I'm</span>
                <h1>Ilya Safarkhah</h1>
 
                <p className="herobio">
                    Aspiring <span className="textheading">Full-stack developer</span> who
                    started with Python and got hooked on turning designs into working code.
                </p>
                <p className="herobio">
                    My goal: take an idea from a Figma file to a fully working app.
                </p>
                <p className="herobio">
                    Still early in my journey <span className="herostat">4 months in</span> —
                    check out my projects below or reach out, I'd love to connect!
                </p>
 
                <div className="herobuttons">
                    <button type="button"><span className="btntxt">Explore Projects</span></button>
                    <button type="button"><span className="btntxt">About me</span></button>
                </div>
            </div>
 
            <div className="mainheropic">
                <div className="mainheropicglow"></div>
                <img src={pic} alt="Ilya Safarkhah" />
            </div>
        </div>
 
        <div className="heroicon">
            <div className="heroiconbox">
                <img className="heroiconlogo" src={pic3} alt="HTML" />
                <span className="heroicontxt">HTML</span>
            </div>
            <div className="heroiconbox">
                <img className="heroiconlogo" src={pic4} alt="CSS" />
                <span className="heroicontxt">CSS</span>
            </div>
            <div className="heroiconbox">
                <img className="heroiconlogo" src={pic5} alt="JavaScript" />
                <span className="heroicontxt">JavaScript</span>
            </div>
            <div className="heroiconbox">
                <img className="heroiconlogo" src={pic6} alt="React" />
                <span className="heroicontxt">React</span>
            </div>
        </div>
        </>
    )
}
 
export default Hero