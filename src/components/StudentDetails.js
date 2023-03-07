import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getSingleStudent} from "../services/students"

const StudentDetails =  () => {
    const [student, setStudent] = useState(null);
    let { uuid } = useParams();

    useEffect(() => {
        getSingleStudent(uuid).then(data => setStudent(data));
    },[uuid]);

    return (
        student && 
        <>
            <div>
                uuid: {uuid}
            </div>
            <div>
                Name: {student.name.title} {student.name.first} {student.name.last}
            </div>
            <div>
                Email: {student.email}
            </div>
        
        </>
    );
}

export default StudentDetails;