import pic8 from "./Pictures/pic8.svg"
import pic9 from "./Pictures/pic9.svg"

function Footer(){
    return(
        <footer className="mainfooter">
            <div className="footertop">

                <div className="footerbrand">
                    <span className="footerlogo">Safarkhah</span>
                    <p className="footertagline">
                        I build interactive web applications and practical
                        solutions using modern technologies.
                    </p>
                </div>

                <div className="footercolumn">
                    <span className="footercolumntitle">Connect</span>
                    <div className="footericons">
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <img className="footericon" src={pic8} alt="GitHub" />
                        </a>
                        <a href="ilyasafarkhah@gmail.com">
                            <img className="footericon gmail" src={pic9} alt="Gmail" />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footerbottom">
                <p className="footercopyright">
                    © {new Date().getFullYear()} Safarkhah
                </p>
                <p className="footermadewith">Built with React</p>
            </div>
        </footer>
    )
}

export default Footer