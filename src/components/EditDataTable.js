import * as React from "react";
import bson from "bson";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
} from "@mui/x-data-grid";

const initialRows = [
  {
    _id: 1,
    name: "john",
    age: 25,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    _id: 2,
    name: "john",
    age: 36,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    _id: 3,
    name: "john",
    age: 19,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    _id: 4,
    name: "john",
    age: 28,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
  {
    _id: 5,
    name: "john",
    age: 23,
    dateCreated: Date.now(),
    lastLogin: Date.now(),
  },
];

// add new
function EditToolbar(props) {
  const { setRows, setRowModesModel, type } = props;

  const handleClick = () => {
    const _id = new bson.ObjectId().toString();
    console.log(_id);
    setRows((oldRows) => [
      ...oldRows,
      { _id: _id, id: _id, name: "test", age: "", isNew: true },
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [_id]: { mode: GridRowModes.Edit, fieldToFocus: "item" },
    }));
  };

  return (
    <GridToolbarContainer>
      <b>{type}</b>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add new item
      </Button>
    </GridToolbarContainer>
  );
}

EditToolbar.propTypes = {
  setRowModesModel: PropTypes.func.isRequired,
  setRows: PropTypes.func.isRequired,
};

export default function EditDataTable({ dishes, type }) {
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStart = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleRowEditStop = (params, event) => {
    event.defaultMuiPrevented = true;
  };

  const handleEditClick = (id) => () => {
    console.log(id);
    console.log(rowModesModel);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
    console.log(rowModesModel);
  };

  const handleSaveClick = (id) => () => {
    console.log(id);
    console.log(rowModesModel);
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
    console.log(rowModesModel);
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    console.log(updatedRow);
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const columns = [
    { field: "item", headerName: "Item", width: 180, editable: true },
    { field: "_id", headerName: "Id", width: 225, editable: true },
    { field: "id", headerName: "MuiId", width: 225, editable: true },
    {
      field: "responsible",
      headerName: "responsible",
      type: "string",
      editable: true,
    },
    {
      field: "notes",
      headerName: "notes",
      type: "string",
      width: 180,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
        "& .actions": {
          color: "text.secondary",
        },
        "& .textPrimary": {
          color: "text.primary",
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        getRowId={(row) => row._id}
        rowModesModel={rowModesModel}
        onRowModesModelChange={(newModel) => setRowModesModel(newModel)}
        onRowEditStart={handleRowEditStart}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        components={{
          Toolbar: EditToolbar,
        }}
        componentsProps={{
          toolbar: { setRows, setRowModesModel, type },
        }}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
