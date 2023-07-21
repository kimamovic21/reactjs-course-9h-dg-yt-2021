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


Chapter 11: useEffect() React hook
-u App.js fajl importujemo useEffect()
-kreiramo useEffect(() => { ... }, [])
-u App.js fajlu, dodajemo u useState() dodajemo || [] u slucaju da je JSON.parse(...) vrijednost nula
-brisemo funkciju setAndSaveItems i u funkcijama ispod dodajemo setItems umjesto setAndSaveItems


Chapter 12: JSON server
-kreiramo data folder
-u data folderu kreiramo db.json fajl
-u db.json fajlu kreiramo json objekt sa items nizom
-u terminal ukucamo npx json-server -p 3500 -w data/db.json
u terminal ukucamo json-server --watch data/db.json --port 8000
-u drugum terminalu pokrenemo React projekt


Chapter 13: Fetch API data
-u App.js fajlu kreiramo API_URL varijablu
-u useEffect() React hook, unutar callback funkcije, kreiramo fetchItems asinhronu funkciju
-u fetchItems funkciji kreiramo try - catch blokove koda
-u try bloku koda kreiramo response i listItems varijable
-u try blok koda dodajemo setItems(listItems)
-u catch blok koda dodajemo console.error()
-pozivamo fetchItems funkciju
-kreiramo const [fetchError, setFetchError] = useState(false)
-u try blok koda dodajemo if (!response.ok)
-u if uslov dodajemo throw Error()
-u try blok koda dodajemo setFetchError(null)
-u catch blok koda dodajemo setFetchError(error.message)
-u App.js fajlu, u return izjavi kreiramo main element
-u App.js fajlu, u return izjavi, dodajemo uslov fetchError && (...)
-u return izjavi dodajemo uslov !fetchError && (...)
-u useEffect() kreiramo setTimeout funkciju
-kreiramo const [isLoading, setIsLoading] = useState(true)
-nakon try - catck bloka koda, dodajemo finally blok koda
-u finally blok koda dodajemo setIsLoading(false)
-u main elementu dodajemo uslov isLoading && (...)


Chapter 14: CRUD Operations
-kreiramo apiRequest.js fajl
-u api Request.js fajlu kreiramo apiRequest asinhronu funkciju sa 3 parametra
-u funkciju apiRequest dodajemo try - catch - finally blokove koda
-u try bloku koda kreiramo response varijablu
-u try bloku koda dodajemo if uslov (!response.ok)
-u if uslov dodajemo throw Error
-u catch blok koda dodajemo errMsg
-u finally blok koda dodajemo return errMsg
-u App.js fajl importujemo apiRequest
-u App.js fajlu, u addItem funkciji, kreiramo postOptions objekt
-funkciji addItem dodajemo async
-kreiramo result varijablu 
-dodajemo uslov if(result)
-u if uslov dodajemo setFetchError(result)
-u funkciji handleCheck kreiramo myItem varijablu
-kreiramo updateOptions objekt
-kreiramo varijablu reqUrl
-funkciji handleCheck dodajemo async
-kreiramo varijablu result
-dodajemo uslov if(result)
-unutar if uslova dodajemo setFetchError
-u funkciji handleDelete kreiraamo deleteOptions objekt
-funkciji handleDelete dodajemo async
-kreiramo varijablu reqUrl
-kreiramo result varijablu
-dodajemo uslov if (result)
-u if uslov dodajemo setFetchError(result)


