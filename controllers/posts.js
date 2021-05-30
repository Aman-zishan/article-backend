import postMessage from '../models/postMessage.js';

export const getPosts = async (req,res) => {
    try {

        const postMessages = await postMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages); 
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
    
}

export const createPosts = async (req,res) => {
    const post = req.body;
    console.log("Front end response");
    console.log(post);
    const newPost = new postMessage(post);
    
    try {
        await newPost.save(); 
        res.status(200).json(newPost);
        return;
     
    } catch (error) {
        console.log(error.message);
        res.status(409).json({message: error.message});
        return;
      
    }
    res.send("This works!");
}