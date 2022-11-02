export type PokemonProps = {
  id: string;
  name: string;
  url: string;
  types: TypesProps[];
};

type TypesProps = {
  type: {
    name: string;
  };
};

export class Pokemon {
  constructor(public props: PokemonProps) {}

  get id() {
    return this.props.id;
  }

  get name() {
    return this.props.name;
  }

  get url() {
    return this.props.url;
  }
  
  get types() {
    return this.props.types;
  }
}
