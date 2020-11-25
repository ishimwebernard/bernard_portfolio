const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");


router.get("/",(request, response)=>{
    console.log(`Finding some data ...`);
    Post.find().then(data=>{
        response.json(data);
        console.log("Data Succesfully retrieved");
    }).catch(error=>{
        console.log(error);
        response.send("Something went wrong");
    })
});

router.post("/", async(request, response)=>{
    const toPost = new Post({
        title: request.body.title,
        description: request.body.description,
        imagesource: request.body.imagesource
    });
    console.log(request);
    await toPost.save();
    response.json(toPost);       
});



router.get("/:postId",(request,response)=>{
    Post.findById(request.params.postId).then(data=>{
        response.json(data);
    }).catch(error=>{
        console.log(error);
        response.send(`Something went wrong`);
    })
});
router.delete("/:postId", (request, response)=>{
    Post.remove({_id: request.params.postId}).then((data)=>{
        console.log(`Deleted ${data}`);
        response.json(data);
    }).catch(error=>{
        console.log(error);
        response.send(`Something went wrong`);
    })
});

router.patch("/:postId", (request, response)=>{
    Post.update({_id: request.params.postId},
        { $set: {title: request.body.title}}
        ).then((data)=>{
            response.json(data);
        }).catch(error=>{
            console.log(error);
            response.send(`Something went wrong`);
        })

})

module.exports = router;