import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import { Misdemeanour } from "../../types/misdemeanours.types";
import Datalist from "./Datalist";
import { useMisdemeanourContext } from "../../hooks/useContextHooks";

const Misdemeanours: React.FC = () => {
    const { newMisdemeanour } = useMisdemeanourContext();

    const [data, setData] = useState<Misdemeanour[]>();
    const dataAmount = 10;

    useEffect(() => {
        const apiPath = `http://localhost:8080/api/misdemeanours/${dataAmount}`;
        const callFetchData = async () => {
            try {
                const response = (await fetchData(apiPath)) as { misdemeanours: Misdemeanour[] };
                if (response !== undefined) {
                    let tempArray: Misdemeanour[] = [];
                    if (newMisdemeanour.length > 0) {
                        tempArray = newMisdemeanour;
                    }
                    tempArray = tempArray.concat(response.misdemeanours);
                    setData(tempArray);
                    // setData(response.misdemeanours);
                }
                // console.log(response);
            } catch (error) {}
        };
        callFetchData();
    }, []);

    return (
        <div className="pageContent">
            <h3>Misdemeanours</h3>
            {data && <Datalist data={data} />}
        </div>
    );
};

export default Misdemeanours;
