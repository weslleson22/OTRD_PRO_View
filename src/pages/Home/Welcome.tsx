import React from "react";
import ImageLogo from "./Components/ImageLogo";
import WelText from "./Components/WelText";
import WelButton from "./Components/WelButton";

function Welcome() {
  return (
    <div>
      <div>
        <ImageLogo></ImageLogo>
        
        <WelButton></WelButton>

        <WelText></WelText>
      </div>
    </div>
  );
}

export default Welcome;
