import pic7 from "./Pictures/pic7.png"

function Main(){
    return(
        <main>
        <div className="mainheader">
            <div className="mainheadertext">
                <h3 className="mainh3">Recent Projects</h3>
                <p> Explore My Projects, Take a look at my projects, explore my coding journey, and discover what I've been building.</p>
            </div>
            <button className="mainheaderbutton">
                <span className="mainheaderbuttontext">View all projects</span>
            </button>
        </div>
        <div className="mainprojects">
            <div className="mainproject">
                <div className="mainprojectpic">
                    <img src={pic7} alt="title" />
                </div>
                <div className="mainprojectinfo">
                    <h2 className="projecttitle">ToDo List</h2>
                    <p className="mainprojectsdescription">A simple Todo app with task creation and deletion, dark/light mode switching, and local storage for saving tasks.</p>
                    <div className="usedtech">
                        <p>React</p>
                        <p>CSS</p>
                    </div>
                    <div className="projectbutton">
                        <button>Try it Live</button>
                        <button>View Details</button>
                    </div>
                </div>
            </div>
        </div>
        </main>
    )
}

export default Main