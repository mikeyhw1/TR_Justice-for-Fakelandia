import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";

interface DatalistProps {
    // dataAmount: number;
    data: Misdemeanour[];
}

const Datalist: React.FC<DatalistProps> = ({ data }) => {
    React.useEffect(() => {
        console.log(data);
    }, []);

    const misdemeanourIcon = (input: MisdemeanourKind) => {
        switch (input) {
            case "rudeness":
                return "🤪";
            case "vegetables":
                return "🥗";
            case "lift":
                return "🗣️";
            case "united":
                return "😈";
            default:
                return "❌";
        }
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Citizen ID</TableCell>
                        <TableCell align="left">Date</TableCell>
                        <TableCell align="left">Misdemeanour</TableCell>
                        <TableCell align="right">Punishment Idea</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.citizenId} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                            <TableCell component="th" scope="row">
                                {row.citizenId}
                            </TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">
                                {row.misdemeanour} {misdemeanourIcon(row.misdemeanour)}
                            </TableCell>
                            <TableCell align="right">___</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default Datalist;
