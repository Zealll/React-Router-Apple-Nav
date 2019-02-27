import React from "react";


function NewIpad(props) {
  
  const item = props.ipad.find(each => each.name === props.match.params.apple);
  if (!item) {
    return <h3> Loading Your Apple Product...</h3>;
  }
  return (
    <div className="item-wrapper">
      <div className="item-header">
        <div className="image-wrapper">
          <img src={item.icon} alt={item.name} />
        </div>
        <div className="item-title-wrapper">
          <h2>{item.name}</h2>
        </div>
      </div>
    </div>
  );
}

export default NewIpad;