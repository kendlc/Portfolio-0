import React from "react";

const Home = () => {

    const bg = {
        height: `100vh`,
        background: 'url("./images/bg1.png") no-repeat 50% 100%',
        backgroundSize: 'cover'
    }

    return (
        <div 
        id="home"
        className="home"
        style={bg}>
            Home coming soon
        </div>
    );
}

export default Home;