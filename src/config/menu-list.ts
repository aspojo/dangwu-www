export const menuData =
  [
    {lb: '主页', lk: '/dashboard', icon: 'fa-dashboard'},
    {
      lb: '开发者', permission: 'DEVELOPMENT_BASE', key: 'developer', icon: 'fa-wrench', children: [
        {
          lb: '开发指南', key: 'developer.doc', icon: 'fa-book', children: [
            {lk: '/developer/doc/intro', lb: 'CGT介绍'},
            {lk: '/developer/doc/start', lb: '运行起来'},
            {lk: '/developer/doc/useCodeTool', lb: '生成代码'},
            {lk: '/developer/doc/dirIntro', lb: '目录说明'},
            {lk: '/developer/doc/useComponent', lb: '组件说明'},
            {lk: '/developer/doc/useDirective', lb: '指令说明'},
            {lk: '/developer/doc/useFilter', lb: '管道说明'},
            {lk: '/developer/doc/useCodeToolPro', lb: 'CGT进阶'},
            {lk: '/developer/doc/entityEngine', lb: '实体引擎说明'},
            {lk: '/developer/doc/complexDevelop', lb: '复杂业务开发'},
            {lk: '/developer/doc/usePermission', lb: '权限控制'},
          ]
        },
        {lb: '代码生成工具', lk: '/developer/codeTool', icon: 'fa-wrench'},
        {lb: 'DEMO', lk: '/developer/demo', icon: 'fa-laptop'},
        {lb: 'Debugger', lk: '/developer/debugger', icon: 'fa-bug'},
      ]
    },
    // {
    //   lb: '系统管理', key: 'system', icon: 'fa-cog', children: [
    //     {lb: '字典管理', lk: '/system/dic', icon: 'fa-book'},
    //     {lb: '通讯录管理', lk: '/system/deptRoleUser', icon: 'fa-building'},
    //     {lb: '日志管理', lk: '/system/logInfo', icon: 'fa-eye'},
    //   ]
    // },
    //

    {
      lb: '数据管理', key: 'entityMgr', icon: 'fa-info', children: [
        {lb: '数据源管理', lk: '/entityMgr/listDataSource', icon: 'fa-cubes'},
        {lb: '数据库管理', lk: '/entityMgr/entityModelList/default', icon: 'fa-database'},
        {lb: '模板管理', lk: '/entityMgr/listDtExcelTemplateFile', icon: 'fa-map'},
        {lb: '数据提取模型', lk: '/entityMgr/listDtExcelDataExtractModel', icon: 'fa-book'},
        {lb: '数据传输模型', lk: '/entityMgr/listDtDataTransferModel', icon: 'fa-train'},
        {lb: '数据传输', lk: '/entityMgr/listDtDataTransferHistory', icon: 'fa-fire'},
      ]
    },

    {
      lb: '党员管理', key: 'partyMember', icon: 'fa-briefcase', lk: '/pertymember'
    },
    {
      lb: '干部管理', key: 'cadres', icon: 'fa-briefcase', lk: '/cadres'
    },
    {
      lb: '民主人士管理', key: 'democrat', icon: 'fa-briefcase', lk: '/democrat'
    },
    // {
    //   lb: '统计查询', key: 'queryTest', icon: 'fa-briefcase', lk: '/query'
    // },
    {
      lb: '统计查询', key: 'query', icon: 'fa-briefcase', lk: '/query/moreinfo'
    },
    {
      lb: '系统管理', key: 'manage', icon: 'fa-cog', children: [
        {lb: '组织管理', lk: '/manage/generalparty', icon: 'fa-cubes'},
        {lb: '专业管理', lk: '/manage/professional', icon: 'fa-cubes'},
        {lb: '党校管理',  permission: 'BASE_ADMIN', lk: '/manage/phases', icon: 'fa-cubes'},
        {lb: '查看民主党派', lk: '/manage/democrat', icon: 'fa-eye'},
        {lb: '显示字段设置', lk: '/manage/fieldSet', icon: 'fa-eye'},
        {lb: '字典管理', lk: '/system/dic', icon: 'fa-book'},
        {lb: '用户管理', lk: '/system/deptRoleUser', icon: 'fa-building'},
        {lb: '日志管理', lk: '/system/logInfo', icon: 'fa-eye'},
      ]
    },
  ];
