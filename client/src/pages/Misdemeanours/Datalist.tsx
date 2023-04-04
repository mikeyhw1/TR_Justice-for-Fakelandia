import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Misdemeanour, MisdemeanourKind } from "../../types/misdemeanours.types";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { InputLabel } from "@mui/material";

interface DatalistProps {
    data: Misdemeanour[];
}

const Datalist: React.FC<DatalistProps> = ({ data }) => {
    // TODO: Extensions & Deployment

    const [filteredData, setFilteredData] = useState<Misdemeanour[]>();
    const [selectedKey, setSelectedKey] = useState<MisdemeanourKind | "all">("all");

    useEffect(() => {
        selectedKey === "all"
            ? setFilteredData(data)
            : setFilteredData(data.filter((item) => item.misdemeanour === selectedKey));
    }, [selectedKey]);

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedKey(event.target.value as MisdemeanourKind | "all");
    };

    const getRandomPic = () => {
        const ideaPathWidth = 150;
        const ideaPathHeight = 150;
        const ideaPath = `https://picsum.photos/${ideaPathWidth}/${ideaPathHeight}`;
        return <img src={ideaPath} />;
    };

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
        <div>
            <InputLabel>Filter:</InputLabel>
            <Select
                className="select"
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectedKey}
                onChange={handleChange}
                autoWidth
            >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"rudeness"}>Mild Public Rudeness</MenuItem>
                <MenuItem value={"vegetables"}>Not Eating Your Vegetables</MenuItem>
                <MenuItem value={"lift"}>Speaking in a Lift</MenuItem>
                <MenuItem value={"united"}>Supporting Manchester United</MenuItem>
            </Select>

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
                        {filteredData &&
                            filteredData.map((row) => (
                                <TableRow
                                    key={row.citizenId}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.citizenId}
                                    </TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">
                                        {row.misdemeanour} {misdemeanourIcon(row.misdemeanour)}
                                    </TableCell>
                                    <TableCell align="right">{getRandomPic()}</TableCell>
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Datalist;
