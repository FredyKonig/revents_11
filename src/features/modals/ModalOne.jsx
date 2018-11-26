import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import { closeModal } from './modalActions'

const actions = {
	closeModal
}

const ModalOne = ({closeModal}) => {
	return (
		<Modal closeIcon="close" open={true} onClose={closeModal}>
			<Modal.Header>Modal One</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<p>Modal One .... </p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	)
}

export default connect(null, actions)(ModalOne);
