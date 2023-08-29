import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import RightPanel from "./components/RightPanel/RightPanel";

const App = () => {
  const message = useSelector((state) => state.conversation.conversations);
  const currmessage = useSelector(
    (state) => state.conversation.currentConversation
  );

  return (
    <MDBContainer fluid className="App">
      <MDBRow>
        <MDBCol md="4">
          <LeftPanel />
        </MDBCol>
        <MDBCol md="8">
          <RightPanel currmessage={currmessage} />
        </MDBCol>
      </MDBRow>
      {console.log(message)}
    </MDBContainer>
  );
};

export default App;
