import React from "react";

function Home() {
  return (
    <div>
      <div className="Background">
        <h1 className="BackgroundText">THE</h1>
        <h1 className="BackgroundText2">COOKBOOK</h1>
      </div>
      <div className="HeaderBottom">
        <div>
          <h1 className="HomeText">
            The ultimate cookbook with a total of recipes. Look around, maybe
            you find something that you would like to cook today. If not, we
            won't be offended.
          </h1>
        </div>
      </div>
      <div className="Button">
        <a href="/recipes">
          <button>SEE RECIPES</button>
        </a>
      </div>
    </div>
  );
}

export default Home;
