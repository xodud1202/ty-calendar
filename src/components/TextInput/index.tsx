import styled from "@emotion/styled";

const Input = styled.input`
	font-size: 1.2rem;
	padding: 8px;
`;

interface Props {
	readonly value: string;
	readonly changeValue: (text: string) => void;
}

export const TextInput = ({value, changeValue}: Props) => {
	return (
		<Input value={value} onChange={(event) => {changeValue(event.target.value)}} />
	)
}