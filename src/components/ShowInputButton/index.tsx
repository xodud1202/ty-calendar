import styled from "@emotion/styled";
import {Button} from "components/Button";
import React from "react";

const Container = styled.div`
	position: absolute;
	right: 40px;
	bottom: 40px;
	z-index: 1;
`;

interface Props {
	readonly showToDoInput: boolean;
	readonly onClick: () => void;
}

export const ShowInputButton = ({showToDoInput, onClick}: Props) => {

	return (
		<Container>
			<Button text={showToDoInput ? "닫기" : "할일 추가"} color={showToDoInput ? undefined : "#304FFE"} onClick={onClick} />
		</Container>
	)
}