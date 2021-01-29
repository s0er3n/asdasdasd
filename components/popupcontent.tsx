import * as React from "react";
const simage = { width: "100%" };

export default function PopupContent(props: any) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>
        {props.category.map((category: string) => category.toUpperCase())}
      </h5>
      <img style={simage} alt="" src={props.img} />
      <h4>Infos:</h4>
      <p>{props.info}</p>
      <h4>Reason:</h4>
      <p>{props.reason}</p>
      <a href={props.website} target="_blank" rel="noopener noreferrer">
        <button type="button"> Webseite</button>
      </a>
      <a href={props.googlemaps} target="_blank" rel="noopener noreferrer">
        <button type="button"> Google Maps</button>
      </a>
    </div>
  );
}
