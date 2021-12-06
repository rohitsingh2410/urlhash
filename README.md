
# Demo Url hasher/ URL shortner

Application to short/hash a long URL and return a shortened URL.


## API Reference

#### Create a new shortned URL

```http
  POST http://127.0.0.1:3001/api/url/shorten
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `longUrl` | `string` | **Required**. our very long URL |

#### Open swagger documentatin using
```http
  http://localhost:3001/apis
```

## usage

Send a json reuest to endpoint 
```http
  POST http://127.0.0.1:3001/api/url/shorten
```

with 
```
{
    "longUrl":"https://www.newsbytesapp.com/news/india/covid-19-states-that-reported-cases-of-omicron-variant/story"
}
```
longUrl can be any url you desired, return would be a JSON with shorten URL.


```
{
    "urlCode": "4pgV8T52J",
    "longUrl": "https://www.newsbytesapp.com/news/india/covid-19-states-that-reported-cases-of-omicron-variant/story",
    "shortUrl": "http:localhost:3001/4pgV8T52J",
    "date": "2021-12-06T13:54:00.999Z",
    "_id": "61ae15f9229fffb99f6e55fc",
    "__v": 0
}
```
Paste the shortUrl from Response and you will be redirected to your oriinal URL.


![alt text](https://i.ibb.co/GQMJLv3/usage.png)
