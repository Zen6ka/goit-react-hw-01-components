import styled from 'styled-components';

export const FriendsList = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto ${p => p.theme.spacing(20)};
  gap: ${p => p.theme.spacing(4)};
`;