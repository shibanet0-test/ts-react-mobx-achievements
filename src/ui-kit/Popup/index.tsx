import React, { useCallback } from "react";
import styled from "styled-components";

export interface ContentArgs {
  closePopup: () => void;
}
export interface PopupProps {
  isVisible?: boolean;
  content?: (arg0: ContentArgs) => React.ReactNode;
  onClose?: () => void;
}

const StyledPopup = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PopupBackground = styled.div`
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(5px);
`;

const PopupContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default function Popup({ content, isVisible, onClose }: PopupProps) {
  const handleClose = useCallback(() => onClose && onClose(), [onClose]);

  if (!isVisible) {
    return null;
  }

  return (
    <PopupBackground data-background="">
      <PopupContainer onClick={handleClose} data-container="">
        <StyledPopup>
          {content ? content({ closePopup: handleClose }) : null}
        </StyledPopup>
      </PopupContainer>
    </PopupBackground>
  );
}
