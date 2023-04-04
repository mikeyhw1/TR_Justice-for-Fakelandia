import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { JustTalk, MisdemeanourKind, PostDataProps } from "../../types/misdemeanours.types";
import { postData } from "../../services/postData";

const Form: React.FC = () => {
    const [subject, setSubject] = useState<string>("");
    const [selectedKey, setSelectedKey] = useState<MisdemeanourKind | JustTalk>();
    const [textbox, setTextbox] = useState<string>("");
    const [formValid, setFormValid] = useState<boolean>(false);
    const [errorText, setErrorText] = useState<string>("");
    const [responseText, setResponseText] = useState<string>("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const apiPath = `http://localhost:8080/api/confess`;
        if (subject && selectedKey && textbox) {
            const outPutData: PostDataProps = { subject, reason: selectedKey, details: textbox };
            console.log(outPutData);

            const response = await postData(apiPath, outPutData);
            console.log(response);

            !response?.success ? setErrorText(`ERROR : ${response?.message}`) : setErrorText("");
            setResponseText(response?.message);
        }
    };

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedKey(event.target.value as MisdemeanourKind);
    };

    useEffect(() => {
        valiation();
    }, [subject, selectedKey, textbox]);

    const valiation = () => {
        let tempErrorText = "";
        let tempFormValid = true;
        if (!subject) {
            tempErrorText += "Empty Subject ; ";
            tempFormValid = false;
        }
        if (!selectedKey) {
            tempErrorText += "Empty Reason for contact ; ";
            tempFormValid = false;
        }
        if (!textbox) {
            tempErrorText += "Empty Content Box ; ";
            tempFormValid = false;
        }
        setErrorText(tempErrorText);
        setFormValid(tempFormValid);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <label>
                Subject:
                <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
            </label>
            <label>
                Reason for contact:
                <Select
                    className="select"
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    value={selectedKey}
                    onChange={handleChange}
                    autoWidth
                >
                    {/* <MenuItem value={"all"}>All</MenuItem> */}
                    <MenuItem value={"rudeness"}>Mild Public Rudeness</MenuItem>
                    <MenuItem value={"vegetables"}>Not Eating Your Vegetables</MenuItem>
                    <MenuItem value={"lift"}>Speaking in a Lift</MenuItem>
                    <MenuItem value={"united"}>Supporting Manchester United</MenuItem>
                    <MenuItem value={"just-talk"}>I just want to talk</MenuItem>
                </Select>
            </label>
            <textarea
                // className="form__textarea"
                cols={50}
                rows={5}
                // name="reasonForSparing"
                value={textbox}
                placeholder={"Content"}
                onChange={(e) => setTextbox(e.target.value)}
                // onChange={(e) => {
                //     // validation(e);
                //     handleChange(e);
                // }}
                // id="reasonForSparing"
            />
            {/* {formValid !== undefined && <input type="submit" disabled={formValid ? "" : "disabled"} />} */}
            <input type="submit" disabled={!formValid} />
            <h5 className="ErrorText">{errorText}</h5>
            <h5 className="ErrorText">{responseText}</h5>
        </form>
    );
};

export default Form;
