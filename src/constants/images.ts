import Origin1 from "../../public/assets/images/1-1.svg?react";
import Cracked1 from "../../public/assets/images/1-2.svg?react";
import Origin2 from "../../public/assets/images/2-1.svg?react";
import Cracked2 from "../../public/assets/images/2-2.svg?react";
import Origin3 from "../../public/assets/images/3-1.svg?react";
import Cracked3 from "../../public/assets/images/3-2.svg?react";
import Origin4 from "../../public/assets/images/4-1.svg?react";
import Cracked4 from "../../public/assets/images/4-2.svg?react";
import Origin5 from "../../public/assets/images/5-1.svg?react";
import Cracked5 from "../../public/assets/images/5-2.svg?react";
import Origin6 from "../../public/assets/images/6-1.svg?react";
import Cracked6 from "../../public/assets/images/6-2.svg?react";
import Origin7 from "../../public/assets/images/7-1.svg?react";
import Cracked7 from "../../public/assets/images/7-2.svg?react";
import Origin8 from "../../public/assets/images/8-1.svg?react";
import Cracked8 from "../../public/assets/images/8-2.svg?react";
import Origin9 from "../../public/assets/images/9-1.svg?react";
import Cracked9 from "../../public/assets/images/9-2.svg?react";
import Origin10 from "../../public/assets/images/10-1.svg?react";
import Cracked10 from "../../public/assets/images/10-2.svg?react";
import Origin11 from "../../public/assets/images/11-1.svg?react";
import Cracked11 from "../../public/assets/images/11-2.svg?react";
import Origin12 from "../../public/assets/images/12-1.svg?react";
import Cracked12 from "../../public/assets/images/12-2.svg?react";

export type SVGType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string | undefined;
  }
>;

export type ImageType = { origin: SVGType[]; cracked: SVGType[] };

const imagePaths: ImageType = {
  origin: [
    Origin1,
    Origin2,
    Origin3,
    Origin4,
    Origin5,
    Origin6,
    Origin7,
    Origin8,
    Origin9,
    Origin10,
    Origin11,
    Origin12,
  ],
  cracked: [
    Cracked1,
    Cracked2,
    Cracked3,
    Cracked4,
    Cracked5,
    Cracked6,
    Cracked7,
    Cracked8,
    Cracked9,
    Cracked10,
    Cracked11,
    Cracked12,
  ],
};

export default imagePaths;
