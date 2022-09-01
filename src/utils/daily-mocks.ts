export const generateDaily = (e: any, dailies: any) => ({
  id: dailies[dailies.length - 1].id + 1,
  name: e.target[0].value,
  checked: false,
  index: dailies.length,
});

export const defaultDailies = [
  { id: "123", name: "make your bed", checked: true, index: 0 },
  { id: "234", name: "brush your teeth", checked: false, index: 1 },
];
