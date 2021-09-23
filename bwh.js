const veid = "key";
const api_key = "private_key";
let url = "https://api.64clouds.com/v1/getServiceInfo?veid="+veid+"&api_key="+api_key;
$httpClient.get(url, function(error, response, data){
let resp = JSON.parse(data)
  let data_next_reset = resp["data_next_reset"];
  let datares = (resp["data_counter"] / (1024 * 1024 * 1024)).toFixed(2);
  let datatotal = (resp["plan_monthly_data"] / (1024 * 1024 * 1024)).toFixed(0);
  let reset = redate(data_next_reset);
  $done({
   title: "𝔅𝔞𝔫𝔡𝔴𝔞𝔤𝔬𝔫𝔤 ℌ𝔬𝔰𝔱",
   icon: "pc",
   icon_color: "#4D4B2D",
   content: "DATA： " + datares + "/"+datatotal+"G\n"+"RESET： " + reset
  });
});
function redate(datein) {
  let da = new Date(datein * 1000);
  let year = da.getFullYear();
  let month = da.getMonth() + 1;
  let date = da.getDate();
  return [year, month, date].join("-");
}
