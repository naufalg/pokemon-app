import React, {  useContext } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "../../context/AppContext";
import { ModalWrap } from "./modal.style";

export default function Modal({ children }) {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  const closeModal = (e) => {
    if (
      e.target.className === "popup" ||
      e.target.className === "popup-voucher-close"
    ) {
      setIsModalOpen(false);
    }
  };

  if (isModalOpen) {
    return ReactDOM.createPortal(
      <ModalWrap className="popup" onClick={closeModal}>
        Modal
        {children}
      </ModalWrap>,
      document.getElementById("modal")
    );
  } else {
    return "";
  }
}
