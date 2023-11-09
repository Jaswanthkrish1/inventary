export interface IMenu {
    label?: string;
    icon?: string;
    link?: string;
    header?:boolean;
    permissions?: string[];
  }

  export const MENUS: IMenu[] = [
    {
      label: 'DashBoard',
      icon: '',
      link: '/DashBoard',
      header: false,
      permissions:['admin']
    },
    {
      label: 'Home',
      icon: '',
      link: '/home',
      header: false,
      permissions:['user','admin']

    },
    {
      label: 'Menu',
      icon: 'help',
      link: '/menu',
      header: false,
      permissions:['user','admin']

    },
    {
      label: 'Combo',
      icon: '',
      link: '/combo',
      header: false,
      permissions:['user','admin']

    },
    {
      label: 'Arabic Mandi',
      icon: '',
      link: '/home',
      header: true,
      permissions:['user','admin','server']
    },
    {
      label: 'About',
      icon: 'notes',
      link: '/about',
      header:false,
      permissions:['user','admin']
    },
    {
      label: 'location',
      icon: 'notes',
      link: '/location',
      header:false,
      permissions:['user','admin']

    },
    {
      label: 'Contact',
      icon: 'notes',
      link: '/contact',
      header:false,
      permissions:['user','admin']
    },
    {
      label: 'Orders',
      icon: '',
      link: '/Orders',
      header: false,
      permissions:['server','admin']
    },
  ];