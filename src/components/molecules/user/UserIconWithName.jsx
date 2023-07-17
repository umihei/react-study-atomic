import styled from "styled-components";
import { memo, useContext } from "react";
import { UserContext } from "../../../providers/UserProvider";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  // const { userInfo } = useContext(UserContext);

  const userInfo = useRecoilValue(userState);

  console.log("user icon with name");

  const isAdmin = userInfo ? userInfo.isAdmin : false;
  // (条件式) && (条件が真のとき実行される式)
  // &&の論理演算子は，演算子の左側の評価が真のとき，右側の式を実行する
  return (
    <SContainer>
      <SImg height={160} width={160} src={image} alt="profile" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>Edit</SEdit>}
    </SContainer>
  );
});

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40415e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
