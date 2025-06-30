let bookmarks = [];
let idCounter = 1;

export const getAllBookmarks = () => bookmarks;

export const addBookmark = (title, url) => {
    const newBookmark = {
    id: idCounter++,
    title,
    url,
    createdAt: new Date(),
    };
    bookmarks.push(newBookmark);
    return newBookmark;
};

export const deleteBookmark = (id) => {
    const index = bookmarks.findIndex(b => b.id === id);
    if (index !== -1) {
    const [deleted] = bookmarks.splice(index, 1);
    return deleted;
    }
    return null;
};
