import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `test-${val}`,
    image: "https://source.unsplash.com/Sg3XwuEpybU",
    email: "hoge@com",
    phone: "090-000-000",
    company: {
      name: "test"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();

  // stateが存在していればその値を使う．存在していなければ，Falseにする
  // (条件) ? (条件が真だったとき実行) : (条件が偽だったとき実行)
  // stateが存在していれば，stateの評価値は真になる．stateが存在していなければ（undefined），評価値は偽になる
  // const isAdmin = state ? state.isAdmin : false;

  // const { userInfo, setUserInfo } = useContext(UserContext);

  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });

  return (
    <SContainer>
      <h2>Users</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>Switch</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

// 良い感じのレスポンシブなデザイン（カードを並べる）
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
