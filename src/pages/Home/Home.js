import "./home.scss";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { userColumns, userRows, userRows2 } from "../../data/dataTable.mock";
import { useContactsQuery } from "../../services/contactsApi";

const Home = () => {
  // const { data, isLoading, error } = useContactsQuery();
  // const [data, setData] = useState(userRows);
  const [data, setData] = useState(userRows2.data);

  // const rows = [
  //   { id: 1, col1: "Hello", col2: "World" },
  //   { id: 2, col1: "DataGridPro", col2: "is Awesome" },
  //   { id: 3, col1: "MUI", col2: "is Amazing" },
  // ];

  // const columns = [
  //   { field: "col1", headerName: "Column 1", width: 150 },
  //   { field: "col2", headerName: "Column 2", width: 150 },
  // ];

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
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
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
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
