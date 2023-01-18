import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [money, setMoney] = useState(0);
  function onChange(event) {
    setMoney(event.target.value);
  }
  function onSubmit(event) {
    event.preventDefault();
    setMoney(0);
  }
  const [selectedCoin, setSelectedCoin] = useState("");
  function onCoinSelectChange(event) {
    let option = event.target.options[event.target.selectedIndex];
    option.selected = true;
    setSelectedCoin(JSON.parse(option.value));
  }
  console.log(coins);
  return (
    <div>
      <h1> The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong> Loading...</strong>
      ) : (
        <div>
          <label for="coin-select">Choose a coin: </label>
          <select
            onChange={onCoinSelectChange}
            value={JSON.stringify(selectedCoin)}
            id="coin-select"
          >
            <option value="">--Please choose an option--</option>
            {coins.map((coin) => (
              <option key={coin.id} value={JSON.stringify(coin)}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hl />
          <form onSubmit={onSubmit}>
            <input
              placeholer="your money..."
              type="number"
              onChange={onChange}
              value={money}
            ></input>
            {"$ equals to "}
            <span>
              {selectedCoin !== ""
                ? `${money / selectedCoin.quotes.USD.price} ${
                    selectedCoin.symbol
                  }`
                : null}
            </span>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
