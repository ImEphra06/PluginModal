import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./modal.css";

function Modal({ display, setDisplay, message, params }) {
	const navigate = useNavigate();

	const toggleModal = () => {
		setDisplay(!display);
		if (params.link) navigate(params.link);
	};

	return (
		<div className={`modal-container ${display ? "show" : "hide"}`}>
			<div className="overlay" />
			<div className="modal-info">
				<p className="message">{message}</p>
				<button
					className="modal-button"
					style={{
						backgroundColor: params.bgColor,
						color: params.Color,
						borderColor: params.bgColor,
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
	params: PropTypes.object.isRequired,
};

export default Modal;