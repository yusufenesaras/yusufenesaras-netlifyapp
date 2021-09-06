import { useState } from "react";
import "./contact.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { Twitter, Instagram, Facebook, Reddit } from "@material-ui/icons";
export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/images/20943705.jpg" />
      </div>
      <div className="right">
        <h2>Send me a message</h2>
        <form onSubmit={handleSubmit}>
          {/* <input type="text" placeholder="Email" /> */}
          <TextField
            margin="normal"
            required
            fullWidth
            name="Email"
            label="Email"
            type="Email"
            id="Email"
            autoComplete="email"
          />

          <TextField
            margin="normal"
            fullWidth={true}
            name="Message"
            label="Message"
            type="text"
            id="Message"
            autoComplete="Message"
            required={true}
            multiline={true}
          />
          <div className="buttonCSS">
            <span>
              <button type="submit">Send</button>
            </span>
          </div>
          {message && <span>Thank you, I will reply as soon as possible.</span>}
        </form>
        <div>
          {/* <a href="https://twitter.com/y_enesaras" target="_blank">  */}
          <a href="https://twitter.com/y_enesaras" target="_blank">
          <Twitter className="icon" style={{ marginLeft: "10px" }} />
          </a>
          <a href="https://instagram.com/y.enesaras" target="_blank">
          <Instagram className="icon" style={{ marginLeft: "10px" }} />
          </a>
          <a href="https://www.reddit.com/user/yenesaras" target="_blank">
          <Reddit className="icon" style={{ marginLeft: "10px" }} />
          </a>
          
          <a href="https://www.facebook.com/yusufenes.aras.5" target="_blank">
          <Facebook className="icon" style={{ marginLeft: "10px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
