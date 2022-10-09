export declare type BigIntOrNumber = number | bigint;

export declare type Zero = 0 | 0n;

export declare type ParseInt<S extends string | BigIntOrNumber> = `${S}` extends
  `${infer N extends number}` ? N : never;

/**
 * Matches the hidden `Infinity` type.
 *
 * Please upvote [this issue](https://github.com/microsoft/TypeScript/issues/32277) if you want to have this type as a built-in in TypeScript.
 * @see {@linkcode NegativeInfinity}
 */
export declare type PositiveInfinity = 1e999;

/**
 * @see {@linkcode PositiveInfinity}
 */
export declare type NegativeInfinity = -1e999;

/**
 * @category Numeric
 */
export declare type Finite<T extends BigIntOrNumber> = T extends
  PositiveInfinity | NegativeInfinity ? never : T;

/**
 * @category Numeric
 */
export declare type Infinite<T extends BigIntOrNumber> = T extends
  PositiveInfinity | NegativeInfinity ? T : never;

/**
 * @category Numeric
 */
export declare type Integer<T extends BigIntOrNumber> = `${T}` extends
  `${number}` ? T : never;

/**
 * @category Numeric
 */
export declare type Float<T extends BigIntOrNumber> = T extends Integer<T>
  ? never
  : T;

/**
 * A negative (`-∞ < x < 0`) `number` that is not an integer.
 * Equivalent to `Negative<Float<T>>`.
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode Negative}
 * @see {@linkcode Float}
 *
 * @category Numeric
 */
export declare type NegativeFloat<T extends BigIntOrNumber> = Negative<
  Float<T>
>;

/**
 * A negative `number`/`bigint` (`-∞ < x < 0`)
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode NegativeInteger}
 * @see {@linkcode NonNegative}
 *
 * @category Numeric
 */
export declare type Negative<T extends BigIntOrNumber> = T extends Zero ? never
  : `${T}` extends `-${string}` ? T
  : never;

/**
 * A negative (`-∞ < x < 0`) `number` that is an integer.
 * Equivalent to `Negative<Integer<T>>`.
 *
 * You can't pass a `bigint` as they are already guaranteed to be integers,
 * instead use `Negative<T>`.
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode Negative}
 * @see {@linkcode Integer}
 *
 * @category Numeric
 */
export declare type NegativeInteger<T extends BigIntOrNumber> = Negative<
  Integer<T>
>;

/**
 * A non-negative `number`/`bigint` (`0 <= x < ∞`).
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode NonNegativeInteger}
 * @see {@linkcode Negative}
 *
 * @example ```ts
 * import type {NonNegative} from 'type-fest';
 *
 * declare function setLength<T extends BigIntOrNumber>(length: NonNegative<T>): void;
 * ```
 *
 * @category Numeric
 */
export declare type NonNegative<T extends BigIntOrNumber> = T extends Zero ? T
  : Negative<T> extends never ? T
  : never;

/**
 * A non-negative (`0 <= x < ∞`) `number` that is an integer.
 * Equivalent to `NonNegative<Integer<T>>`.
 *
 * You can't pass a `bigint` as they are already guaranteed to be integers,
 * instead use `NonNegative<T>`.
 *
 * Use-case: Validating and documenting parameters.
 *
 * @see {@linkcode NonNegative}
 * @see {@linkcode Integer}
 * @example ```ts
 * declare function setLength<T extends BigIntOrNumber>(length: NonNegativeInteger<T>): void;
 * ```
 * @category Numeric
 */
export declare type NonNegativeInteger<T extends BigIntOrNumber> = NonNegative<
  Integer<T>
>;
