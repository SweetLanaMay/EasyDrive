import { StyledLogoLink, LogoSvg, LogoText } from './Logo.styled';

export const Logo = () => {
    return (
        <StyledLogoLink to='/home'>
        <LogoSvg></LogoSvg>
        <LogoText>EasyDrive</LogoText>
        </StyledLogoLink>
    )
}