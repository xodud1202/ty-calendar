import styled from '@emotion/styled';

const Container = styled.button`
	border: 0;
	color: #FFFFFF;
	background-color: ${(props) => props.color};
	cursor: pointer;
	padding: 8px 16px;
	border-radius: 4px;
	
	&:hover {
		//background-color: ${(props) => props.color};		// 이미 기본 background-color 동일 존재. 주석 처리
		opacity: 0.8;
	}
	
	&:active {
		box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
	}
`;

interface Props {
	readonly text: string;
	readonly color?: string;
	readonly onClick?: () => void;
}

export const Button = ({text, color="#ff5722", onClick}: Props) => {
	return <Container color={color} onClick={onClick}>{text}</Container>;
}