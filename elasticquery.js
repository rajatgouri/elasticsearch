var express = require('express');
var elasticSearch = require('./module2')
var app = express();

app.get('/',function(req,res){
    var  index = 'example';
    var  type = 'constituencies';
    var matchData = {"Name" : "IWserver"}
    var query = 'IVserver';
    var fields =  ['Name','ConstituencyType'];
    var field = "Name";
    var term= {"ValidVotes": 48698};
    var terms = { "Electorate" : [74501]};
    var range = { "ValidVotes" : { "gte" : 48697}};
    var exists = { "field" : "Name" };
    var wildcard =  { "Name" : "*server" };
    var types = {"value" : "constituencies"};
    var bool =
    { 
        "must" : [
          { "match": { "user.first": "Alice" }},
          { "match": { "user.last":  "Smith" }}
        ],
        "filter": [
          { "term":  { "ValidVotes": 48698 }}, 
          { "range": { "Electorate": { "gte": 74500 }}} 
        ],
        "should" : [{ "term" : { "ValidVotes" : 48698 } }],
          "must_not" : { "range" : {"ValidVotes" : { "lte" : 48697 }}}
    }
    var path = "user";
    var boost = 1.2;
    var tie_breaker = 0.7
    var boost = 1.2;
    var queries= [ 
      { "term":  { "ValidVotes": 48698 }}, 
      { "range": { "Electorate": { "gte": 74500 }}} 
      ];
    var positive = { term : { "ValidVotes" : 48698} };
    var negative = { term : { "ValidVotes" : 48695} };
    var negative_boost = 0.2;
    var like = "Iwserver";
    var min_term_freq = 1;
    var max_query_terms = 12;
    
    // elasticSearch.matchAll(index,type);
    // elasticSearch.match(index,type,matchData);
    // elasticSearch.matchPharse(index,type,matchData);
    // elasticSearch.matchPharsePrefix(index,type,matchData);
    // elasticSearch.multiMatch(index,type,query,fields);
    // elasticSearch.queryString(index,type,field,query);
    // elasticSearch.term(index,type,term);
    // elasticSearch.terms(index,type,terms);
    // elasticSearch.range(index,type,range);
    // elasticSearch.exists(index,type,exists);
    // elasticSearch.wildcard(index,type,wildcard);
    // elasticSearch.type(index,type,types);
    // elasticSearch.bool(index,type,bool);
    // elasticSearch.constantScore(index,type,term,boost);
    // elasticSearch.disMax(index,type,tie_breaker,boost,queries);
    // elasticSearch.boosting(index,type,positive,negative,negative_boost);
    // elasticSearch.moreLikeThis(index,type,fields,like,min_term_freq,max_query_terms);
    // elasticSearch.nested(index,type,bool,path);
    // elasticSearch.geoShape(index,type,bool);
    // elasticSearch.geoBounding(index,type,bool);
    // elasticSearch.geoDistance(index,type,bool);


})

app.listen(3000)















