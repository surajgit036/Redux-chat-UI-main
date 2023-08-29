import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';
import { set } from '../../Store';

export default function App({contact}) {
  const [basicModal, setBasicModal] = useState(false);
  const dispatch = useDispatch();

  const toggleShow = () => setBasicModal(!basicModal);

  return (
    <>
      <i className="fa-solid fa-plus-circle add" onClick={toggleShow}></i>
      <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Start a new Conversation</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
            {contact.map((item) => {
          return (
            <MDBListGroupItem
              className="d-flex justify-content-between align-items-center"
              onClick={() => {
                toggleShow();
                dispatch(set(item))
              }
            }
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
                </div>
              </div>
            </MDBListGroupItem>
          );
        })}
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleShow}>
                Close
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}