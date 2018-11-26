import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'semantic-ui-react'
import { closeModal } from './modalActions'

const actions = {
	closeModal
}

const ModalTwo = ({closeModal}) => {
	return (
		<Modal closeIcon="close" open={true} onClose={closeModal}>
			<Modal.Header>Modal Two</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<p>Modal Two .... </p>
				</Modal.Description>
			</Modal.Content>
		</Modal>
	)
}

export default connect(null, actions)(ModalTwo);
