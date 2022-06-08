import "./home.scss";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  userColumns,
  userColumnsJsonPlaceHolder,
  userColumnsRandomUser,
  userRowJsonPlaceholder,
  userRowRandomUser,
  userRows,
  userRows2,
} from "../../data/dataTable.mock";
import { useContactsQuery, useGetUsersQuery } from "../../services/contactsApi";
import { Box, Button } from "@mui/material";
import { convertData2 } from "../../utils/helper";

// const convertData = userRowRandomUser.map((item, index) => {
//   return { ...item, index: index + 1 };
// });

const Home = () => {
  const [page, setPage] = useState(1);
  const {
    data: users,
    isLoading,
    isSuccess,
    refetch,
  } = useGetUsersQuery({ results: 10 * page });

  // useEffect(() => {
  //   if (isLoading) {
  //     setData(convertData2(users?.results));
  //   }
  // }, [users, isLoading, isSuccess]);

  // const rows = [
  //   { id: 1, col1: "Hello", col2: "World" },
  //   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  //   { id: 3, col1: "MUI", col2: "is Amazing" },
  // ];

  // const columns = [
  //   { field: "col1", headerName: "Column 1", width: 150 },
  //   { field: "col2", headerName: "Column 2", width: 150 },
  // ];
  // todo increase index
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      minWidth: 200,
      flex: 2,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to={"/users/test"} style={{ textDecoration: "none" }}>
              <div className='viewButton'>View</div>
            </Link>
            <div className='deleteButton'>Delete</div>
          </div>
        );
      },
    },
  ];

  const handleGetRandomUsers = () => {
    refetch();
    // setPage(page + 1);
  };

  return (
    <div className='datatable'>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <div className='datatable__title'>
            Add New User
            <Box>
              {/* <Link to={"/users/new"} className='datatable__link'>
                Add New
              </Link> */}
              <Button
                component={Link}
                to='/about'
                variant='outlined'
                color='primary'
              >
                About Page
              </Button>
              <Button variant='outlined' onClick={handleGetRandomUsers}>
                Get Random Users
              </Button>
            </Box>
          </div>
          {/* {JSON.stringify(data)} */}
          <DataGrid
            className='datatable__datagrid'
            getRowId={(row) => row.login.uuid}
            rows={users}
            columns={userColumnsRandomUser.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
          />
        </>
      )}
    </div>
  );
};

export default Home;
