var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
    host:'localhost:9200',
    
})

exports.clusterHealth = function(){
    client.cluster.health({},function(err,resp,status){
        console.log(resp)
    })
}

exports.make_indices = function(index){
    client.indices.create({
            index: index
        },function(err,resp,status){
            if(err) throw err
            console.log(resp)
            console.log(status)
        })
}

exports.delete_indices = function(index){
    client.indices.delete({
            index: index
        },function(err,resp,status){
            if(err) throw err
            console.log(resp)
        })
}

exports.add_data = function(data){
    client.index(
      data,function(err,resp,status) {
          if (err) throw err
          console.log(resp);
      });
      
}

exports.count_indices = function(data){
    client.count(data,function(err,resp,status){
        if(err) throw err
        console.log(resp)
    })
}

exports.delete_data = function(data){
    client.delete(data,function(err,resp,status) {
          if(err) throw err
          console.log(resp);
      });    
}

exports.putMapping = function(){
  client.indices.putMapping({  
    index: 'loc',
    type: 'constituencies',
    include_type_name : true,
    body: {
      "properties": {
        "pin": {
            "properties": {
                "location": {
                    "type": "geo_point"
                }
            }
        }
    }
    } 
  },function(err,resp,status){
      if (err) {
        console.log(err);
      }
      else {
        console.log(resp);
      }
  });
}

exports.getMapping = function(){
    client.indices.getMapping({  
        index: 'gov',
        type: 'constituencies',
        include_type_name : true
      },
    function (error,response) {  
        if (error){
          console.log(error.message);
        }
        else {
          console.log(response.gov.mappings.constituencies.properties);
        }
    });
}
