const {useState, useEffect} = React;

const Header = () => {
  return (
    <header>
    <nav className="navbar navbar-expand-md text-bg-teal">
      <div className="container-fluid px-3">
        <a href="" className="navbar-brand rounded-5 px-2 mb-0 h1 fw-bolder">
          Project
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle Navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav px-3">
            <a href="index.html" className="nav-link">Home</a>
            <a href="#" className="nav-link">Coffee</a>
            <a href="tea.html" className="nav-link active">Tea</a>
            <a href="#" className="nav-link">Chocolate</a>
            <a href="index.html" className="nav-link">About</a>
            <a href="cart.html" className="nav-link"><i className="bi bi-bag-fill"></i> Cart</a>
          </div>
      </div>
      </div>
    </nav>
  </header>
  )
}
const COLS = ["col-auto", "col-12", 'col-12 col-lg-6', 'col-12 col-md-6 col-xl-4', 'col-12 col-sm-6 col-lg-4 col-xl-3']

const CardCol = (props) => {

  const [data, setData] = useState(null);
  const [inCartQty, setInCartQty] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${URI}/${props.prodId}`);
        let result = await response.json();
        setData(result);
        let qty = localStorage.getItem(props.prodId) == null ? 0 : localStorage.getItem(props.prodId)
        setInCartQty(qty)
        console.log(`${props.prodId}: ${inCartQty}`)
        // console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (prodId, change) => {
    let prevQuantity = Number(localStorage.getItem(prodId))
    if (prevQuantity == null) {
      prevQuantity = 0
    }
    prevQuantity += change
    localStorage.setItem(prodId, prevQuantity)
    console.log(localStorage)
    setInCartQty(prevQuantity)
  }
  return (
    <div className={COLS[props.cols]}>
      {data ? (
        <div className="card h-100 px-1 py-2">
          <div className="card-body h-100 d-flex flex-column text-start pb-2">
            <div className="h-100">
              <div className="text-center mb-2">
                <img src={data.image} height="150" width="150"></img>
              </div>
              <h5 className="card-title text-start">{data.title}</h5>
              <h6 className="row">
                <span className="col-auto">{data.category}</span>
                <span className="ms-auto col-auto">{data.rating.rate} ⭐️</span>
              </h6>
              <p className="card-text text-start small">&emsp;{data.description}</p>
            </div>
            {inCartQty > 0 ? (
              <div className="text-end pt-2">
                <div className="btn-group">
                  <button onClick={() => handleClick(props.prodId, -1)} className="btn btn-red">&ensp;-1&ensp;</button>
                  <a href="cart.html" className="btn btn-light">&ensp;<b>{inCartQty}</b> in cart&ensp;</a>
                  <button onClick={() => handleClick(props.prodId, 1)} className="btn btn-green">&ensp;+1&ensp;</button>
                </div>
              </div>
            ) : (
              <div className="text-end pt-2">
                <button onClick={() => handleClick(props.prodId, 1)} className="btn btn-green">Add to Cart</button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="card h-100 pt-2">
          <div className="card-body h-100 d-flex flex-column text-start">
            <div className="h-100">
              <div className="text-center mb-2">
                <img height="150" width="150"></img>
              </div>
              <h5 className="card-title text-start">data.title</h5>
              <h6 className="row">
                <span className="col-auto">data.category</span>
                <span className="ms-auto col-auto">data.rating.rate ⭐️</span>
              </h6>
              <p className="card-text text-start small">&emsp;data.description</p>
            </div>
            <div className="text-end">
              <button onClick={() => handleClick(props.prodId)} className="btn btn-green">Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Figure out what's in the cart
let itemsInCart = [];
let localStorageLength = localStorage.length
for (let i = 0; i < localStorageLength; i++) {
  let key = localStorage.key(i)
  console.log(`key ${i}: ${key}`)
  if (Number(localStorage.getItem(key)) > 0) {
    itemsInCart.push(localStorage.key(i))
  }
}
console.log(`itemsInCart:`)
console.log(itemsInCart)

const URI = "http://127.0.0.1:3000/api"

const Main = () => {
  // state = {
  //   itemsInCart: itemsInCart
  // }

  return (
    <main className="bg-teal-100 text-center p-3">
      <div className="bg-teal-200 rounded-3 pt-3">
        Container!!
        <div className="row g-3 p-3">
          {/* {itemsInCart.map(item => {
            let link = `products/` + item
            return (<CardCol cols="4" link={link} prodId={item}/>)
          })} */}
          <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c72011e"/>
          <CardCol cols="4" link={URI} prodId="66049ec7d7c4bfda9c720122"/>
        </div>
      </div>
      Lots of text!
    </main>
  )
}

const Footer = () => {
  return (
    <footer className="text-bg-teal text-center p-1">
      Project
    </footer>
  )
}

class App extends React.Component {

  render() {
    return (
      <div className="container-fluid p-0 d-flex" id="reactDiv">
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
