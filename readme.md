# Stay Touch Interview Task

#### To run hasura local graphql engine

```
docker-compose up -d 

docker ps //To check container is running or not

npm i

npm run hasura:ready //To setup hasura engine

npm run start:apollo //To start apollo graphql server

npm run start:hasura //To run hasura engine

```

Then open the console at localhost:4000 or [click here](http://localhost:4000) and add the header 

```
Authoriztaion : eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyX25hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0.dAfJ6Y3wTJGj3iD-XPWT6PzwIiGR223dUjo0rwAH3lg
```
then run the below query.

#### To get users in pagination

The below query returns the 3 users of 12 users in the database.  If you want the next 3 user (since limit is 3) need to change the offset to 3 and so for other set of data.

```
query users {
  users(limit: 3, offset: 0) {
    id
    first_name
    last_name
    gender
  }
}

```


#### To get users near me
```
query usersNearMe {
  usersNearMe(lat:12.236186 , lang: 79.641492, distance: 1000) {
    id
    first_name
    last_name
    gender
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

#### Wokring Video Link

[Click Here to watch](https://drive.google.com/file/d/15qYcBnyDAJVZz98w7e1gnNa6WUdTk7RS/view?usp=sharing)
