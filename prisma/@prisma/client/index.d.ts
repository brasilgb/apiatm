
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model Association
 * 
 */
export type Association = $Result.DefaultSelection<Prisma.$AssociationPayload>
/**
 * Model Total
 * 
 */
export type Total = $Result.DefaultSelection<Prisma.$TotalPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.association`: Exposes CRUD operations for the **Association** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Associations
    * const associations = await prisma.association.findMany()
    * ```
    */
  get association(): Prisma.AssociationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.total`: Exposes CRUD operations for the **Total** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Totals
    * const totals = await prisma.total.findMany()
    * ```
    */
  get total(): Prisma.TotalDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    User: 'User',
    Organization: 'Organization',
    Company: 'Company',
    Setting: 'Setting',
    Sale: 'Sale',
    Association: 'Association',
    Total: 'Total'
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
      modelProps: "user" | "organization" | "company" | "setting" | "sale" | "association" | "total"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      Association: {
        payload: Prisma.$AssociationPayload<ExtArgs>
        fields: Prisma.AssociationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssociationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssociationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findFirst: {
            args: Prisma.AssociationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssociationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          findMany: {
            args: Prisma.AssociationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>[]
          }
          create: {
            args: Prisma.AssociationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          createMany: {
            args: Prisma.AssociationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AssociationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          update: {
            args: Prisma.AssociationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          deleteMany: {
            args: Prisma.AssociationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssociationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssociationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssociationPayload>
          }
          aggregate: {
            args: Prisma.AssociationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssociation>
          }
          groupBy: {
            args: Prisma.AssociationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssociationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssociationCountArgs<ExtArgs>
            result: $Utils.Optional<AssociationCountAggregateOutputType> | number
          }
        }
      }
      Total: {
        payload: Prisma.$TotalPayload<ExtArgs>
        fields: Prisma.TotalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TotalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TotalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload>
          }
          findFirst: {
            args: Prisma.TotalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TotalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload>
          }
          findMany: {
            args: Prisma.TotalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload>[]
          }
          create: {
            args: Prisma.TotalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload>
          }
          createMany: {
            args: Prisma.TotalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TotalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload>
          }
          update: {
            args: Prisma.TotalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload>
          }
          deleteMany: {
            args: Prisma.TotalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TotalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TotalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TotalPayload>
          }
          aggregate: {
            args: Prisma.TotalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTotal>
          }
          groupBy: {
            args: Prisma.TotalGroupByArgs<ExtArgs>
            result: $Utils.Optional<TotalGroupByOutputType>[]
          }
          count: {
            args: Prisma.TotalCountArgs<ExtArgs>
            result: $Utils.Optional<TotalCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    organization?: OrganizationOmit
    company?: CompanyOmit
    setting?: SettingOmit
    sale?: SaleOmit
    association?: AssociationOmit
    total?: TotalOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    companies: number
    users: number
    Setting: number
    Sale: number
    Association: number
    Total: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | OrganizationCountOutputTypeCountCompaniesArgs
    users?: boolean | OrganizationCountOutputTypeCountUsersArgs
    Setting?: boolean | OrganizationCountOutputTypeCountSettingArgs
    Sale?: boolean | OrganizationCountOutputTypeCountSaleArgs
    Association?: boolean | OrganizationCountOutputTypeCountAssociationArgs
    Total?: boolean | OrganizationCountOutputTypeCountTotalArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountCompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAssociationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssociationWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountTotalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TotalWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    is_admin: boolean | null
    roles: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
    companyId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    is_admin: boolean | null
    roles: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
    companyId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    is_admin: number
    roles: number
    status: number
    createdAt: number
    updatedAt: number
    organizationId: number
    companyId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_admin?: true
    roles?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    companyId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_admin?: true
    roles?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    companyId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    is_admin?: true
    roles?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    companyId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    organizationId: string | null
    companyId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_admin?: boolean
    roles?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    companyId?: boolean
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    is_admin?: boolean
    roles?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    companyId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "is_admin" | "roles" | "status" | "createdAt" | "updatedAt" | "organizationId" | "companyId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | User$OrganizationArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
      Company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      is_admin: boolean
      roles: string
      status: boolean
      createdAt: Date
      updatedAt: Date
      organizationId: string | null
      companyId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends User$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, User$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Company<T extends User$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, User$CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly is_admin: FieldRef<"User", 'Boolean'>
    readonly roles: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly organizationId: FieldRef<"User", 'String'>
    readonly companyId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Organization
   */
  export type User$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * User.Company
   */
  export type User$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cnpj: string | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    cnpj: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    cnpj?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    name: string
    cnpj: string
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cnpj?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    companies?: boolean | Organization$companiesArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    Setting?: boolean | Organization$SettingArgs<ExtArgs>
    Sale?: boolean | Organization$SaleArgs<ExtArgs>
    Association?: boolean | Organization$AssociationArgs<ExtArgs>
    Total?: boolean | Organization$TotalArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    cnpj?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "cnpj" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    companies?: boolean | Organization$companiesArgs<ExtArgs>
    users?: boolean | Organization$usersArgs<ExtArgs>
    Setting?: boolean | Organization$SettingArgs<ExtArgs>
    Sale?: boolean | Organization$SaleArgs<ExtArgs>
    Association?: boolean | Organization$AssociationArgs<ExtArgs>
    Total?: boolean | Organization$TotalArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      companies: Prisma.$CompanyPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      Setting: Prisma.$SettingPayload<ExtArgs>[]
      Sale: Prisma.$SalePayload<ExtArgs>[]
      Association: Prisma.$AssociationPayload<ExtArgs>[]
      Total: Prisma.$TotalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cnpj: string
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
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
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    companies<T extends Organization$companiesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$companiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Organization$usersArgs<ExtArgs> = {}>(args?: Subset<T, Organization$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Setting<T extends Organization$SettingArgs<ExtArgs> = {}>(args?: Subset<T, Organization$SettingArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Sale<T extends Organization$SaleArgs<ExtArgs> = {}>(args?: Subset<T, Organization$SaleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Association<T extends Organization$AssociationArgs<ExtArgs> = {}>(args?: Subset<T, Organization$AssociationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Total<T extends Organization$TotalArgs<ExtArgs> = {}>(args?: Subset<T, Organization$TotalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly cnpj: FieldRef<"Organization", 'String'>
    readonly status: FieldRef<"Organization", 'Boolean'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.companies
   */
  export type Organization$companiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    cursor?: CompanyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Organization.users
   */
  export type Organization$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Organization.Setting
   */
  export type Organization$SettingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    cursor?: SettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Organization.Sale
   */
  export type Organization$SaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Organization.Association
   */
  export type Organization$AssociationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    where?: AssociationWhereInput
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    cursor?: AssociationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Organization.Total
   */
  export type Organization$TotalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    where?: TotalWhereInput
    orderBy?: TotalOrderByWithRelationInput | TotalOrderByWithRelationInput[]
    cursor?: TotalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TotalScalarFieldEnum | TotalScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyMinAggregateOutputType = {
    id: string | null
    corpreason: string | null
    cnpj: string | null
    subnumber: string | null
    subname: string | null
    cep: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: string | null
    complement: string | null
    telefone: string | null
    status: boolean | null
    whatsapp: string | null
    observation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: string | null
    corpreason: string | null
    cnpj: string | null
    subnumber: string | null
    subname: string | null
    cep: string | null
    state: string | null
    city: string | null
    district: string | null
    street: string | null
    number: string | null
    complement: string | null
    telefone: string | null
    status: boolean | null
    whatsapp: string | null
    observation: string | null
    createdAt: Date | null
    updatedAt: Date | null
    organizationId: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    corpreason: number
    cnpj: number
    subnumber: number
    subname: number
    cep: number
    state: number
    city: number
    district: number
    street: number
    number: number
    complement: number
    telefone: number
    status: number
    whatsapp: number
    observation: number
    createdAt: number
    updatedAt: number
    organizationId: number
    _all: number
  }


  export type CompanyMinAggregateInputType = {
    id?: true
    corpreason?: true
    cnpj?: true
    subnumber?: true
    subname?: true
    cep?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    telefone?: true
    status?: true
    whatsapp?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    corpreason?: true
    cnpj?: true
    subnumber?: true
    subname?: true
    cep?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    telefone?: true
    status?: true
    whatsapp?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    corpreason?: true
    cnpj?: true
    subnumber?: true
    subname?: true
    cep?: true
    state?: true
    city?: true
    district?: true
    street?: true
    number?: true
    complement?: true
    telefone?: true
    status?: true
    whatsapp?: true
    observation?: true
    createdAt?: true
    updatedAt?: true
    organizationId?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: string
    corpreason: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district: string | null
    street: string | null
    number: string | null
    complement: string | null
    telefone: string
    status: boolean
    whatsapp: string | null
    observation: string | null
    createdAt: Date
    updatedAt: Date
    organizationId: string | null
    _count: CompanyCountAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    corpreason?: boolean
    cnpj?: boolean
    subnumber?: boolean
    subname?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    telefone?: boolean
    status?: boolean
    whatsapp?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
    Organization?: boolean | Company$OrganizationArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>



  export type CompanySelectScalar = {
    id?: boolean
    corpreason?: boolean
    cnpj?: boolean
    subnumber?: boolean
    subname?: boolean
    cep?: boolean
    state?: boolean
    city?: boolean
    district?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    telefone?: boolean
    status?: boolean
    whatsapp?: boolean
    observation?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organizationId?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "corpreason" | "cnpj" | "subnumber" | "subname" | "cep" | "state" | "city" | "district" | "street" | "number" | "complement" | "telefone" | "status" | "whatsapp" | "observation" | "createdAt" | "updatedAt" | "organizationId", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | Company$OrganizationArgs<ExtArgs>
    users?: boolean | Company$usersArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      corpreason: string | null
      cnpj: string
      subnumber: string
      subname: string
      cep: string
      state: string
      city: string
      district: string | null
      street: string | null
      number: string | null
      complement: string | null
      telefone: string
      status: boolean
      whatsapp: string | null
      observation: string | null
      createdAt: Date
      updatedAt: Date
      organizationId: string | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends Company$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Company$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Company model
   */
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'String'>
    readonly corpreason: FieldRef<"Company", 'String'>
    readonly cnpj: FieldRef<"Company", 'String'>
    readonly subnumber: FieldRef<"Company", 'String'>
    readonly subname: FieldRef<"Company", 'String'>
    readonly cep: FieldRef<"Company", 'String'>
    readonly state: FieldRef<"Company", 'String'>
    readonly city: FieldRef<"Company", 'String'>
    readonly district: FieldRef<"Company", 'String'>
    readonly street: FieldRef<"Company", 'String'>
    readonly number: FieldRef<"Company", 'String'>
    readonly complement: FieldRef<"Company", 'String'>
    readonly telefone: FieldRef<"Company", 'String'>
    readonly status: FieldRef<"Company", 'Boolean'>
    readonly whatsapp: FieldRef<"Company", 'String'>
    readonly observation: FieldRef<"Company", 'String'>
    readonly createdAt: FieldRef<"Company", 'DateTime'>
    readonly updatedAt: FieldRef<"Company", 'DateTime'>
    readonly organizationId: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.Organization
   */
  export type Company$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingMinAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    organizationId: string | null
  }

  export type SettingMaxAggregateOutputType = {
    id: string | null
    name: string | null
    logo: string | null
    organizationId: string | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    name: number
    logo: number
    organizationId: number
    _all: number
  }


  export type SettingMinAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    organizationId?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    organizationId?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    name?: true
    logo?: true
    organizationId?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: string
    name: string | null
    logo: string | null
    organizationId: string | null
    _count: SettingCountAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    logo?: boolean
    organizationId?: boolean
    Organization?: boolean | Setting$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>



  export type SettingSelectScalar = {
    id?: boolean
    name?: boolean
    logo?: boolean
    organizationId?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "logo" | "organizationId", ExtArgs["result"]["setting"]>
  export type SettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | Setting$OrganizationArgs<ExtArgs>
  }

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      logo: string | null
      organizationId: string | null
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends Setting$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Setting$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'String'>
    readonly name: FieldRef<"Setting", 'String'>
    readonly logo: FieldRef<"Setting", 'String'>
    readonly organizationId: FieldRef<"Setting", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data?: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting.Organization
   */
  export type Setting$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    resumo_cnpj: string | null
    resumo_codfil: string | null
    resumo_desfil: string | null
    resumo_datmvt: string | null
    resumo_valdev: string | null
    resumo_valven: string | null
    resumo_margem: string | null
    resumo_presen: string | null
    resumo_metdia: string | null
    organizationId: string | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    resumo_cnpj: string | null
    resumo_codfil: string | null
    resumo_desfil: string | null
    resumo_datmvt: string | null
    resumo_valdev: string | null
    resumo_valven: string | null
    resumo_margem: string | null
    resumo_presen: string | null
    resumo_metdia: string | null
    organizationId: string | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    resumo_cnpj: number
    resumo_codfil: number
    resumo_desfil: number
    resumo_datmvt: number
    resumo_valdev: number
    resumo_valven: number
    resumo_margem: number
    resumo_presen: number
    resumo_metdia: number
    organizationId: number
    _all: number
  }


  export type SaleMinAggregateInputType = {
    id?: true
    resumo_cnpj?: true
    resumo_codfil?: true
    resumo_desfil?: true
    resumo_datmvt?: true
    resumo_valdev?: true
    resumo_valven?: true
    resumo_margem?: true
    resumo_presen?: true
    resumo_metdia?: true
    organizationId?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    resumo_cnpj?: true
    resumo_codfil?: true
    resumo_desfil?: true
    resumo_datmvt?: true
    resumo_valdev?: true
    resumo_valven?: true
    resumo_margem?: true
    resumo_presen?: true
    resumo_metdia?: true
    organizationId?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    resumo_cnpj?: true
    resumo_codfil?: true
    resumo_desfil?: true
    resumo_datmvt?: true
    resumo_valdev?: true
    resumo_valven?: true
    resumo_margem?: true
    resumo_presen?: true
    resumo_metdia?: true
    organizationId?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    resumo_cnpj: string
    resumo_codfil: string
    resumo_desfil: string
    resumo_datmvt: string
    resumo_valdev: string
    resumo_valven: string
    resumo_margem: string
    resumo_presen: string
    resumo_metdia: string
    organizationId: string | null
    _count: SaleCountAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    resumo_cnpj?: boolean
    resumo_codfil?: boolean
    resumo_desfil?: boolean
    resumo_datmvt?: boolean
    resumo_valdev?: boolean
    resumo_valven?: boolean
    resumo_margem?: boolean
    resumo_presen?: boolean
    resumo_metdia?: boolean
    organizationId?: boolean
    Organization?: boolean | Sale$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>



  export type SaleSelectScalar = {
    id?: boolean
    resumo_cnpj?: boolean
    resumo_codfil?: boolean
    resumo_desfil?: boolean
    resumo_datmvt?: boolean
    resumo_valdev?: boolean
    resumo_valven?: boolean
    resumo_margem?: boolean
    resumo_presen?: boolean
    resumo_metdia?: boolean
    organizationId?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "resumo_cnpj" | "resumo_codfil" | "resumo_desfil" | "resumo_datmvt" | "resumo_valdev" | "resumo_valven" | "resumo_margem" | "resumo_presen" | "resumo_metdia" | "organizationId", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | Sale$OrganizationArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      resumo_cnpj: string
      resumo_codfil: string
      resumo_desfil: string
      resumo_datmvt: string
      resumo_valdev: string
      resumo_valven: string
      resumo_margem: string
      resumo_presen: string
      resumo_metdia: string
      organizationId: string | null
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends Sale$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Sale$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly resumo_cnpj: FieldRef<"Sale", 'String'>
    readonly resumo_codfil: FieldRef<"Sale", 'String'>
    readonly resumo_desfil: FieldRef<"Sale", 'String'>
    readonly resumo_datmvt: FieldRef<"Sale", 'String'>
    readonly resumo_valdev: FieldRef<"Sale", 'String'>
    readonly resumo_valven: FieldRef<"Sale", 'String'>
    readonly resumo_margem: FieldRef<"Sale", 'String'>
    readonly resumo_presen: FieldRef<"Sale", 'String'>
    readonly resumo_metdia: FieldRef<"Sale", 'String'>
    readonly organizationId: FieldRef<"Sale", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.Organization
   */
  export type Sale$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model Association
   */

  export type AggregateAssociation = {
    _count: AssociationCountAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  export type AssociationMinAggregateOutputType = {
    id: string | null
    assoc_cnpj: string | null
    assoc_filial: string | null
    assoc_datmvt: string | null
    assoc_ass: string | null
    assoc_desass: string | null
    assoc_valdev: string | null
    assoc_valven: string | null
    assoc_margem: string | null
    assoc_repres: string | null
    assoc_metdia: string | null
    organizationId: string | null
  }

  export type AssociationMaxAggregateOutputType = {
    id: string | null
    assoc_cnpj: string | null
    assoc_filial: string | null
    assoc_datmvt: string | null
    assoc_ass: string | null
    assoc_desass: string | null
    assoc_valdev: string | null
    assoc_valven: string | null
    assoc_margem: string | null
    assoc_repres: string | null
    assoc_metdia: string | null
    organizationId: string | null
  }

  export type AssociationCountAggregateOutputType = {
    id: number
    assoc_cnpj: number
    assoc_filial: number
    assoc_datmvt: number
    assoc_ass: number
    assoc_desass: number
    assoc_valdev: number
    assoc_valven: number
    assoc_margem: number
    assoc_repres: number
    assoc_metdia: number
    organizationId: number
    _all: number
  }


  export type AssociationMinAggregateInputType = {
    id?: true
    assoc_cnpj?: true
    assoc_filial?: true
    assoc_datmvt?: true
    assoc_ass?: true
    assoc_desass?: true
    assoc_valdev?: true
    assoc_valven?: true
    assoc_margem?: true
    assoc_repres?: true
    assoc_metdia?: true
    organizationId?: true
  }

  export type AssociationMaxAggregateInputType = {
    id?: true
    assoc_cnpj?: true
    assoc_filial?: true
    assoc_datmvt?: true
    assoc_ass?: true
    assoc_desass?: true
    assoc_valdev?: true
    assoc_valven?: true
    assoc_margem?: true
    assoc_repres?: true
    assoc_metdia?: true
    organizationId?: true
  }

  export type AssociationCountAggregateInputType = {
    id?: true
    assoc_cnpj?: true
    assoc_filial?: true
    assoc_datmvt?: true
    assoc_ass?: true
    assoc_desass?: true
    assoc_valdev?: true
    assoc_valven?: true
    assoc_margem?: true
    assoc_repres?: true
    assoc_metdia?: true
    organizationId?: true
    _all?: true
  }

  export type AssociationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Association to aggregate.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Associations
    **/
    _count?: true | AssociationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssociationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssociationMaxAggregateInputType
  }

  export type GetAssociationAggregateType<T extends AssociationAggregateArgs> = {
        [P in keyof T & keyof AggregateAssociation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssociation[P]>
      : GetScalarType<T[P], AggregateAssociation[P]>
  }




  export type AssociationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssociationWhereInput
    orderBy?: AssociationOrderByWithAggregationInput | AssociationOrderByWithAggregationInput[]
    by: AssociationScalarFieldEnum[] | AssociationScalarFieldEnum
    having?: AssociationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssociationCountAggregateInputType | true
    _min?: AssociationMinAggregateInputType
    _max?: AssociationMaxAggregateInputType
  }

  export type AssociationGroupByOutputType = {
    id: string
    assoc_cnpj: string
    assoc_filial: string
    assoc_datmvt: string
    assoc_ass: string
    assoc_desass: string
    assoc_valdev: string
    assoc_valven: string
    assoc_margem: string
    assoc_repres: string
    assoc_metdia: string
    organizationId: string | null
    _count: AssociationCountAggregateOutputType | null
    _min: AssociationMinAggregateOutputType | null
    _max: AssociationMaxAggregateOutputType | null
  }

  type GetAssociationGroupByPayload<T extends AssociationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssociationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssociationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssociationGroupByOutputType[P]>
            : GetScalarType<T[P], AssociationGroupByOutputType[P]>
        }
      >
    >


  export type AssociationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assoc_cnpj?: boolean
    assoc_filial?: boolean
    assoc_datmvt?: boolean
    assoc_ass?: boolean
    assoc_desass?: boolean
    assoc_valdev?: boolean
    assoc_valven?: boolean
    assoc_margem?: boolean
    assoc_repres?: boolean
    assoc_metdia?: boolean
    organizationId?: boolean
    Organization?: boolean | Association$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["association"]>



  export type AssociationSelectScalar = {
    id?: boolean
    assoc_cnpj?: boolean
    assoc_filial?: boolean
    assoc_datmvt?: boolean
    assoc_ass?: boolean
    assoc_desass?: boolean
    assoc_valdev?: boolean
    assoc_valven?: boolean
    assoc_margem?: boolean
    assoc_repres?: boolean
    assoc_metdia?: boolean
    organizationId?: boolean
  }

  export type AssociationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assoc_cnpj" | "assoc_filial" | "assoc_datmvt" | "assoc_ass" | "assoc_desass" | "assoc_valdev" | "assoc_valven" | "assoc_margem" | "assoc_repres" | "assoc_metdia" | "organizationId", ExtArgs["result"]["association"]>
  export type AssociationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | Association$OrganizationArgs<ExtArgs>
  }

  export type $AssociationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Association"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assoc_cnpj: string
      assoc_filial: string
      assoc_datmvt: string
      assoc_ass: string
      assoc_desass: string
      assoc_valdev: string
      assoc_valven: string
      assoc_margem: string
      assoc_repres: string
      assoc_metdia: string
      organizationId: string | null
    }, ExtArgs["result"]["association"]>
    composites: {}
  }

  type AssociationGetPayload<S extends boolean | null | undefined | AssociationDefaultArgs> = $Result.GetResult<Prisma.$AssociationPayload, S>

  type AssociationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssociationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssociationCountAggregateInputType | true
    }

  export interface AssociationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Association'], meta: { name: 'Association' } }
    /**
     * Find zero or one Association that matches the filter.
     * @param {AssociationFindUniqueArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssociationFindUniqueArgs>(args: SelectSubset<T, AssociationFindUniqueArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Association that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssociationFindUniqueOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssociationFindUniqueOrThrowArgs>(args: SelectSubset<T, AssociationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssociationFindFirstArgs>(args?: SelectSubset<T, AssociationFindFirstArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Association that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindFirstOrThrowArgs} args - Arguments to find a Association
     * @example
     * // Get one Association
     * const association = await prisma.association.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssociationFindFirstOrThrowArgs>(args?: SelectSubset<T, AssociationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Associations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Associations
     * const associations = await prisma.association.findMany()
     * 
     * // Get first 10 Associations
     * const associations = await prisma.association.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const associationWithIdOnly = await prisma.association.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssociationFindManyArgs>(args?: SelectSubset<T, AssociationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Association.
     * @param {AssociationCreateArgs} args - Arguments to create a Association.
     * @example
     * // Create one Association
     * const Association = await prisma.association.create({
     *   data: {
     *     // ... data to create a Association
     *   }
     * })
     * 
     */
    create<T extends AssociationCreateArgs>(args: SelectSubset<T, AssociationCreateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Associations.
     * @param {AssociationCreateManyArgs} args - Arguments to create many Associations.
     * @example
     * // Create many Associations
     * const association = await prisma.association.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssociationCreateManyArgs>(args?: SelectSubset<T, AssociationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Association.
     * @param {AssociationDeleteArgs} args - Arguments to delete one Association.
     * @example
     * // Delete one Association
     * const Association = await prisma.association.delete({
     *   where: {
     *     // ... filter to delete one Association
     *   }
     * })
     * 
     */
    delete<T extends AssociationDeleteArgs>(args: SelectSubset<T, AssociationDeleteArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Association.
     * @param {AssociationUpdateArgs} args - Arguments to update one Association.
     * @example
     * // Update one Association
     * const association = await prisma.association.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssociationUpdateArgs>(args: SelectSubset<T, AssociationUpdateArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Associations.
     * @param {AssociationDeleteManyArgs} args - Arguments to filter Associations to delete.
     * @example
     * // Delete a few Associations
     * const { count } = await prisma.association.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssociationDeleteManyArgs>(args?: SelectSubset<T, AssociationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Associations
     * const association = await prisma.association.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssociationUpdateManyArgs>(args: SelectSubset<T, AssociationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Association.
     * @param {AssociationUpsertArgs} args - Arguments to update or create a Association.
     * @example
     * // Update or create a Association
     * const association = await prisma.association.upsert({
     *   create: {
     *     // ... data to create a Association
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Association we want to update
     *   }
     * })
     */
    upsert<T extends AssociationUpsertArgs>(args: SelectSubset<T, AssociationUpsertArgs<ExtArgs>>): Prisma__AssociationClient<$Result.GetResult<Prisma.$AssociationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Associations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationCountArgs} args - Arguments to filter Associations to count.
     * @example
     * // Count the number of Associations
     * const count = await prisma.association.count({
     *   where: {
     *     // ... the filter for the Associations we want to count
     *   }
     * })
    **/
    count<T extends AssociationCountArgs>(
      args?: Subset<T, AssociationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssociationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssociationAggregateArgs>(args: Subset<T, AssociationAggregateArgs>): Prisma.PrismaPromise<GetAssociationAggregateType<T>>

    /**
     * Group by Association.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssociationGroupByArgs} args - Group by arguments.
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
      T extends AssociationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssociationGroupByArgs['orderBy'] }
        : { orderBy?: AssociationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssociationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssociationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Association model
   */
  readonly fields: AssociationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Association.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssociationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends Association$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Association$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Association model
   */
  interface AssociationFieldRefs {
    readonly id: FieldRef<"Association", 'String'>
    readonly assoc_cnpj: FieldRef<"Association", 'String'>
    readonly assoc_filial: FieldRef<"Association", 'String'>
    readonly assoc_datmvt: FieldRef<"Association", 'String'>
    readonly assoc_ass: FieldRef<"Association", 'String'>
    readonly assoc_desass: FieldRef<"Association", 'String'>
    readonly assoc_valdev: FieldRef<"Association", 'String'>
    readonly assoc_valven: FieldRef<"Association", 'String'>
    readonly assoc_margem: FieldRef<"Association", 'String'>
    readonly assoc_repres: FieldRef<"Association", 'String'>
    readonly assoc_metdia: FieldRef<"Association", 'String'>
    readonly organizationId: FieldRef<"Association", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Association findUnique
   */
  export type AssociationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findUniqueOrThrow
   */
  export type AssociationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association findFirst
   */
  export type AssociationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findFirstOrThrow
   */
  export type AssociationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Association to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Associations.
     */
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association findMany
   */
  export type AssociationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter, which Associations to fetch.
     */
    where?: AssociationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Associations to fetch.
     */
    orderBy?: AssociationOrderByWithRelationInput | AssociationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Associations.
     */
    cursor?: AssociationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Associations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Associations.
     */
    skip?: number
    distinct?: AssociationScalarFieldEnum | AssociationScalarFieldEnum[]
  }

  /**
   * Association create
   */
  export type AssociationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to create a Association.
     */
    data: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
  }

  /**
   * Association createMany
   */
  export type AssociationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Associations.
     */
    data: AssociationCreateManyInput | AssociationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Association update
   */
  export type AssociationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The data needed to update a Association.
     */
    data: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
    /**
     * Choose, which Association to update.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association updateMany
   */
  export type AssociationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Associations.
     */
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyInput>
    /**
     * Filter which Associations to update
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to update.
     */
    limit?: number
  }

  /**
   * Association upsert
   */
  export type AssociationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * The filter to search for the Association to update in case it exists.
     */
    where: AssociationWhereUniqueInput
    /**
     * In case the Association found by the `where` argument doesn't exist, create a new Association with this data.
     */
    create: XOR<AssociationCreateInput, AssociationUncheckedCreateInput>
    /**
     * In case the Association was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssociationUpdateInput, AssociationUncheckedUpdateInput>
  }

  /**
   * Association delete
   */
  export type AssociationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
    /**
     * Filter which Association to delete.
     */
    where: AssociationWhereUniqueInput
  }

  /**
   * Association deleteMany
   */
  export type AssociationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Associations to delete
     */
    where?: AssociationWhereInput
    /**
     * Limit how many Associations to delete.
     */
    limit?: number
  }

  /**
   * Association.Organization
   */
  export type Association$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Association without action
   */
  export type AssociationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Association
     */
    select?: AssociationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Association
     */
    omit?: AssociationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssociationInclude<ExtArgs> | null
  }


  /**
   * Model Total
   */

  export type AggregateTotal = {
    _count: TotalCountAggregateOutputType | null
    _min: TotalMinAggregateOutputType | null
    _max: TotalMaxAggregateOutputType | null
  }

  export type TotalMinAggregateOutputType = {
    id: string | null
    total_cnpj: string | null
    total_datatu: string | null
    total_filial: string | null
    total_valdev: string | null
    total_valven: string | null
    total_margem: string | null
    total_permet: string | null
    total_projec: string | null
    total_valjur: string | null
    total_perjur: string | null
    total_valina: string | null
    total_perina: string | null
    total_valest: string | null
    total_meta: string | null
    organizationId: string | null
  }

  export type TotalMaxAggregateOutputType = {
    id: string | null
    total_cnpj: string | null
    total_datatu: string | null
    total_filial: string | null
    total_valdev: string | null
    total_valven: string | null
    total_margem: string | null
    total_permet: string | null
    total_projec: string | null
    total_valjur: string | null
    total_perjur: string | null
    total_valina: string | null
    total_perina: string | null
    total_valest: string | null
    total_meta: string | null
    organizationId: string | null
  }

  export type TotalCountAggregateOutputType = {
    id: number
    total_cnpj: number
    total_datatu: number
    total_filial: number
    total_valdev: number
    total_valven: number
    total_margem: number
    total_permet: number
    total_projec: number
    total_valjur: number
    total_perjur: number
    total_valina: number
    total_perina: number
    total_valest: number
    total_meta: number
    organizationId: number
    _all: number
  }


  export type TotalMinAggregateInputType = {
    id?: true
    total_cnpj?: true
    total_datatu?: true
    total_filial?: true
    total_valdev?: true
    total_valven?: true
    total_margem?: true
    total_permet?: true
    total_projec?: true
    total_valjur?: true
    total_perjur?: true
    total_valina?: true
    total_perina?: true
    total_valest?: true
    total_meta?: true
    organizationId?: true
  }

  export type TotalMaxAggregateInputType = {
    id?: true
    total_cnpj?: true
    total_datatu?: true
    total_filial?: true
    total_valdev?: true
    total_valven?: true
    total_margem?: true
    total_permet?: true
    total_projec?: true
    total_valjur?: true
    total_perjur?: true
    total_valina?: true
    total_perina?: true
    total_valest?: true
    total_meta?: true
    organizationId?: true
  }

  export type TotalCountAggregateInputType = {
    id?: true
    total_cnpj?: true
    total_datatu?: true
    total_filial?: true
    total_valdev?: true
    total_valven?: true
    total_margem?: true
    total_permet?: true
    total_projec?: true
    total_valjur?: true
    total_perjur?: true
    total_valina?: true
    total_perina?: true
    total_valest?: true
    total_meta?: true
    organizationId?: true
    _all?: true
  }

  export type TotalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Total to aggregate.
     */
    where?: TotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totals to fetch.
     */
    orderBy?: TotalOrderByWithRelationInput | TotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Totals
    **/
    _count?: true | TotalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TotalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TotalMaxAggregateInputType
  }

  export type GetTotalAggregateType<T extends TotalAggregateArgs> = {
        [P in keyof T & keyof AggregateTotal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTotal[P]>
      : GetScalarType<T[P], AggregateTotal[P]>
  }




  export type TotalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TotalWhereInput
    orderBy?: TotalOrderByWithAggregationInput | TotalOrderByWithAggregationInput[]
    by: TotalScalarFieldEnum[] | TotalScalarFieldEnum
    having?: TotalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TotalCountAggregateInputType | true
    _min?: TotalMinAggregateInputType
    _max?: TotalMaxAggregateInputType
  }

  export type TotalGroupByOutputType = {
    id: string
    total_cnpj: string
    total_datatu: string
    total_filial: string
    total_valdev: string
    total_valven: string
    total_margem: string
    total_permet: string
    total_projec: string
    total_valjur: string
    total_perjur: string
    total_valina: string
    total_perina: string
    total_valest: string
    total_meta: string
    organizationId: string | null
    _count: TotalCountAggregateOutputType | null
    _min: TotalMinAggregateOutputType | null
    _max: TotalMaxAggregateOutputType | null
  }

  type GetTotalGroupByPayload<T extends TotalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TotalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TotalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TotalGroupByOutputType[P]>
            : GetScalarType<T[P], TotalGroupByOutputType[P]>
        }
      >
    >


  export type TotalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    total_cnpj?: boolean
    total_datatu?: boolean
    total_filial?: boolean
    total_valdev?: boolean
    total_valven?: boolean
    total_margem?: boolean
    total_permet?: boolean
    total_projec?: boolean
    total_valjur?: boolean
    total_perjur?: boolean
    total_valina?: boolean
    total_perina?: boolean
    total_valest?: boolean
    total_meta?: boolean
    organizationId?: boolean
    Organization?: boolean | Total$OrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["total"]>



  export type TotalSelectScalar = {
    id?: boolean
    total_cnpj?: boolean
    total_datatu?: boolean
    total_filial?: boolean
    total_valdev?: boolean
    total_valven?: boolean
    total_margem?: boolean
    total_permet?: boolean
    total_projec?: boolean
    total_valjur?: boolean
    total_perjur?: boolean
    total_valina?: boolean
    total_perina?: boolean
    total_valest?: boolean
    total_meta?: boolean
    organizationId?: boolean
  }

  export type TotalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "total_cnpj" | "total_datatu" | "total_filial" | "total_valdev" | "total_valven" | "total_margem" | "total_permet" | "total_projec" | "total_valjur" | "total_perjur" | "total_valina" | "total_perina" | "total_valest" | "total_meta" | "organizationId", ExtArgs["result"]["total"]>
  export type TotalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Organization?: boolean | Total$OrganizationArgs<ExtArgs>
  }

  export type $TotalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Total"
    objects: {
      Organization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      total_cnpj: string
      total_datatu: string
      total_filial: string
      total_valdev: string
      total_valven: string
      total_margem: string
      total_permet: string
      total_projec: string
      total_valjur: string
      total_perjur: string
      total_valina: string
      total_perina: string
      total_valest: string
      total_meta: string
      organizationId: string | null
    }, ExtArgs["result"]["total"]>
    composites: {}
  }

  type TotalGetPayload<S extends boolean | null | undefined | TotalDefaultArgs> = $Result.GetResult<Prisma.$TotalPayload, S>

  type TotalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TotalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TotalCountAggregateInputType | true
    }

  export interface TotalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Total'], meta: { name: 'Total' } }
    /**
     * Find zero or one Total that matches the filter.
     * @param {TotalFindUniqueArgs} args - Arguments to find a Total
     * @example
     * // Get one Total
     * const total = await prisma.total.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TotalFindUniqueArgs>(args: SelectSubset<T, TotalFindUniqueArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Total that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TotalFindUniqueOrThrowArgs} args - Arguments to find a Total
     * @example
     * // Get one Total
     * const total = await prisma.total.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TotalFindUniqueOrThrowArgs>(args: SelectSubset<T, TotalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Total that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalFindFirstArgs} args - Arguments to find a Total
     * @example
     * // Get one Total
     * const total = await prisma.total.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TotalFindFirstArgs>(args?: SelectSubset<T, TotalFindFirstArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Total that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalFindFirstOrThrowArgs} args - Arguments to find a Total
     * @example
     * // Get one Total
     * const total = await prisma.total.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TotalFindFirstOrThrowArgs>(args?: SelectSubset<T, TotalFindFirstOrThrowArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Totals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Totals
     * const totals = await prisma.total.findMany()
     * 
     * // Get first 10 Totals
     * const totals = await prisma.total.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const totalWithIdOnly = await prisma.total.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TotalFindManyArgs>(args?: SelectSubset<T, TotalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Total.
     * @param {TotalCreateArgs} args - Arguments to create a Total.
     * @example
     * // Create one Total
     * const Total = await prisma.total.create({
     *   data: {
     *     // ... data to create a Total
     *   }
     * })
     * 
     */
    create<T extends TotalCreateArgs>(args: SelectSubset<T, TotalCreateArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Totals.
     * @param {TotalCreateManyArgs} args - Arguments to create many Totals.
     * @example
     * // Create many Totals
     * const total = await prisma.total.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TotalCreateManyArgs>(args?: SelectSubset<T, TotalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Total.
     * @param {TotalDeleteArgs} args - Arguments to delete one Total.
     * @example
     * // Delete one Total
     * const Total = await prisma.total.delete({
     *   where: {
     *     // ... filter to delete one Total
     *   }
     * })
     * 
     */
    delete<T extends TotalDeleteArgs>(args: SelectSubset<T, TotalDeleteArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Total.
     * @param {TotalUpdateArgs} args - Arguments to update one Total.
     * @example
     * // Update one Total
     * const total = await prisma.total.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TotalUpdateArgs>(args: SelectSubset<T, TotalUpdateArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Totals.
     * @param {TotalDeleteManyArgs} args - Arguments to filter Totals to delete.
     * @example
     * // Delete a few Totals
     * const { count } = await prisma.total.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TotalDeleteManyArgs>(args?: SelectSubset<T, TotalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Totals
     * const total = await prisma.total.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TotalUpdateManyArgs>(args: SelectSubset<T, TotalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Total.
     * @param {TotalUpsertArgs} args - Arguments to update or create a Total.
     * @example
     * // Update or create a Total
     * const total = await prisma.total.upsert({
     *   create: {
     *     // ... data to create a Total
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Total we want to update
     *   }
     * })
     */
    upsert<T extends TotalUpsertArgs>(args: SelectSubset<T, TotalUpsertArgs<ExtArgs>>): Prisma__TotalClient<$Result.GetResult<Prisma.$TotalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Totals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalCountArgs} args - Arguments to filter Totals to count.
     * @example
     * // Count the number of Totals
     * const count = await prisma.total.count({
     *   where: {
     *     // ... the filter for the Totals we want to count
     *   }
     * })
    **/
    count<T extends TotalCountArgs>(
      args?: Subset<T, TotalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TotalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Total.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TotalAggregateArgs>(args: Subset<T, TotalAggregateArgs>): Prisma.PrismaPromise<GetTotalAggregateType<T>>

    /**
     * Group by Total.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TotalGroupByArgs} args - Group by arguments.
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
      T extends TotalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TotalGroupByArgs['orderBy'] }
        : { orderBy?: TotalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TotalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTotalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Total model
   */
  readonly fields: TotalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Total.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TotalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Organization<T extends Total$OrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Total$OrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Total model
   */
  interface TotalFieldRefs {
    readonly id: FieldRef<"Total", 'String'>
    readonly total_cnpj: FieldRef<"Total", 'String'>
    readonly total_datatu: FieldRef<"Total", 'String'>
    readonly total_filial: FieldRef<"Total", 'String'>
    readonly total_valdev: FieldRef<"Total", 'String'>
    readonly total_valven: FieldRef<"Total", 'String'>
    readonly total_margem: FieldRef<"Total", 'String'>
    readonly total_permet: FieldRef<"Total", 'String'>
    readonly total_projec: FieldRef<"Total", 'String'>
    readonly total_valjur: FieldRef<"Total", 'String'>
    readonly total_perjur: FieldRef<"Total", 'String'>
    readonly total_valina: FieldRef<"Total", 'String'>
    readonly total_perina: FieldRef<"Total", 'String'>
    readonly total_valest: FieldRef<"Total", 'String'>
    readonly total_meta: FieldRef<"Total", 'String'>
    readonly organizationId: FieldRef<"Total", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Total findUnique
   */
  export type TotalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * Filter, which Total to fetch.
     */
    where: TotalWhereUniqueInput
  }

  /**
   * Total findUniqueOrThrow
   */
  export type TotalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * Filter, which Total to fetch.
     */
    where: TotalWhereUniqueInput
  }

  /**
   * Total findFirst
   */
  export type TotalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * Filter, which Total to fetch.
     */
    where?: TotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totals to fetch.
     */
    orderBy?: TotalOrderByWithRelationInput | TotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Totals.
     */
    cursor?: TotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Totals.
     */
    distinct?: TotalScalarFieldEnum | TotalScalarFieldEnum[]
  }

  /**
   * Total findFirstOrThrow
   */
  export type TotalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * Filter, which Total to fetch.
     */
    where?: TotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totals to fetch.
     */
    orderBy?: TotalOrderByWithRelationInput | TotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Totals.
     */
    cursor?: TotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Totals.
     */
    distinct?: TotalScalarFieldEnum | TotalScalarFieldEnum[]
  }

  /**
   * Total findMany
   */
  export type TotalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * Filter, which Totals to fetch.
     */
    where?: TotalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Totals to fetch.
     */
    orderBy?: TotalOrderByWithRelationInput | TotalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Totals.
     */
    cursor?: TotalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Totals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Totals.
     */
    skip?: number
    distinct?: TotalScalarFieldEnum | TotalScalarFieldEnum[]
  }

  /**
   * Total create
   */
  export type TotalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * The data needed to create a Total.
     */
    data: XOR<TotalCreateInput, TotalUncheckedCreateInput>
  }

  /**
   * Total createMany
   */
  export type TotalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Totals.
     */
    data: TotalCreateManyInput | TotalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Total update
   */
  export type TotalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * The data needed to update a Total.
     */
    data: XOR<TotalUpdateInput, TotalUncheckedUpdateInput>
    /**
     * Choose, which Total to update.
     */
    where: TotalWhereUniqueInput
  }

  /**
   * Total updateMany
   */
  export type TotalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Totals.
     */
    data: XOR<TotalUpdateManyMutationInput, TotalUncheckedUpdateManyInput>
    /**
     * Filter which Totals to update
     */
    where?: TotalWhereInput
    /**
     * Limit how many Totals to update.
     */
    limit?: number
  }

  /**
   * Total upsert
   */
  export type TotalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * The filter to search for the Total to update in case it exists.
     */
    where: TotalWhereUniqueInput
    /**
     * In case the Total found by the `where` argument doesn't exist, create a new Total with this data.
     */
    create: XOR<TotalCreateInput, TotalUncheckedCreateInput>
    /**
     * In case the Total was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TotalUpdateInput, TotalUncheckedUpdateInput>
  }

  /**
   * Total delete
   */
  export type TotalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
    /**
     * Filter which Total to delete.
     */
    where: TotalWhereUniqueInput
  }

  /**
   * Total deleteMany
   */
  export type TotalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Totals to delete
     */
    where?: TotalWhereInput
    /**
     * Limit how many Totals to delete.
     */
    limit?: number
  }

  /**
   * Total.Organization
   */
  export type Total$OrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Total without action
   */
  export type TotalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Total
     */
    select?: TotalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Total
     */
    omit?: TotalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TotalInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    is_admin: 'is_admin',
    roles: 'roles',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId',
    companyId: 'companyId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    corpreason: 'corpreason',
    cnpj: 'cnpj',
    subnumber: 'subnumber',
    subname: 'subname',
    cep: 'cep',
    state: 'state',
    city: 'city',
    district: 'district',
    street: 'street',
    number: 'number',
    complement: 'complement',
    telefone: 'telefone',
    status: 'status',
    whatsapp: 'whatsapp',
    observation: 'observation',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    organizationId: 'organizationId'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    organizationId: 'organizationId'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    resumo_cnpj: 'resumo_cnpj',
    resumo_codfil: 'resumo_codfil',
    resumo_desfil: 'resumo_desfil',
    resumo_datmvt: 'resumo_datmvt',
    resumo_valdev: 'resumo_valdev',
    resumo_valven: 'resumo_valven',
    resumo_margem: 'resumo_margem',
    resumo_presen: 'resumo_presen',
    resumo_metdia: 'resumo_metdia',
    organizationId: 'organizationId'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const AssociationScalarFieldEnum: {
    id: 'id',
    assoc_cnpj: 'assoc_cnpj',
    assoc_filial: 'assoc_filial',
    assoc_datmvt: 'assoc_datmvt',
    assoc_ass: 'assoc_ass',
    assoc_desass: 'assoc_desass',
    assoc_valdev: 'assoc_valdev',
    assoc_valven: 'assoc_valven',
    assoc_margem: 'assoc_margem',
    assoc_repres: 'assoc_repres',
    assoc_metdia: 'assoc_metdia',
    organizationId: 'organizationId'
  };

  export type AssociationScalarFieldEnum = (typeof AssociationScalarFieldEnum)[keyof typeof AssociationScalarFieldEnum]


  export const TotalScalarFieldEnum: {
    id: 'id',
    total_cnpj: 'total_cnpj',
    total_datatu: 'total_datatu',
    total_filial: 'total_filial',
    total_valdev: 'total_valdev',
    total_valven: 'total_valven',
    total_margem: 'total_margem',
    total_permet: 'total_permet',
    total_projec: 'total_projec',
    total_valjur: 'total_valjur',
    total_perjur: 'total_perjur',
    total_valina: 'total_valina',
    total_perina: 'total_perina',
    total_valest: 'total_valest',
    total_meta: 'total_meta',
    organizationId: 'organizationId'
  };

  export type TotalScalarFieldEnum = (typeof TotalScalarFieldEnum)[keyof typeof TotalScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    roles: 'roles',
    organizationId: 'organizationId',
    companyId: 'companyId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const OrganizationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    cnpj: 'cnpj'
  };

  export type OrganizationOrderByRelevanceFieldEnum = (typeof OrganizationOrderByRelevanceFieldEnum)[keyof typeof OrganizationOrderByRelevanceFieldEnum]


  export const CompanyOrderByRelevanceFieldEnum: {
    id: 'id',
    corpreason: 'corpreason',
    cnpj: 'cnpj',
    subnumber: 'subnumber',
    subname: 'subname',
    cep: 'cep',
    state: 'state',
    city: 'city',
    district: 'district',
    street: 'street',
    number: 'number',
    complement: 'complement',
    telefone: 'telefone',
    whatsapp: 'whatsapp',
    observation: 'observation',
    organizationId: 'organizationId'
  };

  export type CompanyOrderByRelevanceFieldEnum = (typeof CompanyOrderByRelevanceFieldEnum)[keyof typeof CompanyOrderByRelevanceFieldEnum]


  export const SettingOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    logo: 'logo',
    organizationId: 'organizationId'
  };

  export type SettingOrderByRelevanceFieldEnum = (typeof SettingOrderByRelevanceFieldEnum)[keyof typeof SettingOrderByRelevanceFieldEnum]


  export const SaleOrderByRelevanceFieldEnum: {
    id: 'id',
    resumo_cnpj: 'resumo_cnpj',
    resumo_codfil: 'resumo_codfil',
    resumo_desfil: 'resumo_desfil',
    resumo_datmvt: 'resumo_datmvt',
    resumo_valdev: 'resumo_valdev',
    resumo_valven: 'resumo_valven',
    resumo_margem: 'resumo_margem',
    resumo_presen: 'resumo_presen',
    resumo_metdia: 'resumo_metdia',
    organizationId: 'organizationId'
  };

  export type SaleOrderByRelevanceFieldEnum = (typeof SaleOrderByRelevanceFieldEnum)[keyof typeof SaleOrderByRelevanceFieldEnum]


  export const AssociationOrderByRelevanceFieldEnum: {
    id: 'id',
    assoc_cnpj: 'assoc_cnpj',
    assoc_filial: 'assoc_filial',
    assoc_datmvt: 'assoc_datmvt',
    assoc_ass: 'assoc_ass',
    assoc_desass: 'assoc_desass',
    assoc_valdev: 'assoc_valdev',
    assoc_valven: 'assoc_valven',
    assoc_margem: 'assoc_margem',
    assoc_repres: 'assoc_repres',
    assoc_metdia: 'assoc_metdia',
    organizationId: 'organizationId'
  };

  export type AssociationOrderByRelevanceFieldEnum = (typeof AssociationOrderByRelevanceFieldEnum)[keyof typeof AssociationOrderByRelevanceFieldEnum]


  export const TotalOrderByRelevanceFieldEnum: {
    id: 'id',
    total_cnpj: 'total_cnpj',
    total_datatu: 'total_datatu',
    total_filial: 'total_filial',
    total_valdev: 'total_valdev',
    total_valven: 'total_valven',
    total_margem: 'total_margem',
    total_permet: 'total_permet',
    total_projec: 'total_projec',
    total_valjur: 'total_valjur',
    total_perjur: 'total_perjur',
    total_valina: 'total_valina',
    total_perina: 'total_perina',
    total_valest: 'total_valest',
    total_meta: 'total_meta',
    organizationId: 'organizationId'
  };

  export type TotalOrderByRelevanceFieldEnum = (typeof TotalOrderByRelevanceFieldEnum)[keyof typeof TotalOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    is_admin?: BoolFilter<"User"> | boolean
    roles?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    Company?: CompanyOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    is_admin?: BoolFilter<"User"> | boolean
    roles?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    Company?: XOR<CompanyNullableScalarRelationFilter, CompanyWhereInput> | null
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    companyId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    is_admin?: BoolWithAggregatesFilter<"User"> | boolean
    roles?: StringWithAggregatesFilter<"User"> | string
    status?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    organizationId?: StringNullableWithAggregatesFilter<"User"> | string | null
    companyId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: StringFilter<"Organization"> | string
    name?: StringFilter<"Organization"> | string
    cnpj?: StringFilter<"Organization"> | string
    status?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    companies?: CompanyListRelationFilter
    users?: UserListRelationFilter
    Setting?: SettingListRelationFilter
    Sale?: SaleListRelationFilter
    Association?: AssociationListRelationFilter
    Total?: TotalListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    companies?: CompanyOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    Setting?: SettingOrderByRelationAggregateInput
    Sale?: SaleOrderByRelationAggregateInput
    Association?: AssociationOrderByRelationAggregateInput
    Total?: TotalOrderByRelationAggregateInput
    _relevance?: OrganizationOrderByRelevanceInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    cnpj?: StringFilter<"Organization"> | string
    status?: BoolFilter<"Organization"> | boolean
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    companies?: CompanyListRelationFilter
    users?: UserListRelationFilter
    Setting?: SettingListRelationFilter
    Sale?: SaleListRelationFilter
    Association?: AssociationListRelationFilter
    Total?: TotalListRelationFilter
  }, "id">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Organization"> | string
    name?: StringWithAggregatesFilter<"Organization"> | string
    cnpj?: StringWithAggregatesFilter<"Organization"> | string
    status?: BoolWithAggregatesFilter<"Organization"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: StringFilter<"Company"> | string
    corpreason?: StringNullableFilter<"Company"> | string | null
    cnpj?: StringFilter<"Company"> | string
    subnumber?: StringFilter<"Company"> | string
    subname?: StringFilter<"Company"> | string
    cep?: StringFilter<"Company"> | string
    state?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    district?: StringNullableFilter<"Company"> | string | null
    street?: StringNullableFilter<"Company"> | string | null
    number?: StringNullableFilter<"Company"> | string | null
    complement?: StringNullableFilter<"Company"> | string | null
    telefone?: StringFilter<"Company"> | string
    status?: BoolFilter<"Company"> | boolean
    whatsapp?: StringNullableFilter<"Company"> | string | null
    observation?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    organizationId?: StringNullableFilter<"Company"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    users?: UserListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    corpreason?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    subnumber?: SortOrder
    subname?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    telefone?: SortOrder
    status?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    observation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    _relevance?: CompanyOrderByRelevanceInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    corpreason?: StringNullableFilter<"Company"> | string | null
    cnpj?: StringFilter<"Company"> | string
    subnumber?: StringFilter<"Company"> | string
    subname?: StringFilter<"Company"> | string
    cep?: StringFilter<"Company"> | string
    state?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    district?: StringNullableFilter<"Company"> | string | null
    street?: StringNullableFilter<"Company"> | string | null
    number?: StringNullableFilter<"Company"> | string | null
    complement?: StringNullableFilter<"Company"> | string | null
    telefone?: StringFilter<"Company"> | string
    status?: BoolFilter<"Company"> | boolean
    whatsapp?: StringNullableFilter<"Company"> | string | null
    observation?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    organizationId?: StringNullableFilter<"Company"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    users?: UserListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    corpreason?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    subnumber?: SortOrder
    subname?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    telefone?: SortOrder
    status?: SortOrder
    whatsapp?: SortOrderInput | SortOrder
    observation?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Company"> | string
    corpreason?: StringNullableWithAggregatesFilter<"Company"> | string | null
    cnpj?: StringWithAggregatesFilter<"Company"> | string
    subnumber?: StringWithAggregatesFilter<"Company"> | string
    subname?: StringWithAggregatesFilter<"Company"> | string
    cep?: StringWithAggregatesFilter<"Company"> | string
    state?: StringWithAggregatesFilter<"Company"> | string
    city?: StringWithAggregatesFilter<"Company"> | string
    district?: StringNullableWithAggregatesFilter<"Company"> | string | null
    street?: StringNullableWithAggregatesFilter<"Company"> | string | null
    number?: StringNullableWithAggregatesFilter<"Company"> | string | null
    complement?: StringNullableWithAggregatesFilter<"Company"> | string | null
    telefone?: StringWithAggregatesFilter<"Company"> | string
    status?: BoolWithAggregatesFilter<"Company"> | boolean
    whatsapp?: StringNullableWithAggregatesFilter<"Company"> | string | null
    observation?: StringNullableWithAggregatesFilter<"Company"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    organizationId?: StringNullableWithAggregatesFilter<"Company"> | string | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: StringFilter<"Setting"> | string
    name?: StringNullableFilter<"Setting"> | string | null
    logo?: StringNullableFilter<"Setting"> | string | null
    organizationId?: StringNullableFilter<"Setting"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    _relevance?: SettingOrderByRelevanceInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    name?: StringNullableFilter<"Setting"> | string | null
    logo?: StringNullableFilter<"Setting"> | string | null
    organizationId?: StringNullableFilter<"Setting"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    logo?: SortOrderInput | SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: SettingCountOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Setting"> | string
    name?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    logo?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    organizationId?: StringNullableWithAggregatesFilter<"Setting"> | string | null
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    resumo_cnpj?: StringFilter<"Sale"> | string
    resumo_codfil?: StringFilter<"Sale"> | string
    resumo_desfil?: StringFilter<"Sale"> | string
    resumo_datmvt?: StringFilter<"Sale"> | string
    resumo_valdev?: StringFilter<"Sale"> | string
    resumo_valven?: StringFilter<"Sale"> | string
    resumo_margem?: StringFilter<"Sale"> | string
    resumo_presen?: StringFilter<"Sale"> | string
    resumo_metdia?: StringFilter<"Sale"> | string
    organizationId?: StringNullableFilter<"Sale"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    resumo_cnpj?: SortOrder
    resumo_codfil?: SortOrder
    resumo_desfil?: SortOrder
    resumo_datmvt?: SortOrder
    resumo_valdev?: SortOrder
    resumo_valven?: SortOrder
    resumo_margem?: SortOrder
    resumo_presen?: SortOrder
    resumo_metdia?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    _relevance?: SaleOrderByRelevanceInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    resumo_cnpj?: StringFilter<"Sale"> | string
    resumo_codfil?: StringFilter<"Sale"> | string
    resumo_desfil?: StringFilter<"Sale"> | string
    resumo_datmvt?: StringFilter<"Sale"> | string
    resumo_valdev?: StringFilter<"Sale"> | string
    resumo_valven?: StringFilter<"Sale"> | string
    resumo_margem?: StringFilter<"Sale"> | string
    resumo_presen?: StringFilter<"Sale"> | string
    resumo_metdia?: StringFilter<"Sale"> | string
    organizationId?: StringNullableFilter<"Sale"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    resumo_cnpj?: SortOrder
    resumo_codfil?: SortOrder
    resumo_desfil?: SortOrder
    resumo_datmvt?: SortOrder
    resumo_valdev?: SortOrder
    resumo_valven?: SortOrder
    resumo_margem?: SortOrder
    resumo_presen?: SortOrder
    resumo_metdia?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: SaleCountOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    resumo_cnpj?: StringWithAggregatesFilter<"Sale"> | string
    resumo_codfil?: StringWithAggregatesFilter<"Sale"> | string
    resumo_desfil?: StringWithAggregatesFilter<"Sale"> | string
    resumo_datmvt?: StringWithAggregatesFilter<"Sale"> | string
    resumo_valdev?: StringWithAggregatesFilter<"Sale"> | string
    resumo_valven?: StringWithAggregatesFilter<"Sale"> | string
    resumo_margem?: StringWithAggregatesFilter<"Sale"> | string
    resumo_presen?: StringWithAggregatesFilter<"Sale"> | string
    resumo_metdia?: StringWithAggregatesFilter<"Sale"> | string
    organizationId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
  }

  export type AssociationWhereInput = {
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    id?: StringFilter<"Association"> | string
    assoc_cnpj?: StringFilter<"Association"> | string
    assoc_filial?: StringFilter<"Association"> | string
    assoc_datmvt?: StringFilter<"Association"> | string
    assoc_ass?: StringFilter<"Association"> | string
    assoc_desass?: StringFilter<"Association"> | string
    assoc_valdev?: StringFilter<"Association"> | string
    assoc_valven?: StringFilter<"Association"> | string
    assoc_margem?: StringFilter<"Association"> | string
    assoc_repres?: StringFilter<"Association"> | string
    assoc_metdia?: StringFilter<"Association"> | string
    organizationId?: StringNullableFilter<"Association"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type AssociationOrderByWithRelationInput = {
    id?: SortOrder
    assoc_cnpj?: SortOrder
    assoc_filial?: SortOrder
    assoc_datmvt?: SortOrder
    assoc_ass?: SortOrder
    assoc_desass?: SortOrder
    assoc_valdev?: SortOrder
    assoc_valven?: SortOrder
    assoc_margem?: SortOrder
    assoc_repres?: SortOrder
    assoc_metdia?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    _relevance?: AssociationOrderByRelevanceInput
  }

  export type AssociationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssociationWhereInput | AssociationWhereInput[]
    OR?: AssociationWhereInput[]
    NOT?: AssociationWhereInput | AssociationWhereInput[]
    assoc_cnpj?: StringFilter<"Association"> | string
    assoc_filial?: StringFilter<"Association"> | string
    assoc_datmvt?: StringFilter<"Association"> | string
    assoc_ass?: StringFilter<"Association"> | string
    assoc_desass?: StringFilter<"Association"> | string
    assoc_valdev?: StringFilter<"Association"> | string
    assoc_valven?: StringFilter<"Association"> | string
    assoc_margem?: StringFilter<"Association"> | string
    assoc_repres?: StringFilter<"Association"> | string
    assoc_metdia?: StringFilter<"Association"> | string
    organizationId?: StringNullableFilter<"Association"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type AssociationOrderByWithAggregationInput = {
    id?: SortOrder
    assoc_cnpj?: SortOrder
    assoc_filial?: SortOrder
    assoc_datmvt?: SortOrder
    assoc_ass?: SortOrder
    assoc_desass?: SortOrder
    assoc_valdev?: SortOrder
    assoc_valven?: SortOrder
    assoc_margem?: SortOrder
    assoc_repres?: SortOrder
    assoc_metdia?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: AssociationCountOrderByAggregateInput
    _max?: AssociationMaxOrderByAggregateInput
    _min?: AssociationMinOrderByAggregateInput
  }

  export type AssociationScalarWhereWithAggregatesInput = {
    AND?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    OR?: AssociationScalarWhereWithAggregatesInput[]
    NOT?: AssociationScalarWhereWithAggregatesInput | AssociationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Association"> | string
    assoc_cnpj?: StringWithAggregatesFilter<"Association"> | string
    assoc_filial?: StringWithAggregatesFilter<"Association"> | string
    assoc_datmvt?: StringWithAggregatesFilter<"Association"> | string
    assoc_ass?: StringWithAggregatesFilter<"Association"> | string
    assoc_desass?: StringWithAggregatesFilter<"Association"> | string
    assoc_valdev?: StringWithAggregatesFilter<"Association"> | string
    assoc_valven?: StringWithAggregatesFilter<"Association"> | string
    assoc_margem?: StringWithAggregatesFilter<"Association"> | string
    assoc_repres?: StringWithAggregatesFilter<"Association"> | string
    assoc_metdia?: StringWithAggregatesFilter<"Association"> | string
    organizationId?: StringNullableWithAggregatesFilter<"Association"> | string | null
  }

  export type TotalWhereInput = {
    AND?: TotalWhereInput | TotalWhereInput[]
    OR?: TotalWhereInput[]
    NOT?: TotalWhereInput | TotalWhereInput[]
    id?: StringFilter<"Total"> | string
    total_cnpj?: StringFilter<"Total"> | string
    total_datatu?: StringFilter<"Total"> | string
    total_filial?: StringFilter<"Total"> | string
    total_valdev?: StringFilter<"Total"> | string
    total_valven?: StringFilter<"Total"> | string
    total_margem?: StringFilter<"Total"> | string
    total_permet?: StringFilter<"Total"> | string
    total_projec?: StringFilter<"Total"> | string
    total_valjur?: StringFilter<"Total"> | string
    total_perjur?: StringFilter<"Total"> | string
    total_valina?: StringFilter<"Total"> | string
    total_perina?: StringFilter<"Total"> | string
    total_valest?: StringFilter<"Total"> | string
    total_meta?: StringFilter<"Total"> | string
    organizationId?: StringNullableFilter<"Total"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type TotalOrderByWithRelationInput = {
    id?: SortOrder
    total_cnpj?: SortOrder
    total_datatu?: SortOrder
    total_filial?: SortOrder
    total_valdev?: SortOrder
    total_valven?: SortOrder
    total_margem?: SortOrder
    total_permet?: SortOrder
    total_projec?: SortOrder
    total_valjur?: SortOrder
    total_perjur?: SortOrder
    total_valina?: SortOrder
    total_perina?: SortOrder
    total_valest?: SortOrder
    total_meta?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    Organization?: OrganizationOrderByWithRelationInput
    _relevance?: TotalOrderByRelevanceInput
  }

  export type TotalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TotalWhereInput | TotalWhereInput[]
    OR?: TotalWhereInput[]
    NOT?: TotalWhereInput | TotalWhereInput[]
    total_cnpj?: StringFilter<"Total"> | string
    total_datatu?: StringFilter<"Total"> | string
    total_filial?: StringFilter<"Total"> | string
    total_valdev?: StringFilter<"Total"> | string
    total_valven?: StringFilter<"Total"> | string
    total_margem?: StringFilter<"Total"> | string
    total_permet?: StringFilter<"Total"> | string
    total_projec?: StringFilter<"Total"> | string
    total_valjur?: StringFilter<"Total"> | string
    total_perjur?: StringFilter<"Total"> | string
    total_valina?: StringFilter<"Total"> | string
    total_perina?: StringFilter<"Total"> | string
    total_valest?: StringFilter<"Total"> | string
    total_meta?: StringFilter<"Total"> | string
    organizationId?: StringNullableFilter<"Total"> | string | null
    Organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type TotalOrderByWithAggregationInput = {
    id?: SortOrder
    total_cnpj?: SortOrder
    total_datatu?: SortOrder
    total_filial?: SortOrder
    total_valdev?: SortOrder
    total_valven?: SortOrder
    total_margem?: SortOrder
    total_permet?: SortOrder
    total_projec?: SortOrder
    total_valjur?: SortOrder
    total_perjur?: SortOrder
    total_valina?: SortOrder
    total_perina?: SortOrder
    total_valest?: SortOrder
    total_meta?: SortOrder
    organizationId?: SortOrderInput | SortOrder
    _count?: TotalCountOrderByAggregateInput
    _max?: TotalMaxOrderByAggregateInput
    _min?: TotalMinOrderByAggregateInput
  }

  export type TotalScalarWhereWithAggregatesInput = {
    AND?: TotalScalarWhereWithAggregatesInput | TotalScalarWhereWithAggregatesInput[]
    OR?: TotalScalarWhereWithAggregatesInput[]
    NOT?: TotalScalarWhereWithAggregatesInput | TotalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Total"> | string
    total_cnpj?: StringWithAggregatesFilter<"Total"> | string
    total_datatu?: StringWithAggregatesFilter<"Total"> | string
    total_filial?: StringWithAggregatesFilter<"Total"> | string
    total_valdev?: StringWithAggregatesFilter<"Total"> | string
    total_valven?: StringWithAggregatesFilter<"Total"> | string
    total_margem?: StringWithAggregatesFilter<"Total"> | string
    total_permet?: StringWithAggregatesFilter<"Total"> | string
    total_projec?: StringWithAggregatesFilter<"Total"> | string
    total_valjur?: StringWithAggregatesFilter<"Total"> | string
    total_perjur?: StringWithAggregatesFilter<"Total"> | string
    total_valina?: StringWithAggregatesFilter<"Total"> | string
    total_perina?: StringWithAggregatesFilter<"Total"> | string
    total_valest?: StringWithAggregatesFilter<"Total"> | string
    total_meta?: StringWithAggregatesFilter<"Total"> | string
    organizationId?: StringNullableWithAggregatesFilter<"Total"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutUsersInput
    Company?: CompanyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    companyId?: string | null
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutUsersNestedInput
    Company?: CompanyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    companyId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrganizationCreateInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    Setting?: SettingCreateNestedManyWithoutOrganizationInput
    Sale?: SaleCreateNestedManyWithoutOrganizationInput
    Association?: AssociationCreateNestedManyWithoutOrganizationInput
    Total?: TotalCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    Setting?: SettingUncheckedCreateNestedManyWithoutOrganizationInput
    Sale?: SaleUncheckedCreateNestedManyWithoutOrganizationInput
    Association?: AssociationUncheckedCreateNestedManyWithoutOrganizationInput
    Total?: TotalUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUncheckedUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUncheckedUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutCompaniesInput
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutCompaniesNestedInput
    users?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateInput = {
    id?: string
    name?: string | null
    logo?: string | null
    Organization?: OrganizationCreateNestedOneWithoutSettingInput
  }

  export type SettingUncheckedCreateInput = {
    id?: string
    name?: string | null
    logo?: string | null
    organizationId?: string | null
  }

  export type SettingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    Organization?: OrganizationUpdateOneWithoutSettingNestedInput
  }

  export type SettingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingCreateManyInput = {
    id?: string
    name?: string | null
    logo?: string | null
    organizationId?: string | null
  }

  export type SettingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleCreateInput = {
    id: string
    resumo_cnpj: string
    resumo_codfil: string
    resumo_desfil: string
    resumo_datmvt: string
    resumo_valdev: string
    resumo_valven: string
    resumo_margem: string
    resumo_presen: string
    resumo_metdia: string
    Organization?: OrganizationCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id: string
    resumo_cnpj: string
    resumo_codfil: string
    resumo_desfil: string
    resumo_datmvt: string
    resumo_valdev: string
    resumo_valven: string
    resumo_margem: string
    resumo_presen: string
    resumo_metdia: string
    organizationId?: string | null
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo_cnpj?: StringFieldUpdateOperationsInput | string
    resumo_codfil?: StringFieldUpdateOperationsInput | string
    resumo_desfil?: StringFieldUpdateOperationsInput | string
    resumo_datmvt?: StringFieldUpdateOperationsInput | string
    resumo_valdev?: StringFieldUpdateOperationsInput | string
    resumo_valven?: StringFieldUpdateOperationsInput | string
    resumo_margem?: StringFieldUpdateOperationsInput | string
    resumo_presen?: StringFieldUpdateOperationsInput | string
    resumo_metdia?: StringFieldUpdateOperationsInput | string
    Organization?: OrganizationUpdateOneWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo_cnpj?: StringFieldUpdateOperationsInput | string
    resumo_codfil?: StringFieldUpdateOperationsInput | string
    resumo_desfil?: StringFieldUpdateOperationsInput | string
    resumo_datmvt?: StringFieldUpdateOperationsInput | string
    resumo_valdev?: StringFieldUpdateOperationsInput | string
    resumo_valven?: StringFieldUpdateOperationsInput | string
    resumo_margem?: StringFieldUpdateOperationsInput | string
    resumo_presen?: StringFieldUpdateOperationsInput | string
    resumo_metdia?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleCreateManyInput = {
    id: string
    resumo_cnpj: string
    resumo_codfil: string
    resumo_desfil: string
    resumo_datmvt: string
    resumo_valdev: string
    resumo_valven: string
    resumo_margem: string
    resumo_presen: string
    resumo_metdia: string
    organizationId?: string | null
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo_cnpj?: StringFieldUpdateOperationsInput | string
    resumo_codfil?: StringFieldUpdateOperationsInput | string
    resumo_desfil?: StringFieldUpdateOperationsInput | string
    resumo_datmvt?: StringFieldUpdateOperationsInput | string
    resumo_valdev?: StringFieldUpdateOperationsInput | string
    resumo_valven?: StringFieldUpdateOperationsInput | string
    resumo_margem?: StringFieldUpdateOperationsInput | string
    resumo_presen?: StringFieldUpdateOperationsInput | string
    resumo_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo_cnpj?: StringFieldUpdateOperationsInput | string
    resumo_codfil?: StringFieldUpdateOperationsInput | string
    resumo_desfil?: StringFieldUpdateOperationsInput | string
    resumo_datmvt?: StringFieldUpdateOperationsInput | string
    resumo_valdev?: StringFieldUpdateOperationsInput | string
    resumo_valven?: StringFieldUpdateOperationsInput | string
    resumo_margem?: StringFieldUpdateOperationsInput | string
    resumo_presen?: StringFieldUpdateOperationsInput | string
    resumo_metdia?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssociationCreateInput = {
    id: string
    assoc_cnpj: string
    assoc_filial: string
    assoc_datmvt: string
    assoc_ass: string
    assoc_desass: string
    assoc_valdev: string
    assoc_valven: string
    assoc_margem: string
    assoc_repres: string
    assoc_metdia: string
    Organization?: OrganizationCreateNestedOneWithoutAssociationInput
  }

  export type AssociationUncheckedCreateInput = {
    id: string
    assoc_cnpj: string
    assoc_filial: string
    assoc_datmvt: string
    assoc_ass: string
    assoc_desass: string
    assoc_valdev: string
    assoc_valven: string
    assoc_margem: string
    assoc_repres: string
    assoc_metdia: string
    organizationId?: string | null
  }

  export type AssociationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assoc_cnpj?: StringFieldUpdateOperationsInput | string
    assoc_filial?: StringFieldUpdateOperationsInput | string
    assoc_datmvt?: StringFieldUpdateOperationsInput | string
    assoc_ass?: StringFieldUpdateOperationsInput | string
    assoc_desass?: StringFieldUpdateOperationsInput | string
    assoc_valdev?: StringFieldUpdateOperationsInput | string
    assoc_valven?: StringFieldUpdateOperationsInput | string
    assoc_margem?: StringFieldUpdateOperationsInput | string
    assoc_repres?: StringFieldUpdateOperationsInput | string
    assoc_metdia?: StringFieldUpdateOperationsInput | string
    Organization?: OrganizationUpdateOneWithoutAssociationNestedInput
  }

  export type AssociationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assoc_cnpj?: StringFieldUpdateOperationsInput | string
    assoc_filial?: StringFieldUpdateOperationsInput | string
    assoc_datmvt?: StringFieldUpdateOperationsInput | string
    assoc_ass?: StringFieldUpdateOperationsInput | string
    assoc_desass?: StringFieldUpdateOperationsInput | string
    assoc_valdev?: StringFieldUpdateOperationsInput | string
    assoc_valven?: StringFieldUpdateOperationsInput | string
    assoc_margem?: StringFieldUpdateOperationsInput | string
    assoc_repres?: StringFieldUpdateOperationsInput | string
    assoc_metdia?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AssociationCreateManyInput = {
    id: string
    assoc_cnpj: string
    assoc_filial: string
    assoc_datmvt: string
    assoc_ass: string
    assoc_desass: string
    assoc_valdev: string
    assoc_valven: string
    assoc_margem: string
    assoc_repres: string
    assoc_metdia: string
    organizationId?: string | null
  }

  export type AssociationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assoc_cnpj?: StringFieldUpdateOperationsInput | string
    assoc_filial?: StringFieldUpdateOperationsInput | string
    assoc_datmvt?: StringFieldUpdateOperationsInput | string
    assoc_ass?: StringFieldUpdateOperationsInput | string
    assoc_desass?: StringFieldUpdateOperationsInput | string
    assoc_valdev?: StringFieldUpdateOperationsInput | string
    assoc_valven?: StringFieldUpdateOperationsInput | string
    assoc_margem?: StringFieldUpdateOperationsInput | string
    assoc_repres?: StringFieldUpdateOperationsInput | string
    assoc_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type AssociationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assoc_cnpj?: StringFieldUpdateOperationsInput | string
    assoc_filial?: StringFieldUpdateOperationsInput | string
    assoc_datmvt?: StringFieldUpdateOperationsInput | string
    assoc_ass?: StringFieldUpdateOperationsInput | string
    assoc_desass?: StringFieldUpdateOperationsInput | string
    assoc_valdev?: StringFieldUpdateOperationsInput | string
    assoc_valven?: StringFieldUpdateOperationsInput | string
    assoc_margem?: StringFieldUpdateOperationsInput | string
    assoc_repres?: StringFieldUpdateOperationsInput | string
    assoc_metdia?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TotalCreateInput = {
    id: string
    total_cnpj: string
    total_datatu: string
    total_filial: string
    total_valdev: string
    total_valven: string
    total_margem: string
    total_permet: string
    total_projec: string
    total_valjur: string
    total_perjur: string
    total_valina: string
    total_perina: string
    total_valest: string
    total_meta: string
    Organization?: OrganizationCreateNestedOneWithoutTotalInput
  }

  export type TotalUncheckedCreateInput = {
    id: string
    total_cnpj: string
    total_datatu: string
    total_filial: string
    total_valdev: string
    total_valven: string
    total_margem: string
    total_permet: string
    total_projec: string
    total_valjur: string
    total_perjur: string
    total_valina: string
    total_perina: string
    total_valest: string
    total_meta: string
    organizationId?: string | null
  }

  export type TotalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_cnpj?: StringFieldUpdateOperationsInput | string
    total_datatu?: StringFieldUpdateOperationsInput | string
    total_filial?: StringFieldUpdateOperationsInput | string
    total_valdev?: StringFieldUpdateOperationsInput | string
    total_valven?: StringFieldUpdateOperationsInput | string
    total_margem?: StringFieldUpdateOperationsInput | string
    total_permet?: StringFieldUpdateOperationsInput | string
    total_projec?: StringFieldUpdateOperationsInput | string
    total_valjur?: StringFieldUpdateOperationsInput | string
    total_perjur?: StringFieldUpdateOperationsInput | string
    total_valina?: StringFieldUpdateOperationsInput | string
    total_perina?: StringFieldUpdateOperationsInput | string
    total_valest?: StringFieldUpdateOperationsInput | string
    total_meta?: StringFieldUpdateOperationsInput | string
    Organization?: OrganizationUpdateOneWithoutTotalNestedInput
  }

  export type TotalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_cnpj?: StringFieldUpdateOperationsInput | string
    total_datatu?: StringFieldUpdateOperationsInput | string
    total_filial?: StringFieldUpdateOperationsInput | string
    total_valdev?: StringFieldUpdateOperationsInput | string
    total_valven?: StringFieldUpdateOperationsInput | string
    total_margem?: StringFieldUpdateOperationsInput | string
    total_permet?: StringFieldUpdateOperationsInput | string
    total_projec?: StringFieldUpdateOperationsInput | string
    total_valjur?: StringFieldUpdateOperationsInput | string
    total_perjur?: StringFieldUpdateOperationsInput | string
    total_valina?: StringFieldUpdateOperationsInput | string
    total_perina?: StringFieldUpdateOperationsInput | string
    total_valest?: StringFieldUpdateOperationsInput | string
    total_meta?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TotalCreateManyInput = {
    id: string
    total_cnpj: string
    total_datatu: string
    total_filial: string
    total_valdev: string
    total_valven: string
    total_margem: string
    total_permet: string
    total_projec: string
    total_valjur: string
    total_perjur: string
    total_valina: string
    total_perina: string
    total_valest: string
    total_meta: string
    organizationId?: string | null
  }

  export type TotalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_cnpj?: StringFieldUpdateOperationsInput | string
    total_datatu?: StringFieldUpdateOperationsInput | string
    total_filial?: StringFieldUpdateOperationsInput | string
    total_valdev?: StringFieldUpdateOperationsInput | string
    total_valven?: StringFieldUpdateOperationsInput | string
    total_margem?: StringFieldUpdateOperationsInput | string
    total_permet?: StringFieldUpdateOperationsInput | string
    total_projec?: StringFieldUpdateOperationsInput | string
    total_valjur?: StringFieldUpdateOperationsInput | string
    total_perjur?: StringFieldUpdateOperationsInput | string
    total_valina?: StringFieldUpdateOperationsInput | string
    total_perina?: StringFieldUpdateOperationsInput | string
    total_valest?: StringFieldUpdateOperationsInput | string
    total_meta?: StringFieldUpdateOperationsInput | string
  }

  export type TotalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_cnpj?: StringFieldUpdateOperationsInput | string
    total_datatu?: StringFieldUpdateOperationsInput | string
    total_filial?: StringFieldUpdateOperationsInput | string
    total_valdev?: StringFieldUpdateOperationsInput | string
    total_valven?: StringFieldUpdateOperationsInput | string
    total_margem?: StringFieldUpdateOperationsInput | string
    total_permet?: StringFieldUpdateOperationsInput | string
    total_projec?: StringFieldUpdateOperationsInput | string
    total_valjur?: StringFieldUpdateOperationsInput | string
    total_perjur?: StringFieldUpdateOperationsInput | string
    total_valina?: StringFieldUpdateOperationsInput | string
    total_perina?: StringFieldUpdateOperationsInput | string
    total_valest?: StringFieldUpdateOperationsInput | string
    total_meta?: StringFieldUpdateOperationsInput | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type CompanyNullableScalarRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    companyId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    companyId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    is_admin?: SortOrder
    roles?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
    companyId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CompanyListRelationFilter = {
    every?: CompanyWhereInput
    some?: CompanyWhereInput
    none?: CompanyWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type SettingListRelationFilter = {
    every?: SettingWhereInput
    some?: SettingWhereInput
    none?: SettingWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type AssociationListRelationFilter = {
    every?: AssociationWhereInput
    some?: AssociationWhereInput
    none?: AssociationWhereInput
  }

  export type TotalListRelationFilter = {
    every?: TotalWhereInput
    some?: TotalWhereInput
    none?: TotalWhereInput
  }

  export type CompanyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssociationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TotalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelevanceInput = {
    fields: OrganizationOrderByRelevanceFieldEnum | OrganizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cnpj?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CompanyOrderByRelevanceInput = {
    fields: CompanyOrderByRelevanceFieldEnum | CompanyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    corpreason?: SortOrder
    cnpj?: SortOrder
    subnumber?: SortOrder
    subname?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
    whatsapp?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    corpreason?: SortOrder
    cnpj?: SortOrder
    subnumber?: SortOrder
    subname?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
    whatsapp?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    corpreason?: SortOrder
    cnpj?: SortOrder
    subnumber?: SortOrder
    subname?: SortOrder
    cep?: SortOrder
    state?: SortOrder
    city?: SortOrder
    district?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    telefone?: SortOrder
    status?: SortOrder
    whatsapp?: SortOrder
    observation?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organizationId?: SortOrder
  }

  export type SettingOrderByRelevanceInput = {
    fields: SettingOrderByRelevanceFieldEnum | SettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    organizationId?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    organizationId?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    logo?: SortOrder
    organizationId?: SortOrder
  }

  export type SaleOrderByRelevanceInput = {
    fields: SaleOrderByRelevanceFieldEnum | SaleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    resumo_cnpj?: SortOrder
    resumo_codfil?: SortOrder
    resumo_desfil?: SortOrder
    resumo_datmvt?: SortOrder
    resumo_valdev?: SortOrder
    resumo_valven?: SortOrder
    resumo_margem?: SortOrder
    resumo_presen?: SortOrder
    resumo_metdia?: SortOrder
    organizationId?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    resumo_cnpj?: SortOrder
    resumo_codfil?: SortOrder
    resumo_desfil?: SortOrder
    resumo_datmvt?: SortOrder
    resumo_valdev?: SortOrder
    resumo_valven?: SortOrder
    resumo_margem?: SortOrder
    resumo_presen?: SortOrder
    resumo_metdia?: SortOrder
    organizationId?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    resumo_cnpj?: SortOrder
    resumo_codfil?: SortOrder
    resumo_desfil?: SortOrder
    resumo_datmvt?: SortOrder
    resumo_valdev?: SortOrder
    resumo_valven?: SortOrder
    resumo_margem?: SortOrder
    resumo_presen?: SortOrder
    resumo_metdia?: SortOrder
    organizationId?: SortOrder
  }

  export type AssociationOrderByRelevanceInput = {
    fields: AssociationOrderByRelevanceFieldEnum | AssociationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AssociationCountOrderByAggregateInput = {
    id?: SortOrder
    assoc_cnpj?: SortOrder
    assoc_filial?: SortOrder
    assoc_datmvt?: SortOrder
    assoc_ass?: SortOrder
    assoc_desass?: SortOrder
    assoc_valdev?: SortOrder
    assoc_valven?: SortOrder
    assoc_margem?: SortOrder
    assoc_repres?: SortOrder
    assoc_metdia?: SortOrder
    organizationId?: SortOrder
  }

  export type AssociationMaxOrderByAggregateInput = {
    id?: SortOrder
    assoc_cnpj?: SortOrder
    assoc_filial?: SortOrder
    assoc_datmvt?: SortOrder
    assoc_ass?: SortOrder
    assoc_desass?: SortOrder
    assoc_valdev?: SortOrder
    assoc_valven?: SortOrder
    assoc_margem?: SortOrder
    assoc_repres?: SortOrder
    assoc_metdia?: SortOrder
    organizationId?: SortOrder
  }

  export type AssociationMinOrderByAggregateInput = {
    id?: SortOrder
    assoc_cnpj?: SortOrder
    assoc_filial?: SortOrder
    assoc_datmvt?: SortOrder
    assoc_ass?: SortOrder
    assoc_desass?: SortOrder
    assoc_valdev?: SortOrder
    assoc_valven?: SortOrder
    assoc_margem?: SortOrder
    assoc_repres?: SortOrder
    assoc_metdia?: SortOrder
    organizationId?: SortOrder
  }

  export type TotalOrderByRelevanceInput = {
    fields: TotalOrderByRelevanceFieldEnum | TotalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TotalCountOrderByAggregateInput = {
    id?: SortOrder
    total_cnpj?: SortOrder
    total_datatu?: SortOrder
    total_filial?: SortOrder
    total_valdev?: SortOrder
    total_valven?: SortOrder
    total_margem?: SortOrder
    total_permet?: SortOrder
    total_projec?: SortOrder
    total_valjur?: SortOrder
    total_perjur?: SortOrder
    total_valina?: SortOrder
    total_perina?: SortOrder
    total_valest?: SortOrder
    total_meta?: SortOrder
    organizationId?: SortOrder
  }

  export type TotalMaxOrderByAggregateInput = {
    id?: SortOrder
    total_cnpj?: SortOrder
    total_datatu?: SortOrder
    total_filial?: SortOrder
    total_valdev?: SortOrder
    total_valven?: SortOrder
    total_margem?: SortOrder
    total_permet?: SortOrder
    total_projec?: SortOrder
    total_valjur?: SortOrder
    total_perjur?: SortOrder
    total_valina?: SortOrder
    total_perina?: SortOrder
    total_valest?: SortOrder
    total_meta?: SortOrder
    organizationId?: SortOrder
  }

  export type TotalMinOrderByAggregateInput = {
    id?: SortOrder
    total_cnpj?: SortOrder
    total_datatu?: SortOrder
    total_filial?: SortOrder
    total_valdev?: SortOrder
    total_valven?: SortOrder
    total_margem?: SortOrder
    total_permet?: SortOrder
    total_projec?: SortOrder
    total_valjur?: SortOrder
    total_perjur?: SortOrder
    total_valina?: SortOrder
    total_perina?: SortOrder
    total_valest?: SortOrder
    total_meta?: SortOrder
    organizationId?: SortOrder
  }

  export type OrganizationCreateNestedOneWithoutUsersInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    connect?: OrganizationWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrganizationUpdateOneWithoutUsersNestedInput = {
    create?: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutUsersInput
    upsert?: OrganizationUpsertWithoutUsersInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutUsersInput, OrganizationUpdateWithoutUsersInput>, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CompanyCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<CompanyCreateWithoutOrganizationInput, CompanyUncheckedCreateWithoutOrganizationInput> | CompanyCreateWithoutOrganizationInput[] | CompanyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOrganizationInput | CompanyCreateOrConnectWithoutOrganizationInput[]
    createMany?: CompanyCreateManyOrganizationInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SettingCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SettingCreateWithoutOrganizationInput, SettingUncheckedCreateWithoutOrganizationInput> | SettingCreateWithoutOrganizationInput[] | SettingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutOrganizationInput | SettingCreateOrConnectWithoutOrganizationInput[]
    createMany?: SettingCreateManyOrganizationInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type SaleCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SaleCreateWithoutOrganizationInput, SaleUncheckedCreateWithoutOrganizationInput> | SaleCreateWithoutOrganizationInput[] | SaleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrganizationInput | SaleCreateOrConnectWithoutOrganizationInput[]
    createMany?: SaleCreateManyOrganizationInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type AssociationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AssociationCreateWithoutOrganizationInput, AssociationUncheckedCreateWithoutOrganizationInput> | AssociationCreateWithoutOrganizationInput[] | AssociationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssociationCreateOrConnectWithoutOrganizationInput | AssociationCreateOrConnectWithoutOrganizationInput[]
    createMany?: AssociationCreateManyOrganizationInputEnvelope
    connect?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
  }

  export type TotalCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TotalCreateWithoutOrganizationInput, TotalUncheckedCreateWithoutOrganizationInput> | TotalCreateWithoutOrganizationInput[] | TotalUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TotalCreateOrConnectWithoutOrganizationInput | TotalCreateOrConnectWithoutOrganizationInput[]
    createMany?: TotalCreateManyOrganizationInputEnvelope
    connect?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
  }

  export type CompanyUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<CompanyCreateWithoutOrganizationInput, CompanyUncheckedCreateWithoutOrganizationInput> | CompanyCreateWithoutOrganizationInput[] | CompanyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOrganizationInput | CompanyCreateOrConnectWithoutOrganizationInput[]
    createMany?: CompanyCreateManyOrganizationInputEnvelope
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type SettingUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SettingCreateWithoutOrganizationInput, SettingUncheckedCreateWithoutOrganizationInput> | SettingCreateWithoutOrganizationInput[] | SettingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutOrganizationInput | SettingCreateOrConnectWithoutOrganizationInput[]
    createMany?: SettingCreateManyOrganizationInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<SaleCreateWithoutOrganizationInput, SaleUncheckedCreateWithoutOrganizationInput> | SaleCreateWithoutOrganizationInput[] | SaleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrganizationInput | SaleCreateOrConnectWithoutOrganizationInput[]
    createMany?: SaleCreateManyOrganizationInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type AssociationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AssociationCreateWithoutOrganizationInput, AssociationUncheckedCreateWithoutOrganizationInput> | AssociationCreateWithoutOrganizationInput[] | AssociationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssociationCreateOrConnectWithoutOrganizationInput | AssociationCreateOrConnectWithoutOrganizationInput[]
    createMany?: AssociationCreateManyOrganizationInputEnvelope
    connect?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
  }

  export type TotalUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<TotalCreateWithoutOrganizationInput, TotalUncheckedCreateWithoutOrganizationInput> | TotalCreateWithoutOrganizationInput[] | TotalUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TotalCreateOrConnectWithoutOrganizationInput | TotalCreateOrConnectWithoutOrganizationInput[]
    createMany?: TotalCreateManyOrganizationInputEnvelope
    connect?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
  }

  export type CompanyUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<CompanyCreateWithoutOrganizationInput, CompanyUncheckedCreateWithoutOrganizationInput> | CompanyCreateWithoutOrganizationInput[] | CompanyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOrganizationInput | CompanyCreateOrConnectWithoutOrganizationInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutOrganizationInput | CompanyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: CompanyCreateManyOrganizationInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutOrganizationInput | CompanyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutOrganizationInput | CompanyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type UserUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SettingUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SettingCreateWithoutOrganizationInput, SettingUncheckedCreateWithoutOrganizationInput> | SettingCreateWithoutOrganizationInput[] | SettingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutOrganizationInput | SettingCreateOrConnectWithoutOrganizationInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutOrganizationInput | SettingUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SettingCreateManyOrganizationInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutOrganizationInput | SettingUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutOrganizationInput | SettingUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type SaleUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SaleCreateWithoutOrganizationInput, SaleUncheckedCreateWithoutOrganizationInput> | SaleCreateWithoutOrganizationInput[] | SaleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrganizationInput | SaleCreateOrConnectWithoutOrganizationInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOrganizationInput | SaleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SaleCreateManyOrganizationInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOrganizationInput | SaleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOrganizationInput | SaleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type AssociationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AssociationCreateWithoutOrganizationInput, AssociationUncheckedCreateWithoutOrganizationInput> | AssociationCreateWithoutOrganizationInput[] | AssociationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssociationCreateOrConnectWithoutOrganizationInput | AssociationCreateOrConnectWithoutOrganizationInput[]
    upsert?: AssociationUpsertWithWhereUniqueWithoutOrganizationInput | AssociationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AssociationCreateManyOrganizationInputEnvelope
    set?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    disconnect?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    delete?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    connect?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    update?: AssociationUpdateWithWhereUniqueWithoutOrganizationInput | AssociationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AssociationUpdateManyWithWhereWithoutOrganizationInput | AssociationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AssociationScalarWhereInput | AssociationScalarWhereInput[]
  }

  export type TotalUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TotalCreateWithoutOrganizationInput, TotalUncheckedCreateWithoutOrganizationInput> | TotalCreateWithoutOrganizationInput[] | TotalUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TotalCreateOrConnectWithoutOrganizationInput | TotalCreateOrConnectWithoutOrganizationInput[]
    upsert?: TotalUpsertWithWhereUniqueWithoutOrganizationInput | TotalUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TotalCreateManyOrganizationInputEnvelope
    set?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    disconnect?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    delete?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    connect?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    update?: TotalUpdateWithWhereUniqueWithoutOrganizationInput | TotalUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TotalUpdateManyWithWhereWithoutOrganizationInput | TotalUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TotalScalarWhereInput | TotalScalarWhereInput[]
  }

  export type CompanyUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<CompanyCreateWithoutOrganizationInput, CompanyUncheckedCreateWithoutOrganizationInput> | CompanyCreateWithoutOrganizationInput[] | CompanyUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: CompanyCreateOrConnectWithoutOrganizationInput | CompanyCreateOrConnectWithoutOrganizationInput[]
    upsert?: CompanyUpsertWithWhereUniqueWithoutOrganizationInput | CompanyUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: CompanyCreateManyOrganizationInputEnvelope
    set?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    disconnect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    delete?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    connect?: CompanyWhereUniqueInput | CompanyWhereUniqueInput[]
    update?: CompanyUpdateWithWhereUniqueWithoutOrganizationInput | CompanyUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: CompanyUpdateManyWithWhereWithoutOrganizationInput | CompanyUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput> | UserCreateWithoutOrganizationInput[] | UserUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutOrganizationInput | UserCreateOrConnectWithoutOrganizationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutOrganizationInput | UserUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: UserCreateManyOrganizationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutOrganizationInput | UserUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutOrganizationInput | UserUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type SettingUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SettingCreateWithoutOrganizationInput, SettingUncheckedCreateWithoutOrganizationInput> | SettingCreateWithoutOrganizationInput[] | SettingUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutOrganizationInput | SettingCreateOrConnectWithoutOrganizationInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutOrganizationInput | SettingUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SettingCreateManyOrganizationInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutOrganizationInput | SettingUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutOrganizationInput | SettingUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<SaleCreateWithoutOrganizationInput, SaleUncheckedCreateWithoutOrganizationInput> | SaleCreateWithoutOrganizationInput[] | SaleUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutOrganizationInput | SaleCreateOrConnectWithoutOrganizationInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutOrganizationInput | SaleUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: SaleCreateManyOrganizationInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutOrganizationInput | SaleUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutOrganizationInput | SaleUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type AssociationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AssociationCreateWithoutOrganizationInput, AssociationUncheckedCreateWithoutOrganizationInput> | AssociationCreateWithoutOrganizationInput[] | AssociationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssociationCreateOrConnectWithoutOrganizationInput | AssociationCreateOrConnectWithoutOrganizationInput[]
    upsert?: AssociationUpsertWithWhereUniqueWithoutOrganizationInput | AssociationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AssociationCreateManyOrganizationInputEnvelope
    set?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    disconnect?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    delete?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    connect?: AssociationWhereUniqueInput | AssociationWhereUniqueInput[]
    update?: AssociationUpdateWithWhereUniqueWithoutOrganizationInput | AssociationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AssociationUpdateManyWithWhereWithoutOrganizationInput | AssociationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AssociationScalarWhereInput | AssociationScalarWhereInput[]
  }

  export type TotalUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<TotalCreateWithoutOrganizationInput, TotalUncheckedCreateWithoutOrganizationInput> | TotalCreateWithoutOrganizationInput[] | TotalUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: TotalCreateOrConnectWithoutOrganizationInput | TotalCreateOrConnectWithoutOrganizationInput[]
    upsert?: TotalUpsertWithWhereUniqueWithoutOrganizationInput | TotalUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: TotalCreateManyOrganizationInputEnvelope
    set?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    disconnect?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    delete?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    connect?: TotalWhereUniqueInput | TotalWhereUniqueInput[]
    update?: TotalUpdateWithWhereUniqueWithoutOrganizationInput | TotalUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: TotalUpdateManyWithWhereWithoutOrganizationInput | TotalUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: TotalScalarWhereInput | TotalScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<OrganizationCreateWithoutCompaniesInput, OrganizationUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutCompaniesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrganizationUpdateOneWithoutCompaniesNestedInput = {
    create?: XOR<OrganizationCreateWithoutCompaniesInput, OrganizationUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutCompaniesInput
    upsert?: OrganizationUpsertWithoutCompaniesInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutCompaniesInput, OrganizationUpdateWithoutCompaniesInput>, OrganizationUncheckedUpdateWithoutCompaniesInput>
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutSettingInput = {
    create?: XOR<OrganizationCreateWithoutSettingInput, OrganizationUncheckedCreateWithoutSettingInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSettingInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutSettingNestedInput = {
    create?: XOR<OrganizationCreateWithoutSettingInput, OrganizationUncheckedCreateWithoutSettingInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSettingInput
    upsert?: OrganizationUpsertWithoutSettingInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSettingInput, OrganizationUpdateWithoutSettingInput>, OrganizationUncheckedUpdateWithoutSettingInput>
  }

  export type OrganizationCreateNestedOneWithoutSaleInput = {
    create?: XOR<OrganizationCreateWithoutSaleInput, OrganizationUncheckedCreateWithoutSaleInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSaleInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutSaleNestedInput = {
    create?: XOR<OrganizationCreateWithoutSaleInput, OrganizationUncheckedCreateWithoutSaleInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutSaleInput
    upsert?: OrganizationUpsertWithoutSaleInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutSaleInput, OrganizationUpdateWithoutSaleInput>, OrganizationUncheckedUpdateWithoutSaleInput>
  }

  export type OrganizationCreateNestedOneWithoutAssociationInput = {
    create?: XOR<OrganizationCreateWithoutAssociationInput, OrganizationUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAssociationInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutAssociationNestedInput = {
    create?: XOR<OrganizationCreateWithoutAssociationInput, OrganizationUncheckedCreateWithoutAssociationInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAssociationInput
    upsert?: OrganizationUpsertWithoutAssociationInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAssociationInput, OrganizationUpdateWithoutAssociationInput>, OrganizationUncheckedUpdateWithoutAssociationInput>
  }

  export type OrganizationCreateNestedOneWithoutTotalInput = {
    create?: XOR<OrganizationCreateWithoutTotalInput, OrganizationUncheckedCreateWithoutTotalInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTotalInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneWithoutTotalNestedInput = {
    create?: XOR<OrganizationCreateWithoutTotalInput, OrganizationUncheckedCreateWithoutTotalInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutTotalInput
    upsert?: OrganizationUpsertWithoutTotalInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutTotalInput, OrganizationUpdateWithoutTotalInput>, OrganizationUncheckedUpdateWithoutTotalInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type OrganizationCreateWithoutUsersInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutOrganizationInput
    Setting?: SettingCreateNestedManyWithoutOrganizationInput
    Sale?: SaleCreateNestedManyWithoutOrganizationInput
    Association?: AssociationCreateNestedManyWithoutOrganizationInput
    Total?: TotalCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutOrganizationInput
    Setting?: SettingUncheckedCreateNestedManyWithoutOrganizationInput
    Sale?: SaleUncheckedCreateNestedManyWithoutOrganizationInput
    Association?: AssociationUncheckedCreateNestedManyWithoutOrganizationInput
    Total?: TotalUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutUsersInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutCompaniesInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type OrganizationUpsertWithoutUsersInput = {
    update: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
    create: XOR<OrganizationCreateWithoutUsersInput, OrganizationUncheckedCreateWithoutUsersInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutUsersInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutUsersInput, OrganizationUncheckedUpdateWithoutUsersInput>
  }

  export type OrganizationUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUncheckedUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUncheckedUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutCompaniesNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyCreateWithoutOrganizationInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutOrganizationInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutOrganizationInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutOrganizationInput, CompanyUncheckedCreateWithoutOrganizationInput>
  }

  export type CompanyCreateManyOrganizationInputEnvelope = {
    data: CompanyCreateManyOrganizationInput | CompanyCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Company?: CompanyCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
  }

  export type UserCreateOrConnectWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserCreateManyOrganizationInputEnvelope = {
    data: UserCreateManyOrganizationInput | UserCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type SettingCreateWithoutOrganizationInput = {
    id?: string
    name?: string | null
    logo?: string | null
  }

  export type SettingUncheckedCreateWithoutOrganizationInput = {
    id?: string
    name?: string | null
    logo?: string | null
  }

  export type SettingCreateOrConnectWithoutOrganizationInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutOrganizationInput, SettingUncheckedCreateWithoutOrganizationInput>
  }

  export type SettingCreateManyOrganizationInputEnvelope = {
    data: SettingCreateManyOrganizationInput | SettingCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type SaleCreateWithoutOrganizationInput = {
    id: string
    resumo_cnpj: string
    resumo_codfil: string
    resumo_desfil: string
    resumo_datmvt: string
    resumo_valdev: string
    resumo_valven: string
    resumo_margem: string
    resumo_presen: string
    resumo_metdia: string
  }

  export type SaleUncheckedCreateWithoutOrganizationInput = {
    id: string
    resumo_cnpj: string
    resumo_codfil: string
    resumo_desfil: string
    resumo_datmvt: string
    resumo_valdev: string
    resumo_valven: string
    resumo_margem: string
    resumo_presen: string
    resumo_metdia: string
  }

  export type SaleCreateOrConnectWithoutOrganizationInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutOrganizationInput, SaleUncheckedCreateWithoutOrganizationInput>
  }

  export type SaleCreateManyOrganizationInputEnvelope = {
    data: SaleCreateManyOrganizationInput | SaleCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AssociationCreateWithoutOrganizationInput = {
    id: string
    assoc_cnpj: string
    assoc_filial: string
    assoc_datmvt: string
    assoc_ass: string
    assoc_desass: string
    assoc_valdev: string
    assoc_valven: string
    assoc_margem: string
    assoc_repres: string
    assoc_metdia: string
  }

  export type AssociationUncheckedCreateWithoutOrganizationInput = {
    id: string
    assoc_cnpj: string
    assoc_filial: string
    assoc_datmvt: string
    assoc_ass: string
    assoc_desass: string
    assoc_valdev: string
    assoc_valven: string
    assoc_margem: string
    assoc_repres: string
    assoc_metdia: string
  }

  export type AssociationCreateOrConnectWithoutOrganizationInput = {
    where: AssociationWhereUniqueInput
    create: XOR<AssociationCreateWithoutOrganizationInput, AssociationUncheckedCreateWithoutOrganizationInput>
  }

  export type AssociationCreateManyOrganizationInputEnvelope = {
    data: AssociationCreateManyOrganizationInput | AssociationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type TotalCreateWithoutOrganizationInput = {
    id: string
    total_cnpj: string
    total_datatu: string
    total_filial: string
    total_valdev: string
    total_valven: string
    total_margem: string
    total_permet: string
    total_projec: string
    total_valjur: string
    total_perjur: string
    total_valina: string
    total_perina: string
    total_valest: string
    total_meta: string
  }

  export type TotalUncheckedCreateWithoutOrganizationInput = {
    id: string
    total_cnpj: string
    total_datatu: string
    total_filial: string
    total_valdev: string
    total_valven: string
    total_margem: string
    total_permet: string
    total_projec: string
    total_valjur: string
    total_perjur: string
    total_valina: string
    total_perina: string
    total_valest: string
    total_meta: string
  }

  export type TotalCreateOrConnectWithoutOrganizationInput = {
    where: TotalWhereUniqueInput
    create: XOR<TotalCreateWithoutOrganizationInput, TotalUncheckedCreateWithoutOrganizationInput>
  }

  export type TotalCreateManyOrganizationInputEnvelope = {
    data: TotalCreateManyOrganizationInput | TotalCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: CompanyWhereUniqueInput
    update: XOR<CompanyUpdateWithoutOrganizationInput, CompanyUncheckedUpdateWithoutOrganizationInput>
    create: XOR<CompanyCreateWithoutOrganizationInput, CompanyUncheckedCreateWithoutOrganizationInput>
  }

  export type CompanyUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: CompanyWhereUniqueInput
    data: XOR<CompanyUpdateWithoutOrganizationInput, CompanyUncheckedUpdateWithoutOrganizationInput>
  }

  export type CompanyUpdateManyWithWhereWithoutOrganizationInput = {
    where: CompanyScalarWhereInput
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type CompanyScalarWhereInput = {
    AND?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    OR?: CompanyScalarWhereInput[]
    NOT?: CompanyScalarWhereInput | CompanyScalarWhereInput[]
    id?: StringFilter<"Company"> | string
    corpreason?: StringNullableFilter<"Company"> | string | null
    cnpj?: StringFilter<"Company"> | string
    subnumber?: StringFilter<"Company"> | string
    subname?: StringFilter<"Company"> | string
    cep?: StringFilter<"Company"> | string
    state?: StringFilter<"Company"> | string
    city?: StringFilter<"Company"> | string
    district?: StringNullableFilter<"Company"> | string | null
    street?: StringNullableFilter<"Company"> | string | null
    number?: StringNullableFilter<"Company"> | string | null
    complement?: StringNullableFilter<"Company"> | string | null
    telefone?: StringFilter<"Company"> | string
    status?: BoolFilter<"Company"> | boolean
    whatsapp?: StringNullableFilter<"Company"> | string | null
    observation?: StringNullableFilter<"Company"> | string | null
    createdAt?: DateTimeFilter<"Company"> | Date | string
    updatedAt?: DateTimeFilter<"Company"> | Date | string
    organizationId?: StringNullableFilter<"Company"> | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
    create: XOR<UserCreateWithoutOrganizationInput, UserUncheckedCreateWithoutOrganizationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutOrganizationInput, UserUncheckedUpdateWithoutOrganizationInput>
  }

  export type UserUpdateManyWithWhereWithoutOrganizationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    is_admin?: BoolFilter<"User"> | boolean
    roles?: StringFilter<"User"> | string
    status?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    organizationId?: StringNullableFilter<"User"> | string | null
    companyId?: StringNullableFilter<"User"> | string | null
  }

  export type SettingUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: SettingWhereUniqueInput
    update: XOR<SettingUpdateWithoutOrganizationInput, SettingUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SettingCreateWithoutOrganizationInput, SettingUncheckedCreateWithoutOrganizationInput>
  }

  export type SettingUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: SettingWhereUniqueInput
    data: XOR<SettingUpdateWithoutOrganizationInput, SettingUncheckedUpdateWithoutOrganizationInput>
  }

  export type SettingUpdateManyWithWhereWithoutOrganizationInput = {
    where: SettingScalarWhereInput
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SettingScalarWhereInput = {
    AND?: SettingScalarWhereInput | SettingScalarWhereInput[]
    OR?: SettingScalarWhereInput[]
    NOT?: SettingScalarWhereInput | SettingScalarWhereInput[]
    id?: StringFilter<"Setting"> | string
    name?: StringNullableFilter<"Setting"> | string | null
    logo?: StringNullableFilter<"Setting"> | string | null
    organizationId?: StringNullableFilter<"Setting"> | string | null
  }

  export type SaleUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutOrganizationInput, SaleUncheckedUpdateWithoutOrganizationInput>
    create: XOR<SaleCreateWithoutOrganizationInput, SaleUncheckedCreateWithoutOrganizationInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutOrganizationInput, SaleUncheckedUpdateWithoutOrganizationInput>
  }

  export type SaleUpdateManyWithWhereWithoutOrganizationInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    resumo_cnpj?: StringFilter<"Sale"> | string
    resumo_codfil?: StringFilter<"Sale"> | string
    resumo_desfil?: StringFilter<"Sale"> | string
    resumo_datmvt?: StringFilter<"Sale"> | string
    resumo_valdev?: StringFilter<"Sale"> | string
    resumo_valven?: StringFilter<"Sale"> | string
    resumo_margem?: StringFilter<"Sale"> | string
    resumo_presen?: StringFilter<"Sale"> | string
    resumo_metdia?: StringFilter<"Sale"> | string
    organizationId?: StringNullableFilter<"Sale"> | string | null
  }

  export type AssociationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AssociationWhereUniqueInput
    update: XOR<AssociationUpdateWithoutOrganizationInput, AssociationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AssociationCreateWithoutOrganizationInput, AssociationUncheckedCreateWithoutOrganizationInput>
  }

  export type AssociationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AssociationWhereUniqueInput
    data: XOR<AssociationUpdateWithoutOrganizationInput, AssociationUncheckedUpdateWithoutOrganizationInput>
  }

  export type AssociationUpdateManyWithWhereWithoutOrganizationInput = {
    where: AssociationScalarWhereInput
    data: XOR<AssociationUpdateManyMutationInput, AssociationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AssociationScalarWhereInput = {
    AND?: AssociationScalarWhereInput | AssociationScalarWhereInput[]
    OR?: AssociationScalarWhereInput[]
    NOT?: AssociationScalarWhereInput | AssociationScalarWhereInput[]
    id?: StringFilter<"Association"> | string
    assoc_cnpj?: StringFilter<"Association"> | string
    assoc_filial?: StringFilter<"Association"> | string
    assoc_datmvt?: StringFilter<"Association"> | string
    assoc_ass?: StringFilter<"Association"> | string
    assoc_desass?: StringFilter<"Association"> | string
    assoc_valdev?: StringFilter<"Association"> | string
    assoc_valven?: StringFilter<"Association"> | string
    assoc_margem?: StringFilter<"Association"> | string
    assoc_repres?: StringFilter<"Association"> | string
    assoc_metdia?: StringFilter<"Association"> | string
    organizationId?: StringNullableFilter<"Association"> | string | null
  }

  export type TotalUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: TotalWhereUniqueInput
    update: XOR<TotalUpdateWithoutOrganizationInput, TotalUncheckedUpdateWithoutOrganizationInput>
    create: XOR<TotalCreateWithoutOrganizationInput, TotalUncheckedCreateWithoutOrganizationInput>
  }

  export type TotalUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: TotalWhereUniqueInput
    data: XOR<TotalUpdateWithoutOrganizationInput, TotalUncheckedUpdateWithoutOrganizationInput>
  }

  export type TotalUpdateManyWithWhereWithoutOrganizationInput = {
    where: TotalScalarWhereInput
    data: XOR<TotalUpdateManyMutationInput, TotalUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type TotalScalarWhereInput = {
    AND?: TotalScalarWhereInput | TotalScalarWhereInput[]
    OR?: TotalScalarWhereInput[]
    NOT?: TotalScalarWhereInput | TotalScalarWhereInput[]
    id?: StringFilter<"Total"> | string
    total_cnpj?: StringFilter<"Total"> | string
    total_datatu?: StringFilter<"Total"> | string
    total_filial?: StringFilter<"Total"> | string
    total_valdev?: StringFilter<"Total"> | string
    total_valven?: StringFilter<"Total"> | string
    total_margem?: StringFilter<"Total"> | string
    total_permet?: StringFilter<"Total"> | string
    total_projec?: StringFilter<"Total"> | string
    total_valjur?: StringFilter<"Total"> | string
    total_perjur?: StringFilter<"Total"> | string
    total_valina?: StringFilter<"Total"> | string
    total_perina?: StringFilter<"Total"> | string
    total_valest?: StringFilter<"Total"> | string
    total_meta?: StringFilter<"Total"> | string
    organizationId?: StringNullableFilter<"Total"> | string | null
  }

  export type OrganizationCreateWithoutCompaniesInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutOrganizationInput
    Setting?: SettingCreateNestedManyWithoutOrganizationInput
    Sale?: SaleCreateNestedManyWithoutOrganizationInput
    Association?: AssociationCreateNestedManyWithoutOrganizationInput
    Total?: TotalCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    Setting?: SettingUncheckedCreateNestedManyWithoutOrganizationInput
    Sale?: SaleUncheckedCreateNestedManyWithoutOrganizationInput
    Association?: AssociationUncheckedCreateNestedManyWithoutOrganizationInput
    Total?: TotalUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutCompaniesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutCompaniesInput, OrganizationUncheckedCreateWithoutCompaniesInput>
  }

  export type UserCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Organization?: OrganizationCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutCompaniesInput = {
    update: XOR<OrganizationUpdateWithoutCompaniesInput, OrganizationUncheckedUpdateWithoutCompaniesInput>
    create: XOR<OrganizationCreateWithoutCompaniesInput, OrganizationUncheckedCreateWithoutCompaniesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutCompaniesInput, OrganizationUncheckedUpdateWithoutCompaniesInput>
  }

  export type OrganizationUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUncheckedUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUncheckedUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type OrganizationCreateWithoutSettingInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    Sale?: SaleCreateNestedManyWithoutOrganizationInput
    Association?: AssociationCreateNestedManyWithoutOrganizationInput
    Total?: TotalCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSettingInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    Sale?: SaleUncheckedCreateNestedManyWithoutOrganizationInput
    Association?: AssociationUncheckedCreateNestedManyWithoutOrganizationInput
    Total?: TotalUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSettingInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSettingInput, OrganizationUncheckedCreateWithoutSettingInput>
  }

  export type OrganizationUpsertWithoutSettingInput = {
    update: XOR<OrganizationUpdateWithoutSettingInput, OrganizationUncheckedUpdateWithoutSettingInput>
    create: XOR<OrganizationCreateWithoutSettingInput, OrganizationUncheckedCreateWithoutSettingInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSettingInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSettingInput, OrganizationUncheckedUpdateWithoutSettingInput>
  }

  export type OrganizationUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSettingInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUncheckedUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutSaleInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    Setting?: SettingCreateNestedManyWithoutOrganizationInput
    Association?: AssociationCreateNestedManyWithoutOrganizationInput
    Total?: TotalCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutSaleInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    Setting?: SettingUncheckedCreateNestedManyWithoutOrganizationInput
    Association?: AssociationUncheckedCreateNestedManyWithoutOrganizationInput
    Total?: TotalUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutSaleInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutSaleInput, OrganizationUncheckedCreateWithoutSaleInput>
  }

  export type OrganizationUpsertWithoutSaleInput = {
    update: XOR<OrganizationUpdateWithoutSaleInput, OrganizationUncheckedUpdateWithoutSaleInput>
    create: XOR<OrganizationCreateWithoutSaleInput, OrganizationUncheckedCreateWithoutSaleInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutSaleInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutSaleInput, OrganizationUncheckedUpdateWithoutSaleInput>
  }

  export type OrganizationUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUncheckedUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUncheckedUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutAssociationInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    Setting?: SettingCreateNestedManyWithoutOrganizationInput
    Sale?: SaleCreateNestedManyWithoutOrganizationInput
    Total?: TotalCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAssociationInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    Setting?: SettingUncheckedCreateNestedManyWithoutOrganizationInput
    Sale?: SaleUncheckedCreateNestedManyWithoutOrganizationInput
    Total?: TotalUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAssociationInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAssociationInput, OrganizationUncheckedCreateWithoutAssociationInput>
  }

  export type OrganizationUpsertWithoutAssociationInput = {
    update: XOR<OrganizationUpdateWithoutAssociationInput, OrganizationUncheckedUpdateWithoutAssociationInput>
    create: XOR<OrganizationCreateWithoutAssociationInput, OrganizationUncheckedCreateWithoutAssociationInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAssociationInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAssociationInput, OrganizationUncheckedUpdateWithoutAssociationInput>
  }

  export type OrganizationUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAssociationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUncheckedUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutOrganizationNestedInput
    Total?: TotalUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateWithoutTotalInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyCreateNestedManyWithoutOrganizationInput
    users?: UserCreateNestedManyWithoutOrganizationInput
    Setting?: SettingCreateNestedManyWithoutOrganizationInput
    Sale?: SaleCreateNestedManyWithoutOrganizationInput
    Association?: AssociationCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutTotalInput = {
    id?: string
    name: string
    cnpj: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companies?: CompanyUncheckedCreateNestedManyWithoutOrganizationInput
    users?: UserUncheckedCreateNestedManyWithoutOrganizationInput
    Setting?: SettingUncheckedCreateNestedManyWithoutOrganizationInput
    Sale?: SaleUncheckedCreateNestedManyWithoutOrganizationInput
    Association?: AssociationUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutTotalInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutTotalInput, OrganizationUncheckedCreateWithoutTotalInput>
  }

  export type OrganizationUpsertWithoutTotalInput = {
    update: XOR<OrganizationUpdateWithoutTotalInput, OrganizationUncheckedUpdateWithoutTotalInput>
    create: XOR<OrganizationCreateWithoutTotalInput, OrganizationUncheckedCreateWithoutTotalInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutTotalInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutTotalInput, OrganizationUncheckedUpdateWithoutTotalInput>
  }

  export type OrganizationUpdateWithoutTotalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUpdateManyWithoutOrganizationNestedInput
    users?: UserUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutTotalInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companies?: CompanyUncheckedUpdateManyWithoutOrganizationNestedInput
    users?: UserUncheckedUpdateManyWithoutOrganizationNestedInput
    Setting?: SettingUncheckedUpdateManyWithoutOrganizationNestedInput
    Sale?: SaleUncheckedUpdateManyWithoutOrganizationNestedInput
    Association?: AssociationUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type CompanyCreateManyOrganizationInput = {
    id?: string
    corpreason?: string | null
    cnpj: string
    subnumber: string
    subname: string
    cep: string
    state: string
    city: string
    district?: string | null
    street?: string | null
    number?: string | null
    complement?: string | null
    telefone: string
    status: boolean
    whatsapp?: string | null
    observation?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyOrganizationInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    companyId?: string | null
  }

  export type SettingCreateManyOrganizationInput = {
    id?: string
    name?: string | null
    logo?: string | null
  }

  export type SaleCreateManyOrganizationInput = {
    id: string
    resumo_cnpj: string
    resumo_codfil: string
    resumo_desfil: string
    resumo_datmvt: string
    resumo_valdev: string
    resumo_valven: string
    resumo_margem: string
    resumo_presen: string
    resumo_metdia: string
  }

  export type AssociationCreateManyOrganizationInput = {
    id: string
    assoc_cnpj: string
    assoc_filial: string
    assoc_datmvt: string
    assoc_ass: string
    assoc_desass: string
    assoc_valdev: string
    assoc_valven: string
    assoc_margem: string
    assoc_repres: string
    assoc_metdia: string
  }

  export type TotalCreateManyOrganizationInput = {
    id: string
    total_cnpj: string
    total_datatu: string
    total_filial: string
    total_valdev: string
    total_valven: string
    total_margem: string
    total_permet: string
    total_projec: string
    total_valjur: string
    total_perjur: string
    total_valina: string
    total_perina: string
    total_valest: string
    total_meta: string
  }

  export type CompanyUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    corpreason?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    subnumber?: StringFieldUpdateOperationsInput | string
    subname?: StringFieldUpdateOperationsInput | string
    cep?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    telefone?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    whatsapp?: NullableStringFieldUpdateOperationsInput | string | null
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Company?: CompanyUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    companyId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SettingUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    logo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo_cnpj?: StringFieldUpdateOperationsInput | string
    resumo_codfil?: StringFieldUpdateOperationsInput | string
    resumo_desfil?: StringFieldUpdateOperationsInput | string
    resumo_datmvt?: StringFieldUpdateOperationsInput | string
    resumo_valdev?: StringFieldUpdateOperationsInput | string
    resumo_valven?: StringFieldUpdateOperationsInput | string
    resumo_margem?: StringFieldUpdateOperationsInput | string
    resumo_presen?: StringFieldUpdateOperationsInput | string
    resumo_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo_cnpj?: StringFieldUpdateOperationsInput | string
    resumo_codfil?: StringFieldUpdateOperationsInput | string
    resumo_desfil?: StringFieldUpdateOperationsInput | string
    resumo_datmvt?: StringFieldUpdateOperationsInput | string
    resumo_valdev?: StringFieldUpdateOperationsInput | string
    resumo_valven?: StringFieldUpdateOperationsInput | string
    resumo_margem?: StringFieldUpdateOperationsInput | string
    resumo_presen?: StringFieldUpdateOperationsInput | string
    resumo_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type SaleUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    resumo_cnpj?: StringFieldUpdateOperationsInput | string
    resumo_codfil?: StringFieldUpdateOperationsInput | string
    resumo_desfil?: StringFieldUpdateOperationsInput | string
    resumo_datmvt?: StringFieldUpdateOperationsInput | string
    resumo_valdev?: StringFieldUpdateOperationsInput | string
    resumo_valven?: StringFieldUpdateOperationsInput | string
    resumo_margem?: StringFieldUpdateOperationsInput | string
    resumo_presen?: StringFieldUpdateOperationsInput | string
    resumo_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type AssociationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assoc_cnpj?: StringFieldUpdateOperationsInput | string
    assoc_filial?: StringFieldUpdateOperationsInput | string
    assoc_datmvt?: StringFieldUpdateOperationsInput | string
    assoc_ass?: StringFieldUpdateOperationsInput | string
    assoc_desass?: StringFieldUpdateOperationsInput | string
    assoc_valdev?: StringFieldUpdateOperationsInput | string
    assoc_valven?: StringFieldUpdateOperationsInput | string
    assoc_margem?: StringFieldUpdateOperationsInput | string
    assoc_repres?: StringFieldUpdateOperationsInput | string
    assoc_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type AssociationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assoc_cnpj?: StringFieldUpdateOperationsInput | string
    assoc_filial?: StringFieldUpdateOperationsInput | string
    assoc_datmvt?: StringFieldUpdateOperationsInput | string
    assoc_ass?: StringFieldUpdateOperationsInput | string
    assoc_desass?: StringFieldUpdateOperationsInput | string
    assoc_valdev?: StringFieldUpdateOperationsInput | string
    assoc_valven?: StringFieldUpdateOperationsInput | string
    assoc_margem?: StringFieldUpdateOperationsInput | string
    assoc_repres?: StringFieldUpdateOperationsInput | string
    assoc_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type AssociationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assoc_cnpj?: StringFieldUpdateOperationsInput | string
    assoc_filial?: StringFieldUpdateOperationsInput | string
    assoc_datmvt?: StringFieldUpdateOperationsInput | string
    assoc_ass?: StringFieldUpdateOperationsInput | string
    assoc_desass?: StringFieldUpdateOperationsInput | string
    assoc_valdev?: StringFieldUpdateOperationsInput | string
    assoc_valven?: StringFieldUpdateOperationsInput | string
    assoc_margem?: StringFieldUpdateOperationsInput | string
    assoc_repres?: StringFieldUpdateOperationsInput | string
    assoc_metdia?: StringFieldUpdateOperationsInput | string
  }

  export type TotalUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_cnpj?: StringFieldUpdateOperationsInput | string
    total_datatu?: StringFieldUpdateOperationsInput | string
    total_filial?: StringFieldUpdateOperationsInput | string
    total_valdev?: StringFieldUpdateOperationsInput | string
    total_valven?: StringFieldUpdateOperationsInput | string
    total_margem?: StringFieldUpdateOperationsInput | string
    total_permet?: StringFieldUpdateOperationsInput | string
    total_projec?: StringFieldUpdateOperationsInput | string
    total_valjur?: StringFieldUpdateOperationsInput | string
    total_perjur?: StringFieldUpdateOperationsInput | string
    total_valina?: StringFieldUpdateOperationsInput | string
    total_perina?: StringFieldUpdateOperationsInput | string
    total_valest?: StringFieldUpdateOperationsInput | string
    total_meta?: StringFieldUpdateOperationsInput | string
  }

  export type TotalUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_cnpj?: StringFieldUpdateOperationsInput | string
    total_datatu?: StringFieldUpdateOperationsInput | string
    total_filial?: StringFieldUpdateOperationsInput | string
    total_valdev?: StringFieldUpdateOperationsInput | string
    total_valven?: StringFieldUpdateOperationsInput | string
    total_margem?: StringFieldUpdateOperationsInput | string
    total_permet?: StringFieldUpdateOperationsInput | string
    total_projec?: StringFieldUpdateOperationsInput | string
    total_valjur?: StringFieldUpdateOperationsInput | string
    total_perjur?: StringFieldUpdateOperationsInput | string
    total_valina?: StringFieldUpdateOperationsInput | string
    total_perina?: StringFieldUpdateOperationsInput | string
    total_valest?: StringFieldUpdateOperationsInput | string
    total_meta?: StringFieldUpdateOperationsInput | string
  }

  export type TotalUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    total_cnpj?: StringFieldUpdateOperationsInput | string
    total_datatu?: StringFieldUpdateOperationsInput | string
    total_filial?: StringFieldUpdateOperationsInput | string
    total_valdev?: StringFieldUpdateOperationsInput | string
    total_valven?: StringFieldUpdateOperationsInput | string
    total_margem?: StringFieldUpdateOperationsInput | string
    total_permet?: StringFieldUpdateOperationsInput | string
    total_projec?: StringFieldUpdateOperationsInput | string
    total_valjur?: StringFieldUpdateOperationsInput | string
    total_perjur?: StringFieldUpdateOperationsInput | string
    total_valina?: StringFieldUpdateOperationsInput | string
    total_perina?: StringFieldUpdateOperationsInput | string
    total_valest?: StringFieldUpdateOperationsInput | string
    total_meta?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyCompanyInput = {
    id?: string
    name: string
    email: string
    password: string
    is_admin: boolean
    roles: string
    status: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organizationId?: string | null
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Organization?: OrganizationUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    is_admin?: BoolFieldUpdateOperationsInput | boolean
    roles?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organizationId?: NullableStringFieldUpdateOperationsInput | string | null
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