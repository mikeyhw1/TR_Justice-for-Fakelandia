import { useEffect, useState } from "react";
import { fetchData } from "../../services/fetchData";
import { Misdemeanour } from "../../types/misdemeanours.types";
import Datalist from "./Datalist";

const Misdemeanours: React.FC = () => {
    const [data, setData] = useState<Misdemeanour[]>();
    const dataAmount = 10;

    useEffect(() => {
        const apiPath = `http://localhost:8080/api/misdemeanours/${dataAmount}`;
        const callFetchData = async () => {
            const response = (await fetchData(apiPath)) as { misdemeanours: Misdemeanour[] };
            if (response !== undefined) {
                setData(response.misdemeanours);
            }
            console.log(response);
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
