import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";

export default function BasicTable({ fetchedData }) {
  if (!fetchedData) {
    return <div>Nincs adat</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 320 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ padding: { xs: "5px", md: "20px" } }}>
              Dessert (100g serving)
            </TableCell>
            <TableCell
              align="right"
              sx={{ padding: { xs: "5px", md: "20px" } }}
            >
              Calories
            </TableCell>
            <TableCell
              align="right"
              sx={{ padding: { xs: "5px", md: "20px" } }}
            >
              Fat&nbsp;(g)
            </TableCell>
            <TableCell
              align="right"
              sx={{ padding: { xs: "5px", md: "20px" } }}
            >
              Carbs&nbsp;(g)
            </TableCell>
            <TableCell
              align="right"
              sx={{ padding: { xs: "5px", md: "20px" } }}
            >
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fetchedData.map((item) => (
            <TableRow
              key={item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ padding: { xs: "5px", md: "20px" } }}
              >
                <Image
                  width={140}
                  height={140}
                  src={item.image}
                  alt="Product Image"
                />
              </TableCell>
              <TableCell
                align="right"
                sx={{ padding: { xs: "5px", md: "20px" } }}
              >
                {item.name}
              </TableCell>{" "}
              <TableCell
                align="right"
                sx={{ padding: { xs: "5px", md: "20px" } }}
              >
                {item.price}
              </TableCell>
              <TableCell
                align="right"
                sx={{ padding: { xs: "5px", md: "20px" } }}
              >
                {item.category.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
