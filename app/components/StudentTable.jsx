'use client'
import { useEffect, useState } from "react"
import classes from "./student-table-styles.module.css"

function StudentTable() {
    // Array of students state
    const [students, setStudents] = useState([])
    // A function to get all of the students from the frontend. MAKE SURE your backend is running on port 8080!
    async function getAllStudents() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080/students", {
            method: "GET",
        })
        // We turn the result into a JSON. We could have also turned it into a string, for instance
        const resJSON = await res.json()
        setStudents(resJSON)
    }

    // You can use a side effect to the page loading by entering an empty [] dependency array
    useEffect(() => {
        getAllStudents()
    }, [])

    const styles = {
        container: {
          width: '100%',
          maxWidth: '600px',
          margin: 'auto',
          padding: '20px',
          backgroundColor: '#f9f9f9',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        heading: {
          textAlign: 'center',
          marginBottom: '20px',
          color: '#333',
        },
        reloadButton: {
          display: 'block',
          padding: '10px 15px',
          margin: '0 auto 20px auto',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
          transition: 'background-color 0.3s',
        },
        reloadButtonHover: {
          backgroundColor: '#0056b3',
        },
        tableContainer: {
          overflowX: 'auto',
        },
        table: {
          width: '100%',
          borderCollapse: 'collapse',
          textAlign: 'left',
          backgroundColor: '#fff',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        tableHeader: {
          padding: '12px 15px',
          backgroundColor: '#007BFF',
          color: '#fff',
          fontWeight: 'bold',
          borderBottom: '2px solid #ddd',
        },
        tableRow: {
          '&:nth-child(even)': {
            backgroundColor: '#f2f2f2',
          },
        },
        tableCell: {
          padding: '12px 15px',
          borderBottom: '1px solid #ddd',
        },
    };
      
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>To-Do List</h2>
            <button style={styles.reloadButton} onClick={getAllStudents}>
                Reload Tasks
            </button>
            <div style={styles.tableContainer}>
                <table style={styles.table}>
                <thead>
                    <tr>
                    <th style={styles.tableHeader}>Task</th>
                    <th style={styles.tableHeader}>Deadline</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                    <tr key={student.id} style={styles.tableRow}>
                        <td style={styles.tableCell}>{student.firstName}</td>
                        <td style={styles.tableCell}>{student.lastName}</td>
                        <td style={styles.tableCell}>{student.classYear}</td>
                        <td style={styles.tableCell}>{student.concentrations.join(", ")}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
        </div>

    )
}
export default StudentTable;