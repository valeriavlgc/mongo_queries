mongo_queries.restaurants.find();
mongo_queries.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});
mongo_queries.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1,"_id":0});
mongo_queries.restaurants.find({},{"restaurant_id" : 1,"name":1,"borough":1,"adress.zipcode" :1,"_id":0});
mongo_queries.restaurants.find({"borough": "Bronx"});
mongo_queries.restaurants.find({"borough": "Bronx"}).limit(5);
mongo_queries.restaurants.find({"borough": "Bronx"}).skip(5).limit(5);
mongo_queries.restaurants.find({grades : { $elemMatch:{"score":{$gt : 90}}}});
mongo_queries.restaurants.find({grades : { $elemMatch:{"score":{$gt : 80 , $lt :100}}}});
mongo_queries.restaurants.find({"address.coord" : {$lt : -95.754168}});
mongo_queries.restaurants.find({$and:[{"cuisine" : {$ne :"American "}},{"grades.score" : {$gt : 70}},{"address.coord" : {$lt : -65.754168}}]});
mongo_queries.restaurants.find({ "cuisine" : {$ne : "American "},"grades.score" :{$gt: 70},"address.coord" : {$lt : -65.754168}});
mongo_queries.restaurants.find({"cuisine" : {$ne : "American "},"grades.grade" :"A", "borough": {$ne : "Brooklyn"}}).sort({"cuisine":-1});
mongo_queries.restaurants.find({name: {$regex : "^Wil", $options: "i"}},{ "restaurant_id" : 1,"name":1,"borough":1,"cuisine" :1});
mongo_queries.restaurants.find({name: {$regex: "ces$"}}, {"restaurant_id" : 1,"name":1,"borough":1, "cuisine" :1});
mongo_queries.restaurants.find({"name": { $regex: ".*Reg.*", $options: "i"}},{ "restaurant_id" : 1, "name":1,"borough":1, "cuisine" :1});
mongo_queries.restaurants.find({ "borough": "Bronx" ,$or : [ { "cuisine" : "American " }, { "cuisine" : "Chinese" } ]});
mongo_queries.restaurants.find({"borough" :{$in :["Staten Island","Queens","Bronx","Brooklyn"]}},{ "restaurant_id" : 1, "name":1,"borough":1,"cuisine" :1});
mongo_queries.restaurants.find({"borough" :{$nin :["Staten Island","Queens","Bronx","Brooklyn"]}},{"restaurant_id" : 1,"name":1,"borough":1, "cuisine" :1});
mongo_queries.restaurants.find({"grades.score" : { $not: {$gt : 10} }},{"restaurant_id" : 1,"name":1,"borough":1, "cuisine" :1});
mongo_queries.restaurants.find({$or:[{name: /^Wil/},{"$and":[{"cuisine":{$ne :"American "}},{"cuisine":{$ne :"Chinees"}}]}]},{"restaurant_id":1,"name":1,"borough":1,"cuisine":1});
mongo_queries.restaurants.find({"grades.date": {"$gte" : new Date("2014-08-11T00:00:00Z")},"grades.grade":"A" ,"grades.score" : 11 },{"restaurant_id" : 1,"name":1,"grades":1});
mongo_queries.restaurants.find({ "grades.1.date": {"$gte" : new Date("2014-08-11T00:00:00Z")},"grades.1.grade":"A" ,"grades.1.score" : 9 },{"restaurant_id" : 1,"name":1,"grades":1});
mongo_queries.restaurants.find({"address.coord.1": {$gt : 42, $lte : 52}},{"restaurant_id" : 1,"name":1,"address":1,"coord":1});
mongo_queries.restaurants.find().sort({"name":1});
mongo_queries.restaurants.find().sort({"name":-1});
mongo_queries.restaurants.find().sort({"cuisine":1,"borough" : -1,});
mongo_queries.restaurants.find({"address.street" : { $exists : true }});
mongo_queries.restaurants.find({"address.coord" :{$type : 1}});
mongo_queries.restaurants.find({"grades.score": {$mod : [7,0]}}, {"restaurant_id" : 1,"name":1,"grades":1});
mongo_queries.restaurants.find({ name :{ $regex : "mon.*", $options: "i" }},{"name":1,"borough":1,"address.coord":1, "cuisine" :1});
mongo_queries.restaurants.find({name:{ $regex : "^Mad", $options: "i"}},{"name":1, "borough":1, "address.coord":1,"cuisine" :1});