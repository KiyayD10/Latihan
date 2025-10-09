
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model tb_barang
 * 
 */
export type tb_barang = $Result.DefaultSelection<Prisma.$tb_barangPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const nama_satuan: {
  UNIT: 'UNIT',
  PCS: 'PCS',
  KILOGRAM: 'KILOGRAM'
};

export type nama_satuan = (typeof nama_satuan)[keyof typeof nama_satuan]

}

export type nama_satuan = $Enums.nama_satuan

export const nama_satuan: typeof $Enums.nama_satuan

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tb_barangs
 * const tb_barangs = await prisma.tb_barang.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tb_barangs
   * const tb_barangs = await prisma.tb_barang.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.tb_barang`: Exposes CRUD operations for the **tb_barang** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tb_barangs
    * const tb_barangs = await prisma.tb_barang.findMany()
    * ```
    */
  get tb_barang(): Prisma.tb_barangDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    tb_barang: 'tb_barang'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tb_barang"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      tb_barang: {
        payload: Prisma.$tb_barangPayload<ExtArgs>
        fields: Prisma.tb_barangFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tb_barangFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tb_barangFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>
          }
          findFirst: {
            args: Prisma.tb_barangFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tb_barangFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>
          }
          findMany: {
            args: Prisma.tb_barangFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>[]
          }
          create: {
            args: Prisma.tb_barangCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>
          }
          createMany: {
            args: Prisma.tb_barangCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tb_barangCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>[]
          }
          delete: {
            args: Prisma.tb_barangDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>
          }
          update: {
            args: Prisma.tb_barangUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>
          }
          deleteMany: {
            args: Prisma.tb_barangDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tb_barangUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tb_barangUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>[]
          }
          upsert: {
            args: Prisma.tb_barangUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tb_barangPayload>
          }
          aggregate: {
            args: Prisma.Tb_barangAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTb_barang>
          }
          groupBy: {
            args: Prisma.tb_barangGroupByArgs<ExtArgs>
            result: $Utils.Optional<Tb_barangGroupByOutputType>[]
          }
          count: {
            args: Prisma.tb_barangCountArgs<ExtArgs>
            result: $Utils.Optional<Tb_barangCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    tb_barang?: tb_barangOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model tb_barang
   */

  export type AggregateTb_barang = {
    _count: Tb_barangCountAggregateOutputType | null
    _avg: Tb_barangAvgAggregateOutputType | null
    _sum: Tb_barangSumAggregateOutputType | null
    _min: Tb_barangMinAggregateOutputType | null
    _max: Tb_barangMaxAggregateOutputType | null
  }

  export type Tb_barangAvgAggregateOutputType = {
    id: number | null
    harga: number | null
  }

  export type Tb_barangSumAggregateOutputType = {
    id: number | null
    harga: number | null
  }

  export type Tb_barangMinAggregateOutputType = {
    id: number | null
    kode: string | null
    nama: string | null
    harga: number | null
    satuan: $Enums.nama_satuan | null
  }

  export type Tb_barangMaxAggregateOutputType = {
    id: number | null
    kode: string | null
    nama: string | null
    harga: number | null
    satuan: $Enums.nama_satuan | null
  }

  export type Tb_barangCountAggregateOutputType = {
    id: number
    kode: number
    nama: number
    harga: number
    satuan: number
    _all: number
  }


  export type Tb_barangAvgAggregateInputType = {
    id?: true
    harga?: true
  }

  export type Tb_barangSumAggregateInputType = {
    id?: true
    harga?: true
  }

  export type Tb_barangMinAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    harga?: true
    satuan?: true
  }

  export type Tb_barangMaxAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    harga?: true
    satuan?: true
  }

  export type Tb_barangCountAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    harga?: true
    satuan?: true
    _all?: true
  }

  export type Tb_barangAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_barang to aggregate.
     */
    where?: tb_barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_barangs to fetch.
     */
    orderBy?: tb_barangOrderByWithRelationInput | tb_barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tb_barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tb_barangs
    **/
    _count?: true | Tb_barangCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Tb_barangAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Tb_barangSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Tb_barangMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Tb_barangMaxAggregateInputType
  }

  export type GetTb_barangAggregateType<T extends Tb_barangAggregateArgs> = {
        [P in keyof T & keyof AggregateTb_barang]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTb_barang[P]>
      : GetScalarType<T[P], AggregateTb_barang[P]>
  }




  export type tb_barangGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tb_barangWhereInput
    orderBy?: tb_barangOrderByWithAggregationInput | tb_barangOrderByWithAggregationInput[]
    by: Tb_barangScalarFieldEnum[] | Tb_barangScalarFieldEnum
    having?: tb_barangScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Tb_barangCountAggregateInputType | true
    _avg?: Tb_barangAvgAggregateInputType
    _sum?: Tb_barangSumAggregateInputType
    _min?: Tb_barangMinAggregateInputType
    _max?: Tb_barangMaxAggregateInputType
  }

  export type Tb_barangGroupByOutputType = {
    id: number
    kode: string
    nama: string
    harga: number
    satuan: $Enums.nama_satuan
    _count: Tb_barangCountAggregateOutputType | null
    _avg: Tb_barangAvgAggregateOutputType | null
    _sum: Tb_barangSumAggregateOutputType | null
    _min: Tb_barangMinAggregateOutputType | null
    _max: Tb_barangMaxAggregateOutputType | null
  }

  type GetTb_barangGroupByPayload<T extends tb_barangGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Tb_barangGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Tb_barangGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Tb_barangGroupByOutputType[P]>
            : GetScalarType<T[P], Tb_barangGroupByOutputType[P]>
        }
      >
    >


  export type tb_barangSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    harga?: boolean
    satuan?: boolean
  }, ExtArgs["result"]["tb_barang"]>

  export type tb_barangSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    harga?: boolean
    satuan?: boolean
  }, ExtArgs["result"]["tb_barang"]>

  export type tb_barangSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    harga?: boolean
    satuan?: boolean
  }, ExtArgs["result"]["tb_barang"]>

  export type tb_barangSelectScalar = {
    id?: boolean
    kode?: boolean
    nama?: boolean
    harga?: boolean
    satuan?: boolean
  }

  export type tb_barangOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode" | "nama" | "harga" | "satuan", ExtArgs["result"]["tb_barang"]>

  export type $tb_barangPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tb_barang"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode: string
      nama: string
      harga: number
      satuan: $Enums.nama_satuan
    }, ExtArgs["result"]["tb_barang"]>
    composites: {}
  }

  type tb_barangGetPayload<S extends boolean | null | undefined | tb_barangDefaultArgs> = $Result.GetResult<Prisma.$tb_barangPayload, S>

  type tb_barangCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tb_barangFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Tb_barangCountAggregateInputType | true
    }

  export interface tb_barangDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tb_barang'], meta: { name: 'tb_barang' } }
    /**
     * Find zero or one Tb_barang that matches the filter.
     * @param {tb_barangFindUniqueArgs} args - Arguments to find a Tb_barang
     * @example
     * // Get one Tb_barang
     * const tb_barang = await prisma.tb_barang.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tb_barangFindUniqueArgs>(args: SelectSubset<T, tb_barangFindUniqueArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tb_barang that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tb_barangFindUniqueOrThrowArgs} args - Arguments to find a Tb_barang
     * @example
     * // Get one Tb_barang
     * const tb_barang = await prisma.tb_barang.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tb_barangFindUniqueOrThrowArgs>(args: SelectSubset<T, tb_barangFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_barang that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_barangFindFirstArgs} args - Arguments to find a Tb_barang
     * @example
     * // Get one Tb_barang
     * const tb_barang = await prisma.tb_barang.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tb_barangFindFirstArgs>(args?: SelectSubset<T, tb_barangFindFirstArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tb_barang that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_barangFindFirstOrThrowArgs} args - Arguments to find a Tb_barang
     * @example
     * // Get one Tb_barang
     * const tb_barang = await prisma.tb_barang.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tb_barangFindFirstOrThrowArgs>(args?: SelectSubset<T, tb_barangFindFirstOrThrowArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tb_barangs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_barangFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tb_barangs
     * const tb_barangs = await prisma.tb_barang.findMany()
     * 
     * // Get first 10 Tb_barangs
     * const tb_barangs = await prisma.tb_barang.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tb_barangWithIdOnly = await prisma.tb_barang.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tb_barangFindManyArgs>(args?: SelectSubset<T, tb_barangFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tb_barang.
     * @param {tb_barangCreateArgs} args - Arguments to create a Tb_barang.
     * @example
     * // Create one Tb_barang
     * const Tb_barang = await prisma.tb_barang.create({
     *   data: {
     *     // ... data to create a Tb_barang
     *   }
     * })
     * 
     */
    create<T extends tb_barangCreateArgs>(args: SelectSubset<T, tb_barangCreateArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tb_barangs.
     * @param {tb_barangCreateManyArgs} args - Arguments to create many Tb_barangs.
     * @example
     * // Create many Tb_barangs
     * const tb_barang = await prisma.tb_barang.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tb_barangCreateManyArgs>(args?: SelectSubset<T, tb_barangCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tb_barangs and returns the data saved in the database.
     * @param {tb_barangCreateManyAndReturnArgs} args - Arguments to create many Tb_barangs.
     * @example
     * // Create many Tb_barangs
     * const tb_barang = await prisma.tb_barang.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tb_barangs and only return the `id`
     * const tb_barangWithIdOnly = await prisma.tb_barang.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tb_barangCreateManyAndReturnArgs>(args?: SelectSubset<T, tb_barangCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tb_barang.
     * @param {tb_barangDeleteArgs} args - Arguments to delete one Tb_barang.
     * @example
     * // Delete one Tb_barang
     * const Tb_barang = await prisma.tb_barang.delete({
     *   where: {
     *     // ... filter to delete one Tb_barang
     *   }
     * })
     * 
     */
    delete<T extends tb_barangDeleteArgs>(args: SelectSubset<T, tb_barangDeleteArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tb_barang.
     * @param {tb_barangUpdateArgs} args - Arguments to update one Tb_barang.
     * @example
     * // Update one Tb_barang
     * const tb_barang = await prisma.tb_barang.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tb_barangUpdateArgs>(args: SelectSubset<T, tb_barangUpdateArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tb_barangs.
     * @param {tb_barangDeleteManyArgs} args - Arguments to filter Tb_barangs to delete.
     * @example
     * // Delete a few Tb_barangs
     * const { count } = await prisma.tb_barang.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tb_barangDeleteManyArgs>(args?: SelectSubset<T, tb_barangDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_barangUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tb_barangs
     * const tb_barang = await prisma.tb_barang.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tb_barangUpdateManyArgs>(args: SelectSubset<T, tb_barangUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tb_barangs and returns the data updated in the database.
     * @param {tb_barangUpdateManyAndReturnArgs} args - Arguments to update many Tb_barangs.
     * @example
     * // Update many Tb_barangs
     * const tb_barang = await prisma.tb_barang.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tb_barangs and only return the `id`
     * const tb_barangWithIdOnly = await prisma.tb_barang.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tb_barangUpdateManyAndReturnArgs>(args: SelectSubset<T, tb_barangUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tb_barang.
     * @param {tb_barangUpsertArgs} args - Arguments to update or create a Tb_barang.
     * @example
     * // Update or create a Tb_barang
     * const tb_barang = await prisma.tb_barang.upsert({
     *   create: {
     *     // ... data to create a Tb_barang
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tb_barang we want to update
     *   }
     * })
     */
    upsert<T extends tb_barangUpsertArgs>(args: SelectSubset<T, tb_barangUpsertArgs<ExtArgs>>): Prisma__tb_barangClient<$Result.GetResult<Prisma.$tb_barangPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tb_barangs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_barangCountArgs} args - Arguments to filter Tb_barangs to count.
     * @example
     * // Count the number of Tb_barangs
     * const count = await prisma.tb_barang.count({
     *   where: {
     *     // ... the filter for the Tb_barangs we want to count
     *   }
     * })
    **/
    count<T extends tb_barangCountArgs>(
      args?: Subset<T, tb_barangCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Tb_barangCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tb_barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Tb_barangAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Tb_barangAggregateArgs>(args: Subset<T, Tb_barangAggregateArgs>): Prisma.PrismaPromise<GetTb_barangAggregateType<T>>

    /**
     * Group by Tb_barang.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tb_barangGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tb_barangGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tb_barangGroupByArgs['orderBy'] }
        : { orderBy?: tb_barangGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tb_barangGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTb_barangGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tb_barang model
   */
  readonly fields: tb_barangFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tb_barang.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tb_barangClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tb_barang model
   */
  interface tb_barangFieldRefs {
    readonly id: FieldRef<"tb_barang", 'Int'>
    readonly kode: FieldRef<"tb_barang", 'String'>
    readonly nama: FieldRef<"tb_barang", 'String'>
    readonly harga: FieldRef<"tb_barang", 'Int'>
    readonly satuan: FieldRef<"tb_barang", 'nama_satuan'>
  }
    

  // Custom InputTypes
  /**
   * tb_barang findUnique
   */
  export type tb_barangFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * Filter, which tb_barang to fetch.
     */
    where: tb_barangWhereUniqueInput
  }

  /**
   * tb_barang findUniqueOrThrow
   */
  export type tb_barangFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * Filter, which tb_barang to fetch.
     */
    where: tb_barangWhereUniqueInput
  }

  /**
   * tb_barang findFirst
   */
  export type tb_barangFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * Filter, which tb_barang to fetch.
     */
    where?: tb_barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_barangs to fetch.
     */
    orderBy?: tb_barangOrderByWithRelationInput | tb_barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_barangs.
     */
    cursor?: tb_barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_barangs.
     */
    distinct?: Tb_barangScalarFieldEnum | Tb_barangScalarFieldEnum[]
  }

  /**
   * tb_barang findFirstOrThrow
   */
  export type tb_barangFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * Filter, which tb_barang to fetch.
     */
    where?: tb_barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_barangs to fetch.
     */
    orderBy?: tb_barangOrderByWithRelationInput | tb_barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tb_barangs.
     */
    cursor?: tb_barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_barangs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tb_barangs.
     */
    distinct?: Tb_barangScalarFieldEnum | Tb_barangScalarFieldEnum[]
  }

  /**
   * tb_barang findMany
   */
  export type tb_barangFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * Filter, which tb_barangs to fetch.
     */
    where?: tb_barangWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tb_barangs to fetch.
     */
    orderBy?: tb_barangOrderByWithRelationInput | tb_barangOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tb_barangs.
     */
    cursor?: tb_barangWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tb_barangs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tb_barangs.
     */
    skip?: number
    distinct?: Tb_barangScalarFieldEnum | Tb_barangScalarFieldEnum[]
  }

  /**
   * tb_barang create
   */
  export type tb_barangCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * The data needed to create a tb_barang.
     */
    data: XOR<tb_barangCreateInput, tb_barangUncheckedCreateInput>
  }

  /**
   * tb_barang createMany
   */
  export type tb_barangCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tb_barangs.
     */
    data: tb_barangCreateManyInput | tb_barangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_barang createManyAndReturn
   */
  export type tb_barangCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * The data used to create many tb_barangs.
     */
    data: tb_barangCreateManyInput | tb_barangCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tb_barang update
   */
  export type tb_barangUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * The data needed to update a tb_barang.
     */
    data: XOR<tb_barangUpdateInput, tb_barangUncheckedUpdateInput>
    /**
     * Choose, which tb_barang to update.
     */
    where: tb_barangWhereUniqueInput
  }

  /**
   * tb_barang updateMany
   */
  export type tb_barangUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tb_barangs.
     */
    data: XOR<tb_barangUpdateManyMutationInput, tb_barangUncheckedUpdateManyInput>
    /**
     * Filter which tb_barangs to update
     */
    where?: tb_barangWhereInput
    /**
     * Limit how many tb_barangs to update.
     */
    limit?: number
  }

  /**
   * tb_barang updateManyAndReturn
   */
  export type tb_barangUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * The data used to update tb_barangs.
     */
    data: XOR<tb_barangUpdateManyMutationInput, tb_barangUncheckedUpdateManyInput>
    /**
     * Filter which tb_barangs to update
     */
    where?: tb_barangWhereInput
    /**
     * Limit how many tb_barangs to update.
     */
    limit?: number
  }

  /**
   * tb_barang upsert
   */
  export type tb_barangUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * The filter to search for the tb_barang to update in case it exists.
     */
    where: tb_barangWhereUniqueInput
    /**
     * In case the tb_barang found by the `where` argument doesn't exist, create a new tb_barang with this data.
     */
    create: XOR<tb_barangCreateInput, tb_barangUncheckedCreateInput>
    /**
     * In case the tb_barang was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tb_barangUpdateInput, tb_barangUncheckedUpdateInput>
  }

  /**
   * tb_barang delete
   */
  export type tb_barangDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
    /**
     * Filter which tb_barang to delete.
     */
    where: tb_barangWhereUniqueInput
  }

  /**
   * tb_barang deleteMany
   */
  export type tb_barangDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tb_barangs to delete
     */
    where?: tb_barangWhereInput
    /**
     * Limit how many tb_barangs to delete.
     */
    limit?: number
  }

  /**
   * tb_barang without action
   */
  export type tb_barangDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tb_barang
     */
    select?: tb_barangSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tb_barang
     */
    omit?: tb_barangOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Tb_barangScalarFieldEnum: {
    id: 'id',
    kode: 'kode',
    nama: 'nama',
    harga: 'harga',
    satuan: 'satuan'
  };

  export type Tb_barangScalarFieldEnum = (typeof Tb_barangScalarFieldEnum)[keyof typeof Tb_barangScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'nama_satuan'
   */
  export type Enumnama_satuanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'nama_satuan'>
    


  /**
   * Reference to a field of type 'nama_satuan[]'
   */
  export type ListEnumnama_satuanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'nama_satuan[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type tb_barangWhereInput = {
    AND?: tb_barangWhereInput | tb_barangWhereInput[]
    OR?: tb_barangWhereInput[]
    NOT?: tb_barangWhereInput | tb_barangWhereInput[]
    id?: IntFilter<"tb_barang"> | number
    kode?: StringFilter<"tb_barang"> | string
    nama?: StringFilter<"tb_barang"> | string
    harga?: IntFilter<"tb_barang"> | number
    satuan?: Enumnama_satuanFilter<"tb_barang"> | $Enums.nama_satuan
  }

  export type tb_barangOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    satuan?: SortOrder
  }

  export type tb_barangWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: tb_barangWhereInput | tb_barangWhereInput[]
    OR?: tb_barangWhereInput[]
    NOT?: tb_barangWhereInput | tb_barangWhereInput[]
    kode?: StringFilter<"tb_barang"> | string
    nama?: StringFilter<"tb_barang"> | string
    harga?: IntFilter<"tb_barang"> | number
    satuan?: Enumnama_satuanFilter<"tb_barang"> | $Enums.nama_satuan
  }, "id">

  export type tb_barangOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    satuan?: SortOrder
    _count?: tb_barangCountOrderByAggregateInput
    _avg?: tb_barangAvgOrderByAggregateInput
    _max?: tb_barangMaxOrderByAggregateInput
    _min?: tb_barangMinOrderByAggregateInput
    _sum?: tb_barangSumOrderByAggregateInput
  }

  export type tb_barangScalarWhereWithAggregatesInput = {
    AND?: tb_barangScalarWhereWithAggregatesInput | tb_barangScalarWhereWithAggregatesInput[]
    OR?: tb_barangScalarWhereWithAggregatesInput[]
    NOT?: tb_barangScalarWhereWithAggregatesInput | tb_barangScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tb_barang"> | number
    kode?: StringWithAggregatesFilter<"tb_barang"> | string
    nama?: StringWithAggregatesFilter<"tb_barang"> | string
    harga?: IntWithAggregatesFilter<"tb_barang"> | number
    satuan?: Enumnama_satuanWithAggregatesFilter<"tb_barang"> | $Enums.nama_satuan
  }

  export type tb_barangCreateInput = {
    kode: string
    nama: string
    harga: number
    satuan: $Enums.nama_satuan
  }

  export type tb_barangUncheckedCreateInput = {
    id?: number
    kode: string
    nama: string
    harga: number
    satuan: $Enums.nama_satuan
  }

  export type tb_barangUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    satuan?: Enumnama_satuanFieldUpdateOperationsInput | $Enums.nama_satuan
  }

  export type tb_barangUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    satuan?: Enumnama_satuanFieldUpdateOperationsInput | $Enums.nama_satuan
  }

  export type tb_barangCreateManyInput = {
    id?: number
    kode: string
    nama: string
    harga: number
    satuan: $Enums.nama_satuan
  }

  export type tb_barangUpdateManyMutationInput = {
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    satuan?: Enumnama_satuanFieldUpdateOperationsInput | $Enums.nama_satuan
  }

  export type tb_barangUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    harga?: IntFieldUpdateOperationsInput | number
    satuan?: Enumnama_satuanFieldUpdateOperationsInput | $Enums.nama_satuan
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Enumnama_satuanFilter<$PrismaModel = never> = {
    equals?: $Enums.nama_satuan | Enumnama_satuanFieldRefInput<$PrismaModel>
    in?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    notIn?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    not?: NestedEnumnama_satuanFilter<$PrismaModel> | $Enums.nama_satuan
  }

  export type tb_barangCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    satuan?: SortOrder
  }

  export type tb_barangAvgOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
  }

  export type tb_barangMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    satuan?: SortOrder
  }

  export type tb_barangMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    harga?: SortOrder
    satuan?: SortOrder
  }

  export type tb_barangSumOrderByAggregateInput = {
    id?: SortOrder
    harga?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type Enumnama_satuanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.nama_satuan | Enumnama_satuanFieldRefInput<$PrismaModel>
    in?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    notIn?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    not?: NestedEnumnama_satuanWithAggregatesFilter<$PrismaModel> | $Enums.nama_satuan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnama_satuanFilter<$PrismaModel>
    _max?: NestedEnumnama_satuanFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Enumnama_satuanFieldUpdateOperationsInput = {
    set?: $Enums.nama_satuan
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumnama_satuanFilter<$PrismaModel = never> = {
    equals?: $Enums.nama_satuan | Enumnama_satuanFieldRefInput<$PrismaModel>
    in?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    notIn?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    not?: NestedEnumnama_satuanFilter<$PrismaModel> | $Enums.nama_satuan
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumnama_satuanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.nama_satuan | Enumnama_satuanFieldRefInput<$PrismaModel>
    in?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    notIn?: $Enums.nama_satuan[] | ListEnumnama_satuanFieldRefInput<$PrismaModel>
    not?: NestedEnumnama_satuanWithAggregatesFilter<$PrismaModel> | $Enums.nama_satuan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumnama_satuanFilter<$PrismaModel>
    _max?: NestedEnumnama_satuanFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}