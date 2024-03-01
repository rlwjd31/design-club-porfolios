import big1 from "/assets/images/big-1.png";
import big2 from "/assets/images/big-2.png";
import big3 from "/assets/images/big-3.png";
import big4 from "/assets/images/big-4.png";
import big5 from "/assets/images/big-5.png";
import big6 from "/assets/images/big-6.png";
import big7 from "/assets/images/big-7.png";
import big8 from "/assets/images/big-8.png";
import big9 from "/assets/images/big-9.png";
import big10 from "/assets/images/big-10.png";
import big11 from "/assets/images/big-11.png";
import big12 from "/assets/images/big-12.png";

import small1 from "/assets/images/small-1.png";
import small2 from "/assets/images/small-2.png";
import small3 from "/assets/images/small-3.png";
import small4 from "/assets/images/small-4.png";
import small5 from "/assets/images/small-5.png";
import small6 from "/assets/images/small-6.png";
import small7 from "/assets/images/small-7.png";
import small8 from "/assets/images/small-8.png";
import small9 from "/assets/images/small-9.png";
import small10 from "/assets/images/small-10.png";
import small11 from "/assets/images/small-11.png";
import small12 from "/assets/images/small-12.png";

const filterUndefinedImages = (images: string[]) =>
  images.map((image) => image ?? "");

export const bigImages: string[] = filterUndefinedImages([
  big1,
  big2,
  big3,
  big4,
  big5,
  big6,
  big7,
  big8,
  big9,
  big10,
  big11,
  big12,
]);

export const smallImages: string[] = filterUndefinedImages([
  small1,
  small2,
  small3,
  small4,
  small5,
  small6,
  small7,
  small8,
  small9,
  small10,
  small11,
  small12,
]);
