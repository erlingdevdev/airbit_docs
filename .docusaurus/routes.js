
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/airbit_docs/',
    component: ComponentCreator('/airbit_docs/','5e5'),
    exact: true
  },
  {
    path: '/airbit_docs/landing',
    component: ComponentCreator('/airbit_docs/landing','899'),
    exact: true
  },
  {
    path: '/airbit_docs/landing_en',
    component: ComponentCreator('/airbit_docs/landing_en','6e2'),
    exact: true
  },
  {
    path: '/airbit_docs/markdown-page',
    component: ComponentCreator('/airbit_docs/markdown-page','4b7'),
    exact: true
  },
  {
    path: '/airbit_docs/docs',
    component: ComponentCreator('/airbit_docs/docs','079'),
    routes: [
      {
        path: '/airbit_docs/docs/Home',
        component: ComponentCreator('/airbit_docs/docs/Home','755'),
        exact: true,
        'sidebar': "someSidebar"
      },
      {
        path: '/airbit_docs/docs/mdx',
        component: ComponentCreator('/airbit_docs/docs/mdx','e1c'),
        exact: true,
        'sidebar': "someSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
