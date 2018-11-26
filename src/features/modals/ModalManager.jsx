import React from 'react'
import { connect } from 'react-redux'
import TestModal from './TestModal'
import LoginModal from './LoginModal'
import RegisterModal from './RegisterModal'
import ModalOne from './ModalOne'
import ModalTwo from './ModalTwo'

const modalLookup = {
	TestModal,
	LoginModal,
	RegisterModal,
	ModalOne,
	ModalTwo
}

const mapState = (state) => ({
	currentModal: state.modals
})

const ModalManager = ({currentModal}) => {
	let renderModal;

	if (currentModal) {
		const {modalType, modalProps} = currentModal;
		const ModalComponent = modalLookup[modalType];

		renderModal = <ModalComponent {...modalProps} />
	}
	return <span>{renderModal}</span>
}

export default connect(mapState)(ModalManager);
