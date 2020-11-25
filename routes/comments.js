const express = require("express");
const router = express.Router();
const Comments = require("../models/Comments.js");

router.get("/",(request, response)=>{
    console.log(`Retrieving Comments ...`);
    Comments.find().then(data=>{
        response.json(data);
        console.log("Data Succesfully retrieved");
    }).catch(error=>{
        console.log(error);
        response.send("Something went wrong");
    })
});

router.post("/", async(request, response)=>{
    const toPost = new Comments({
        username: request.body.username,
        message: request.body.message,
        email: request.body.email
    });
    console.log(request);
    await toPost.save();
    response.json(toPost);       
});



router.get("/:postId",(request,response)=>{
    Comments.findById(request.params.postId).then(data=>{
        response.json(data);
    }).catch(error=>{
        console.log(error);
        response.send(`Something went wrong`);
    })
});
router.delete("/:postId", (request, response)=>{
    Comments.remove({_id: request.params.postId}).then((data)=>{
        console.log(`Deleted ${data}`);
        response.json(data);
    }).catch(error=>{
        console.log(error);
        response.send(`Something went wrong`);
    })
});

router.patch("/:postId", (request, response)=>{
    Comments.update({_id: request.params.postId},
        { $set: {title: request.body.title}}
        ).then((data)=>{
            response.json(data);
        }).catch(error=>{
            console.log(error);
            response.send(`Something went wrong`);
        })

})

module.exports = router;