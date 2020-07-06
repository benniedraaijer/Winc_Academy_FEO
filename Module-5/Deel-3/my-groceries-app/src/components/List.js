// import React from "react";
// import ListItem from "./ListItem";

// export default class List extends React.Component {
//   render() {
//     const products = this.state.groceryItems.map((item) => (
//       <ListItem 
//       key={item.id} 
//       className="list-item" 
//       value={item.title} 
//       />
//     ));
//     return <ul> {products} </ul>
//   }
// }

import React from "react";
import ListItem from "./ListItem";

export default class List extends React.Component {
  render() {
    const { items, readonly, handleClickItem } = this.props;
    const listItems = items
      ? items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            readonly={readonly}
            clickItem={handleClickItem}
          />
        ))
      : " ";

    return (
        <ul>{listItems}</ul>
    );
  }
}