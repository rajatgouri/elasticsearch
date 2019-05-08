var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host:'localhost:9200'
})
var argv = require('yargs').argv;



exports.matchAll = function(index,type){
    client.search({  
            index: index,
            type: type,
            body: {
              query: {
                "match_all": {}
            }
          }
        },function (error, response,status) {
          if (error) throw error
          console.log(response);
          response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
    });
}

exports.match = function(index,type,data){
    client.search({  
        index: index,
        type: type,
        body: {
          query: {
            "match" : data
        }
      }
    },function (error, response,status) {
          if (error) throw error
          console.log(response);
          response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
    });
}

exports.matchPharse = function(index,type,data){
    client.search({  
        index: index,
        type: type,
        body: {
          query: {
            "match_phrase" :data
        }
      }
    },function (error, response,status) {
          if (error) throw error
          console.log(response);
          response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
    });
}


exports.matchPharsePrefix = function(index,type,data){
    client.search({  
        index: index,
        type: type,
        body: {
          query: {
            "match_phrase_prefix" : data
        }
      }
    },function (error, response,status) {
          if (error) throw error
          console.log(response);
          response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
    });
}



exports.multiMatch = function(index,type,query,fields){
    client.search({  
        index: index,
        type: type,
        body: {
          query: {
            "multi_match":{
                "query" : query,
                "fields": fields
            }
        }
      }
    },function (error, response,status) {
          if (error) throw error
          console.log(response);
          response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
    });
}



exports.queryString = function(index,type,field,query){
    client.search({  
        index: index,
        type: type,
        body: {
          query: {
            "query_string" : {
                "default_field" : field,
                "query" : query
            }
        }
      }
    },function (error, response,status) {
          if (error) throw error
          console.log(response);
          response.hits.hits.forEach(function(hit){
          console.log(hit);
        })
    });
}


exports.term = function(index,type,term){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "term": term

      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.terms = function(index,type,term){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "terms": term

      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.range = function(index,type,range){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "range" : range

      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.exists = function(index,type,exists){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          exists : exists
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.wildcard = function(index,type,wildcard){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "wildcard" : wildcard
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.type = function(index,type,types){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "type" : types
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.bool = function(index,type,bool){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "bool" : bool
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}



exports.constantScore = function(index,type,term,boost){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "constant_score" : {
            "filter" : {
                "term" : term
            },
            "boost" : boost
          }
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}



exports.disMax = function(index,type,tie_breaker,boost,queries){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "dis_max" : {
            "tie_breaker" : tie_breaker,
            "boost" : boost,
            "queries" : queries
          }
          
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.boosting = function(index,type,positive,negative,negative_boost){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "boosting" : {
            "positive" : positive,
            "negative" : negative,
            "negative_boost" : negative_boost
          }
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.moreLikeThis = function(index,type,fields,like,min_term_freq,max_query_terms){
  client.search({  
      index: index,
      type: type,
      body: {
        query: {
          "more_like_this" : {
            "fields" : fields,
            "like" : like,
            "min_term_freq" : min_term_freq,
            "max_query_terms" : max_query_terms
          }
      }
    }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}



exports.nested = function(index,type,bool,path){
  client.search({  
      index: index,
      type: type,
      body: {
        "query": {
          "nested": {
            "path": path,
            "query": {
              "bool": bool
            },
            "inner_hits": { 
              "highlight": {
                "fields": {
                  "user.first": {}
                }
              }
            }
          }
        }
      }
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}


exports.geoShape = function(index,type,bool){
  client.search({
      index: index,
      type: type,
      body: {
        "query": {
            "bool": bool
        }
    }
    
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}



exports.geoBounding = function(index,type,bool){
  client.search({
      index: index,
      type: type,
      body: {
        "query":{
            "bool": bool
          
        }
    }
    
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}




exports.geoDistance = function(index,type,bool){
  client.search({
      index: index,
      type: type,
      body:{
        "query": {
            "bool" : bool
        }
    }
    
  },function (error, response,status) {
        if (error) throw error
        console.log(response);
        response.hits.hits.forEach(function(hit){
        console.log(hit);
      })
  });
}

