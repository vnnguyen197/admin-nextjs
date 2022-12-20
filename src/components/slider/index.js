import { useRouter } from 'next/router'
import PersonIcon from '@mui/icons-material/Person'
import Avatar from '@mui/material/Avatar'
import { Info, StyleImage, ButtonImg, ContentBottom, TextAcc, Account, EditProfile, Name } from '../../styles/details/index';
import LogoutIcon from '@mui/icons-material/Logout';

function DetailUsers() {
  const router = useRouter()

  return (
    <Info>
      <StyleImage>
        <ButtonImg>
          <Avatar sx={{ width: 50, height: 50 }} />
        </ButtonImg>
        <EditProfile>
          <Name>admin</Name>
        </EditProfile>
      </StyleImage>
      <ContentBottom>
        <Account onClick={() => router.push('/users')}>
          <PersonIcon style={{ color: 'blue' }} />
          <TextAcc>
            Quản lý người dùng
          </TextAcc>
        </Account>
        <Account onClick={() => router.push('/')}>
          <LogoutIcon style={{ color: 'red' }} />
          <TextAcc>
            Đăng xuất
          </TextAcc>
        </Account>
      </ContentBottom>
    </Info>
  )
}

export default DetailUsers;
