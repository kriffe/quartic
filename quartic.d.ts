export declare class ComplexNumber {
  re: number
  im: number

  constructor (re: number, im: number)

  clone (): ComplexNumber
  round (numberOfDecimals: number): void
  getRounded (numberOfDecimals: number): ComplexNumber
}

/**
 * a * x^4 + b * x^3 + c * x^2 + d * x + e = 0
 */
export declare function solve (a: number, b: number, c: number, d: number, e: number): ComplexNumber[]

export as namespace QUARTIC
