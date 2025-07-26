/** Website 分类配置 */
const WEBSITE_SORTS: WebsiteSort[] = [
  {
    title: "网站导航",
    sites: [
      {
        title: "我的博客",
        description: "",
        url: "https://blog.afingpo.top/",
        icon: "",
      },
      {
        title: "网站监控",
        description: "监控网站运行情况",
        url: "https://stats.uptimerobot.com/bYFLj5Qfsb",
        icon: "",
      },
      {
        title: "我的文件",
        description: "博客引用/备份/分享的文件",
        url: "http://mingp0.ysepan.com",
        icon: "",
      },
    ],
  },
  {
    title: "友情链接",
    sites: [
      {
        title: "EsunR Blog",
        description: "EsunR 的博客",
        url: "https://www.esunr.xyz",
        icon: "https://esunr-image-bed.oss-cn-beijing.aliyuncs.com/logo.jpg",
      },
    ],
  },
];

/** Website 配置（2023.3.29 已废弃） */
const WEBSITE_ITEMS: WebsiteItem[] = [];

const GLOBAL_CONFIG = {
  /**
   * 博客名称
   */
  BLOG_NAME: "Afingpo's GistLog",
  /**
   * 个人博客链接
   */
  BLOG_URL: "https://blog.afingpo.top",
  /**
   * 指定中心 LOGO 图片地址
   */
  LOGO_URL: null,
  /**
   * 个人 Github 链接
   */
  GITHUB_URL: "https://github.com/afingpo",
  /**
   * 背景图片地址
   */
  BACKGROUND_IMG_URL: "https://api.dujin.org/bing/1920.php",
  /**
   * ICP 备案号，留空不显示
   */
  ICP: "",
  ICP_URL: "",
  FOOTER_INFO: true,
  /**
   * 网站欢迎标语
   */
  SLOGANS: [
    "欢迎拜访",
    "歡迎拜訪",
    "Welcome, user!",
    "訪問へようこそ",
    "嗨，别来无恙",
  ],
  /**
   * Website 分类配置
   */
  WEBSITE_SORTS,
  /**
   * Website 配置（2023.3.29 已废弃）
   */
  WEBSITE_ITEMS,
  /**
   * 网站 Title Keywords Description 的配置，用于 SEO
   */
  TKD: {
    title: "Afingpo's Index",
    keywords: "Blog, Index, Index Page",
    description: "This is Afingpo's personal blog index page.",
  },
};

export default GLOBAL_CONFIG;
