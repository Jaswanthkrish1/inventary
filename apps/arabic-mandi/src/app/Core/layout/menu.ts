export interface IMenu {
  label?: string;
  icon?: string;
  link?: string;
  header?: boolean;
  permissions?: string[];
  child?: IMenu[];
  isSelected?: boolean;
  submenu?: boolean

}


export const MENUS: IMenu[] = [
  {
    label: 'Account',
    icon: 'account_circle',
    link: '',
    header: false,
    permissions: ['admin']
  },
  {
    label: 'DashBoard',
    icon: 'dashboard',
    link: 'admin/dashboard',
    header: false,
    permissions: ['admin']
  },
  {
    label: 'Home',
    icon: 'home',
    link: '/home',
    header: false,
    permissions: ['user', 'admin'],
    submenu: true
  },
  {
    label: 'Menu',
    icon: 'restaurant_menu',
    link: '/menu',
    header: false,
    permissions: ['user', 'admin'],
    submenu: true

  },
  {
    label: 'ComboOffer',
    icon: 'local_offer',
    link: '/combo',
    header: false,
    permissions: ['user'],
    submenu: true

  },
  {
    label: 'Combo',
    icon: 'local_offer',
    header: false,
    permissions: ['admin'],
    child: [
      {
        label: 'NewOffer',
        icon: 'notes',
        link: 'admin/offer',
        header: false,
        permissions: ['admin']
      },
      {
        label: 'AddItem',
        icon: 'notes',
        link: 'admin/item/create_item',
        header: false,
        permissions: ['admin']
      }
    ]

  },
  {
    label: 'Arabic Mandi',
    icon: '',
    link: '/home',
    header: true,
    permissions: ['user', 'admin', 'server']
  },
  {
    label: 'About',
    icon: 'info',
    link: '/about',
    header: false,
    permissions: ['user', 'admin'],
    submenu: true
  },
  {
    label: 'location',
    icon: 'location_on',
    link: '/location',
    header: false,
    permissions: ['user', 'admin'],
    submenu: true
  },
  {
    label: 'Contact',
    icon: 'contacts',
    link: '/contact',
    header: false,
    permissions: ['user', 'admin'],
    submenu: true
  },
  {
    label: 'Items',
    icon: 'add_circle',
    // link: 'admin/add_item/view_item',
    header: false,
    permissions: ['admin'],
    child: [
      {
        label: 'ViewItems',
        icon: 'notes',
        link: 'admin/item',
        header: false,
        permissions: ['admin']
      },
      {
        label: 'AddItem',
        icon: 'notes',
        link: 'admin/item/create_item',
        header: false,
        permissions: ['admin']
      }
    ]

  },
];