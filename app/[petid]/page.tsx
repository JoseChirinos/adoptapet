// import { useRouter } from "next/navigation";
import { PetidPropsInterface } from "@/interfaces/petid-props.interface";
import PetDetail from "@/features/PetDetail/PetDetail.component";

async function getToken() {
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
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
    body: formBody,
  });
  const data = await response.json();
  return data;
}

async function getAnimal(token: string, id: number) {
  const response = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
}

export default async function PetId({ params }: PetidPropsInterface) {
  const { petid } = params;
  const petIdNumber: number = petid ? +petid : 0;

  const responseToken = await getToken();
  console.log(responseToken);
  if (petIdNumber === 0) {
    return <div>ID INCORRECT</div>;
  }
  const { animal } = await getAnimal(responseToken.access_token, petIdNumber);

  return (
    <div>
      <PetDetail petData={animal} />
      {/* Hello {petid}
      <br />
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button> */}
    </div>
  );
}