Chapter 15: Fetch Data Challenge
-u App.js fajlu kreiramo API_URL varijablu
-kreiramo const [requestType, setRequestType] = useState('users')
-kreiramo const [items, setItems] = useState([])
-kreiramo useEffect() React hook
-u callback funkciji kreiramo funkciju fetchItems
-u fetchItems funkciji kreiramo try - catch blokove koda
-u try bloku koda kreiramo varijablu response
-kreiramo varijablu data
-kreiramo Form.jsx komponentu 
-u App.js fajl importujemo Form.jsx komponentu
-u App.js fajlu, Form komponenti dodajemo prop
-u Form.jsx komponenti, form elementu dodajemo onSubmit dogadaj
-u Form.jsx komponenti, Form funkciji dodajemo parametre ({ requestType, setRequestType })
-onSubmit dogadaju proslijedujemo anonimnu funkciju
-kreiramo Button.jsx komponentu
-u Form.jsx komponentu importujemo Button.jsx komponentu
-komponentama Button dodajemo prop
-u Button.jsx komponenti dodajemo parametre ({ buttonText, requestType, setRequestType })
-u Button.jsx komponenti, button elementu dodajemo atribute i onClick dogadaj
-u onClick dogadaj proslijedujemo vrijednost anonimne funkcije
-kreiramo List.jsx komponentu
-u App.js fajl importujemo List.jsx komponentu
-u App.js fajlu, List komponenti dodajemo prop
-u List.jsx komponenti, List funkciji dodajemo parametar ({ items })
-u List.jsx komponenti, unutar ul elementa, dodajemo items.map() metodu
-kreiramo ListItem.jsx komponentu
-u List.jsx komponentu importujemo ListItem.jsx komponentu
-u ListItem.jsx komponenti, ListItem funkciji, dodajemo parametar ({ item })
-u li elementu, dodajemo JSON.stringify() metodu
-kreiramo Table.jsx komponentu
-u App.js fajl immportujemo Table.jsx komponentu
-u Table.jsx komponentu, Table funkciji dodajemo parametar {(items)}
-unutar tbody elementa, dodajemo items.map() metodu
-kreiramo Row.jsx komponentu
-u Table.jsx komponentu importujemo Row.jsx komponentu
-funkciji Table dodajemo parametar ({ item })
-u Row.jsx komponenti, Row funkciji dodajemo parametar ({ item })
-u tr elementu dodajemo Object.entries() metodu
-kreiramo Cell.jsx komponentu
-u Row.jsx komponentu importujemo Cell.jsx komponentu
-u return izjavi, Cell komponenti dodajemo prop
-u Cell.jsx komponenti, Cell funkciji dodajemo parametar ({ cellData })


Chapter 16: React Router
-instaliramo biblioteku u terminalu npm i react-router-dom
-u index.js fajl importujemo react-router komponente
-u App.js fajl importujemo react-router komponente
-u App.js fajlu, u return izjavi, Route komponenti dodajemo atribute path i element


Chapter 17: Router Hooks and Links
-u Header.jsx komponenti, Header funkciji dodajemo prop ({title})
-u App.js fajlu, Header komponenti dodajemo prop title
-u Navbar.jsx komponenti, Navbar funkciji dodajemo prop ({ search, setSearch})
-u Navbar.jsx komponenti, form elementi dodajemo onSubmit dogadaj
-kreiramo label element sa htmlFor atributom
-kreiramo input element sa vise atributa
-input elementu dodajemo onChange dogadaj
-u Navbar.jsx komponentu importujemo Link komponentu
-kreiramo ul element i unutar njega vise li elemenata
-unutar li elemenata dodajemo Link komponentu sa atributom to
-u App.js fajlu kreiramo const [search, setSearch] = useState('')
-kreiramo  const [posts, setPosts] = useState([ { ... } ])
-kreiramo const [searchResults, setSearchResults] = useState([])
-u return izjavi, Navbar komponenti dodajemo props search i setSearch
-u Route komponenti, unutar element atributa, Home komponenti dodajemo prop posts
-u Home.jsx komponenti, Home funkciji dodajemo prop ({ posts })
-kreiramo Feed.jsx komponentu
-u Home.jsx komponentu importujemo Feed.jsx komponentu
-dodajemo uslov ternarni operator posts.length
-u Feed.jsx komponenti, Feed funkciji dodajemo parametar ({ posts })
-kreiramo Post.jsx komponentu
-u Feed.jsx komponentu importujemo Post.jsx komponentu
-u return izjavi dodajemo posts.map metodu
-u Post.jsx komponentu importujemo Link komponentu
-u Post.jsx komponenti, Post funkciji dodajemo prop ({ post })
-u return izjavu kreiramo Link komponentu sa atributom to
-unutar Link komponente kreiramo h2 i p element
-ispod Link elementa kreiramo p element
-unutar p elementa dodajemo ternarni uslov 
-u PostPage.jsx komponentu importujemo useParams i Link
-u PostPage.jsx komponenti, PostPage funkciji dodajemo prop ({posts, handleDelete})
-kreiramo varijablu const { id } = useParams()
-kreiramo post varijablu
-u article element dodajemo uslov ako postoji objava {post && ... }
-kreiramo button element sa onClick dogadajem
-u App.js fajlu, PostPage komponenti dodajemo prop posts i handleDelete
-u PostPage.jsx komponentu dodajemo uslov ako objava ne postoji {!post && ... }
-u App.js fajlu kreiramo handleDelete funkciju
-u handleDelete funkciji kreiramo postsList varijablu
-u handleDelete funkciju dodajemo setPosts(postsList)
-u handleDelete funkciji kreiramo navigate varijablu
-u App.js fajlu kreiramo const [postTitle, setPostTitle] = useState('')
-u App.js fajlu kreiramo const [postBody, setPostBody] = useState('')
-kreiramo handleSubmit funkciju
-u App.js fajlu, NewPost komponenti dodajemo vise props
-u NewPost.jsx komponenti, NewPost funkciji dodajemo vise props parametara ({})
-kreiramo form element sa onSubmit dogadajem
-unutar onSubmit dogadaja proslijedujemo handleSubmit funkciju
-kreiramo label element sa htmlFor atributom
-kreiramo input element sa vise atributa
-input element dodajemo onChange dogadaj unutar kojeg proslijedujemo anonimnu funkciju
-kreiramo jos jedan label element sa htmlFor atributom
-kreiramo textarea element sa vise atributa
-textarea elementu dodajemo onChange dogadaj unutar kojeg proslijeduejmo vrijednost anonimne funkcije
-kreiramo button Submit element
-u App.js fajlu, unutar handleSubmit funkcije, kreiramo id varijablu
-kreiramo datetime varijablu
-u terminalu instaliramo paket npm i date-fns
-u App.js fajl importujemo format komponentu
-u handleSubmit funkciji kreiramo varijablu objekt newPost
-kreiramo varijablu niz allPosts 
-dodajemo setPosts(allPosts)
-dodajemo setPostTitle('')
-dodajemo setPostBody('')
-dodajemo varijablu navigate 
-u App.js fajlu kreiramo useEffect() React hook
-u useEffect() React hook, unutar callback funkcije, kreiramo filteredResults varijablu
-u callback funkciji dodajemo setSearchResults(...)
-u Missing.jsx komponentu importujemo Link komponentu
-u return izjavi kreiramo h2 i p elemente
-u Footer.jsx komponenti kreiramo today varijablu
-u About.jsx komponeti kreiramo p element


