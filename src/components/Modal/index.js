import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "../../context/AppContext";
import { ModalBackground } from "./modal.style";

export default function Modal({ children, backClose }) {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  if (isModalOpen) {
    return ReactDOM.createPortal(
      <ModalBackground
        onClick={() => {
          setIsModalOpen(false);
        }}
      >
        {children}
      </ModalBackground>,
      document.getElementById("modal")
    );
  } else {
    return "";
  }
}
