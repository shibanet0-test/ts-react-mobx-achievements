import React from "react";
import styled from "styled-components";
import Progress from "../Progress";

const StyledAchievementItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

interface AchivementInfo {
  title: string;
  description: string;
}
interface AchievementItemProps {
  current: number;
  max: number;
  info: AchivementInfo;
  doneText: string;

  isAwardReceived: boolean;
  onAwardReceive?: () => void;
  awardReceiveText: string;
}

const AchivementInfo = styled.div`
  min-width: 500px;
  max-width: 500px;
  margin-right: 20px;
`;
const AchivementInfoTitle = styled.div`
  margin-bottom: 10px;
  color: #e5e1ea;
  font-weight: bold;
`;
const AchivementInfoDescription = styled.div`
  color: #78618b;
`;

interface AchivementStatusProps {
  current: number;
  max: number;
  isDone: boolean;
  doneText: string;
}
const AchivementStatus = styled.div`
  margin-left: 20px;
  min-width: 100px;
  color: #d6cedd;
  font-weight: ${({ isDone }: AchivementStatusProps) =>
    isDone ? "bold" : "normal"};
  &::before {
    content: "${({ isDone, doneText, current, max }: AchivementStatusProps) =>
      isDone ? doneText : `${current} / ${max}`}";
  }
`;
function AchievementItem({
  current,
  max,
  doneText,
  info,
  awardReceiveText,
  isAwardReceived,
  onAwardReceive,
}: AchievementItemProps) {
  return (
    <StyledAchievementItem>
      <AchivementInfo>
        <AchivementInfoTitle>{info.title}</AchivementInfoTitle>
        <AchivementInfoDescription>
          {info.description}
        </AchivementInfoDescription>
      </AchivementInfo>

      <Progress
        text={isAwardReceived ? undefined : awardReceiveText}
        current={current}
        max={max}
        onClick={
          isAwardReceived ? undefined : () => onAwardReceive && onAwardReceive()
        }
      />
      <AchivementStatus
        doneText={doneText}
        current={current}
        max={max}
        isDone={current === max}
      />
    </StyledAchievementItem>
  );
}

export default React.memo(AchievementItem);
