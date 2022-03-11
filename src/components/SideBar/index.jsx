import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            Sobre Nos
          </SidebarLink>
          <SidebarLink to='discover' onClick={toggle}>
            Nossa Missão
          </SidebarLink>
          <SidebarLink to='services' onClick={toggle}>
            Serviços
          </SidebarLink>
          <SidebarLink to='galery' onClick={toggle}>
            Galeria
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
