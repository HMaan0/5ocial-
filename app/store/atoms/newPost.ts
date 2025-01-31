import { atom } from "recoil";
export const newPost = atom<boolean>({
  key: "newPost",
  default: false,
});
