import React, { useEffect, useState } from "react";
import {getStudents} from "../services/students"
import StudentRow from "./StudentRow";

const Students = () => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        getStudents().then(data => setStudents(data))
    },[]);


    console.log(students);

    return (
    <>
        <h2>Students</h2>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            {
            students && students.map((student) => <StudentRow  {...student}/>)
        }
        </table>
        
    </>);
}

export default Students;