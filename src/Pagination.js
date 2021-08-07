import React from 'react'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1rem;

  button {
    width: 100px;
    height: 35px;
    border-radius: 999px;
    border: none;
    background-color: var(--dark-blue-color);
    color: #fff;
    letter-spacing: 1px;
    transition: 0.1s;

    &:hover {
      cursor: pointer;
      background-color: var(--yellow-color);
      transform: translateY(-2px);
    }
  }
`

export default function Pagination( {gotoNextPage, gotoPrevPage} ) {
  return (
    <PaginationWrapper>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button> }
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </PaginationWrapper>
  )
}
