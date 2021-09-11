import "./aboutMe.scss";
import "./text.css";
export default function AboutMe() {
  const data = [
    {
      id: 1,
      name: "I live in Izmir",
      title: (
        <a
          href="https://en.wikipedia.org/wiki/%C4%B0zmir"
          target="_blank"
          style={{
            textDecorationColor: "red",
            textDecoration: "none",
            fontFamily: "unset",
          }}
        >
          About Izmir
        </a>
      ),
      img: "https://cdn.pixabay.com/photo/2015/10/16/09/19/izmir-990733_960_720.jpg",
      desc: "I was born and raised in Izmir, I love the city I live in. I hope you will visit one day.",
    },
    {
      id: 2,
      name: "Yusuf Enes Aras",
      title: "Software Developer",
      img: "https://image.flaticon.com/icons/png/512/2115/2115955.png",
      desc: "Hello, I am Yusuf Enes Aras, a software developer. I love my job and I always enjoy doing this job. My projects that I have developed as Backend and Frontend are available on my github address.I like to research, read, discuss, write code. I like sci-fi dramas, table tennis and sometimes solving geometry. Thank you for reading. :)",
      featured: true,
    },
    {
      id: 3,
      name: "Trakya University",
      title: "Information Systems and Technologies",
      img: "https://cdn.freelogovectors.net/wp-content/uploads/2020/07/trakya-universitesi-logo.png",
      desc: "I am studying at Trakya University, Department of Information Systems and Technologies. I got a good basic knowledge from my school and I am constantly improving myself.",
      className:"carduni"
    },
  ];
  return (
    <div className="aboutMe" id="aboutMe">
      {" "}
      {/* <br />
      <h1 className="about">About Me</h1> */}
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom" style={{ textAlign: "center" }}>
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
