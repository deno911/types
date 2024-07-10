# @type/monorepo

This is a monorepo for packages published in the
**[`@type/*` scope](https://jsr.io/@type "View the @type scope on jsr.io")**.

## Packages

### [@type/is]

Collection of universal type guards for TypeScript and JavaScript projects.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/is)** as
**[`@type/is`](https://jsr.io/@type/is)**:

```sh
deno add @type/is
```

```sh
npx jsr add @type/is
```

It is also available on **[npm](https://npm.im/@type2/is)** as
**[`@type2/is`](https://npm.im/@type2/is)**:

```sh
bun add @type2/is
```

```sh
npm install @type2/is
```

#### Usage

```ts
import { isIdentifier, isString } from "@type/is";

isString("hello"); // true
isIdentifier("export"); // false
```

Short-hand aliases are also available for all exports:

```ts
import { is } from "@type/is";

is.identifier("hello"); // true
is.identifier("export"); // false
```

Tree-shakeable submodules are also available:

```ts
import { isIdentifier } from "@type/is/identifier";
import { isUndefined } from "@type/is/undefined";

isUndefined(null); // false
isIdentifier("export"); // false
isIdentifier("nurp"); // true
```

> **Note**: see [the **`is`** documentation][is-docs] for more information.

---

### [@type/case]

Case conversion functions with type-level equivalents.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/case)** as
**[`@type/case`](https://jsr.io/@type/case)**.

```sh
deno add @type/case
```

```sh
npx jsr add @type/case
```

It is also available on **[npm](https://npm.im/@type2/case)** as
**[`@type2/case`](https://npm.im/@type2/case)**.

```sh
bun add @type2/case
```

```sh
npm install @type2/case
```

#### Usage

```ts
import * as to from "@type/case";

const camel = to.camel("snake_case"); // "snakeCase"
//    ^? const camel: "snakeCase"
const pascal = to.pascal("kebab-case"); // "KebabCase"
//    ^? const pascal: "KebabCase"
const kebab = to.kebab("PascalCase"); // "pascal-case"
//    ^? const kebab: "pascal-case"
const snake = to.snake("CamelCase"); // "camel_case"
//    ^? const snake: "camel_case"
```

All exports are available as standalone named exports with the `Case` suffix,
and as a default export containing shorthand aliases that do not have the `Case`
suffix.

```ts
import { camelCase, snakeCase } from "@type/case";

const camel = camelCase("snake_case"); // "snakeCase"
//    ^? const camel: "snakeCase"

const snake = snakeCase("CamelCase"); // "camel_case"
//    ^? const snake: "camel_case"
```

> **Note**: see [the **`case`** documentation][case-docs] for more information.

---

### [@type/has]

Type-safe re-imagining of lodash.has.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/has)** as
**[`@type/has`](https://jsr.io/@type/has)**.

```sh
deno add @type/has
```

```sh
npx jsr add @type/has
```

It is also available on **[npm](https://npm.im/@type2/has)** as
**[`@type2/has`](https://npm.im/@type2/has)**.

```sh
bun add @type2/has
```

```sh
npm install @type2/has
```

#### Usage

```ts
import { has } from "@type/has";

const obj = { a: { b: { c: 1 } } };

has(obj, "a.b.c"); // true
has(obj, "a.b.d"); // false
```

> **Note**: see [the **`has`** documentation][has-docs] for more information.

---

### [@type/get]

Type-safe re-imagining of lodash.get.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/get)** as
**[`@type/get`](https://jsr.io/@type/get)**.

```sh
deno add @type/get
```

```sh
npx jsr add @type/get
```

It is also available on **[npm](https://npm.im/@type2/get)** as
**[`@type2/get`](https://npm.im/@type2/get)**.

```sh
bun add @type2/get
```

```sh
npm install @type2/get
```

#### Usage

```ts
import { get } from "@type/get";

const obj = { a: { b: { c: 1 } } };

get(obj, "a.b.c"); // 1
get(obj, "a.b.d"); // undefined
```

> **Note**: see [the **`get`** documentation][get-docs] for more information.

---

### [@type/set]

Type-safe re-imagining of lodash.set.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/set)** as
**[`@type/set`](https://jsr.io/@type/set)**.

```sh
deno add @type/set
```

```sh
npx jsr add @type/set
```

It is also available on **[npm](https://npm.im/@type2/set)** as
**[`@type2/set`](https://npm.im/@type2/set)**.

```sh
bun add @type2/set
```

```sh
npm install @type2/set
```

#### Usage

```ts
import { set } from "@type/set";

const obj = { a: { b: { c: 1 } } };

set(obj, "a.b.c", 2); // { a: { b: { c: 2 } } }
set(obj, "a.b.d", 3); // { a: { b: { c: 1, d: 3 } } }
```

> **Note**: see [the **`set`** documentation][set-docs] for more information.

---

### [@type/omit]

Runtime implementation of the `Omit` utility type, with support for nested keys.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/omit)** as
**[`@type/omit`](https://jsr.io/@type/omit)**.

```sh
deno add @type/omit
```

```sh
npx jsr add @type/omit
```

It is also available on **[npm](https://npm.im/@type2/omit)** as
**[`@type2/omit`](https://npm.im/@type2/omit)**.

```sh
bun add @type2/omit
```

```sh
npm install @type2/omit
```

#### Usage

```ts
import { omit } from "@type/omit";

const obj = { a: { b: [1, 2], c: [3, 4] } };

omit(obj, "a.b"); // { a: { c: [3, 4] } }
```

> **Note**: see [the **`omit`** documentation][omit-docs] for more information.

---

### [@type/pick]

Runtime implementation of the `Pick` utility type, with support for nested keys.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/pick)** as
**[`@type/pick`](https://jsr.io/@type/pick)**.

```sh
deno add @type/pick
```

```sh
npx jsr add @type/pick
```

It is also available on **[npm](https://npm.im/@type2/pick)** as
**[`@type2/pick`](https://npm.im/@type2/pick)**.

```sh
bun add @type2/pick
```

```sh
npm install @type2/pick
```

#### Usage

```ts
import { pick } from "@type/pick";

const obj = { a: { b: [1, 2], c: [3, 4] } };

pick(obj, "a.b"); // { a: { b: [1, 2] } }
```

> **Note**: see [the **`pick`** documentation][pick-docs] for more information.

---

### [@type/math]

Type-level arithmetic utilities with runtime equivalents. Performs type-level
addition, subtraction, multiplication, or division on numeric literals. This
package takes a different approach than most type-level math implementations,
and **does not** utilize memory-intensive tuple-based length calculations to
perform its operations.

Instead, it implements a custom string-based algorithm that is **extremely**
efficient in comparison. It's proven to be capable of handling very large
numbers without breaking a sweat - attempting to do something like this in the
traditional style would cause the compiler to fall flat on its face, running out
of memory immediately.

#### Install

This package is distributed on **[jsr](https://jsr.io/@type/math)** as
**[`@type/math`](https://jsr.io/@type/math)**.

```sh
deno add @type/math
```

```sh
npx jsr add @type/math
```

It is also available on **[npm](https://npm.im/@type2/math)** as
**[`@type2/math`](https://npm.im/@type2/math)**.

```sh
bun add @type2/math
```

```sh
npm install @type2/math
```

#### Usage

```ts
import { add } from "@type/math";

const sum = add(1, 2); // 3
//    ^? const sum: 3
```

```ts
import { subtract } from "@type/math";

const difference = subtract(5, 3); // 2
//    ^? const difference: 2
```

```ts
import { divide } from "@type/math";

const quotient = divide(6, 3); // 2
//    ^? const quotient: 2
```

```ts
import { multiply } from "@type/math";

const product = multiply(2, 3); // 6
//    ^? const product: 6

// these would be impossible to calculate at compile-time using
// traditional methods that rely on tuple-based length calculations:

const largeProduct = multiply(1_000_000, 1_000_000);
//    ^? const largeProduct: 1000000000000

const hugeProduct = multiply(1_000_000_000_000, 1_000_000_000_000);
//    ^? const largeProduct: 1000000000000000000000
```

---

## Contributing

More than welcome! Please start by opening an issue highlighting the bug you
want to fix, feature you wish to add, or other changes you think should be made.
Then proceed to create a Pull Request from your own fork of the repo. Make sure
you follow our Contributor's Code of Conduct.

---

**[MIT]** © **[Nicholas Berlette]**. All rights reserved.

[MIT]: https://nick.mit-license.org "MIT © 2024 Nicholas Berlette. All rights reserved."
[Nicholas Berlette]: https://github.com/nberlette "Nicholas Berlette on GitHub"

<!-- packages -->

[@type/is]: ./packages/is#readme "Type guards for TypeScript and JavaScript projects"
[is-docs]: https://jsr.io/@type/is "Documentation for the @type/is package"
[@type/assert]: ./packages/assert#readme "Type Assertion utilities for TypeScript and JavaScript projects"
[assert-docs]: https://jsr.io/@type/assert "Documentation for the @type/assert package"
[@type/case]: ./packages/case#readme "Case Conversion functions and their type-level equivalents"
[case-docs]: https://jsr.io/@type/case "Documentation for the @type/case package"
[@type/get]: ./packages/object/get#readme "Type-safe re-imagining of lodash.get"
[get-docs]: https://jsr.io/@type/get "Documentation for the @type/get package"
[@type/set]: ./packages/object/set#readme "Type-safe re-imagining of lodash.set"
[set-docs]: https://jsr.io/@type/set "Documentation for the @type/set package"
[@type/has]: ./packages/object/has#readme "Type-safe re-imagining of lodash.has"
[has-docs]: https://jsr.io/@type/has "Documentation for the @type/has package"
[@type/omit]: ./packages/object/omit#readme "Runtime implementation of the `Omit` utility type"
[omit-docs]: https://jsr.io/@type/omit "Documentation for the @type/omit package"
[@type/pick]: ./packages/object/pick#readme "Runtime implementation of the `Pick` utility type"
[pick-docs]: https://jsr.io/@type/pick "Documentation for the @type/pick package"
[@type/math]: ./packages/math#readme "Type-level arithmetic utilities with runtime equivalents"
[math-docs]: https://jsr.io/@type/math "Documentation for the @type/math package"
[@type/clsx]: ./packages/clsx#readme "Type-safe re-imagining of the popular `clsx` utility by Luke Edwards"
[clsx-docs]: https://jsr.io/@type/clsx "Documentation for the @type/clsx package"
[@type/join]: ./packages/string/join#readme "Type-safe standalone implementation of `Array.prototype.join`"
[join-docs]: https://jsr.io/@type/join "Documentation for the @type/join package"
[@type/defs]: ./packages/defs#readme "Type definitions for TypeScript and JavaScript projects"
[defs-docs]: https://jsr.io/@type/defs "Documentation for the @type/defs package"
[@type/json]: ./packages/json#readme "Type-safe implementation of `JSON.parse` and `JSON.stringify`"
[json-docs]: https://jsr.io/@type/json "Documentation for the @type/json package"
[@type/env]: ./packages/env#readme "Type-safe environment variable access for TypeScript and JavaScript projects"
[env-docs]: https://jsr.io/@type/env "Documentation for the @type/env package"
[@type/regexp]: ./packages/regexp#readme "Type-safe regular expressions for TypeScript and JavaScript projects"
[regexp-docs]: https://jsr.io/@type/regexp "Documentation for the @type/regexp package"
[@type/url]: ./packages/url#readme "Type-safe implementation of the URL Web API for TypeScript and JavaScript projects"
[url-docs]: https://jsr.io/@type/url "Documentation for the @type/url package"
