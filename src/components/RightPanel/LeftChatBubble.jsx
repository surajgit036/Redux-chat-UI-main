import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

export default function LeftChatBubble({chat,image}) {
  return (
    <MDBContainer fluid>
         <div className="d-flex flex-row justify-content-start">
                      <img
                        src={`https://mdbootstrap.com/img/new/avatars/${image}.jpg`}
                        alt="avatar 1"
                        style={{ width: "45px", height: "100%", borderRadius: "50%" }}
                      />
                      <div>
                        <p
                          className="small p-2 ms-3 mb-1 rounded-3"
                          style={{ backgroundColor: "#f1f9f5" }}
                        >
                         {chat.text}
                        </p>
                        <p className="small ms-3 mb-3 rounded-3 text-muted float-end">
                          12:00 PM | 5/18/2023
                        </p>
                      </div>
                    </div>
    </MDBContainer>
  )
}
