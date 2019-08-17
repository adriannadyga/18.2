/*tworzenie obiektu o parametrach:
-nazwa klasy na podstawie której tworzony będzie obiekt
-propsy (właściwości danego elementu)
-dzieci elementu, czyli to, co ma się znaleźć wewnątrz
var element = React.createElement('div', {}, 'Hello world!');
*/
//tablica z filmami ze specjalnymi identyfikatorami pozwalającymi Reactowi na odróżnienie elementów, co zapobiega odświeżaniu wszystkich
var movies = [
    {
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        poster: 'potter.jpg'
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        poster: 'król-lew.jpg'
    },
    {
        id: 3,
        title: 'Shrek',
        desc: 'Film animowany o ogrze',
        poster: 'shrek.jpg'
    },
    {
        id: 4,
        title: 'Toy story',
        desc: 'Film animowany o zabawkach',
        poster: 'toy-story.jpg'
    }
];

//metoda .map() przyjmująca jako parametr funkcję przez którą przechodzi każdy z elementów tablicy, który jest następnie mapowany do postaci ReactElementu korzystającego z informacji o filmie movie.title i movie.desc; parametr key
var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key:movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.poster})
        );
});

var element = 
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
    );

//renderowanie w drzewie DOM; parametry - react.element i węzeł drzewa DOM do którego element ma się wpiąć
ReactDOM.render(element, document.getElementById('app'));