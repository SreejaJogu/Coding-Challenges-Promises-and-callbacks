/*4. Arrange in alphabetical order.
Write a program that accepts a list of objects representing books [ title, author, and year] and a callback
function. The program should use the map function to create a new list containing only the titles of the books,
and then pass this new list to the callback function. The callback function should then log the titles to the
console in alphabetical order.*/
const books = [
    {
        title: "Waiting for a Visa",
        author: "B. R. Ambedkar",
        year: 1935,
    },
    {
        title: "An Autobiography",
        author: "Jawaharlal Nehru",
        year: 1936,
    },
    {
        title: "The Story of My Experiments with Truth",
        author: "Mohandas Karamchand Gandhi",
        year: 1940,
    },
    {
        title: "The Autobiography of an Unknown Indian",
        author: "Nirad C. Chaudhuri",
        year: 1951,
    },
];
function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}

function extractTitles(books, callback){
    const titles = books.map((book) => book.title);
    callback(titles);
}

extractTitles(books, logTitles);