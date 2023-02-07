
const express=require('express'),app=express()


    
// new type declaration




const { graphqlHTTP }=require('express-graphql')
const schema=require('./Schemas/querymutation')
app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
})) // only a single route





app.listen(6969,()=>console.log('Server running at 6969'))