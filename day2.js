//node traini

const express=require("express");

const data=[

    {name:"p1",role:"student",number:1},
    {name:"p2",role:"student",number:2},
    {name:"p3",role:"student",number:3},
    {name:"p4",role:"student",number:4},
    {name:"p5",role:"student",number:5}

]

const app=express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.json(data);
})

app.post('/:id',(req,res)=>{
    const id=req.params.id;
    const student=data.find(data=>data.number=== parseInt(id));
    const stu=req.body;
    data.push(stu);
    res.send(student);
})

app.put('/put',(req,res)=>{
    res.send("hello");
})

app.patch('/patch',(req,res)=>{
    res.send("hello");
})

app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    const student=todos.find(todos=>todos.number=== parseInt(id));
    res.send(student);
    console.log(student.name+" deleted succesfully");
    delete data[student.number-1];
})

app.listen(5000,()=>{
    console.log("listening to 500");
});