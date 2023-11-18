import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return <div> 
        <nav>
            <Link to="/info"><h2>Info</h2></Link>
        </nav>
        <h1>Welcome, This is homepage</h1>
        <img src="https://pbs.twimg.com/media/EynUe_qWQAIiTvi.png" alt="bs" style={{width: '300px'}}/>
    </div>
}

export default Home