import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, changeInputNameAction, changeInputEmailAction, changeInputPasswordAction } from "../../redux/actions";
import "../../style/UserPage.css"

function UserPage() {
    const dispatch = useDispatch()

    const { name, email, password, users } = useSelector(state => state.userReducer)

    const changeInputName = (event) => {
        dispatch(changeInputNameAction(event.target.value))
    }

    const changeInputEmail = (event) => {
        dispatch(changeInputEmailAction(event.target.value))
    }

    const changeInputPassword = (event) => {
        dispatch(changeInputPasswordAction(event.target.value))
    }

    const addUser = () => {
        dispatch(addUserAction(name, email, password))
    }


    return (
        <div className="conteiner">
            <div className="form">
                <label>Name:</label>
                <input value={name} type="text" placeholder="name" onChange={changeInputName} />
                <label>Email:</label>
                <input value={email} type="email" placeholder="email" onChange={changeInputEmail} />
                <label>Password:</label>
                <input value={password} type="password" placeholder="password" onChange={changeInputPassword} />
                <button onClick={addUser}>send</button>
            </div>


            <div className="tablece">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map((user, idx) => (
                            <tr key={idx}>
                                <td>{user.name}</td>
                                <td >{user.email}</td>
                                <td >{user.password}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default UserPage