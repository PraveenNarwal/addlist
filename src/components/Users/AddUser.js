import React, { useState } from 'react'
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

function AddUser(props) {
    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredAge, setEnteredAge] = useState('')
    const [error, setError] = useState();
    const addUserHandler = (e) => {
        e.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age'
            })
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid  age > 0'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge)
        setEnteredAge('');                                  // w use value in input
        setEnteredUsername('');
    }
    const usernameHandler = (e) => {
        setEnteredUsername(e.target.value);
    }
    const ageHandler = (e) => {
        setEnteredAge(e.target.value);
    }
    const errorHandler = () => {
        setError(null);
    }

    return (
        <div>
            {error &&
                (<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />)}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" value={enteredUsername}>Username</label>
                    <input id="username" type="text" onChange={usernameHandler} />
                    <label htmlFor="age" value={enteredAge} >Age(years)</label>
                    <input id="age" type="number" onChange={ageHandler} />
                    <Button type="submit" >Add User</Button>

                </form>
            </Card>
        </div>

    )
}

export default AddUser
