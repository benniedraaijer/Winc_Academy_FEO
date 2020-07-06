// import React from "react";

// export default function ListItem(props) {
//   return (
//     <li className="list-item" value={props.title}>
//       {props.value}
//     </li>
//   );
// }


import React from "react";

const ListItem = ({ clickItem, readonly, item }) => {
  return (
    <li
      key={item.id}
      className="list-item"
      onClick={clickItem}
      value={item.title}
    >
      <span> {item.title || ""}</span>
      <span>{readonly ? `Hoeveelheid: ${item.amount}` : ""}</span>
    </li>
  );
};

export default ListItem;