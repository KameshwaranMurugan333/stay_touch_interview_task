# Stay Touch Interview Task

#### To run hasura local graphql engine

```
docker-compose up -d 

docker ps //To check container is running or not

npm i

npm run hasura:ready
```

Then open the console at localhost:8080 or [click here](http://localhost:8080) and enter the admin secret `8L88uxCSWmb2w4NsjuTJaEXwGz9RWMYmGtHc8KDZUVXgOrXyul41mJWj66Z4cLiZ`, then run the below query.

#### To get users in pagination

The below query returns the 3 users of 12 users in the database.  If you want the next 3 user (since limit is 3) need to change the offset to 3 and so for other set of data.

```
query getUsers {
  user(limit: 3, offset: 0) {
    id
    first_name
    last_name
    master_gender {
      gender
    }
  }
}
```


#### To get users near me
```
query getUserNearMe {
  user_tracking(where: {lat_lang: {_st_d_within: {distance: 1000, from: {type: "Point", coordinates: [12.236186, 79.641492]}}}}) {
    user {
      first_name
      last_name
      master_gender {
        gender
      }
    }
  }
}
```

**Note:** If the user_tracking seeder is not working then copy and paste the sql file in SQL section.

## To view inserted user lat lang on maps

To view the inserted users lat and lang pointed in map, Visit [Plot Multiple Points On Map](https://mobisoftinfotech.com/tools/plot-multiple-points-on-map/) and paste the below CSV.


```
12.242952852860949,79.6360722108185,yellow,marker,"M S Dhoni"
12.240310661968039,79.64229493569839,red,marker,"Virat Kholi"
12.236284415494055,79.64478402565035,blue,marker,"Rohit Sharma"
12.239346046007372,79.66710000452997,#ff4560,marker,"K L Rahul"
12.236494117346101,79.66911702569796,green,marker,"Sachin Tendulakar"
12.244378786168053,79.67066197808192,#992ae3,marker,"Ravi Ashwin"
12.251418063984476,79.55747599650546,#fbd8b2,marker,"Julan Goshami"
12.25234069800045,79.56254000709737,#6b21a8,marker,"Mithali Raj"
12.249237279849563,79.55807681132143,#1c2535,marker,"Harmatpreet Kaur"
12.248817896219045,79.55721850444145,#c6cde9,marker,"Smriti Mandana"
12.265928207007361,79.5541285996735,#008ffb,marker,"Shifali Varma"
12.260224893432168,79.56665988012129,#ff4560,marker,"Deepti Sharma"
```

