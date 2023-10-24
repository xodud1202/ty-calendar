import styled from '@emotion/styled';

const Container = styled.span`
	flex: 1;
	font-size: 1.2rem;
	margin-right: 16px;
`;

interface Props {
	readonly data: string;
}

export const Label = ({data}: Props) => {
	return <Container>{data}</Container>;
}