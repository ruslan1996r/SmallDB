import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { SmallContext } from "../../context/state"
import { useModalStyles } from "../../styles/makeStyles"

export default function TransitionsModal(props) {
  const { showModal, changeModalShow } = useContext(SmallContext)
  const classes = useModalStyles();

  return (
    <div>
      <button type="button" onClick={() => changeModalShow(true)}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={showModal}
        onClose={() => changeModalShow(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 150,
        }}
      >
        <Fade in={showModal}>
          <div className={classes.paper}>
            {props.children}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}