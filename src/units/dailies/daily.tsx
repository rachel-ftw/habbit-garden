interface IDaily {
  name: String;
}

const Daily = ({ name }: IDaily) => <li>{name}</li>;

export default Daily;
