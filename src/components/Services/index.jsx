import React from 'react';

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
          <ServicesIcon src='../../images/destinacao.png' />
          <ServicesH2>Coleta, Transporte e Destinação Final</ServicesH2>
          {/* <ServicesP>
          </ServicesP> */}
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/aterro.png' />
          <ServicesH2>Venda de Aterro</ServicesH2>
          {/* <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP> */}
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/crecicle.png' />
          <ServicesH2>Compra de Produtos Reciclaveis</ServicesH2>
          {/* <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP> */}
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/345.png' />
          <ServicesH2>Locação de Caçambas</ServicesH2>
          <ServicesP>
          Na Tele Coleta você contrata as caçambas de acordo com a sua necessidade. 3m³, 4m³ e 5m³
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/aluguel.png' />
          <ServicesH2>Locação de Poliguindaste</ServicesH2>
          {/* <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP> */}
          <ServicesP></ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/empresa.png' />
          <ServicesH2>E temos Planos Excluisvos para Empresas!</ServicesH2>
          <ServicesP>
            Planos de acordo com a necessidade da sua empresa!
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
