/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import "./text.css"
import {
  featuredPortfolio,
  // webPortfolio,
  // mobilePortfolio,
  // designPortfolio,
  // contentPortfolio,
} from "../../data";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {
  GitHub,
} from "@material-ui/icons";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  // const classes = makeStyles();
  const classes = makeStyles();
  // const handleExpandClick = () => {
  //   setSelected(!selected);
  // };
 
  const list = [
    {
      id: "featured",
      title: "My Projects",
    },

    // {
    //   id: "web",
    //   title: "Web App",
    // }, // DAHA SONRA YAPTIĞIM WEB PROJELERİNİ EKLEYECEĞİM
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;

      // case "web":
      //   setData(webPortfolio);
      //   break;
      // case "mobile":
      //   setData(mobilePortfolio);
      //   break;
      // case "design":
      //   setData(designPortfolio);
      //   break;
      // case "content":
      //   setData(contentPortfolio);
      //   break;
      // default:
      //   setData(featuredPortfolio);
    }
  }, [selected]);

  // const useStyles = makeStyles({
  //   root: {
  //     maxWidth: 345,
  //   },
  //   media: {
  //     height: 140,
  //   },
  // });
  const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  return (
    <div className="portfolio" id="portfolio"> <br/>
      <h1 className="port">Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
      <br />
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            width = "150"
            height="140"
            src="images/photo-1498050108023-c5249f4df085.png"
            title="Contemplative Reptile"
            // style={useStyles.media}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              All My Projects
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <h4>
                All projects so far can be found on my github here. You can
                click this for information: learn more
              </h4>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {/* <Button size="small" color="primary">
          Share
        </Button> */}
          <GitHub className="icon" style={{ marginLeft: "10px" }} />
            <span>
              <a
                href="https://github.com/yusufenesaras"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                Learn More
              </a>
            </span>
        </CardActions>
      </Card>
    </div>
  );
}
