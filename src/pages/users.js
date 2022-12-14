import DetailUsers from "../components/slider";
import DataTableUsers from "../components/table";
import {
  Container,
  ContentTable,
  SliderBar,
  StyleTitle,
  Title,
  TextInfo,
  StyleTable,
} from "../styles/user";

function Users() {
  return (
    <Container>
      <SliderBar>
        <DetailUsers />
      </SliderBar>
      <ContentTable>
        <StyleTitle>
          <Title>Quản lý người dùng</Title>
          <TextInfo>Xem thông tin chi tiết của người dùng</TextInfo>
        </StyleTitle>
        <StyleTable>
          <DataTableUsers />
        </StyleTable>
      </ContentTable>
    </Container>
  );
}

export default Users;
