# review-roulette

slack / cli command to randomly choose a reviewer for your pull request:

`/rr [number-of-samples] [name1] [name2] ... [nameN]`<br>
`/rr 20 jesper theo lauren`

```
jesper ◼︎◼︎◼︎◼︎◼︎◼︎
theo   ◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎◼︎
lauren ◼︎◼︎◼︎◼︎◼︎
```


## run as: slack app 
- start server: 
    - `node server.js`
    - `ngrok http 3030` (configure URL in app ↓)
        - uses [ngrok](https://ngrok.com/)
        - TODO: run on remote server
- configure app / slash command: https://api.slack.com/apps/AB67D16JV/slash-commands?saved=1


## run as: cli tool
`node cli.js 20 jesper theo lauren`
