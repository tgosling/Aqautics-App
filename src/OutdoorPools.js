import React from "react";
import Page from "./Page/Page";
import OutdoorPool from "./OutdoorPool/OutdoorPool";
import { Grid, Typography } from "@material-ui/core";

const pools = [
  {
    photo: "https://media-cdn.tripadvisor.com/media/photo-s/0f/44/53/04/inside-view-of-the-deep.jpg",
    title: "Byron Pool",
    address: "1308 Norman Ave",
    phone: "(519) 661-4405",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://scontent.fyyz1-2.fna.fbcdn.net/v/t31.0-8/14379892_1117412121676503_704683501666345281_o.jpg?_nc_cat=107&_nc_ohc=9eaI1MjW1-oAX-FCrJ_&_nc_ht=scontent.fyyz1-2.fna&oh=51e89bd40eed57c0adeb8f4d570bb378&oe=5EBE19BD",
    title: "Gibbons",
    address: "2 Grosvernor St",
    phone: "(519) 661-4407",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Glen Cairn",
    address: "370 Chippendale Cres",
    phone: "(519) 661-4408",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "North East",
    address: "1050 Victoria Dr",
    phone: "(519) 661-4409",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Northridge",
    address: "15 McLean Dr",
    phone: "(519) 661-4412",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Oakridge",
    address: "825 Valetta St",
    phone: "(519) 661-4424",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Silverwood",
    address: "36 Sycamore St",
    phone: "(519) 661-4413",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Southcrest",
    address: "10 Hazelwood Ave",
    phone: "(519) 661-4415",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Stronach",
    address: "1221 Sandford St",
    phone: "(519) 661-4416",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Thames",
    address: "15 Ridout St",
    phone: "(519) 661-4417",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  },
  {
    photo: "https://1.bp.blogspot.com/_XgElt6Kl0rs/TOQ-grDGVgI/AAAAAAAAABk/R5JTUClfnyg/s1600/Jr.HighSwimmingNov16th2010.JPG",
    title: "Westminister",
    address: "650 Osgoode Dr",
    phone: "(519) 661-4418",
    schedule: () => {
      console.log("Schedule");
    },
    book: () => {
      console.log("Book");
    }
  }
];

const OutdoorPools = () => {
  return (
    <Page title="City of London Aquatics">
      <div style={{ marginTop: 70, marginLeft: 10 }}>
      <Typography variant="h3" color="inherit">Outdoor Pools</Typography>
        <Grid container spacing={2}>
          {pools.map((pool, idx) => (
            <Grid key={idx} item xs>
              <OutdoorPool pool={pool} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Page>
  );
};
export default OutdoorPools;
