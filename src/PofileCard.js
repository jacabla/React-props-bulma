import React from "react";

export default function PofileCard(props) {
  // const title =  props.title
  // const handle = props.handle
  // haciendo destructuring podemos hacer lo mismo de arribas asi

  const { title, handle, imageSrc, description } = props;

  return (
    // se puede aplicar arguement destructuring
    //haciendo const
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={imageSrc} alt="imagen"></img>
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">
          {description}
        </div>
      </div>
    </div>
  );
}
