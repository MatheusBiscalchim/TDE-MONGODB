import mongoose  from "mongoose";
import Blog from "./model/Blog.js"

mongoose.connect("mongodb+srv://matheus:matheus@cluster0.xibggaq.mongodb.net/TDE?retryWrites=true&w=majority");

const article = new Blog({
    title:"Post TDE",
    slug:"post para tde",
    published: true,
    content: " To escrevendo para o tde",
    tags:['tde1','tde2']
 })
 
 await article.save();
 
 const firstArticle = await Blog.findOne({});
 console.log(firstArticle);