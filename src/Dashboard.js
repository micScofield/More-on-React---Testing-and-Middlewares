import React, { useState } from 'react'
import { connect } from 'react-redux'

import { createUser, updateUser } from './store/actions'

const Dashboard = ({ username, createUser, updateUser, orders }) => {

    const [user, setUser] = useState('')

    const clickHandler = e => {
        e.preventDefault()
        createUser(user)
    }

    const updateHandler = e => {
        e.preventDefault()
        updateUser()
    }

    return (
        <div>
            <input value={user} onChange={e => setUser(e.target.value)} />
            <button onClick={e => clickHandler(e)}>Create</button>
            <p>Username stored in store- {username} </p>
            <br />

            <button onClick={e => updateHandler(e)}>Update</button>
            { JSON.stringify(orders) }
        </div>
    )
}

const mapStateToProps = state => ({
    username: state.user.username,
    orders: state.user.orders
})

export default connect(mapStateToProps, { createUser, updateUser })(Dashboard)
