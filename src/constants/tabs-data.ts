export type TabItem = {
  key: string;
  label: string;
  description: string;
  icon: 'html' | 'css' | 'js' | 'ts' | 'sequelize' | 'mongodb';
};

export const tabsData: TabItem[] = [
  {
    key: 'html',
    label: 'HTML',
    description: '',
    icon: 'html',
  },
  {
    key: 'css',
    label: 'CSS',
    description: '',
    icon: 'css',
  },
  {
    key: 'js',
    label: 'JavaScript',
    description: '',
    icon: 'js',
  },
  {
    key: 'ts',
    label: 'TypeScript',
    description: '',
    icon: 'ts',
  },
  {
    key: 'sequelize',
    label: 'Sequelize',
    description: '',
    icon: 'sequelize',
  },
  {
    key: 'mongodb',
    label: 'MongoDB',
    description: '',
    icon: 'mongodb',
  },
];
