import React from 'react'

import DataGrid from './DataGrid/DataGrid'

import get from '../utils/get'
import ErrorMsg from '../components/ErrorMsg'
import Loading from '../components/Loading'

import { USERS_URL, USERS_COLUMNS } from '../config'

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      error: null,
      users: [],
    }
  }

  componentDidMount() {
    this.getUsers()
  }

  async getUsers() {
    this.setState({ loading: true })

    const [error, result] = await get(USERS_URL)

    if (error) {
      return this.setState({
        error,
        loading: false,
      })
    }

    return this.setState({ users: result, loading: false })
  }

  render() {
    const { error, loading, users } = this.state
    if (error) return <ErrorMsg error={error} />

    if (loading) return <Loading />

    if (users && users.length)
      return <DataGrid data={users} columns={USERS_COLUMNS} />

    return null
  }
}

export default Users