Chapter 18: Flexbox Components
-uredivanje css fajla


Chapter 19: Axios API Request
-kreiramo axios_data folder i unutar njega db.json fajl
-u terminalu instaliramo biblioteku axios npm i axios
-kreiramo  const [posts, setPosts] = useState([])
-kreiramo api folder i unutar njega posts.jsx komponentu
-u posts.jsx komponentu importujemo axios biblioteku
-eksportujemo axios.create({ ... })
-u terminalu pokrenemo json server - npx json-server -p 3500 -w axios_data/db.json
-u App.js fajl importujemo api
-kreiramo jos jedan useEffect() React hook
-u useEffect(), unutar callback funkcije, kreiramo fetchPosts asinhronu funkciju
-u fetchPosts funkciju, kreiramo try - catch blokove koda
-u try bloku koda kreiramo response varijablu
-u try blok koda dodajemo setPosts
-u catch blok koda dodajemo else uslov
-funkciji handleSubmit dodajemo async
-u funkciju handleSubmit dodajemo try - catch blok koda
-u try blok koda kreiramo response varijablu
-funkciji handleDelete dodajemo async
-u funkciju handleDelete dodajemo try - catch blokove koda
-kreiramo handleEdit asinhronu funkciju sa parametrom id
-kreiramo const [editTitle, setEditTitle] = useState('')
-kreiramo const [editBody, setEditBody] = useState('')
-u handleEdit funkciji kreiramo varijable datetime i updatedPost 
-kreiramo try - catch blokove koda
-u try blok koda kreiramo response varijablu
-u try blok koda dodajemo setPosts
-u setPosts dodajemo posts.map metodu
-u try blok koda dodajemo setEditTitle(''), setEditBody('') i navigate('/')
-kreiramo novu komponentu EditPost.jsx
-u EditPost.jsx komponentu importujemo useParams i Link komponente
-funkciji EditPost dodajemo parametre props ({ ... })
-kreiramo id i post varijable
-post varijable dodajemo posts.find() metodu
-kreiramo useEffect() React hook
-u useEffect() React hook, unutar callback funkcije dodajemo uslov if (post)
-u if uslovu dodajemo setEditTitle i setEditBody
-u return izjavi dodajemo uslov {editTitle && ( ... )}
-form elementu dodajemo onSubmit dogadaj
-input elementima dodajemo atribute i dogadaje
-button elementu dodajemo onClick dogadaj
-u App.js fajl importujemo EditPost.jsx komponentu
-u App.js fajlu, kreiramo komponentu Route sa atributima path='/edit:id' i element
-element atributu dodajemo EditPost komponentu
-komponenti EditPost dodajemo vise props
-u EditPost.jsx komponentu dodajemo uslov {!editTitle && ( ... )}
-u PostPage.jsx komponenti, u uslovu {post && ...} kreiramo Link komponentu
-u komponenti Link kreiramo button element Edit Post


