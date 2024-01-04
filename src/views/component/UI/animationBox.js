import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const AnimationBox = styled(Box)`
  ${({ theme }) => `
  max-width:325px;
  width:100%;
  height:100%;
  cursor: pointer;
  background-color: rgba(59, 55, 46, 1);
  border-radius: 12px 12px 12px 12px;
  border : 1px solid rgba(106, 102, 94, 1);
  color:#ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: ${theme.transitions.create(["background-color", "transform"], {
    duration: theme.transitions.duration.standard,
  })};

  @media (max-width:440px) {
    max-width:100%
  }
  &:hover {
    background-color: #3B372E;
    transform: scale(1.1);
    @media (max-width:425px) {
      transform: scale(1.05);
    }
  }
  `}
`;

export default AnimationBox;
