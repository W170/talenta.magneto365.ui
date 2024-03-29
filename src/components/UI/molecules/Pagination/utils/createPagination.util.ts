import { ICreatePaginationResult, ICreatePaginationProps } from '../Pagination.interface'

export const createPagination = ({
  total,
  current,
  pageSize = 10,
  numberOfButtons = 3
}: ICreatePaginationProps): ICreatePaginationResult => {
  const numberOfPages = Math.ceil(total / pageSize)

  if (current > numberOfPages || current < 1 || !total || !current)
    return {
      buttons: [],
      current,
      first: 1,
      last: numberOfPages
    }

  const totalButtons = Array(numberOfPages)
    .fill(1)
    .map((e, i) => e + i)

  const sideButtons = numberOfButtons % 2 === 0 ? numberOfButtons / 2 : (numberOfButtons - 1) / 2

  const calculateLeft = (rest = 0) => {
    return {
      left: totalButtons
        .slice(0, current - 1)
        .reverse()
        .slice(0, sideButtons + rest)
        .reverse(),
      rest: function () {
        return sideButtons - this.left.length
      }
    }
  }

  const calculateRight = (rest = 0) => {
    return {
      right: totalButtons.slice(current).slice(0, sideButtons + rest),
      rest: function () {
        return sideButtons - this.right.length
      }
    }
  }

  const leftButtons = calculateLeft(calculateRight().rest()).left
  const rightButtons = calculateRight(calculateLeft().rest()).right

  return {
    buttons: [...leftButtons, current, ...rightButtons],
    current,
    first: 1,
    last: numberOfPages
  }
}
