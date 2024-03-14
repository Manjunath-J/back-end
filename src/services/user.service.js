import User from '../models/user.model';
// const geolocation = require('geolocation');

export const newUser = async (body) => {
  const data = await User.create(body);
  return data;
};

export const login = async (body) => {
  console.log(body);

  // let Latitude ;
  // let Longitute;
  // geolocation.getCurrentPosition((err,position)=>{
  //   if(err){
  //     return err;
  //   }

  //   Latitude = position.coords.latitude;
  //   Longitute = position.coords.longitude;
  //   console.log(position.coords.latitude);
  //   console.log(position.coords.longitude);
  // })
  const data = await User.findOne({UserID: body.UserID, Password: body.Password});
  if(!data){
    throw new Error('Mismatch');
  }
  // return {...data,latitude:Latitude,longitude:Longitute};
  return data;
};

// import User from '../models/user.model';

// export const newUser = async (body) => {
//   const data = await User.create(body);
//   return data;
// };

// export const login = async (body) => {
//   console.log(body);

//   // Check if geolocation is supported by the browser
//   if ('geolocation' in navigator) {
//     // Get geolocation data
//     return new Promise((resolve, reject) => {
//       navigator.geolocation.getCurrentPosition(
//         async (position) => {
//           const { latitude, longitude } = position.coords;
//           console.log(latitude);
//           try {
//             // Find user based on credentials
//             const data = await User.findOne({ UserID: body.UserID, Password: body.Password });
//             if (!data) {
//               throw new Error('Mismatch');
//             }
//             resolve({ ...data.toObject(), latitude, longitude });
//           } catch (error) {
//             reject(error);
//           }
//         },
//         (error) => {
//           reject(new Error('Failed to retrieve geolocation data.'));
//         }
//       );
//     });
//   } else {
//     throw new Error('Geolocation is not supported by this browser.');
//   }
// };


