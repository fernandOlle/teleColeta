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
          <ServicesH2>Coleta transporte e destinação final</ServicesH2>
          <ServicesP>
            ESSA CAIXA FICA NO MAXIMO DESSE TAMANHO!
            <br />
            <br />
            bla bal blal bla bla bla bal blal blabla bla bal blal blabla bla bal
            blal bla bla bla bal blal blabla bla bal blal blabla bla bal blal
            bla bla bla bal blal blabla bla bal blal blabla bla bal blal bla bla
            bla bal blal blabla bla bal blal blabla bla bal blal bla bla bla bal
            blal blabla bla bal blal blabla bla bal blal bla bla bla bal blabla
            bla bal blal blabla bl
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Venda de aterro</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/reciclagem.png' />
          <ServicesH2>Compra de produtos recoclaveis</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Locacao de containers de 3, 4 e 5 m³</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Locacao de poliguindaste</ServicesH2>
          <ServicesP>
            bla bla bal blal blabla bla bal blal blabla bla bal blal blabla bla
            bal blal bla
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src='../../images/reciclagem.png' />
          <ServicesH2>
            E ainda temos planos Excluisvos para Empresas!
          </ServicesH2>
          <ServicesP>
            TODAS AS IMAGENS SÃO MERAMENTE ILUSTRATIVAS, IRAM MUDAR NO PRODUTO
            FINAL!
            <br />
            <br />
            bla bla bal blal blabla bla bal blal blabla bla bal blal bla
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
