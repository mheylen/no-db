# no db review 

## frontend checklist

- package.json
    - main => server/
    - proxy => http://localhost:4000
- reset.css

### Folder Structure

- src/
    - App.js
    - index.js
    - components/
        - Header/
            - header.js
            - header.css
        - doughnutList/
            - doughnutList.js
            - doughnutList.css
        - checkout/
            - checkout.js
            - checkout.css

### dependencies
<!-- - `axios` -->

## Backend Checklist

### Folder Structure

- server/
    - index.js
    - controller/
        - donutController.js
    - data/
        - data.json

### Endpoints

Get: (get all donuts) `/api/donuts`

Post: (add a donuts) `/api/donuts`

Put: (edit donuts in list) `/api/donuts/:id`

Delete: (delete this crap) `/api/donuts/:id`

```js
{ 
    id, title, popularity, poster_path, overview, release_date;

}
```

### dependencies

- express
- body-parser


<!-- https://github.com/tjlytle/donuts/blob/master/api-spec.yaml -->