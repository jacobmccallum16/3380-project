const Card = (props) => {
  const [data, setData] = useState(null);
  const [inCartQty, setInCartQty] = useState(0);
  const [cost, setCost] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`${URI}/${props.prodId}`);
        let result = await response.json();
        setData(result);
        // let price = data.price;
        // console.log(`price = ${price}`)
        let qty =
          localStorage.getItem(props.prodId) == null
            ? 0
            : localStorage.getItem(props.prodId);
        setInCartQty(qty);
        console.log(`${props.prodId}: ${inCartQty}`);
        // console.log(result)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div class="card">
      {data ? (
        <div class="frame-284">
          <img class="rectangle-1 rectangle" src={data.image} height="100" width="100"/>
          <div class="frame-283">
            <div class="flex-col-2 flex-col-8">
              <div class="vegan-powder inter-medium-fuscous-gray-18px">{data.title}</div>
              <p class="cloud-set-baked-sett inter-normal-suva-gray-12px">{data.origin}</p>
              <div class="price price-3 inter-semi-bold-fuscous-gray-16px">{formatAndCalculatePrice(data.price, inCartQty, setCost)}</div>
            </div>
          </div>
        </div>
      ) : (
        <div class="frame-284">
          <img class="rectangle-1 rectangle" height="100" width="100"/>
          <div class="frame-283">
            <div class="flex-col-2 flex-col-8">
              <div class="vegan-powder inter-medium-fuscous-gray-18px">data.title</div>
              <p class="cloud-set-baked-sett inter-normal-suva-gray-12px">data.origin</p>
              <div class="price price-3 inter-semi-bold-fuscous-gray-16px">formatPrice(cost)</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
