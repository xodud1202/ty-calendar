import styled from '@emotion/styled';

// interface headerDateCss {
// 	readonly fontSize: string;
// 	readonly fontWeight: string;
// 	readonly fontColor: string;
// 	readonly backgroundColor: string;
// }

const Container = styled.span<Props>`
	font-size: ${(css) => css.fontSize};
	font-weight: ${(css) => css.fontWeight};
	color: ${(css) => css.fontColor};
	background-color: ${(css) => css.backgroundColor};
`;

interface Props {
	readonly text?: string;
	readonly fontSize: string;
	readonly fontWeight?: string;
	readonly fontColor?: string;
	readonly backgroundColor?: string;
}

export const TextSpan = ({
	text,
	fontSize,
	fontWeight = 'normal',
	fontColor = '#aaaaaa',
	backgroundColor = 'unset',
}: Props) => {
	return (
		<Container
			fontSize={fontSize}
			fontWeight={fontWeight}
			fontColor={fontColor}
			backgroundColor={backgroundColor}
		>
			{text}
		</Container>
	);
};
