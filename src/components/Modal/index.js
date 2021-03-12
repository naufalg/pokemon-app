import React, { useContext } from "react";
import ReactDOM from "react-dom";

import PokeballDrop from "../PokeballDrop";
import { AppContext } from "../../context/AppContext";
import { ModalWrap } from "./modal.style";

export default function Modal({ children }) {
  const { isModalOpen, setIsModalOpen } = useContext(AppContext);

  const closeModal = (e) => {
    setIsModalOpen(false);
  };

  if (isModalOpen) {
    return ReactDOM.createPortal(
      <ModalWrap className="popup">
        <PokeballDrop />
      </ModalWrap>,
      document.getElementById("modal")
    );
  } else {
    return "";
  }
}
