import React from 'react'
import { sortBy, prop, reverse } from 'ramda'
import PropTypes from 'prop-types'

import {
  DataGridRowContent,
  DataGridRowHeader,
  DataGridLoader,
  ROW_HEIGHT,
} from './DataGridRow'

import ErrorMsg from '../../components/ErrorMsg'

const NB_OF_HIDDEN_ROWS_RENDERED = 5

class DataGrid extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.array.isRequired,
  }

  state = {
    availableHeight: 0,
    scrollTop: 0,
    sortedData: this.props.data,
    sortCol: null,
  }

  componentDidMount() {
    this.setState({ availableHeight: this.node.clientHeight })
  }

  handleScroll = e => {
    this.setState({ scrollTop: e.target.scrollTop })
  }

  sort = col => {
    if (this.state.sortedCol === col)
      return this.setState({ sortedData: reverse(this.state.sortedData) })

    this.setState({ sortedData: [] }, () => {
      setTimeout(() => {
        const sortedData = sortBy(prop(col))(this.props.data)

        this.setState({ sortedData, sortedCol: col })
      })
    })
  }

  render() {
    const { columns } = this.props
    const { sortedData, scrollTop, availableHeight } = this.state

    const colsNumber = (columns && columns.map && columns.length) || 0

    if (!colsNumber)
      return (
        <ErrorMsg
          error={new Error('are you sure columns props is an array ?')}
        />
      )

    const nbRows = sortedData.length + 1
    const totalHeight = nbRows * ROW_HEIGHT
    const startIndex = Math.max(
      0,
      Math.floor(scrollTop / ROW_HEIGHT - NB_OF_HIDDEN_ROWS_RENDERED),
    )
    const endIndex = Math.min(
      startIndex +
        2 * NB_OF_HIDDEN_ROWS_RENDERED +
        Math.ceil(availableHeight / ROW_HEIGHT),
      nbRows,
    )

    const items = []
    let index = startIndex

    while (index < endIndex) {
      if (index === 0) {
        items.push(
          <DataGridRowHeader
            key={index}
            columns={columns}
            onCaseClick={this.sort}
          />,
        )
        if (!sortedData.length) items.push(<DataGridLoader key="loader" />)
      } else {
        const listIndex = index - 1
        items.push(
          <DataGridRowContent
            key={index}
            index={listIndex}
            columns={columns}
            element={sortedData[listIndex]}
          />,
        )
      }
      index++
    }

    return (
      <div
        style={{ height: '100vh', overflowY: 'scroll' }}
        onScroll={this.handleScroll}
        ref={node => (this.node = node)}
      >
        <div
          style={{
            height: totalHeight,
            paddingTop: startIndex * ROW_HEIGHT,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${colsNumber + 1}, auto)`,
            }}
          >
            {items}
          </div>
        </div>
      </div>
    )
  }
}

export default DataGrid
