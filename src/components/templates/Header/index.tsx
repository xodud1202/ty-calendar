import { HamburgerButton } from 'components/atoms/HamburgerButton';
import styled from '@emotion/styled';

const HeaderWrapper = styled.div`
	height: 10vw;
	width: 100%;
`;

const HamburgerButtonWrapper = styled.div`
	height: 100%;
	width: 10vw;
	position: relative;
`;

export const Header = () => {
	return (
		<HeaderWrapper>
			<HamburgerButtonWrapper>
				<HamburgerButton />
			</HamburgerButtonWrapper>
			{/* Other components on the header */}
		</HeaderWrapper>
	);
};
