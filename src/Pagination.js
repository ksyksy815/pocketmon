import React from 'react'
import styled from 'styled-components'

const PaginationWrapper = styled.div`
  border: 1px solid red;
`

export default function Pagination( {gotoNextPage, gotoPrevPage} ) {
  return (
    <PaginationWrapper>
      {gotoPrevPage && <button onClick={gotoPrevPage}>Previous</button> }
      {gotoNextPage && <button onClick={gotoNextPage}>Next</button>}
    </PaginationWrapper>
  )
}
