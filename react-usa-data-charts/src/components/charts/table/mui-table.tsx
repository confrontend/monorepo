import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import { iHeaderLifeQaulity as iHeaderLifeQuality } from "../../../global/types";
import { useState, MouseEvent, useMemo } from "react";
import { visuallyHidden } from "@mui/utils";

interface EnhancedTableProps {
  headers: iHeaderLifeQuality[];
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: keyof iHeaderLifeQuality
  ) => void;
  order?: Order;
  orderBy?: string | number;
  rowCount: number;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator(order: any, orderBy: any): (a: any, b: any) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, rowCount, onRequestSort, headers } = props;
  const createSortHandler = (property: any) => (event: MouseEvent<unknown>) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headers.map((headCell) => (
          <TableCell
            key={String(headCell)}
            sortDirection={orderBy === String(headCell) ? order : false}
          >
            <TableSortLabel
              active={orderBy === String(headCell)}
              direction={orderBy === String(headCell) ? order : "asc"}
              onClick={createSortHandler(String(headCell))}
            >
              {String(headCell).replaceAll("_", " ").replaceAll("Index", "")}
              {orderBy === headCell.City ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function MuiTable({
  rows,
  headers,
}: {
  rows: (string | number)[];
  headers: iHeaderLifeQuality[];
}) {
  const [order, setOrder] = useState<Order>("asc");

  const [orderBy, setOrderBy] = useState<string | number>("City");

  /**
   * Development:
   *  Performance: 86 ms
   *  Compared to no memoization: 114 ms
   * Production:  61 ms
   */
  const sortedRows = useMemo(
    () => rows?.sort(getComparator(order, orderBy)),
    [order]
  );

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof iHeaderLifeQuality
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              headers={headers}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {sortedRows.map((row: any, i: number) => (
                <TableRow
                  key={i}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.values(row).map((value, i) => {
                    return (
                      <TableCell key={i} align="left">
                        {String(value)}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
