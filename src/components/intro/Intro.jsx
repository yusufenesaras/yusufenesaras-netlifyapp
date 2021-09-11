import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { SkillBars } from "react-skills";
import { Container } from "@material-ui/core";

export default function Intro() {
  const textRef = useRef();

  const skillsData = [
    {
      name: "C#",
      level: 70,
      color: "Green",
    },
    {
      name: "Java",
      level: 60,
      color: "Orange",
    },

    {
      name: "Python",
      level: 45,
      color: "Blue",
    },
    {
      name: "SQL",
      level: 40,
      color: "Grey",
    },
    {
      name: "JavaScript",
      level: 30,
      color: "Yellow",
    },
    {
      name: "React",
      level: 25,
      color: "Aqua",
    },
  ];

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 20,
      strings: ["Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="images/4401280_adobespark.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {" "}
          <br /> <br /> <br />
          <h2>
          Hi There, I'm <br/>

          Yusuf Enes Aras <br/>

            Software <span style={{color:"red"}} ref={textRef}></span>
          </h2>
          <br /> <br />
          <div className="skilssBorder">
            <Container className="skilssBorder">
            <h1 style= {{color:"#170055"}}>My Skilss</h1>
            <SkillBars skills={skillsData} className = "skillbar"/>
            </Container>
            
          </div>
        </div>
        <a href="#portfolio">
          <img src="images/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
