const axios = require("axios");
const { DateTime } = require("luxon");

const chainID = "G52TJLLbDSxYXsijNMpKFB6kAyDVRd9DGWVWYBh86Z8sEXm1i";

const BASE_URL = "https://magellan.columbus.camino.foundation/v2";

const api = axios.create({
  baseURL: BASE_URL,
});

function nFormatter(num, digits) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
}

module.exports = async function () {
  const currentDate = DateTime.now().setZone("utc");
  const startDate = currentDate.minus({ days: 7 });
  const txfeeAggregates = await api.get(
    `/txfeeAggregates?chainID=${chainID}&startTime=${startDate}&endTime=${currentDate.toISO()}`
  );
  const aggregates = await api.get(
    `/aggregates?chainID=${chainID}&startTime=${startDate}&endTime=${currentDate.toISO()}`
  );
  const txfee = nFormatter(txfeeAggregates.data.aggregates.txfee, 1);

  const numOfTransaction = nFormatter(
    aggregates.data.aggregates.transactionCount,
    1
  );
  const validators = await axios.post(
    `https://columbus.camino.foundation/ext/bc/P`,
    {
      jsonrpc: "2.0",
      method: "platform.getCurrentValidators",
      params: {
        subnetID: null,
        nodeIDs: [],
      },
      id: 1,
    }
  );
  const numberOfValidators = validators.data.result.validators.length;
  return { txfee, numOfTransaction, numberOfValidators };
};
