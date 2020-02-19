import React from "react";
import Page from "./Page/Page";
import IndoorPool from "./IndoorPool/IndoorPool";
import { Grid } from "@material-ui/core";

const pools = [
  {
    photo: "https://media-cdn.tripadvisor.com/media/photo-s/0f/44/53/04/inside-view-of-the-deep.jpg",
    title: "Canada Games Aqautic Center",
    address: "1045 Wonderland Rd North",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://scontent.fyyz1-2.fna.fbcdn.net/v/t31.0-8/14379892_1117412121676503_704683501666345281_o.jpg?_nc_cat=107&_nc_ohc=9eaI1MjW1-oAX-FCrJ_&_nc_ht=scontent.fyyz1-2.fna&oh=51e89bd40eed57c0adeb8f4d570bb378&oe=5EBE19BD",
    title: "Carling Heights Optimist Community Center",
    address: "656 Elizabeth St",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "South London Community Pool",
    address: "585 Bradley Ave",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  }
];

const IndoorPools = () => {
  return (
    <Page title="City of London Aquatics">
      <div style={{ marginTop: 70 }}>
        <Grid container spacing={3}>
          {pools.map((pool, idx) => (
            <Grid key={idx} item xs>
              <IndoorPool pool={pool} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Page>
  );
};
export default IndoorPools;
