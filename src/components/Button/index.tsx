import styled from '@emotion/styled';

const Container = styled.button`
	border: 0;
	color: #FFFFFF;
	background-color: #ff5722;
	cursor: pointer;
	padding: 8px 16px;
	border-radius: 4px;
	
	&:hover {
		//background-color: #ff5722;
		opacity: 0.8;
	}
	
	&:active {
		box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
	}
`;

interface Props {
	readonly text: string;
	readonly onClick: () => void;
}

// Props 데이터 전달 받아 사용 하는 방법 2가지. 후자의 방법을 많이 사용.
// export const Button = (props: Props) => {
// 	return <Container onClick={props.onClick}>{props.label}</Container>;
// }
export const Button = ({text, onClick}: Props) => {
	return <Container onClick={onClick}>{text}</Container>;
}