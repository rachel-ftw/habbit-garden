const { v4: uuidv4 } = require("uuid");
const getRandomInt = require("./get-random-int");

const prependDaily = (data) => generateDaily(data, 0);

const generateDaily = (name, index = 0) => ({
  id: uuidv4(),
  name,
  checked: false,
  index,
});

const todos = [
  "brush your teeth",
  "make the bed",
  "go for a walk",
  "walk the dog",
  "do the dishes",
  "exercise",
  "meditate for 5 min",
  "read for 15 minutes",
  "journal for 10 minutes",
  "tidy for 10 minutes",
  "shower",
  "wash your face",
  "play with the kids",
  "draw a picture",
  "go hiking",
];

const defaultDailies = (num = 5) => {
  return Array(num)
    .fill("r")
    .map((_, index) => {
      return generateDaily(todos[getRandomInt(todos.length)], index);
    });
};

const dailies = {
  data: defaultDailies(),
  add: (todoStr) => {
    const newDaily = generateDaily(todoStr);
    const newSet = [
      newDaily,
      ...dailies.data.map((daily) => ({ ...daily, index: daily.index + 1 })),
    ];

    dailies.data = newSet;

    return newSet;
  },
  edit: (newText, index) => {
    const newSet = [...dailies.data];
    newSet[index].name = newText;
    dailies.data = newSet;
    return newSet;
  },
  reorder: (start, end) => {
    const startIndex = parseInt(start);
    const endIndex = parseInt(end);
    console.log("💃💃💃💃", { startIndex, endIndex });
    const item = dailies.data[startIndex];
    const itemAtEnd = dailies.data[endIndex];

    const updated = dailies.data.reduce((memo, daily, i) => {
      if (i === startIndex) {
        console.log("at start, continuing");
        return [...memo];
      }

      const reindex = () => {
        console.log({ endIndex, i });
        if (endIndex > startIndex) return daily.index + 1;
        if (endIndex < startIndex) return i + 1;
      };

      if (i === endIndex) {
        console.log("at endIndex, adding", { ...item, index: i });
        return [
          ...memo,
          { ...item, index: endIndex },
          { ...daily, index: endIndex + 1 },
        ];
      }

      if (i < endIndex) {
        console.log("i less than end, adding: ", daily.name);
        if (i > startIndex) {
          return [...memo, { ...daily, index: daily.index - 1 }];
        }
        return [...memo, daily];
      }

      if (i > endIndex) {
        console.log("past endIndex, adding");
        return [...memo, { ...daily, index: reindex() }];
      }
      return memo;
    }, []);

    console.log(updated);

    dailies.data = updated;
    return updated;
  },
};

module.exports = { dailies };
