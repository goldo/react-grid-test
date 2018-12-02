import React from 'react'

import Loading from '../../components/Loading'

export const ROW_HEIGHT = 40

const rowStyle = {
  height: ROW_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const DataGridRowContent = ({ index, columns, element }) => (
  <>
    <div style={rowStyle}>#{index}</div>
    {columns.map(col => (
      <div key={col} style={rowStyle}>
        {element[col]}
      </div>
    ))}
  </>
)

export const DataGridLoader = () => (
  <div
    style={{ display: 'block', position: 'absolute', left: '45%', top: '10%' }}
  >
    <Loading />
  </div>
)

const headerStyle = {
  ...rowStyle,
  backgroundColor: '#444',
  color: '#fff',
  fontSize: '1.3rem',
  fontWeight: 'bolder',
  textTransform: 'uppercase',
  cursor: 'pointer',
}

export const DataGridRowHeader = ({ columns, onCaseClick }) => (
  <>
    <div style={headerStyle}>#</div>
    {columns.map(column => (
      <div key={column} style={headerStyle} onClick={() => onCaseClick(column)}>
        {column}
      </div>
    ))}
  </>
)
