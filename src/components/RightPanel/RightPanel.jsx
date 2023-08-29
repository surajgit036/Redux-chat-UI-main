import React from "react";
import { MDBContainer, MDBListGroupItem } from "mdb-react-ui-kit";

import ChatBox from "./ChatBox";
import ChatForm from "./ChatForm";

export default function RightPanel({ currmessage }) {
  return (
    <MDBContainer fluid className="right-panel d-flex flex-column">
      <MDBListGroupItem
        className="head d-flex justify-content-center align-items-center border-0 shadow-none border-bottom mb-4"
        style={{ backgroundColor: "#f8f8f8", width: "100%" }}
      >
        <div className="d-flex align-items-center">
          <img
            src={`https://mdbootstrap.com/img/new/avatars/${currmessage.id}.jpg`}
            alt=""
            style={{ width: "40px", height: "40px" }}
            className="rounded-circle"
          />
          <div className="ms-3" style={{ fontSize: "20px" }}>
            {currmessage.name}
          </div>
        </div>
      </MDBListGroupItem>
      <div className="flex-grow-1">
        <ChatBox currmessage={currmessage} />
      </div>
      <div>
        <ChatForm currmessage={currmessage} />
      </div>
    </MDBContainer>
  );
}
