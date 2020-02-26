import React from "react";
import Image from "react-image-resizer";

function ContactCard(props) {
  return (
    <div className="contact-card">
      <Image src={props.contact.imgUrl} height={250} width={250} />
      <h4>Location: {props.contact.location}</h4>
      <p>City: {props.contact.city}</p>
      <p>Month: {props.contact.month}</p>
      <p>Year: {props.contact.year}</p>
    </div>
  );
}

export default ContactCard;
