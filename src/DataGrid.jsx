import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "favoriteColor",
    headerName: "Favorite Color",
    width: 150,
    // editable: true,
  },
  {
    field: "favoriteFood",
    headerName: "Favorite Food",
    width: 150,
    // editable: true,
  },
  {
    field: "likes",
    headerName: "Likes",
    width: 150,
  },
];

export default function TableView({ peopleData }) {
  return (
    <div className="m-2 w-50">
      <Box sx={{ height: 400, width: "100%", backgroundColor: "white" }}>
        <DataGrid
          rows={peopleData}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
}