Chapter 20: Custom React Hooks
-kreiramo hooks folder
-u hooks folderu kreiramo useWindowSize.jsx komponentu
-u useWindowSize.jsx komponenti kreiramo const [windowSize, setWindowSize] = useState({ ... })
-kreiramo useEffect() React hook
-u useEffect() React hook, unutar callback funkcije, kreiramo handleResize funkciju
-u handleResize funkciju dodajemo setWindowSize({ ... })
-u useEffect(), unutar callback funkcije pozivamo handleResize funkciju
-window objektu dodajemo addEventListener
-kreiramo cleanUp funkciju
-u cleanUp funkciji dodajemo window.removeEventListener
-u callback funkciju dodajemo return cleanUp
-u return izjavi od useWindowSize funkcije dodajemo windowSize
-u App.js fajl importujemo useWindowSize
-kreiramo const { width, height } = useWindowSize()
-u return izjavi, komponenti Header dodajemo prop width
-u Header.jsx komponenti importujemo React ikonice
-u funkciji Header, dodajemo parametar prop width
-u return izjavi dodajemo ternarni uslov za pojavljivanje ikonica kada se velicina ekrana smanjuje ili povecava
-u hooks folderu kreiramo useAxiosFetch.jsx komponentu sa parametrom dataUrl
-u useAxiosFetch.jsx komponenti kreiramo tri useState()
-kreiramo useEffect() React hook
-u useEffect() React hook, unutar callback funkcije kreiramo varijablu isMounted
-kreiramo varijablu source
-kreiramo fetchData asinhronu funkciju
-u fetchData funkciju dodajemo setIsLoading
-kreiramo try - catch - finally blokove koda
-u try blok koda kreiramo varijablu response
-dodajemo uslov if(isMounted)
-u if uslov dodajemo setData i setFetchError
-u catch blok koda dodajemo uslov if(isMounted)
-u if uslov dodajemo setFetchError i setData
-u finally blok koda dodajemo uslov isMounted && ... 
-pozivamo fetchData funkciju
-kreiramo cleanUp funkciju
-u cleanUp funkciju dodajemo isMounted = false i source.cancel()
-u return izjavi od funkcije useAxiosFetch dodajemo data, fetchError i isLoading
-u App.js fajl importujemo useAxiosFetch komponentu
-u App.js fajl dodajemo const { data, fetchError, isLoading } = useAxiosFetch(...)
-brisemo prvi useEffect()
-kreiramo novi useEffect() i unutar callback funkcije dodajemo setPosts(data)
-u App.js fajlu, u Route sa Home komponentom, Home komponenti dodajemo props fetchError i isLoading
-u Home.jsx komponenti, funkciji Home dodajemo parametar props fetchError i isLoading
-u return izjavi dodajemo uslov {isLoading && ... }
-dodajemo uslov {!isLoading && fetchError && ... }
-dodajemo uslov {!isLoading && !fetchError && ... }


