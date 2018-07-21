export function selectBook(book)
{
console.log('A book has bean selected ',book.title);
return{
    type:'BOOK_SELECTED',
    payload:book
};
}