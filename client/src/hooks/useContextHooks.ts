import React, { useContext } from "react";
import { Misdemeanour } from "../types/misdemeanours.types";

interface interface_MisdemeanourContext {
    newMisdemeanour: Misdemeanour[];
    setNewMisdemeanour: React.Dispatch<React.SetStateAction<Misdemeanour[]>>;
}

const MisdemeanourContext = React.createContext<interface_MisdemeanourContext>({
    newMisdemeanour: [],
    setNewMisdemeanour: () => {},
});

export function useMisdemeanourContext() {
    return useContext(MisdemeanourContext);
}

export default MisdemeanourContext;
