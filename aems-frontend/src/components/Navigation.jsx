/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import { TablePagination } from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export function PaginationItems({ sx, ...other }) {
  return (
    <Box sx={{ position: "relative", ...sx }}>
      <TablePagination
        showLastButton
        showFirstButton
        component="div"
        {...other}
        sx={{ borderTopColor: "transparent", color: "#fff" }}
      />
    </Box>
  );
}
