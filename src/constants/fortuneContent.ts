import video1 from "/assets/videos/video-2.mp4";
import video2 from "/assets/videos/video-2.mp4";
import video3 from "/assets/videos/video-3.mp4";
import video4 from "/assets/videos/video-4.mp4";
import video5 from "/assets/videos/video-5.mp4";
import video6 from "/assets/videos/video-6.mp4";
import video7 from "/assets/videos/video-7.mp4";
import video8 from "/assets/videos/video-8.mp4";
import video9 from "/assets/videos/video-2.mp4";
import video10 from "/assets/videos/video-10.mp4";
import video11 from "/assets/videos/video-11.mp4";
import video12 from "/assets/videos/video-12.mp4";

import { bigImages, smallImages } from "./fortuneImages";

type FortuneContent = {
  bigImage: string;
  smallImage: string;
  title: string;
  name: string;
  type: string;
  favorite: string;
  feature: string;
  categories: string[];
  video: string;
};

const fortuneContents: FortuneContent[] = [
  {
    bigImage: bigImages[0],
    smallImage: smallImages[0],
    video: video1,
    title: "거짓은 잠시 접어두고\n앞을 향해 나아가보세요",
    name: "레오 (Leo)",
    type: "관찰자",
    favorite: "진실, 달리기",
    feature:
      "쉬지 않고 항상 뛰어다닌다.\n이 생명체를 마주하면 거짓말을 할 수 없다.",
    categories: ["지성", "진실", "근면"],
  },
  {
    bigImage: bigImages[1],
    smallImage: smallImages[1],
    video: video2,
    title: "가정과 일의 경계에서\n균형을 유지하라",
    name: "비지맨",
    type: "워커홀릭",
    favorite: "일하기",
    feature:
      "일을 대신 해주는 존재.\n나의 산더미 같은 일들을 대신 빠르게 처리해 버림.\n해야하는 벅찬 일들이 줄어들어 가정에 집중할 수 있게 됨.",
    categories: ["경계", "균형", "가정"],
  },
  {
    bigImage: bigImages[2],
    smallImage: smallImages[2],
    video: video3,
    title: "지친 당신에게\n깊은 휴식을",
    name: "수련 (water lily)",
    type: "외로움",
    favorite: "음악",
    feature:
      "피로에 지친 사람에게 이 오르골의 소리를 들려주면\n순식간에 잠에 든다고 전해진다. 한숨 자고 일어나면 몸이 깃털처럼\n가벼워진다고.",
    categories: ["피로", "꽃", "두 척의 배"],
  },
  {
    bigImage: bigImages[3],
    smallImage: smallImages[3],
    video: video4,
    title: "삶의 전환이 필요한 때입니다.\n이전과는 다른 경험을 해보세요",
    name: "모모",
    type: "활기찬, 낙천적인",
    favorite: "여행, 새로운 것",
    feature: "이전과는 다른 경험을 하기 위해 여행 떠날 채비를 했다.",
    categories: ["향상", "삶의 전환", "이전"],
  },
  {
    bigImage: bigImages[4],
    smallImage: smallImages[4],
    video: video5,
    title: "방심은 금물!\n당신의 지갑을\n늘 유심히 지켜보세요",
    name: "굴굴",
    type: "개구쟁이",
    favorite: "돈",
    feature:
      "이 친구는 당신의 지출을 관리해주는 생명체이다.\n그치만 방심하면 이리저리 뛰어다녀 당신을 곤란하게 만들수도...",
    categories: ["지출", "내일", "보호"],
  },
  {
    bigImage: bigImages[5],
    smallImage: smallImages[5],
    video: video6,
    title: "인내를 가지고\n나에게 중요한 가치가\n무엇인지 생각해봐요",
    name: "별빛",
    type: "조용한",
    favorite: "평화, 소중한 것",
    feature:
      "크고 어두운 공간 속에서 유유히 빛을 낸다.\n어둠 속에서 빛을 밝히는 중요한 존재이다.",
    categories: ["인내력", "뛰어내리는 사람들", "가치"],
  },
  {
    bigImage: bigImages[6],
    smallImage: smallImages[6],
    video: video7,
    title: "두려움에 떠는\n그대에게 심판을",
    name: "티아 (tia)",
    type: "변덕쟁이",
    favorite: "심판",
    feature:
      "양심의 가책을 느끼는 사람들에게 심판을 내려준다고 전해지는 지성을\n가진 저울이다. 기분에 따라 도움을 주기도 한다고 하니 잘 보이도록 하자.",
    categories: ["여행길", "귀인", "균형"],
  },
  {
    bigImage: bigImages[7],
    smallImage: smallImages[7],
    video: video8,
    title: "방종하지 않으면\n성공의 기회가 온다.",
    name: "치치",
    type: "욕망을 먹고 자라나는 존재",
    favorite: "치어리딩",
    feature:
      "자유롭고 제멋대로이지만 사랑스러움.\n치치에게 욕망을 주면, 나의 욕망은 사라지게 되고 내 욕망대로 치치가 행동함. 성공에 집중할 수 있게 욕망을 억제해줌.",
    categories: ["인내력", "뛰어내리는 사람들", "가치"],
  },
  {
    bigImage: bigImages[8],
    smallImage: smallImages[8],
    video: video9,
    title: "당신의 의지가\n하루를 바꾼다",
    name: "두두 (頭頭)",
    type: "이중적인",
    favorite: "잡아먹기",
    feature:
      "서로가 원하는 것을 추구하기 위해 경쟁하는 생명체.\n인간의 욕망에 따라 탄생과 죽음을 반복한다.",
    categories: ["지루", "죽은 사람", "보람"],
  },
  {
    bigImage: bigImages[9],
    smallImage: smallImages[9],
    video: video10,
    title: "선택이 서툰\n그대에게 판단을",
    name: "매그 (magg)",
    type: "신중",
    favorite: "잡곡",
    feature:
      "일찍이 길 잃은 여행자들 앞에 나타난다고 알려진 나침반.\n가지고 있는 곡식을 뿌려주면 그에 대한 답례로 길을 알려 준다.",
    categories: ["표류", "매", "안정"],
  },
  {
    bigImage: bigImages[10],
    smallImage: smallImages[10],
    video: video11,
    title: "꿈을 향해 나아가요",
    name: "초롱",
    type: "소심한",
    favorite: "꿈, 빛",
    feature:
      "좌절해 주저앉았지만 자신의 큰 꿈을 바라보는 눈은 초롱초롱하다.\n꿈을 위해 다시 일어설 준비를 한다.",
    categories: ["좌절", "새로운 인식", "큰 꿈"],
  },
  {
    bigImage: bigImages[11],
    smallImage: smallImages[11],
    video: video12,
    title: "시장의 붕괴로 인한\n불가사의한 일이 벌어지리라",
    name: "쿵",
    type: "욕심쟁이",
    favorite: "위에서 아래로 점프",
    feature:
      "반짝이고 예쁜 알에서 태어나지만, 모습은 못생김.\n소라집 아래 있는 것이 사람이라는 소문이 있음. 무너진 잔해들\n아래서 발견되는 신비로운 아이.",
    categories: ["삽", "시장의 붕괴", "불가사의"],
  },
];

export default fortuneContents;
