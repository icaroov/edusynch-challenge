import Button from 'components/Button'

interface PaginationItemProps {
  isCurrent?: boolean
  pageNumber: number
  onPageChange: (page: number) => void
}

const PaginationItem = ({
  isCurrent = false,
  pageNumber,
  onPageChange
}: PaginationItemProps) => {
  if (isCurrent) {
    return <Button>{pageNumber}</Button>
  }

  return <Button onClick={() => onPageChange(pageNumber)}>{pageNumber}</Button>
}

export default PaginationItem
