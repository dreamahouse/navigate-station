import { Random } from "mockjs";
import bg1 from "../assets/images/bg1.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";
import bg4 from "../assets/images/bg4.png";
import bg5 from "../assets/images/bg5.png";
import colorBg1 from "../assets/images/colorBg1.png";
import colorBg2 from "../assets/images/colorBg2.png";
import colorBg3 from "../assets/images/colorBg3.png";
import colorBg4 from "../assets/images/colorBg4.png";
import typesettingBg1 from "../assets/images/typesettingBg1.png";
import typesettingBg2 from "../assets/images/typesettingBg2.png";
import typesettingBg3 from "../assets/images/typesettingBg3.png";
import typesettingBg4 from "../assets/images/typesettingBg4.png";
import materialList1 from "../assets/images/materialList1.png";
import materialList2 from "../assets/images/materialList2.png";
import materialList3 from "../assets/images/materialList3.png";
import iconDesignList1 from "../assets/images/iconDesignList1.png";
import iconDesignList2 from "../assets/images/iconDesignList2.png";
import iconDesignList3 from "../assets/images/iconDesignList3.png";
import iconDesignList4 from "../assets/images/iconDesignList4.png";
import iconDesignList5 from "../assets/images/iconDesignList5.png";
const dataList = {
  inspirationList: [
    {
      id: "1",
      background_url: bg1,
      description:
        "参考最重要的就是优质，layers就提供了很多优质的设计案例，推荐去看看",
      link: "https://layers.to/explore/trending",
    },
    {
      id: Random.id(),
      background_url: bg2,
      description:
        "采集了很多真实的线上的产品的截图，帮助各位设计师更好的找灵感",
      link: "https://mobbin.com/",
    },
    {
      id: Random.id(),
      background_url: bg3,
      description:
        "采集了很多真实的上线的 App 的页面，更多是国内的, 国产mobbin",
      link: "https://uinotes.com/",
    },
    {
      id: Random.id(),
      background_url: bg4,
      description: "可以按照组件的类别来查找灵感，这个思路很好，更加有针对性",
      link: "https://calltoinspiration.com/",
    },
    {
      id: Random.id(),
      background_url: bg5,
      description:
        "韩国版花瓣，不得不说韩国的很多设计还是很具有参考性的，可以浏览找找灵感",
      link: "https://wwit.design/",
    },
  ],
  colorList: [
    {
      id: Random.id(),
      background_url: colorBg1,
      description:
        "一个自定义生成渐变背景的网站，同时可以增加噪点，很多时候我都会在这里先快速调整一个demo",
      link: "https://layers.to/explore/trending",
    },
    {
      id: Random.id(),
      background_url: colorBg2,
      description:
        "一个在线生成色板的网站，这种类型的网站很多，不过我习惯经常用的就是它，推荐",
      link: "https://colors.eva.design/",
    },
    {
      id: Random.id(),
      background_url: colorBg3,
      description:
        "中国传统色彩网站，我们经常听到的各种传统的色彩，在这里都被量化了出来，非常值得去看看",
      link: "https://www.zhongguose.com",
    },
    {
      id: Random.id(),
      background_url: colorBg4,
      description:
        "一个在线生成渐变色的网站，可以同时生成CSS代码，以后开发再说写不出来，可以直接把代码发过去给他",
      link: "https://spektra-gradient-generator.vercel.app/",
    },
  ],
  typesettingList: [
    {
      id: Random.id(),
      background_url: typesettingBg1,
      description:
        "一个在在浏览器中构建 3D MockUp 的应用，同时还支持视频展示，值得尝试",
      link: "https://deviceframes.com/",
    },
    {
      id: Random.id(),
      background_url: typesettingBg2,
      description:
        "也是一个很精致的制作精美 MockUp 的产品，2022年迭代到现在了，推荐",
      link: "https://shots.so/",
    },
    {
      id: Random.id(),
      background_url: typesettingBg3,
      description:
        "将无聊的截图在几分钟内变成令人惊叹的3D图像，支持自定义尺寸，角度等",
      link: "https://slantt.co/editor/tiles",
    },
    {
      id: Random.id(),
      background_url: typesettingBg4,
      description:
        "将无聊的截图在几分钟内变成令人惊叹的3D图像，支持自定义尺寸，角度等",
      link: "https://slantt.co/editor/tiles",
    },
  ],
  materialList: [
    {
      id: Random.id(),
      background_url: materialList1,
      description:
        "网站就叫壁纸样机生成器，同时还有小程序版本，有点像上边提到的 shots 不过更本土化",
      link: "https://mjcn.club/app/",
    },
    {
      id: Random.id(),
      background_url: materialList3,
      description: "阿里云出的矢量地图资源下载，应该是做可视化设计必备的网站吧",
      link: "https://shots.so/",
    },
    {
      id: Random.id(),
      background_url: materialList2,
      description:
        "一个查看各种苹果设备尺寸的网站，甚至还有小组件、灵动岛的尺寸",
      link: "https://slantt.co/editor/tiles",
    },
  ],
  iconDesignList: [
    {
      id: Random.id(),
      background_url: iconDesignList1,
      description:
        "感谢remixicon，应该是我使用最多的icon站了，同时推荐他们的「元气睡眠」主站就有入口",
      link: "https://remixicon.com/",
    },
    {
      id: Random.id(),
      background_url: iconDesignList2,
      description: "Yesicon 主打的就是一个量大管饱，你能想到想不到的这里都有",
      link: "https://yesicon.app/",
    },
    {
      id: Random.id(),
      background_url: iconDesignList3,
      description:
        "一个开源图标库，提供1000+图标，同时提供几个官方包，让设计师和开发者更容易将图标融入项目中",
      link: "https://lucide.dev/icons/",
    },
    {
      id: Random.id(),
      background_url: iconDesignList4,
      description:
        "一个包含1600+图标的开源图标库，支持React、React Native、Flutter、Vue、Figma和Framer。",
      link: "https://iconoir.com/",
    },
    {
      id: Random.id(),
      background_url: iconDesignList5,
      description:
        "viggo 专为 Mac 和 iPhone 设计的暗黑主题，在你的 Mac 和iPhone上体验正真的暗黑模式",
      link: "https://darkosicon.com/zh/",
    },
  ],
  designList: [
    {
      id: Random.id(),
      background_url: colorBg4,
      description: "",
      link: "",
    },
  ],
  figmaPluginList: [
    {
      id: Random.id(),
      background_url: colorBg4,
      description: "",
      link: "",
    },
  ],
};
export default dataList;
