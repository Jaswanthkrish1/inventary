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
        icon: 'library_add',
        link: 'admin/offer',
        header: false,
        permissions: ['admin']
      },
      {
        label: 'View Offers',
        icon: 'remove_red_eye',
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
        icon: 'remove_red_eye',
        link: 'admin/item',
        header: false,
        permissions: ['admin']
      },
      {
        label: 'AddItem',
        icon: 'library_add',
        link: 'admin/item/create_item',
        header: false,
        permissions: ['admin']
      }
    ]

  },
];