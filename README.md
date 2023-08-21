# Example Civet

try to learn [civet 🦝](https://civet.dev) language, better typescript

```civet
// main.civet
Koa from koa
Router from @koa/router
{ fetchActivity } from ./boredapi.civet
{ primeFactorsTo } from ./prime.civet

count .= 0

router := new Router()
|> .get('/', async (ctx) => {
  ctx.body = 
    name: 'civet testing'
    count: ++count
    activity: fetchActivity() |> await
    prime: primeFactorsTo(47),
    date: new Date()
})
|> .get('/now', (ctx) => {
  ctx.body = 
    date: new Date()
});

app := new Koa()
|> .use(router.routes())
|> .use(router.allowedMethods())
|> .listen(3000, () => console.log(`listen http://localhost:3000`))
```

```civet
// prime.civet
export function primeFactorsTo(max: number): number[]
  skip .= [] as boolean[]
  for prime of [2 .. max] // for inclusive [a .. b] = [a, a+1, a+2, ..., b-2, b-1, b]
    continue if skip[prime];
    for i .= prime * prime; i <= max; i += prime
      skip[i] = true;
    prime
```

```civet
// boredapi.civet
export type Activity
  activity: string
  type: string
  participants: number
  price: number
  link: string
  key: string
  accessibility: number

export function fetchActivity
  "https://www.boredapi.com/api/activity"
    |> fetch
    |> await
    |> .json()
    |> await
    |> (it) => it as Activity |> (it) => it as Activity
```
