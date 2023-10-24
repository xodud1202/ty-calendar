import styled from '@emotion/styled';
import {Label} from "components/Label";
import {Button} from "components/Button";
import React from "react";

const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
`;

interface Props {
	readonly label: string;
	readonly onDelete: () => void;
}

export const ToDoItem = ({ label, onDelete }: Props) => {
	return (
		<Container>
			<Label data={label} />
			<Button text={"삭제"} onClick={onDelete} />
		</Container>
	);
}