import React, { Fragment, useState } from "react";
import Modal from './Modal'

export default function useModal() {
  let [modal, toggleModal] = useState(true);

    const ModalContent = ({children}) => {
        return (
            <Fragment>
            {
                modal &&
                <Modal toggleModal={toggleModal} modal={modal}>
                    {children}
                </Modal>
            }
        </Fragment>
        )

    }


  return { toggleModal, ModalContent };
};