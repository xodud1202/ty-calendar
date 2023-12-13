import styled from '@emotion/styled';
import { useState } from 'react';

const HamburgerWrapper = styled.div`
	width: 100%;
	height: 0;
	padding-bottom: 100%; // This keeps aspect-ratio of 1:1
	position: relative;
`;

const Line = styled.div`
	background-color: black;
	height: 10%;
	width: 80%;
	position: absolute;
	left: 10%;
	transition:
		transform 0.3s ease-in-out,
		opacity 0.3s ease-in-out;

	&:first-child {
		top: 20%;
	}

	&:not(:first-child):not(:last-child) {
		top: 45%;
	}

	&:last-child {
		top: 70%;
	}
`;

export const HamburgerButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<HamburgerWrapper onClick={() => setIsOpen(!isOpen)}>
			<Line style={isOpen ? { opacity: '0' } : {}} />
			<Line style={isOpen ? { transform: 'translateY(0) rotate(-45deg)' } : {}} />
			<Line style={isOpen ? { transform: 'translateY(0) rotate(45deg)' } : {}} />
			<Line style={isOpen ? { opacity: '0' } : {}} />
		</HamburgerWrapper>
	);
};
