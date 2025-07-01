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
    ],
  },
  {
    key: 'menu-3',
    zhName: '生活光譜',
    active: new URL('@/assets/img/menu/menu-icon-3-active.svg', import.meta.url).href,
    inactive: new URL('@/assets/img/menu/menu-icon-3-inactive.svg', import.meta.url).href,
    link: 'life',
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
    link: 'floor',
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
        key: 'link-3',
        name: '品牌影片',
        link: 'brand',
      },
      {
        key: 'link-4',
        name: '建築團隊',
        link: 'team',
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
    ],
  },
  {
    key: 'menu-3',
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
        link: 'feature',
      },
    ],
  },
  {
    key: 'menu-5',
  },
  {
    key: 'menu-6',
    linkItem: [
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
      {
        key: 'link-4',
        name: '店面房貸試算',
        link: 'storeloan',
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
    path: 'life',
  },
  {
    id: 'menu-4',
    path: 'construction',
  },
  {
    id: 'menu-5',
    path: 'floor',
  },
  {
    id: 'menu-6',
    path: 'smart',
  },
]

export const menuChildTags = [
  {
    name: 'safe',
    tag: 'method',
  },
  {
    name: 'building',
    tag: 'method',
  },
  {
    name: 'water',
    tag: 'method',
  },
  {
    name: 'mrt',
    tag: 'develop',
  },
  {
    name: 'highway',
    tag: 'develop',
  },
  {
    name: 'major',
    tag: 'develop',
  },
  {
    name: 'rezoned',
    tag: 'develop',
  },
]
