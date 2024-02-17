export interface AdminMenu {
    label?: string;
    icon?: string;
    link?: string;
    header?: boolean;
    permissions?: string[];
    child?: AdminMenu[];
    isSelected?: boolean;
    submenu?: boolean
  
  }
  
  
  export const ADMINMENUS: AdminMenu[] = [
    {
      label: 'DashBoard',
      icon: 'dashboard',
      link: 'admin/dashboard',
      header: false,
      permissions: ['admin']
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
            link: 'item',
            header: false,
            permissions: ['admin']
          },
          {
            label: 'AddItem',
            icon: 'library_add',
            link: 'item/create_item',
            header: false,
            permissions: ['admin']
          },
        ]
    
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
          link: 'offer',
          header: false,
          permissions: ['admin']
        },
        
        {
          label: 'View Offers',
          icon: 'remove_red_eye',
          link: 'offer/View_Offers',
          header: false,
          permissions: ['admin']
        }
      ]
  
    },
    // {
    //   label: 'Home',
    //   icon: 'home',
    //   link: '/home',
    //   header: false,
    //   permissions: ['admin'],
    //   submenu: true
    // },
    // {
    //   label: 'Menu',
    //   icon: 'restaurant_menu',
    //   link: '/menu',
    //   header: false,
    //   permissions: ['admin'],
    //   submenu: true
  
    // },
    // {
    //   label: 'ComboOffer',
    //   icon: 'local_offer',
    //   link: '/combo',
    //   header: false,
    //   permissions: ['user'],
    //   submenu: true
  
    // },
 
    // {
    //   label: 'Arabic Mandi',
    //   icon: '',
    //   link: '/home',
    //   header: true,
    //   permissions: ['admin']
    // },
    // {
    //   label: 'About',
    //   icon: 'info',
    //   link: '/about',
    //   header: false,
    //   permissions: ['admin'],
    //   submenu: true
    // },
    // {
    //   label: 'location',
    //   icon: 'location_on',
    //   link: '/location',
    //   header: false,
    //   permissions: [ 'admin'],
    //   submenu: true
    // },
    // {
    //   label: 'Contact',
    //   icon: 'contacts',
    //   link: '/contact',
    //   header: false,
    //   permissions: [ 'admin'],
    //   submenu: true
    // },
 
  ];
  