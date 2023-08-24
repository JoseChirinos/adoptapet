import Link from "next/link";
import { cookies } from "next/headers";
import { PagePropsInterface } from "@/interfaces/page-props.interface";
import PetHeader from "@/features/PetHeader/PetHeader.component";
import PetList from "@/features/PetList/PetList.component";
import PetFooter from "@/features/PetFooter/PetFooter.component";
import PetFilter from "@/features/PetFilter/PetFilter.component";
import PetPaginator from "@/features/PetPaginator/PetPaginator.component";

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

async function getAnimals(token: string, page: number, limit: number = 30) {
  const response = await fetch(
    `https://api.petfinder.com/v2/animals?limit=${limit}&page=${page}`,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const data = await response.json();
  return data;
}

export default async function Home({ searchParams }: PagePropsInterface) {
  const { page } = searchParams;
  const currentPage: number = page ? +page : 1;

  const responseToken = await getToken();
  const { animals, pagination } = await getAnimals(
    responseToken.access_token,
    currentPage
  );

  return (
    <main>
      <PetHeader currentPage={currentPage}></PetHeader>
      <PetList petList={animals}></PetList>
      <PetPaginator
        currentPage={currentPage}
        totalPage={pagination?.total_pages}
      />
      <PetFooter></PetFooter>
      <PetFilter></PetFilter>
    </main>
  );
}
