export class DateArray {
  private day = NaN
  private month = NaN
  private year = NaN
  private raw: Record<'day' | 'month' | 'year', string[] | number[]> = {
    day: ['', ''],
    month: ['', ''],
    year: ['', '', '', '']
  }

  constructor(array?: string[] | number[]) {
    if (!array) return
    this.fromArray(array)
  }

  private fromArray(array: string[] | number[]) {
    const [d1, d2, m1, m2, y1, y2, y3, y4] = array.map((x) => (x === '' ? NaN : Number(x)))
    this.day = d1 * 10 + d2
    this.month = m1 * 10 + m2
    this.year = y1 * 1000 + y2 * 100 + y3 * 10 + y4
    this.setRaw(array)
  }

  private setRaw(array: string[] | number[]) {
    const [d1 = '', d2 = '', m1 = '', m2 = '', ...year] = array
    this.raw.day = [d1, d2] as string[] | number[]
    this.raw.month = [m1, m2] as string[] | number[]
    this.raw.year = year as string[] | number[]
  }

  private getMonth() {
    if (isNaN(this.month)) {
      return this.raw.month
    }
    return [Math.floor(this.month / 10), this.month % 10]
  }

  getArray() {
    return [...this.raw.day, ...this.getMonth(), ...this.raw.year] as string[] | number[]
  }

  setArray(array: string[] | number[]) {
    this.fromArray(array)
    return this
  }

  fixMonth() {
    if (!isNaN(this.month) && this.month > 12) {
      this.month = 12
    }
    return this
  }
}

const dateArray = new DateArray()

export const fixArrayDate = (array: string[] | number[]) => {
  return dateArray.setArray(array).fixMonth().getArray()
}
