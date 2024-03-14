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
            <a href="index.html" className="nav-link active">Home</a>
            <a href="#" className="nav-link">Coffee</a>
            <a href="tea.html" className="nav-link">Tea</a>
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

const Card1 = (props) => {

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`https://fakestoreapi.com/${props.link}`);
        let result = await response.json();
        setData(result);
        // console.log(result)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (params) => {
    fetchStuff(params)
  }
  return (
    <div className="card h-100">
      {data ? (
        <div className="card-header fw-bold">{data.id}: {data.title}</div>
      ) : (
        <div className="card-header">Featured</div>
      )}
      {data ? (
        <div className="card-body h-100">
          <img src={data.image} className="mb-1" height="150" width="150"></img>
          <p className="card-text">{data.description}</p>
        </div>
      ) : (
        <div className="card-body">
          <img className="mb-1" height="150" width="150"></img>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      )}
      <div className="card-footer">
        <button onClick={() => handleClick(props.link)} className="btn btn-primary">{props.link}</button>
      </div>
    </div>
  )
}

async function fetchStuff(params) {
  let obj = await fetch(`https://fakestoreapi.com/${params}`)
  let text = await obj.text()
  let data = JSON.parse(text)
  console.log(text)
  alert(params)
}

const COLS = ["col-auto", "col-12", 'col-12 col-lg-6', 'col-12 col-md-6 col-xl-4', 'col-12 col-sm-6 col-lg-4 col-xl-3']

const Card1Col = (props) => {
  return (
    <div className={COLS[props.cols]}>
      <Card1 link={props.link} />
    </div>
  )
}

const Card2Col = (props) => {

  const [data, setData] = useState(null);
  const [inCartQty, setInCartQty] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`https://fakestoreapi.com/${props.link}`);
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

const Main = () => {
  return (
    <main className="bg-teal-100 text-center p-3">
      <div className="bg-teal-200 rounded-3 pt-3">
        Container!!
        <div className="row g-3 p-3">
          <Card2Col cols="4" link="products/8" prodId="8"/>
          <Card2Col cols="4" link="products/4" prodId="4"/>
          <Card2Col cols="4" link="products/6" prodId="6"/>
          <Card2Col cols="4" link="products/7" prodId="7"/>
          <Card1Col cols="4" link="products/1" prodId="1"/>
          <Card1Col cols="4" link="products/3" prodId="3"/>
          <Card1Col cols="4" link="products/5" prodId="5"/>
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
