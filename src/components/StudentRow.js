import React from "react";
import { useNavigate } from "react-router-dom";

const StudentRow = ({login, name, email}) => {
    const navigate = useNavigate();

    return (
        <tr onClick={() => navigate(`/student/${login.uuid}`)}>
            <td>{login.uuid}</td>
            <td>{name.title} {name.first} {name.last}</td>
            <td>{email}</td>
        </tr>
    );
}

export default StudentRow;