// import React from "react";
// import { dataClient } from "../firebase/data-client";

// // Create Context
// export const ClientContext = React.createContext();

// // Provider
// export const ClientProvider = (props) => {
//   const [clients, setClients] = React.useState([]);

//   const getData = async () => {
//      data = await dataClient;
//     setClients(dataClient);
//   };

//   getData();

//   return (
//     <ClientContext.Provider value={[clients, setClients]}>
//       {props.children}
//     </ClientContext.Provider>
//   );
// };


// const getData = async () => {
//   const FireStore = await firebase
//     .firestore()
//     .collection("fav-songs")
//     .orderBy("song")
//     .get();

//   FireStore.forEach((item) => {
//     db.push({
//       artist: item.data().artist,
//       song: item.data().song,
//       genre: item.data().genre,
//       rating: item.data().rating,
//       id: item.id,
//     });
//   });
// };
