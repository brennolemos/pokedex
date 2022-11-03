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

  public static fetchAll = <T>(url: string) => {
    return new Promise<T>(async (resolve) => {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    });
  };

  public static fetchByUrl = <T>(url: string) => {
    return new Promise<T>(async (resolve) => {
      const response = await fetch(url);
      const data = await response.json();
      resolve(data);
    });
  };
}
