'use client'
import { useState } from "react"
import classes from "./new-student-form-styles.module.css";
<new></new>
function NewStudentForm() {
    async function onSubmit(){
        const newStudentBody = {
            firstName,
            lastName,
            classYear,
            concentrations,
        }
        const res = await fetch ("http://localhost:8080/tasks", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newStudentBody)
        })
        {/*
             CHALLENGE: Can you get the table to reload whenever you call onSubmit? 
             This may involve restructuring your project and using props!
        */}
    }
    // NOTE: this is not the best way to collect data, but is good for demo purposes!
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [classYear, setClassYear] = useState("")
    const [concentrations, setConcentrations] = useState([])

    const styles = {
        container: {
          width: '100%',
          maxWidth: '400px',
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
        form: {
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
        },
        formGroup: {
          display: 'flex',
          flexDirection: 'column',
        },
        label: {
          fontSize: '14px',
          marginBottom: '5px',
          color: '#555',
        },
        input: {
          padding: '10px',
          fontSize: '16px',
          borderRadius: '5px',
          border: '1px solid #ccc',
          outline: 'none',
          transition: 'border 0.2s',
        },
        inputFocus: {
          border: '1px solid #007BFF',
        },
        button: {
          padding: '10px 15px',
          fontSize: '16px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        },
        buttonHover: {
          backgroundColor: '#0056b3',
        }
    };
      
    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>Add a New Task</h2>

            <div style={styles.form}>
                <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="description">Task Description</label>
                <input
                    style={styles.input}
                    name="description"
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    placeholder="Enter task description"
                />
                </div>
                <div style={styles.formGroup}>
                <label style={styles.label} htmlFor="deadline">Task Deadline</label>
                <input
                    type="date"
                    style={styles.input}
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
                </div>
                <button style={styles.button} onClick={onSubmit}>Add Task</button>
            </div>
        </div>
    )
}
export default NewStudentForm