import Head from "next/head";
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
  AddUser,
} from "../styles/user";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddUsers from '../components/addUser';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid orange',
  boxShadow: 24,
  p: 4,
};

function Users() {
  const [open, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  return (
    <Container>
      <Head>
        <title>Admin - Quản lý người dùng</title>
      </Head>
      <SliderBar>
        <DetailUsers />
      </SliderBar>
      <ContentTable>
        <StyleTitle>
          <Title>Quản lý người dùng</Title>
          <TextInfo>Xem thông tin chi tiết của người dùng</TextInfo>
        </StyleTitle>
        <StyleTable>
          <div>
          <AddUser onClick={handleOpen}> <AccountCircleIcon />  Thêm tài khoản </AddUser>
            <Modal
              open={open}
              onClose={handleCloseModal}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <AddUsers handleCloseModal={handleCloseModal}/>
              </Box>
            </Modal>
          </div>
          
          <DataTableUsers />
        </StyleTable>
      </ContentTable>
    </Container>
  );
}

export default Users;
