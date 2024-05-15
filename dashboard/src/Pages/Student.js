import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import './Student.css';
import axios from 'axios';

function Student() {
    const [students, setStudents] = useState([]);
    const [studentEmail, setStudentEmail] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get(`http://localhost:1337/viewManageStudent`)
            .then((response) => {
                const studentData = response.data;
                setStudents(studentData);
                const firstStudent = studentData[0];
                if (firstStudent) {
                    setStudentEmail(firstStudent.Email);
                }
            })
            .catch((error) => {
                console.error("Error fetching student data:", error);
            });
    }

    return (
        <div className="student-container">
            <h3>STUDENT : {studentEmail}</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 100 }} aria-label="student table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">ID</TableCell>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Middle Name</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map(student => (
                            <TableRow key={student.Email}>
                                <TableCell align="center">{student.Email}</TableCell>
                                <TableCell align="center">{student.First}</TableCell>
                                <TableCell align="center">{student.Last}</TableCell>
                                <TableCell align="center">{student.Middle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Student;
