const Post = require('../Models/Post');

//crear un post nuevo verificando que el usuario que crea el post debe estar autenticado, si no no puede realizar post.
const createPost = async (req, res) => {
    //try catch para manejar errores
    try {
        //se crea un new post con los datos del body
        const newPost = new Post({
            ...req.body,//se copia todo el objeto del body
            user: req.user._id  //se agrega el id del usuario que lo crea
        });
        //se guarda el post
        await newPost.save();
        //se retorna el post creado
        return res.status(201).json(newPost);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
};

//obtener todos los posts de un usuario
const getAllPosts = async (req, res) => {
    //try catch para manejar errores
    try {
        //se obtienen todos los posts
        const posts = await Post.find();
        //se retorna el array de posts
        return res.status(200).json(posts);
    } catch (error) {
        //si hay error se envia 500
        return res.status(500).json({ message: error.message });
    }
}

//obtener un post por id
const getPostById = async (req, res) => {
    //try catch para manejar error 
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        return res.status(200).json(post);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//obtener un post por autor 
const getPostByAuthor = async (req, res) => {
    //try catch para manejar error 
    try {
        const post = await Post.findOne({ author: req.params.author });
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        return res.status(200).json(post);

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//eliminar un post por id
const deletePostById = async (req, res) => {
    //try catch para manejar error 
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post no encontrado' });
        }
        await Post.deleteOne({ _id: req.params.id });
        return res.status(200).json({ message: 'Post eliminado' });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//actualizar un post por id
const updatePostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).json({message: 'Post no encontrado'});
        }
        await Post.updateOne({ _id: req.params.id }, { $set: req.body });
        return res.status(200).json({ message: 'Post actualizado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//actualizar un post por autor
const updatePostByAuthor = async (req, res) => {
    try {
        const post = await Post.findOne({ author: req.params.author });
        if(!post){
            return res.status(404).json({message: 'Post no encontrado'});
        }
        await Post.updateOne({ author: req.params.author }, { $set: req.body });
        return res.status(200).json({ message: 'Post actualizado' });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

//exportar los controladores
module.exports = { 
    createPost, 
    getAllPosts, 
    getPostById, 
    getPostByAuthor, 
    deletePostById, 
    updatePostById, 
    updatePostByAuthor 
};

