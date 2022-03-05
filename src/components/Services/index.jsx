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
          <ServicesIcon src='../../images/destinacao.png' />
          <ServicesH2>Coleta, Transporte e Destinação Final</ServicesH2>
          <ServicesP>
            ESSA CAIXA FICA NO MAXIMO DESSE TAMANHO!
            <br />
            <br />
            bla bal blal bla bla bla bal blal blabla bla bal blal blabla bla bal
            blal bla bla bla bal blal blabla bla bal blal blabla bla bal blal
            bla bla bla bal blal blabla bla bal blal blabla bla bal blal bla bla
            bla bal blal blabla bla bal blal blabla bla bal blal bla bla bla bal
            blal blabla bla bal blal blabla bla bal blal bla bla bla bal
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/aterro.png' />
          <ServicesH2>Venda de Aterro</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/crecicle.png' />
          <ServicesH2>Compra de Produtos Reciclaveis</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src='../../images/345.png' />
          <ServicesH2>Locacao de Containers de 3, 4 e 5 m³</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/aluguel.png' />
          <ServicesH2>Locação de Poliguindaste</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/empresa.png' />
          <ServicesH2>E temos Planos Excluisvos para Empresas!</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
