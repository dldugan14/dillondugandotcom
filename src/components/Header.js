import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import { makeStyles } from "@material-ui/core/styles"

import config from '../../config';
const pic = require('../assets/images/avatar.jpeg');

const useStyles = makeStyles(()=>({
large: {
  height: '150px',
  width: '150px',
}
}))



export default function Footer() {
  const classes = useStyles();

  return (
    <header>
      <span className="avatar">
        <Avatar src={pic} className={classes.large}></Avatar>    
      </span>
      <h1>{config.authorName}</h1>
      <p>{config.heading}</p>
    </header>
  );
}
