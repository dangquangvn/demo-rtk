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
import { useContactsQuery } from "../../services/contactsApi";

const convertData = userRowRandomUser.map((item, index) => {
  return { ...item, index: index + 1 };
});
console.log(
  "🚀TCL: ~ file: Home.js ~ line 19 ~ convertData ~ convertData",
  convertData
);

const Home = () => {
  // const { data, isLoading, error } = useContactsQuery();
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState(convertData);
  console.log("🚀TCL: ~ file: Home.js ~ line 20 ~ Home ~ data", data);

  // useEffect(() => {
  //   setData((prev) =>
  //     prev.map((item, index) => {
  //       const result = { ...item, index };
  //       console.log(
  //         "🚀TCL: ~ file: Home.js ~ line 25 ~ prev.map ~ result",
  //         index,
  //         result
  //       );
  //       return result;
  //     })
  //   );
  // }, []);

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

  return (
    <div className='datatable'>
      <div className='datatable__title'>
        Add New User
        <Link to={"/users/new"} className='datatable__link'>
          Add New
        </Link>
      </div>
      <DataGrid
        className='datatable__datagrid'
        getRowId={(row) => row.login.uuid}
        rows={data}
        columns={userColumnsRandomUser.concat(actionColumn)}
        pageSize={10}
        // rowsPerPageOptions={[9]}
        checkboxSelection
      />
      {/* <h1>Home</h1>
      <div style={{ height: 300 }}>
        <DataGrid rows={rows} columns={columns} />
      </div> */}
    </div>
  );
};

export default Home;
