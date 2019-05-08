var express = require('express');
var elasticSearch = require('./module1')
var app = express();

app.get('/',function(req,res){
    /* =======Cluster-Health============ */
    // elasticSearch.clusterHealth()


    /* =======make-indices============ */
    var indextobemake = 'loc'
    // elasticSearch.make_indices(indextobemake)


    /* =======Delete-Indices-Data============ */
    var indextobedeleted = 'gov'
    // elasticSearch.delete_indices(indextobedeleted)


    /* =======Add-Data============ */
    var data ={  
        index: 'loc',
        id: '1',
        type: "_doc",
        body:{
            "pin" : {
                "location" : {
                    "lat" : 40.12,
                    "lon" : -71.34
                }
            }
        }}
    elasticSearch.add_data(data)


    /* =======Count-Data============ */
    var countdata ={
        index:'gov',
        type:'contituencies'
    }
    // elasticSearch.count_indices(countdata)


    /* =======Delete-Data============ */
    var datatobedeleted = {  
        index: 'gov',
        id: '1',
        type: '_doc'
      }
    // elasticSearch.delete_data(datatobedeleted)

    // elasticSearch.putMapping()
    // elasticSearch.getMapping()
})


app.listen(3000)