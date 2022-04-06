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
  FooterAnchor,
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
              <FooterLinkTitle>Explore Mais</FooterLinkTitle>
              <FooterAnchor
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                style={{ cursor: 'pointer' }}
              >
                Sobre Nós
              </FooterAnchor>
              <FooterAnchor
                to='discover'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                style={{ cursor: 'pointer' }}
              >
                Nossa Missão
              </FooterAnchor>
              <FooterAnchor
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                style={{ cursor: 'pointer' }}
              >
                Serviços
              </FooterAnchor>
              <FooterAnchor
                to='galery'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                style={{ cursor: 'pointer' }}
              >
                Galeria
              </FooterAnchor>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Entre em Contato</FooterLinkTitle>
              <FooterLink to='/'>(53) 3242-8050</FooterLink>
              <FooterLink to='/'>(53) 98419-8050</FooterLink>
              <FooterLink to='/'>telecoletaadm@olle.com.br</FooterLink>
              <FooterLink to='/'>@ telecoleta </FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Redes Sociais</FooterLinkTitle>
              <FooterLink
                href='https://www.instagram.com/telecoleta/'
                target='_blank'
                rel='noreferrer'
              >
                Instagram
              </FooterLink>
              <FooterLink
                href='https://www.facebook.com/telecoletabage'
                target='_blank'
                rel='noreferrer'
              >
                Facebook
              </FooterLink>
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
