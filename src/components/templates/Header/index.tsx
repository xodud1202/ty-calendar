import { HamburgerButton } from 'components/atoms/HamburgerButton';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
	height: 5vh;
	width: 100%;
`;

const HamburgerButtonWrapper = styled.div`
	width: 5vh;				// HeaderWrapper의 height와 동일하게 움직일것.
	padding-bottom: 100%;
	position: relative;
`;

export const Header = () => {
	return (
		<HeaderWrapper>
			<HamburgerButtonWrapper>
				<HamburgerButton />
			</HamburgerButtonWrapper>
		</HeaderWrapper>
	);
};
