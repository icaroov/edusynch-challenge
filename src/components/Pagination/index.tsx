import PaginationItem from './PaginationItem'

import * as Styled from './styles'

export type PaginationProps = {
  totalCountOfCourses: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

/**
 * Constant which will be the number of buttons that
 * appear both to the left and to the right of the current page.
 * @example assuming siblingsCount = 1 => 1 ... 2 3 4 ... 10
 * @example assuming siblingsCount = 2 => 1 ... 2 3 4 5 6 ... 10
 */
const siblingsCount = 1

/**
 * Function that creates a new array with the number of pages between the two
 * numbers passed by props discarding the "from" number.
 * @example generatePagesArray(2, 5) => [3, 4, 5]
 * @method map: assuming "from" = 2 => [2 + 0 + 1, 2 + 1 + 1, 2 + 2 + 1] = [3, 4, 5]
 * @method filter: avoid negative numbers
 */
const generatePagesArray = (from: number, to: number) => {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0)
}

const Pagination = ({
  totalCountOfCourses,
  registerPerPage = 6,
  currentPage = 1,
  onPageChange
}: PaginationProps) => {
  const lastPage = Math.floor(totalCountOfCourses / registerPerPage)
  const followingPages = Math.min(currentPage + siblingsCount, lastPage)

  const isNotTheInitialPage = currentPage > 1
  const isNotTheLastPossiblePage = currentPage < lastPage

  const previousPages = isNotTheInitialPage
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = isNotTheLastPossiblePage
    ? generatePagesArray(currentPage, followingPages)
    : []

  const existsPreviousPages = previousPages.length > 0
  const existsNextPages = nextPages.length > 0

  const FirstPage = () => {
    return (
      <>
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange} pageNumber={1} />
            {currentPage > 2 + siblingsCount && <p>...</p>}
          </>
        )}
      </>
    )
  }

  const LastPage = () => {
    return (
      <>
        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && <p>...</p>}

            <PaginationItem onPageChange={onPageChange} pageNumber={lastPage} />
          </>
        )}
      </>
    )
  }

  return (
    <Styled.Container>
      <Styled.Wrapper>
        <Styled.CurrentPage>
          {currentPage} de {lastPage}
        </Styled.CurrentPage>

        <Styled.ItemsContainer>
          <FirstPage />

          {existsPreviousPages &&
            previousPages.map(page => {
              return (
                <PaginationItem
                  onPageChange={onPageChange}
                  key={page}
                  pageNumber={page}
                />
              )
            })}

          <PaginationItem
            onPageChange={onPageChange}
            pageNumber={currentPage}
            isCurrent
          />

          {existsNextPages &&
            nextPages.map(page => {
              return (
                <PaginationItem
                  onPageChange={onPageChange}
                  key={page}
                  pageNumber={page}
                />
              )
            })}

          <LastPage />
        </Styled.ItemsContainer>
      </Styled.Wrapper>
    </Styled.Container>
  )
}

export default Pagination
