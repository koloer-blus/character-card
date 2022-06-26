const cardInfo: IProtagonistInfo = {
  name: '乔治',
  birthYear: 2000,
  position: '前端开发工程师',
  currentCompany: '字节跳动',
  currentCompanyEN: 'ByteDance',
  educationalExperience: [
    {
      start: '2014-9',
      end: '2018-7',
      name: '新疆吐鲁番海洋技术学院',
      degree: '本科',
      award: [
        {
          time: '2015-12-01',
          title: '英雄联盟德玛西亚杯亚军',
          desc: '团队获得'
        },
        {
          time: '2016-3-1',
          title: 'CSGO青训锦标赛殿军',
          desc: '个人获得'
        },
        {
          time: '2021-8-12',
          title: '挖掘机蓝翔职业技能全国大赛冠军',
          desc: '个人获得'
        },
      ]
    },
    {
      start: '2018-9',
      end: '2021-7',
      name: '五道口职业技术学院',
      degree: '硕士',
      supplementaryDescription: [
        {
          title: '辅修第二学位',
          desc: '完成第二学位网络安全的学习'
        },
        {
          title: '辅修第三学位',
          desc: '完成第三学位信息安全的学习'
        }
      ],
      award: [
        {
          time: '2019-12-01',
          title: '互联网+创新挑战赛 二等奖',
          desc: '团队获得'
        },
        {
          time: '2021-3-1',
          title: '蓝桥杯算法编程大赛 三等奖',
          desc: '个人获得'
        },
        {
          time: '2021-8-12',
          title: 'LeetCode 全国算法天梯赛 二等奖',
          desc: '个人获得'
        },
      ]
    },
  ],
  companyExperience: [
    {
      start: '2019-7',
      end: '2020-3',
      name: '字节跳动',
      nameEN: 'ByteDance',
      position: '前端开发实习生',
      mainWork: [
        '负责开发内部平台以及日常平台功能维护',
        '负责完成项目上线工作以及项目上线流程维护',
        '负责前端项目迁移以及框架优化相关工作，完善和修复前端项目中的陈旧代码，并及时补充和完善git操作和删除不必要文件，完善项目内容文档以及项目介绍'
      ],
      mainResult: [
        '项目开发速度提升30%，项目代码量减少20%',
        '业务增长速度提升20%，前端代码冗余量降低30%'
      ],
    },
    {
      start: '2020-7',
      name: '字节跳动',
      nameEN: 'ByteDance',
      position: '前端开发工程师',
      mainWork: [
        '负责开发内部平台以及日常平台功能维护',
        '负责完成项目上线工作以及项目上线流程维护',
        '负责前端项目迁移以及框架优化相关工作，完善和修复前端项目中的陈旧代码，并及时补充和完善git操作和删除不必要文件，完善项目内容文档以及项目介绍'
      ],
      mainResult: [
        '项目开发速度提升30%，项目代码量减少20%',
        '业务增长速度提升20%，前端代码冗余量降低30%'
      ],
      supplementaryDescription: [
        {
          title: '个人代码贡献超过30%',
          desc: '主要代码为业务新增代码以及功能完善维护代码'
        }
      ]
    }
  ],
  skill: [
    {
      title: 'JS、HTML、CSS',
      mastery: '熟练'
    },
    {
      title: 'React',
      mastery: '熟悉'
    },
    {
      title: '计算机网络以及算法',
      mastery: '了解'
    },
    {
      title: '前端工程化以及前端规范',
      mastery: '熟悉'
    },
    {
      title: '计算机基础以及信息通信',
      mastery: '掌握'
    }
  ],
  hobby: [
    '足球','篮球','排球','LOL','王者荣耀','爬山','旅行'
  ],
  work: [
    {
      start: '2022-6',
      end: '2022-7',
      title: 'character-card',
      description: '人物卡',
      technology: ['TypeScript','Vue3','Vite','LESS'],
      previewAddress: 'https://baiziyu-fe.github.io/character-card/',
      technicalHighlights: [],
      result: [],
    }
  ],
};

export default cardInfo;