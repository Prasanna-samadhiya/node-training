//todo

const express=require("express");

const todos=[

    {id:1,name:"Drink juice",description:"remember to drink natural juice for the taste and hydration"},
    {id:2,name:"Excersise",description:"remeber to run and do yoga to keep yourself in a good condition"},
    {id:3,name:"study",description:"remember to study to prepare for your mid sems and final exams"},
    {id:4,name:"listening to music",description:"remember to listen music to elevate your mood and spirit"},
    {id:5,name:"write",description:"write an article to express your concers on the pressing issues"},
    {id:6,name:"Drink juice",description:"remember to drink natural juice for the taste and hydration"},
    {id:7,name:"Excersise",description:"remeber to run and do yoga to keep yourself in a good condition"},
    {id:8,name:"study",description:"remember to study to prepare for your mid sems and final exams"},
    {id:9,name:"listening to music",description:"remember to listen music to elevate your mood and spirit"},
    {id:10,name:"write",description:"write an article to express your concers on the pressing issues"}

]

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.send(todos);
})

app.post('/:id',(req,res)=>{
    const id=req.params.id;
    const todo=todos.find(todos=>todos.number=== parseInt(id));
    const stu=req.body;
    todos.push(stu);
    res.send(todo);
})

app.put('/put/:id',(req,res)=>{
    const {id,name,description}= req.body;
    const todo = todos.find(todos => todos.id == req.params.id);
    todo.id=id;
    todo.name=name;
    todo.description=description;
    res.send(todos);
})

app.patch('/patch/:id',(req,res)=>{
    const todo = todos.find(todos => todos.id == req.params.id);
    if (!todo) return res.sendStatus(404);
    todo.completed = !todo.completed;
    res.json(todo);

})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    const student=todos.find(todos=>todos.id=== parseInt(id));
    res.send(student);
    console.log(student.name+" deleted succesfully");
    delete todos[student.id-1];
})

app.listen(5000,()=>{
    console.log("listening to 500");
});