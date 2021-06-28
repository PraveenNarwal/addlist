import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return;
        }
        if (+enteredAge < 1) {
            return;
        }
        console.log(enteredUsername, enteredAge)
        setEnteredAge('');                                  // w use value in input
        setEnteredUsername('');
    }
    const usernameHandler = (e) => {
        setEnteredUsername(e.target.value);
    }
    const ageHandler = (e) => {
        e.preventDefault();
        setEnteredAge(e.target.value);
    }


    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username" value={enteredUsername}>Username</label>
                <input id="username" type="text" onChange={usernameHandler} />
                <label htmlFor="age" value={enteredAge} >Age(years)</label>
                <input id="age" type="number" onChange={ageHandler} />
                <Button type="submit" >Add User</Button>

            </form></Card>
    )
}

export default AddUser
