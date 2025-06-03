import React from "react";
import PropTypes from "prop-types";
import "./modal.css";

function Modal({ display, setDisplay, message, params }) {
	const toggleModal = () => {
		setDisplay(false);
		if (params.onClose && typeof params.onClose === "function") {
			params.onClose(); // Appelle une fonction fournie par le parent
		}
	};

	return (
		<div className={`modal-container ${display ? "show" : "hide"}`}>
			<div className="overlay" onClick={toggleModal} />
			<div className="modal-info">
				<p className="message">{message}</p>
				<button
					className="modal-button"
					style={{
						backgroundColor: params.bgColor || "#007bff",
						color: params.Color || "#fff",
						borderColor: params.bgColor || "#007bff",
					}}
					onClick={toggleModal}
				>
					OK
				</button>
			</div>
		</div>
	);
}

Modal.propTypes = {
	display: PropTypes.bool.isRequired,
	setDisplay: PropTypes.func.isRequired,
	message: PropTypes.string.isRequired,
	params: PropTypes.shape({
		bgColor: PropTypes.string,
		Color: PropTypes.string,
		onClose: PropTypes.func, // Fournie par le parent
	}),
};

export default Modal;