import Header from "./Header";

function Home() {
    return (
        <div className="home">
            <Header />
            <section className="star-wars">
                <div className="crawl">
                    <div className="title">
                    <p>Episode IV: Digital Horizon Project</p>
                    <h1>SWAPI PROJECT</h1>
                    </div>
                    
                    <p>A long time ago, in a galaxy far far away...</p>     
                    <p>The Resistance member Sahra Di Bernardi was challenged by Digital Horizon`s Recruitment process to build a website using StarWars API (Swapi)</p>
                    <p>Using JavaScript, React.js, ContextAPI, ReactRouter, HTML, and CSS she flew away from the Imperial TIE Fighters to reach home and finally deliver the complete project to the Resistence leaders</p>
                    <p>She`s sure that the project can be improved, but that`ll take the help and feedback of the Senior members of the Resistence</p>
                    <p>Will you help her?</p>
                </div>
            </section>
        </div>
    );
}

export default Home;
