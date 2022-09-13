import { v4 as uuidv4 } from "uuid";

export const prependDaily = (e: any) => {
  return generateDaily(e?.target[0]?.value, 0);
};

export const generateDaily = (name: string, index: number) => ({
  id: uuidv4(),
  name,
  checked: false,
  index,
});
