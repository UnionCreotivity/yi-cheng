export const menuData = [
  {
    key: 'menu-1',
    zhName: '品牌光譜',
    active: new URL('@/assets/img/menu/menu-icon-1-active.svg', import.meta.url).href,
    inactive: new URL('@/assets/img/menu/menu-icon-1-inactive.svg', import.meta.url).href,
    linkItem: [
      {
        key: 'link-1',
        name: '品牌理念',
      },
      {
        key: 'link-2',
        name: '經典作品',
      },
      {
        key: 'link-4',
        name: '建築團隊',
      },
      {
        key: 'link-3',
        name: '品牌影片',
      },
    ],
  },
  {
    key: 'menu-2',
    zhName: '繁華光譜',
    active: new URL('@/assets/img/menu/menu-icon-2-active.svg', import.meta.url).href,
    inactive: new URL('@/assets/img/menu/menu-icon-2-inactive.svg', import.meta.url).href,
    linkItem: [
      {
        key: 'link-1',
        name: '八擴之光',
      },
      {
        key: 'link-2',
        name: '交通動線圖',
      },
      {
        key: 'link-3',
        name: '區域行情',
      },
    ],
  },
  {
    key: 'menu-3',
    zhName: '生活光譜',
    active: new URL('@/assets/img/menu/menu-icon-3-active.svg', import.meta.url).href,
    inactive: new URL('@/assets/img/menu/menu-icon-3-inactive.svg', import.meta.url).href,
    link: 'home',
  },
  {
    key: 'menu-4',
    zhName: '精工光譜',
    active: new URL('@/assets/img/menu/menu-icon-4-active.svg', import.meta.url).href,
    inactive: new URL('@/assets/img/menu/menu-icon-4-inactive.svg', import.meta.url).href,
    linkItem: [
      {
        key: 'link-1',
        name: '建築工法',
      },
      {
        key: 'link-2',
        name: '建築精裝',
      },
    ],
  },
  {
    key: 'menu-5',
    zhName: '藝築光譜',
    active: new URL('@/assets/img/menu/menu-icon-5-active.svg', import.meta.url).href,
    inactive: new URL('@/assets/img/menu/menu-icon-5-inactive.svg', import.meta.url).href,
    linkItem: [
      {
        key: 'link-1',
        name: '美學光雕',
      },
      {
        key: 'link-2',
        name: '美學生活',
      },
      {
        key: 'link-3',
        name: '平面圖集',
      },
    ],
  },
  {
    key: 'menu-6',
    zhName: '智能光譜',
    active: new URL('@/assets/img/menu/menu-icon-6-active.svg', import.meta.url).href,
    inactive: new URL('@/assets/img/menu/menu-icon-6-inactive.svg', import.meta.url).href,
    linkItem: [
      {
        key: 'link-1',
        name: '電動車整合',
      },
      {
        key: 'link-2',
        name: '智慧社區',
      },
      {
        key: 'link-3',
        name: '房貸試算',
      },
    ],
  },
]

export const menuSubData = [
  {
    key: 'menu-1',
    linkItem: [
      {
        key: 'link-1',
        name: '品牌理念',
        link: 'idea',
      },
      {
        key: 'link-2',
        name: '經典作品',
        link: 'classic',
      },
      {
        key: 'link-4',
        name: '建築團隊',
        link: '',
      },
      {
        key: 'link-3',
        name: '品牌影片',
        link: 'brand',
      },
    ],
  },
  {
    key: 'menu-2',
    linkItem: [
      {
        key: 'link-1',
        name: '八擴之光',
        link: 'develop',
      },
      {
        key: 'link-2',
        name: '交通動線圖',
        link: '',
      },
      {
        key: 'link-3',
        name: '區域行情',
        link: '',
      },
    ],
  },
  {
    key: 'menu-4',
    linkItem: [
      {
        key: 'link-1',
        name: '建築工法',
        link: 'method',
      },
      {
        key: 'link-2',
        name: '建築精裝',
        link: '',
      },
    ],
  },
  {
    key: 'menu-5',
    linkItem: [
      {
        key: 'link-1',
        name: '美學光雕',
        link: '',
      },
      {
        key: 'link-2',
        name: '美學生活',
        link: '',
      },
      {
        key: 'link-3',
        name: '平面圖集',
        link: '',
      },
    ],
  },
  {
    key: 'menu-6',
    linkItem: [
      {
        key: 'link-1',
        name: '電動車整合',
        link: '',
      },
      {
        key: 'link-2',
        name: '智慧社區',
        link: 'homesmart',
      },
      {
        key: 'link-3',
        name: '房貸試算',
        link: 'loan',
      },
    ],
  },
]

export const menuTags = [
  {
    id: 'menu-1',
    path: 'brand',
  },
  {
    id: 'menu-2',
    path: 'bustling',
  },
  {
    id: 'menu-3',
    path: 'brand',
  },
  {
    id: 'menu-4',
    path: 'construction',
  },
  {
    id: 'menu-5',
    path: 'brand',
  },
  {
    id: 'menu-6',
    path: 'smart',
  },
]
