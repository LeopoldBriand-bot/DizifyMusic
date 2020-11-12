import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MusicCard from "./music-card.component";
import SongHelper from "../dataHelpers/song-helper";
import Carousel, { slidesToShowPlugin, arrowsPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({

  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function RecentlyListened() {
  const classes = useStyles();
  const helper = new SongHelper();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Recently listened</Typography>
        </AccordionSummary>
        <AccordionDetails>
            {/*Fix carousel CSS errors */}
          <Carousel
            plugins={[
              "infinite",
              "centered",
              {
                resolve: arrowsPlugin,
                options: {
                  arrowLeft:<IconButton><NavigateBeforeIcon/></IconButton>,
                  arrowLeftDisabled:<IconButton><NavigateBeforeIcon/></IconButton>,
                  arrowRight: <IconButton><NavigateNextIcon/></IconButton>,
                  arrowRightDisabled: <IconButton><NavigateNextIcon/></IconButton>,
                  addArrowClickHandler: true,
                }
              },
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 3,
                },
              },
            ]}
          >
            {helper.getRecentlyListenedSong().map((song, index) => (
              <MusicCard
                song={song}
                key={index}
              ></MusicCard>
            ))}
          </Carousel>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
