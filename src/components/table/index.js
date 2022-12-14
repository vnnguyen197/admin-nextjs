import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import userAPI from "../../services/getListUsers";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Loading from "../Loading";
import { Alert, Snackbar, Stack } from '@mui/material'
import { Button } from "@mui/material";
import styled from "styled-components";
import { AddUser } from "../../styles/user";
import getDateTimeString from "../../utils/getDateTimeString";

export default function DataTableUsers() {
  const [data, setData] = useState();
  const [dataDelete, setDataDelete] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('')
  const [noti, setNoti] = useState(false)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (
    event,
    newPage
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event
  ) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }


  const handleClose = (
    event,
    reason
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }


  useEffect(() => {
    setLoading(true);
    const getCharacters = async () => {
      const response = await userAPI.getList();
      setLoading(false);
      setData(response.data);
    };
    getCharacters()
      // make sure to catch any error
      .catch(console.error);
  }, [dataDelete]);

  const handleDeleteButton = async (id) => {
    try {
      const dataDelete = await userAPI.deleteUser(id);
      setDataDelete(dataDelete.data)
      setOpen(!open)
      setNoti(true)
    } catch (error) {
      setError(error)
      setOpen(false)
    }
  };

  return (
    <TableContainer component={Paper}>
      {loading ? <Loading /> : null}
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ width: "10px !important" }} align="left">
              ID
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Email
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              T??n t??i kho???n
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              H??? v?? t??n
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Th???i gian t???o
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              S??? ??i???n tho???i
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              S??? t??i kho???n
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              T??n ng??n h??ng
            </TableCell>
            <TableCell
              align="left"
              sx={{ fontWeight: "bold", fontSize: "16px" }}
            >
              Ch??? t??i kho???n
            </TableCell>
            <TableCell align="center"
              sx={{ fontWeight: "bold", fontSize: "16px" }}>Ch???c N??ng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data &&
            data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(
                (row, index) =>
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    <TableCell align="left">{row.username}</TableCell>
                    <TableCell align="left"><strong>{row.fullName}</strong></TableCell>
                    <TableCell align="left">{getDateTimeString(row.createdAt)}</TableCell>
                    <TableCell align="left">{row.phoneNumber}</TableCell>
                    <TableCell align="left">{row.bankNumber}</TableCell>
                    <TableCell align="left">{row.bankName}</TableCell>
                    <TableCell align="left">{row.bankOwner}</TableCell>
                    <TableCell align="left">
                      <Stack spacing={2}>
                        <Button onClick={() => {
                          handleDeleteButton(row.id);
                        }}
                        >
                          <DeleteIcon
                            sx={{ color: "red", cursor: 'pointer' }}
                          />
                          <strong>X??A</strong>
                        </Button>
                        <Snackbar
                          open={open}
                          autoHideDuration={5000}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                          }}
                        >
                          {noti ? (
                            <Alert
                              onClose={handleClose}
                              severity="success"
                              sx={{ width: '100%' }}
                            >
                              X??a t??i kho???n <strong>{dataDelete?.fullName}</strong> th??nh c??ng
                            </Alert>
                          ) : (
                            <Alert severity="error">
                              {error}
                            </Alert>
                          )}
                        </Snackbar>
                      </Stack>
                    </TableCell>
                  </TableRow>
              )}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={data?.length ?? 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
