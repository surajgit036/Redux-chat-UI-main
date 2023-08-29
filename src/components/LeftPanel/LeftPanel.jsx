import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set } from "../../Store";
import { MDBContainer,MDBListGroup,MDBListGroupItem,} from "mdb-react-ui-kit";

import Search from "./Search";
import NewConversation from "./NewConversation";

export default function LeftPanel() {

  const contact = useSelector((state) => state.conversation.conversations);
  const [searchtext, setSearchtext] = useState("");
  const dispatch = useDispatch();
  
 
  const convos = contact.filter((item) => {
    return item.chatlog.length > 0;
  });

  const filteredContacts = convos.filter((item) => {
    //this will return only the contacts whose name is same as searched input
    return item.name.toLowerCase().includes(searchtext.toLowerCase());
  });

  return (
    <MDBContainer  className="left-panel w-30">
      <Search setSearchtext={setSearchtext}/>
      <MDBListGroup  light>
        <MDBListGroupItem className="d-flex justify-content-between align-items-center">
          <span style={{color:"#575454",fontSize:"13px"}} className="fw-bold ">CONVERSATIONS</span>
          <NewConversation contact={contact}/>
        </MDBListGroupItem>
        {filteredContacts.map((item) => {
          return (
            <MDBListGroupItem
              className="d-flex justify-content-between align-items-center contact-item"
              onClick={() => dispatch(set(item))}
            >
              <div className="d-flex align-items-center">
                <img
                  src={`https://mdbootstrap.com/img/new/avatars/${item.id}.jpg`}
                  alt=""
                  style={{ width: "45px", height: "45px" }}
                  className="rounded-circle"
                />
                <div className="ms-3">
                  <p className="fw-bold mb-1"> {item.name}</p>
                  <p className="text-muted mb-0" style={{fontSize:'13px'}}>{item.chatlog[item.chatlog.length-1].text.slice(0,75)}</p>
                </div>
              </div>
            </MDBListGroupItem>
          );
        })}
      </MDBListGroup>
    </MDBContainer>
  );
}
