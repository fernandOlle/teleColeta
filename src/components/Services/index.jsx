import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServiceElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Nossos Serviços</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Varejo</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Empresarial</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/reciclagem.png' />
          <ServicesH2>Reciclagem</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
