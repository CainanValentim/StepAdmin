import React, {useState} from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Início',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Alunos',
        path: '/alunos',
        icon: <FaIcons.FaUserCheck/>,
        cName: 'nav-text'
    },
    {
        title: 'Personais',
        path: '/personais',
        icon: <FaIcons.FaIdBadge/>,
        cName: 'nav-text'
    },
    {
        title: 'Configurações',
        path: '/configu',
        icon: <FaIcons.FaCog/>,
        cName: 'nav-text'
    },

]