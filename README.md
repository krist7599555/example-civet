# Example Civet

try to learn [civet 🦝](https://civet.dev) language, better typescript

<img width="1017" alt="image" src="https://github.com/krist7599555/example-civet/assets/19445033/63f9b57a-7f24-42b7-9d18-d45ad9601c62">


```coffeescript
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

```coffeescript
// prime.civet
export function primeFactorsTo(max: number): number[]
  skip .= [] as boolean[]
  for prime of [2 .. max] // for inclusive [a .. b] = [a, a+1, a+2, ..., b-2, b-1, b]
    continue if skip[prime];
    for i .= prime * prime; i <= max; i += prime
      skip[i] = true;
    prime
```

```coffeescript
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

## Feature I like

<img width="981" alt="image" src="https://github.com/krist7599555/example-civet/assets/19445033/cab4c0f0-319d-4a2a-b975-2aeb8311d358">

<img width="980" alt="image" src="https://github.com/krist7599555/example-civet/assets/19445033/4e48c302-ea5e-43aa-838d-fb0da91df093">

<img width="976" alt="image" src="https://github.com/krist7599555/example-civet/assets/19445033/3a3d446d-6b8c-44cc-93ee-e7d9a565dd5b">

<img width="960" alt="image" src="https://github.com/krist7599555/example-civet/assets/19445033/fd640249-33b3-45fe-b92a-8cf50fd2b38d">

<img width="967" alt="image" src="https://github.com/krist7599555/example-civet/assets/19445033/92ac1930-7ac5-42a6-a270-049266cb66ec">

and more see [civet cheatsheet](https://civet.dev/cheatsheet)







