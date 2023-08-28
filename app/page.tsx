import Link from "next/link";
import { cookies } from "next/headers";
import { PagePropsInterface } from "@/interfaces/page-props.interface";
import PetHeader from "@/features/PetHeader/PetHeader.component";
import PetList from "@/features/PetList/PetList.component";
import PetFooter from "@/features/PetFooter/PetFooter.component";
import PetFilter from "@/features/PetFilter/PetFilter.component";
import PetPaginator from "@/features/PetPaginator/PetPaginator.component";
import { getToken } from "@/services/auth.service";
import { getAnimals } from "@/services/animal.service";

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
