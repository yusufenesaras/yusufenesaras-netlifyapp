/* eslint-disable react/jsx-no-target-blank */
import "./topbar.scss";
import { GitHub, Mail, Book } from "@material-ui/icons";
import { Button, Container } from "@material-ui/core";

export default function Topbar({ menuOpen, setMenuOpen }) {

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo" style={{color:"whitesmoke"}}>
            YEA
          </a>
          <div className="itemContainer">
            <Button variant="outlined" color="primary" size="large" style={{borderColor:"white"}} >
              <a href="https://github.com/yusufenesaras" target="_blank" style={{textDecoration:"none", color:"whitesmoke"}} >
              <GitHub className="icon" style={{ marginLeft: "7px" }} />
              Github
              </a>
            </Button>
          </div>
          <div className="itemContainer">
            <Button variant="outlined" color="primary" size="large" style={{borderColor:"white"}}>
              <a href="mailto:enesaras551@gmail.com" style={{textDecoration:"none", color:"whitesmoke"}}>
              <Mail className="icon" style={{ marginLeft: "7px" }} />
              Mail
              </a>
            </Button>
          </div>
          <div className="itemContainer">
            <Button variant="outlined" color="primary" size="large" style={{borderColor:"white"}}>
              <a href="/images/YEA-CV.pdf" target="_blank"  style={{textDecoration:"none", color:"whitesmoke",borderRadius:"5px"}}>
              <Book className="icon" style={{ marginLeft: "7px" }} />
              My CV
              </a>
            </Button>
          </div>
        </div>
        <div className="containerP">
          <Container>
            <h3 style={{color:"whitesmoke"}}>
            Break the loop!
            </h3>

          </Container>
        </div>
        <div className="right" >
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
