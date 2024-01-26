import React from "react";
import myphoto from '../../../../../public/photo.jpg';
import Avatar from '@mui/material/Avatar';

function Photo() {
  return <Avatar alt="Anastasios Pikounis" src={myphoto} sx={{ width: 250, height: 250 }} />;
}

export default Photo;