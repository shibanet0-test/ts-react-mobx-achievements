import React from "react";
import Button from "../../../ui-kit/Button";
import { ContentArgs } from "../../../ui-kit/Popup";
import styled from "styled-components";

const PopupImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  margin-bottom: 40px;
`;

const StyledPopupContentGetGift = styled.div`
  background-color: #2e2151;
  padding: 40px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupGiftType = styled.div`
  margin-bottom: 20px;
  color: #8d779f;
  text-transform: uppercase;
`;

const PopupGiftTitle = styled.div`
  margin-bottom: 40px;
  color: #ffffff;
  font-size: 25px;
  font-weight: bold;
`;

const PopupGiftDescription = styled.div`
  margin-bottom: 50px;
  color: #d3ccd9;
`;

interface PopupContentGiftInfo {
  img?: string;
  title?: string;
  type?: string;
  description?: string;
}

interface PopupContentGetGiftProps extends ContentArgs {
  onGetGift: () => void;
  gift: PopupContentGiftInfo;
}

function PopupContentGetGift({
  closePopup,
  onGetGift,
  gift,
}: PopupContentGetGiftProps) {
  return (
    <StyledPopupContentGetGift>
      {gift.img && <PopupImage src={gift.img} />}

      {gift.type && <PopupGiftType>{gift.type}</PopupGiftType>}

      {gift.title && <PopupGiftTitle>{gift.title}</PopupGiftTitle>}

      {gift.description && (
        <PopupGiftDescription>{gift.description}</PopupGiftDescription>
      )}

      <Button
        type="green"
        onClick={() => {
          onGetGift();
          closePopup();
        }}
      >
        Participate
      </Button>
      <Button onClick={closePopup}>Later</Button>
    </StyledPopupContentGetGift>
  );
}

export default PopupContentGetGift;
