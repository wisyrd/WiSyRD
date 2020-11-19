import React from 'react'

export default function Modal(props) {
    function hideModal() {
        props.setGlobalState({
            modal: {
                show: false,
                contents: ""
            }
        })
    }

    function handleModalClick(event){
        if (event.target.classList.contains("modalBackground"))
        {
            hideModal();
        }
    }

    return (props.modal.show ? 
        (<div className="modalBackground"
        onClick={handleModalClick}
            style={{
            position: "fixed",
            zIndex: "100000",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#000000dd",
            margin: "none",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"}}>
        <div className="modal"
              style={{position: "fixed",
                      zIndex: "100000",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)"}}>
            {props.modal.contents}
        </div>
        </div>) 
        : ""
    )
}
