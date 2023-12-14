import { HamburgerButton } from 'components/atoms/HamburgerButton';
import styled from '@emotion/styled';
import { HeaderDate } from 'components/organisms/HeaderDate';
import { TextSpan } from 'components/atoms/TextSpan';

const HeaderWrapper = styled.div`
	height: 5vh;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	& > div {
		display: inline-block;
	}
`;

const HamburgerButtonWrapper = styled.div`
	width: 2rem;
`;

export const Header = () => {
	return (
		<HeaderWrapper>
			<HamburgerButtonWrapper>
				<HamburgerButton />
			</HamburgerButtonWrapper>
			<HeaderDate />
			<TextSpan text={'+'} fontSize={'3.0rem'}></TextSpan>
		</HeaderWrapper>
	);
};
