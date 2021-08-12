import React from "react";

import * as S from "./Badge-styles";
import typeColors from "../../helpers/typeColors";
import { capitalize } from "../../helpers/utils";

type BadgeProps = {
  type: string;
};

const Badge = ({ type }: BadgeProps) => {
  return (
    <S.Badge
      style={{
        backgroundColor: typeColors[type] ? typeColors[type] : "#5d5e60",
      }}
    >
      {capitalize(type)}
    </S.Badge>
  );
};

export default Badge;
