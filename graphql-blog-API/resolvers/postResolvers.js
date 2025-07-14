    import { v4 as uuidv4 } from "uuid";
    import { readPosts, writePosts } from "../utils/fileHandler.js";

    export const resolvers = {
    Query: {
        getPosts: async () => await readPosts(),
        getPost: async (_, { id }) => {
        const posts = await readPosts();
        return posts.find((p) => p.id === id);
        }
    },
    Mutation: {
        createPost: async (_, { title, body, author }) => {
        const posts = await readPosts();
        const newPost = {
            id: uuidv4(),
            title,
            body,
            author,
            createdAt: new Date().toISOString()
        };
        posts.push(newPost);
        await writePosts(posts);
        return newPost;
        },
        deletePost: async (_, { id }) => {
        let posts = await readPosts();
        const filtered = posts.filter((p) => p.id !== id);
        await writePosts(filtered);
        return "Post deleted";
        }
    }
    };
