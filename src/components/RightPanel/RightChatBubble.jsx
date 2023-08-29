import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";

export default function RightChatBubble({chat}) {
  return (
    <MDBContainer fluid>
      <div className="d-flex flex-row justify-content-end">
        <div>
          <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
            {chat.text}
          </p>
          <p className="small me-3 mb-3 rounded-3 text-muted">
            { chat.timestamp.split(/,/)[0] }  | {chat.timestamp.split(/,/)[1] || "5/18/2023"}
          </p>
        </div>
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar 1"
          style={{ width: "45px", height: "100%" }}
        />
      </div>
    </MDBContainer>
  );
}
