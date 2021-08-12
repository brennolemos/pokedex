import { useParams } from "react-router-dom";

import * as S from "./PokeInfos-styles";
import typeColors from "../../helpers/typeColors";
import { capitalize } from "../../helpers/utils";

import Badge from "../Badge";
import Loading from "../Loading";
import ProgressBar from "../ProgressBar";
import useFetchApi from "../../helpers/useFetch";

type ParamsProps = {
  id: string;
};

type PokeInfosProps = {
  name: string;
  height: number;
  weight: number;
  types: TypesProps[];
  abilities: Abilities[];
  stats: Stats[];
};

type TypesProps = {
  type: {
    name: string;
  };
};

type Abilities = {
  ability: {
    name: string;
  };
};

type Stats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

const PokeInfos = () => {
  const { id } = useParams<ParamsProps>();
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const {
    data: pokeInfos,
    loading,
    error,
  } = useFetchApi<PokeInfosProps | null>(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  );

  if (loading) return <Loading />;
  if (error) return <div>{error}</div>;
  if (pokeInfos)
    return (
      <S.Infos>
        <S.Column
          style={{
            backgroundColor: `${typeColors[pokeInfos.types[0].type.name]}BB`,
          }}
        >
          <S.Id>#{id.padStart(3, "0")}</S.Id>
          <S.Title>{pokeInfos?.name}</S.Title>
          {pokeInfos.types.map((slot) => (
            <Badge key={slot.type.name} type={slot.type.name} />
          ))}
          <S.Image src={urlImage} alt={pokeInfos?.name} />
        </S.Column>
        <S.Column>
          <h3>Infos:</h3>

          <p> Height: {pokeInfos.height / 10} m</p>
          <p> Weight: {pokeInfos.weight / 10} kg</p>
          <p>
            Abilities:{" "}
            {pokeInfos.abilities.map((slot) => (
              <Badge key={slot.ability.name} type={slot.ability.name} />
            ))}
          </p>
          <h3 style={{ marginTop: "1rem" }}>Stats:</h3>
          {pokeInfos.stats.map((slot) => (
            <div
              style={{
                marginBottom: ".5rem",
              }}
              key={slot.stat.name}
            >
              <p>{capitalize(slot.stat.name)}:</p>
              <ProgressBar now={slot.base_stat} />
            </div>
          ))}
        </S.Column>
      </S.Infos>
    );

  return null;
};

export default PokeInfos;
