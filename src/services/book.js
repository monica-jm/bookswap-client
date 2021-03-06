import {_axios} from './auth'

export const createBook = (bookData) => _axios.post("/book/create", bookData);
export const getAllBooks = () => _axios.get(`/book/all`);
export const getBookById = (bookId) => _axios.get(`/${bookId}`);
export const updateBook = (bookId,) =>_axios.patch(`/book/update/${bookId}`);
export const updateBookmarks = (bookId) => _axios.patch(`/book/add/${bookId}`);
export const deleteBook = (bookId) => _axios.delete(`/book/delete/${bookId}`);

export const uploadImages = (image, bookId) => _axios.post(`/book/upload/${bookId}`, image);