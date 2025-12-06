import { db } from "../firebase";
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    updateDoc,
    query,
    where
} from "firebase/firestore";

const POSTS_COLLECTION = "posts";

export const getPosts = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, POSTS_COLLECTION));
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
};

export const getPostsByCategory = async (category) => {
    try {
        const q = query(
            collection(db, POSTS_COLLECTION),
            where("category", "==", category)
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
    } catch (error) {
        console.error("Error fetching category posts:", error);
        return [];
    }
};

export const savePost = async (post) => {
    try {
        if (post.id) {
            // Update existing
            const postRef = doc(db, POSTS_COLLECTION, post.id);
            // Remove id from data to save
            const { id, ...data } = post;
            await updateDoc(postRef, data);
        } else {
            // Create new
            const newPost = {
                ...post,
                date: new Date().toISOString().split('T')[0].replace(/-/g, '.')
            };
            await addDoc(collection(db, POSTS_COLLECTION), newPost);
        }
    } catch (error) {
        console.error("Error saving post:", error);
        throw error;
    }
};

export const deletePost = async (id) => {
    try {
        await deleteDoc(doc(db, POSTS_COLLECTION, id));
    } catch (error) {
        console.error("Error deleting post:", error);
        throw error;
    }
};
