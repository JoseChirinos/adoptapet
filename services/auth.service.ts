export async function getToken() {
  const details: any = {
    grant_type: "client_credentials",
    client_id: "hrRNvkfrePWsnO0eWk2E4JPqzN32nYaWb8FTyvFtNLEMBivIJN",
    client_secret: "FBTCZRI8muC0FzEhs1FwrAP0qQWBNNfkDuEEj1BQ",
  };
  var formBody: any = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    next: { revalidate: 3000 },
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: formBody,
  });
  const data = await response.json();
  return data;
}
