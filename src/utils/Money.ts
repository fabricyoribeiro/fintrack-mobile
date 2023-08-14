export default class Money {
  private static _language = "pt-BR"
  private static _coin = "BRL"

  static format(num: number): string {
      return (num ?? 0).toLocaleString(Money._language, {
          style: "currency", currency: Money._coin
      })
  }

  static unformat(value: string): number {
      const nums = value.replace(/[^0-9]+/g, "")
      const i = nums.length - 2
      return Number(`${nums.substring(0, i)}.${nums.substring(i)}`)
  }
}