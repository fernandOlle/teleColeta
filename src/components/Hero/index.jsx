import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';
import { Button } from '../ButtonElements';

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Coleta de Residuos Feita do Jeito Certo </HeroH1>
        <HeroP>
          A Tele Coleta está servindo a região da campanha desde 1995. Isso
          permite conhecer as demandas da região buscando sempre se reinventar.
          Atendendo os clientes mais exigentes do mercado, garantindo a
          destinação ecologicamente sustentável dos resíduos.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Entre em Contato {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
