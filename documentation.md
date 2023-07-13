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


Chapter 9: Controlled Inputs
-kreiramo AddItem.jsx komponentu
-u form roditelj elementu kreiramo label element sa htmlFor atributom
-kreiramo input element sa vise atributa
-u AddItem.jsx komponentu importujemo React ikonicu
-kreiramo button element sa atributima
-u button element dodajemo React ikonicu
-u App.js fajl importujemo AddItem.jsx komponentu
-stiliziramo element u AddItem.jsx komponenti
-u App.js fajlu kreiramo const [newItem, setNewItem] = useState('')
-kreiramo handleSubmit funkciju sa parametrom event 
-u App.js fajlu, AddItem komponenti dodajemo props
-u AddItem.jsx komponenti, AddItem funkciji dodajemo parametar ({ newItem, setNewItem, handleSubmit })
-input elementu dodajemo value atribut u koji proslijedujemo vrijednost newItem
-input elementu dodajemo onChange dogadaj
-u AddItem.jsx komponenti, form elementu dodajemo onSubmit dogadaj
-onSubmit dogadaju proslijedujemo vrijednost handleSubmit funkcije
-kreiramo funkciju addItem sa parametrom item
-u funkciji addItem kreiramo id varijablu
-kreiramo myNewItem objekt varijablu
-kreiramo listItems niz
-dodajemo setItems(listItems) funkciju
-dodajemo localStorage.setItem() metodu
-kreiramo setAndSaveItems funkciju sa parametrom newItems
-u setAndSaveItems funkciju dodajemo setItems funkciju i localStorage.setItem metodu
-funkciju setAndSaveItems dodajemo u addItem, handleCheck i handleDelete funkcije
-u funkciju handleSubmit dodajemo addItem(newItem) funkciju
-u const [items, setItems] = useState() dodajemo JSON.parse(...) metodu
-kreiramo SearchItem.jsx komponentu
-form elementu dodajemo onSubmit dogadaj
-kreiramo Search label element
-kreiramo input element sa atributima
-u App.js fajlu kreiramo const [search, setSearch] = useState('')
-u App.js fajl importujemo SearchItem.jsx komponentu
-u return izjavi, SearchItem komponenti dodajemo props
-u SearchItem.jsx komponenti, SearchItem funkciji dodajemo parametar ({ search, setSearch })
-input elementu dodajemo atribut value sa vrijednoscu search
-input elementu dodajemo onChange dogadaj
-u App.js fajlu, Content komponenti u items prop dodajemo filter metodu
-u AddItem.jsx komponentu importujemo useRef React hook
-kreiramo inputRef varijablu
-useRef React hook koristimo zbog button elementa i fokusa prilikom klika
-input elementu dodajemo ref atribut i proslijedujemo mu vrijednost inputRef varijable
-button elementu dodajemo onClick dogadaj
-u onClick dogadaj proslijedujemo vrijednost anonimne funkcije


Chapter 10: Project Challenge
-kreiramo Square.jsx i Input.jsx komponente
-u Square.jsx komponenti, Square funkciji dodajemo parametar ({colorValue})
-section elementu dodajemo atribute className i style
-kreiramo p element i unutar njega dodajemo ternarni uslov za prkazivanje imena klase
-izvan return izjave dodajemo Square.defaultProps
-u Input.jsx komponenti, Input funkciji dodajemo parametar ({ colorValue, setColorValue })
-form elementu dodajemo onSubmit dogadaj
-kreiramo label element
-kreiramo input element sa atributima
-input elementu dodajemo value i onChange dogadaj
-value atributu proslijedujemo vrijednost colorValue varijable
-onChange dogadaju proslijedujemo anonimnu funkciju sa parametrom e
-u App.js fajl importujemo useState React hook
-kreiramo const [colorValue, setColorValue] = useState('')
-u App.js fajlu, Square komponenti dodajemo prop colorValue
-komponenti Input dodajemo colorValue, setColorValue prop
-u App.js fajlu kreiramo const [hexValue, setHexValue] = useState('')
-komponenti Square dodajemo hexValue prop
-komponenti Input dodajemo setHexValue prop
-u Square.jsx komponenti, Square funkciji dodajemo hexValue prop
-kreiramo p element u kojem se nalazi ternarni uslov za pokazivanje hexValue vrijednosti
-u Input.jsx komponenti, Input funkciji dodajemo setHexValue prop
-u onChange dogadaj dodajemo setHexValue
-u terminalu instaliramo paket npm i colornames
-u Input.jsx komponentu importujemo colorNames biblioteku
-u App.js fajlu, u funkciju setHexValue, dodajemo colorNames(e.target.value)
-u App.js fajlu kreiramo const [isDarkText, setIsDarkText] = useState('')
-komponenti Square dodajemo isDarkText prop
-komponenti Input dodajemo isDarkText i setIsDarkText prop
-u Square.jsx komponenti, u style atributu, dodajemo color
-u color dodajemo ternarni operator
-u Input.jsx komponenti, kreiramo button element sa type atributom i onClick dogadajem
-u onClick dogadaj proslijedujemo vrijednost anonimne funkcije
-
