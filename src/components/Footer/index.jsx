import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Sobre Nos</FooterLinkTitle>
              <FooterLink to='/'>Como Operamos</FooterLink>
              <FooterLink to='/'>Nossa Missão</FooterLink>
              <FooterLink to='/'>Serviços</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Entre em Contato</FooterLinkTitle>
              <FooterLink to='/'>Telefone 1</FooterLink>
              <FooterLink to='/'>Telefone 2</FooterLink>
              <FooterLink to='/'>Email</FooterLink>
              <FooterLink to='/'>@ telecoleta </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
              <FooterLink to='/'>Instagram</FooterLink>
              <FooterLink to='/'>Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              TeleColeta
            </SocialLogo>
            <WebsiteRights>
              TeleColeta © {new Date().getFullYear()} Direitos Reservados.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.facebook.com/telecoletabage'
                target='_blank'
                rel='noreferrer'
                arial-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.instagram.com/telecoleta/'
                target='_blank'
                rel='noreferrer'
                arial-label='Instagram'
              >
                <FaInstagram />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
