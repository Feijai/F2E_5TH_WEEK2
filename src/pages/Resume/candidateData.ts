import Rectangle1 from "@/assets/candidate/Rectangle1.png";
import Component1 from "@/assets/userIcon/Component1.png";
import Rectangle2 from "@/assets/candidate/Rectangle2.png";
import Component2 from "@/assets/userIcon/Component2.png";
import Rectangle3 from "@/assets/candidate/Rectangle3.png";
import Component3 from "@/assets/userIcon/Component3.png";
import Property1 from "@/assets/userIcon/Property1.png";
import Property1h from "@/assets/userIcon/Property1h.png";
import Property2 from "@/assets/userIcon/Property2.png";
import Property2h from "@/assets/userIcon/Property2h.png";
import Property3 from "@/assets/userIcon/Property3.png";
import Property3h from "@/assets/userIcon/Property3h.png";

export const data = [
  {
    name: "喵楚魚",
    group: "橘喵黨",
    group_pic: Component1,
    partner: "魚汪汪 (無黨籍)",
    background: "公職、國際關係研究員",
    education: [
      { title: "國立政治大學外交系畢業", time: "1964" },
      { title: "美國公教大學圖書管理學碩士", time: "1971" },
      { title: "美國喬治城大學政治學博士", time: "1974" },
    ],
    pic: Rectangle1,
    experience: [
      { title: "行政院簡任秘書", time: "1974-1977" },
      { title: "行政院新聞局副局長", time: "1977-1979" },
      { title: "總統府簡任秘書", time: "1978-1981、1984-1989" },
      { title: "行政院新聞局局長", time: "1979-1984" },
      { title: "中國國民黨文工會主任", time: "1984-1987" },
      { title: "中國國民黨副秘書長", time: "1987-1989" },
      { title: "中國國民黨秘書長", time: "1989-1993" },
      { title: "臺灣省主席", time: "1993-1994" },
      { title: "臺灣省省長", time: "1994-1998" },
      { title: "親民黨主席", time: "2000-" },
      { title: "臺北市政府首席顧問", time: "2014-" },
      { title: "亞太經合會中華臺北領袖代表", time: "2016-2017" },
      { title: "總統府資政", time: "2016-2019" },
    ],
  },
  {
    name: "喵英文",
    group: "綠喵黨",
    group_pic: Component2,
    partner: "喵青德 (綠喵黨)",
    background: "大學教授、國際談判代表",
    education: [
      { title: "國立臺灣大學法律系畢業", time: "1978" },
      { title: "美國康乃爾大學法學碩士", time: "1980" },
    ],
    pic: Rectangle2,

    experience: [
      { title: "國立政治大學、東吳大學教授", time: "" },
      { title: "經濟部國際組織首席顧問", time: "1993-2000" },
      { title: "經濟部貿易調查委員", time: "1993-2000" },
      { title: "行政院陸委會諮委", time: "1994-1998" },
      { title: "行政院公平會委員", time: "1995-1998" },
      { title: "國安會諮委", time: "1999-2000" },
      { title: "行政院陸委會主委", time: "2000-2004" },
      { title: "總統府國策顧問", time: "2004-2005" },
      { title: "立法委員", time: "2004-2006" },
      { title: "行政院消保會主委", time: "2006-2007" },
      { title: "行政院副院長", time: "2006-2007" },
      { title: "民主進步黨主席", time: "2008-2012、2014-2018" },
      { title: "中華民國總統", time: "2016-" },
    ],
  },
  {
    name: "汪國魚",
    group: "藍汪黨",
    group_pic: Component3,
    partner: "喵善政 (無黨籍)",
    background: "民意代表",
    education: [
      { title: "東吳大學英國語文學系畢業", time: "1985" },
      { title: "國立政治大學東亞研究所法學碩士", time: "1988" },
    ],
    pic: Rectangle3,
    experience: [
      { title: "世新專科講師", time: "" },
      { title: "維多利亞雙語中小學創辦人", time: "" },
      { title: "臺北縣議員", time: "1990-1993" },
      { title: "立法委員", time: "1993-2002" },
      { title: "臺北縣中和市副市長", time: "2005-2006" },
      { title: "臺北農產運銷公司總經理", time: "2013-2017" },
      { title: "中國國民黨高雄市黨部主委", time: "2017-2019" },
      { title: "高雄市市長", time: "2018-" },
    ],
  },
];

export const candidateBtn = [
  {
    pic: Property1,
    pic_hover: Property1h,
    name: "喵楚魚",
  },
  { pic: Property2, pic_hover: Property2h, name: "喵英文" },
  { pic: Property3, pic_hover: Property3h, name: "汪國魚" },
];
