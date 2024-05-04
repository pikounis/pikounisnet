import React from "react";
import myphoto from '/photo.jpg';
import Avatar from '@mui/material/Avatar';

function Photo() {
  return <Avatar alt="Anastasios Pikounis" src={myphoto} sx={{ width: 250, height: 250 }} />;
}

export default Photo;




// import React from "react";
// import myphoto from '/photo.jpg';
// import Avatar from '@mui/material/Avatar';
// import VerifiedIcon from '@mui/icons-material/Verified';
// import Box from '@mui/material/Box';
// import { blue } from '@mui/material/colors';
//
// function Photo() {
//     return (
//         <Box position="relative" sx={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
//             <Avatar alt="Anastasios Pikounis" src={myphoto} sx={{ width: 250, height: 250 }} />
//             <Box
//                 position="absolute"
//                 bottom={22} // Adjusted to align better with the avatar's curve
//                 right={22}
//                 sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     bgcolor: 'background.paper',
//                     borderRadius: '50%',
//                     p: 0.5,
//                     border: '2px solid',
//                     borderColor: 'background.paper',
//                     boxShadow: 'none', // Ensuring no shadow is applied
//                     width: 30, // Maintaining a suitable size for visibility
//                     height: 30, // Matching width and height for a perfect circle
//                 }}
//             >
//                 <VerifiedIcon sx={{ color: blue[500], fontSize: 20 }} />
//             </Box>
//         </Box>
//     );
// }
//
// export default Photo;
