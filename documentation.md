React JS Full Course for Beginners | Complete All-in-One Tutorial | 9 Hours


Chapter 1: Start Here
-npx create-react-app (app-name)


Chapter 2: App & JSX
-kreiranje myName varijable
-kreiranj handleNameChange funkcije
-dinamicko prikazivanje myName varijable i handleNameChange funkcije


Chapter 3: Functional Components
-kreiramo Header.jsx komponentu
-rafce skracenica da kreiramo Header funkciju
-u App fajl importujemo Header komponentu
-kreiramo Content i Footer komponente
-importujemo komponentu u App.js fajl


Chapter 4: Applying CSS Styles
-u Header.jsx komponentu dodajemo inline style
-mozemo kreirati varijablu headerStyle
-stiliziramo komponentu u App.css fajlu
-App.css fajl importujemo u App.js fajl


Chapter 5: Click Events
-u Content.jsx komponenti kreiramo handleClick funkciju
-kreiramo button element sa onClick dogadajem
-onClick dogadaju proslijedujemo vrijednost handleClick funkcije
-kreiramo handleClick2 funkciju sa parametrom name
-kreiramo jos jedan button element sa onClick dogadajem
-u onClick dogadaj proslijedujemo anonimnu funkciju
-kreiramo handleClick3 funkciju sa event parametrom
-button elementu proslijedujemo vrijednost handleClick3 funkcije
-kreiramo handleClick4 funkciju
-button elementu dodajemo onDoubleClick dogadaj
-onDoubleClick dogadaju proslijedujemo vrijednost handleClick4 funkcije


Chapter 6: useState() React Hook
-u Content.jsx komponentu importujemo useState React Hook
-u Content funkciji, kreiramo const [name, setName] = useState()
-u funkciju handleNameChange dodajemo setName funkciju
-u p element dodajemo {main} varijablu
-ispod p elementa kreiramo button element 
-button elementu proslijedujemo vrijednost handleNameChange funkcije
-kreiramo const [count, setCount] = useState(0)
-kreiramo handleIncrementCount i handleDecrementCount funkcije
-dodajemo setCount u ove dvije funkcije
-button elementima proslijedujemo vrijednost ove dvije funkcije


Chapter 7: Lists and Keys
-u Content.jsx komponenti kreiramo const [items, setItems] = useState([ {...} ])
-kreiramo ul element
-unutar ul elementa dodajemo {items.map()} metodu
-unutar map metode kreiramo li element
-li elementu dodajemo key
-instaliramo react-icons paket npm i react-icons --save
-u Content.jsx komponentu importujemo ikonicu
-u li element dodajemo FaTrashAlt React ikonicu
-ikonici FaTrashAlt dodajemo atribute
-stiliziramo elemente unutar ul elementa
-kreiramo handleCheck funkciju
-input elementu dodajemo onChange dogadaj
-u onChange dogadaju kreiramo anonimnu funkciju
-u handleCheck funkciji kreiramo listItems varijablu
-u handleCheck funkciju dodajemo setItems()
-u handleClick funkciju dodajemo localStorage metodu
-label elementu dodajemo onDoubleClick dogadaj
-label elementu dodajemo atribut style
-u style atributu sa ternarnim operatorom dodajemo dinamicko prikazivanje stiliziranje elementa
-kreiramo handleDelete funkciju
-ikonici FaTrashAlt dodajemo onClick dogadaj
-unutar onClick dogadaja dodajemo anonimnu funkciju i handleDelete funkciju
-u handleDelete funkciji kreiramo listItems varijablu
-u handleDetelte sam dodao if - else da provjerimo da li korisnik zeli izbrisati item
-kreiramo showMyList i emptyList funkcije
-u return izjavi, u main elementu, dodajemo ternarni uslov {item.length}


Chapter 8: Props and Props Drilling
-u App fajlu, Header komponenti dodajemo prop title
-u Header.jsx komponenti, Header funkciji dodajemo parametar props
-u h1 elementu dodajemo {props.title}
-u Header.jsx komponenti dodajemo Header.defaultProps ako nema prop u App.js fajlu
-u App.js fajlu kreiramo const [items, setItems] = useState([{...}])
-u App.js fajlu Content komponenti dodajemo items i setItems props
-u App.js fajlu Content komponenti dodajemo props handleCheck i handleDelete
-u Content.jsx komponenti, Content funkciji dodajemo parametre ({ items, setItems, handleCheck, handleDelete})
-u App.js fajlu, Footer komponenti dodajemo length prop
-u Footer.jsx komponenti, Footer funkciji dodajemo ({length}) parametar
-u footer elementu dodajemo uslov {length === 1}
-kreiramo ItemList.jsx komponentu
-u ItemList.jsx komponenti, ItemList funkciji dodajemo parametar ({ items, setItems, handleCheck, handleDelete})
-u ItemList.jsx komponenti kopiramo ul element i njegov sadrzaj iz Context.jsx komponente
-u Content.jsx komponentu importujemo ItemList.jsx komponentu
-u Context.jsx komponenti, ItemList komponenti dodajemo props
-kreiramo LineItem.jsx komponentu
-u ItemList.jsx komponeti kopiramo li element i njegov sadrzaj iz ItemList.jsx komponente
-u LineItem.jsx komponeti, LineItem funkciji dodajemo parametar ({item, items, setItems, handleCheck, handleDelete})
-u ItemList.jsx komponentu importujemo LineItem.jsx komponentu
-u ItemList.jsx komponenti, LineItem komponenti dodajemo props
-u LineItem.jsx komponenti, FaTrashAlt ikonici dodajemo atribut aria-label
