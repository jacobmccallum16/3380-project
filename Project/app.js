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
            <a href="#" className="nav-link active">Home</a>
            <a href="#divSchedule" className="nav-link">Coffee</a>
            <a href="#divStandings" className="nav-link">Tea</a>
            <a href="#divTeamCards" className="nav-link">Chocolate</a>
            <a href="index.html" className="nav-link">About</a>
          </div>
      </div>
      </div>
    </nav>
  </header>
  )
}

const Card = (props) => {

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/${props.link}`);
        const data = await response.json();
        setProductData(data);
        console.log(data)
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
    <div className="card">
      <div className="card-header">
        Featured
      </div>
      {/* <img src={productData.image} class="card-img-top" alt="..."></img> */}
      <div className="card-body">
        {/* <h5 className="card-title">{productData.title}</h5> */}
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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

const CardCol = (props) => {
  return (
    <div className={COLS[props.cols]}>
      <Card link={props.link} />
    </div>
  )
}

const Main = () => {
  return (
    <main className="bg-teal-100 text-center p-3">
      <div className="bg-teal-200 rounded-3 pt-3">
        Container!!
        <div className="row g-3 p-3">
          <CardCol cols="4" link="products/1"/>
          <CardCol cols="4" link="products/2"/>
          <CardCol cols="4" link="products/3"/>
          <CardCol cols="4" link="products/4"/>
          <CardCol cols="4" link="products/5"/>
          <CardCol cols="4" link="products/6"/>
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
