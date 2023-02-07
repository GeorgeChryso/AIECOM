const graphql=require('graphql'),
    {GraphQLObjectType,GraphQLSchema,GraphQLInt,GraphQLString,GraphQLList}=graphql




let userData=[
    {id:1,firstName:'gE',lastName:'C',email:'lsgechrys@gmail.com',password:'rasda3rt'},
    {id:2,firstName:'gDE',lastName:'CCA',email:'DASDAS@gmail.com',password:'DASDDAS'},
    {id:3,firstName:'gEA',lastName:'CSDA',email:'DASD@gmail.com',password:'ZZDSD'},

]
const UserType=require('./Typedef/UserType')

const RootQuery=new GraphQLObjectType({
    name:"RootQueryType",
    fields:{
        getAllUsers:{
            type: new GraphQLList(UserType),
            args: {id:{type:GraphQLInt}},
            resolve(parent,args){
                //mongodb statement here / find or 
                return userData
            }
        }
        // getUserById , .. .
    }
}) 

const Mutation=new GraphQLObjectType({
    name: "Mutation",
    fields:{
        createUser:{
            type: UserType,
            args:{
                firstName:{type:GraphQLString},
                lastName:{type:GraphQLString},
                email:{type:GraphQLString},
                password:{type:GraphQLString}
            },
            resolve(parent,args){
                userData.push({
                    id:userData.length+1,
                    firstName:args.firstName,
                    lastName:args.lastName,
                    password:args.password,
                    email:args.email
                })
                //mongodb createuser endp here
                return args
            }
        },
        // deleteUser,
        // updateUser
    }
})

module.exports=new GraphQLSchema({
    query:RootQuery,
    mutation:Mutation
})