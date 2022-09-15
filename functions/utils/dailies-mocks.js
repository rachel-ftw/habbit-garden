const { keys } = require("ramda");
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

const ifBoolCastType = (v) => {
  if (v === "true") return true;
  if (v === "false") return false;
  return v;
};

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
    const newSet = [
      generateDaily(todoStr),
      ...dailies.data.map((daily) => ({ ...daily, index: daily.index + 1 })),
    ];

    dailies.data = newSet;
    return newSet;
  },
  edit: (props) => {
    const { index, ...args } = props;
    const newSet = [...dailies.data];

    keys(args).forEach((key) => {
      newSet[index][key] = ifBoolCastType(args[key]);
    });

    dailies.data = newSet;
    return newSet;
  },
  reorder: (start, end) => {
    const startIndex = parseInt(start);
    const endIndex = parseInt(end);

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
