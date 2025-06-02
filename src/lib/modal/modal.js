import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./modal.css";

function Modal({ display, setDisplay, message, params }) {
	const navigate = useNavigate();

	const handleClose = () => {
		setDisplay(false);
		if (params.link) {
			navigate(params.link);
		}
	};

	if (!display) return null;

	return (
		<div className="modal-container show">
			<div className="overlay" onClick={handleClose} />
			<div className="modal-info">
				<p className="message">{message}</p>
				<button
					className="modal-button"
					style={{
						backgroundColor: params.bgColor || "#007bff",
						color: params.Color || "#fff",
						borderColor: params.bgColor || "#007bff",
					}}
					onClick={handleClose}
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