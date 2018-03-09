import { Menu } from './menu';

export const MenuList: Menu[] = [
  { id: 11, name: '职位', keyword: 'job',
    childname: [
      {id: 111, name: '二级子菜单职位创建', keyword: 'jobCreate', },
      {id: 112, name: '二级子菜单职位列表', keyword: 'jobList', }
    ]
  },
  { id: 12, name: '人员', keyword: 'employee',
  childname: [
    {id: 111, name: '二级子菜单', keyword: 'employee', },
    {id: 112, name: '二级子菜单', keyword: 'employee', },
    {id: 112, name: '二级子菜单', keyword: 'employee', }
  ]
  },

  { id: 13, name: '香蕉', keyword: 'banana',
  childname: [
    {id: 131, name: '巴西香蕉', keyword: 'bananaChild'},
  ]
  },

  { id: 14, name: '颜色', keyword: 'color',
  childname: [
    {id: 141, name: '绿色', keyword: 'green'}
  ]
 },
  { id: 15, name: '一级菜单', keyword: 'job', },
  { id: 16, name: '一级菜单', keyword: 'job', },
  { id: 17, name: '一级菜单', keyword: 'job', },
  { id: 18, name: '一级菜单', keyword: 'job', },
  { id: 19, name: '一级菜单', keyword: 'job', },
  { id: 20, name: '一级菜单', keyword: 'job', }
];