Chapter 21: Context API & useContext Hook
-kreiramo context folder
-kreiramo DataContext.jsx komponentu
-u DataContext.jsx komponenti kreiramo varijablu DataContext 
-eksportujemo funkciju DataProvider sa parametrom children
-u funkciju DataProvider, unutar return izjave, dodajemo DataContext.Provider komponentu
-komponenti DataContext.Provider dodajemo prop value
-u prop value dodajemo width
-unutar komponente DataContext.Provider dodajemo children
-u App.js fajl importujemo komponentu DataProvider
-u App.js fajlu, unutar return izjave, dodajemo komponentu DataProvider
-prebacujemo vise stvari iz App.js u DataContext.jsx komponentu
-u Header.jsx komponenti, Header funkciji ostavljamo samo title kao parametar prop
-importujemo useContext React hook
-importujemo DataContext.jsx komponentu
-kreiramo varijablu const { width } = useContext(DataContext)
-u App.js fajlu, Header komponenti brisemo prop width
-u Navbar.jsx komponentu importujemo useContext React hook
-importujemo DataContext.jsx komponentu
-funkciji Navbar brisemo parametre props
-kreiramo const { search, setSearch } = useContext(DataContext)
-u App.js fajlu, komponenti Navbar brisemo props
-u DataContext.jsx komponenti, unutar DataContext.Provider, u prop value dodajemo 
search, setSearch,  searchResults, fetchError, isLoading
-u Home.jsx komponentu importujemo useContext React hook
-importujemo DataContext.jsx komponentu
-u funkciji Home brisemo parametre props-
-kreiramo const { searchResults, fetchError, isLoading } = useContext(DataContext)
-u App.js fajlu, komponenti Home brisemo props
-u NewPost.jsx komponentu importujemo useContext React hook
-importujemo DataContext.jsx komponentu
-u funkciji NewPost brisemo parametre props
-kreiramo const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody } = useContext(DataContext)
-u DataContext.jsx komponenti, unutar DataContext.Provider, prop value dodajemo 
handleSubmit, postTitle, setPostTitle, postBody, setPostBody
-u App.js fajlu, komponenti EditPost brisemo props
-u EditPost.jsx komponentu importujemo useContext React hook
-importujemo DataContext.jsx komponentu
-u EditPost funkciji brisemo parametre props
-kreiramo const { posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle} = useContext(DataContext)
-u DataContext.jsx komponenti, unutar DataContext.Provider, prop value dodajemo 
posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
-u PostPage.jsx komponentu importujemo useContext React hook
-importujemo DataContext.jsx komponentu
-u funkciji PostPage brisemo parametre props
-kreiramo const { posts, handleDelete } = useContext(DataContext)
-u DataContext.jsx komponenti, unutar DataContext.Provider, prop value dodajemo handleDelete
-u App.js fajlu, komponenti PostPage brisemo props
-u Header.jsx komponentu importujemo useWindowSize komponentu
-kreiramo const { width } = useWindowSize()
-u NewPost.jsx komponenti kreiramo const { posts, setPosts } = useContext(DataContext)
-kreiramo handleSubmit funkciju
-kreiramo varijablu navigate
-u PostPage.jsx komponenti kreiramo handleDelete funkciju
-kreiramo const { posts, setPosts } = useContext(DataContext)
-kreiramo varijablu navigate
-u EditPage.jsx komponenti kreiramo const { posts, setPosts } = useContext(DataContext)
-kreiramo handleEdit funkciju
-kreiramo navigate varijablu


Chapter 22: Easy Peasy Redux
-u terminalu instaliraom biblioteku Easy Peasy Redux - npm install easy-peasy
-kreiramo store.jsx komponentu
-u store.jsx komponenti importujemo funkcije iz biblioteke easy-peasy
-eksportujemo funkciju createStore
-kreiramo stanja i funkcije koje ce da mijenjaju ta stanja
-kreiramo postCount funkciju
-kreiramo getPostById funkciju
-kreiramo savePost funkciju
-kreiramo deletePost funkciju
-kreiramo editPost funkciju
-u index.js fajl importujemo StoreProvider komponentu
-importujemo store.jsx komponentu
-komponenti StoreProvider dodajemo store={store}
-u App.js fajl importujemo useStoreActions
-u Navbar.jsx komponentu importujemo useStoreState i useStoreActions
-kreiramo varijable posts, search, setSearch i setSearchResults
-kreiramo useEffect() React hook
-u Home.jsx komponentu importujemo useStoreState
-u funkciji Home dodajemo parametre props isLoading i fetchError
-kreiramo const { searchResults } = useStoreState((state) => state.searchResults)
-u PostPage.jsx komponentu importujemo useStoreState i useStoreActions
-kreiramo deletePost, getPostById i post varijable
-u handleDelete funkciju dodajemo funkciju deletePost(id)
-u NewPost.jsx komponentu importujemo useStoreState i useStoreActions
-kreiramo posts, postTitle i postBody varijable
-kreiramo savePost, setPostTitle i setPostBody funkcije
-u funkciju handleSubmit dodajemo savePost(newPost)
-u komponentu EditPost.jsx importujemo useStoreState i useStoreActions
-kreiramo varijable posts, editTitle i editBody
-kreiramo funkcije editPost, setEditTitle i setEditBody
-kreiramo varijable getPostById i post 
-u handleEdit funkcije dodajemo editPost(updatedPost)
-u Footer.jsx komponentu importujemo useStoreState
-kreiramo postCount varijablu
