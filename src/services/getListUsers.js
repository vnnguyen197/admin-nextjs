import axiosClient from '../api/api'

const userAPI = {
  getList: () => {
    const url = `/api/v1/users`
    return axiosClient.get(url)
  },
  deleteUser: (id) => {
    const url = `/api/v1/users/delete/${id}`
    return axiosClient.delete(url)
  },
  register: (data) => {
    const url = `/api/v1/signup`
    return axiosClient.post(url, data)
  },
}

export default userAPI
