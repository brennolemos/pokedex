import * as S from './ProgressBar-styles';

type ProgressBarType = {
  now: number;
};

const ProgressBar = ({ now }: ProgressBarType) => {
  return (
    <S.Progress>
      <S.ProgressBar
        style={{
          width: `${now}%`,
        }}
      >
        {now}
      </S.ProgressBar>
    </S.Progress>
  );
};

export default ProgressBar;
