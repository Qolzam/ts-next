import SvgAccountCircle from '@material-ui/icons/AccountCircle';
import i18n from '~/locales/i18n';
import SvgHome from '@material-ui/icons/Home';
import SvgPeople from '@material-ui/icons/People';
import React from 'react';

export const menuItems = (userId: string, onFeedback: () => void) => [
    {
      label: i18n.i18n.t('sidebar.home'),
      path: '/',
      icon: <SvgHome />
    },
    {
      label: i18n.i18n.t('sidebar.profile'),
      path: `/${userId}`,
      icon: <SvgAccountCircle />
    },
    {
      label: i18n.i18n.t('sidebar.people'),
      path: `/people`,
      icon: <SvgPeople />
    },
    // {
    //   divider: true
    // },
    // {
    //   label: i18n.i18n.t('sidebar.settings'),
    //   path: `/settings`,
    //   icon: <SvgSettings />
    // },
    // {
    //   label: i18n.i18n.t('sidebar.sendFeedback'),
    //   onClick: () => onFeedback(),
    //   icon: <SvgFeedback />
    // },
    // {
    //   divider: true
    // },
    // {
    //   label: i18n.i18n.t('sidebar.help'),
    //   path: `/help`,
    //   icon: <HelpIcon />,
    // },

  ]