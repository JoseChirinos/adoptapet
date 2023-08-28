import { PetidPropsInterface } from "@/interfaces/petid-props.interface";
import PetDetail from "@/features/PetDetail/PetDetail.component";
import { getToken } from "@/services/auth.service";
import { getAnimal } from "@/services/animal.service";

export default async function PetId({ params }: PetidPropsInterface) {
  const { petid } = params;
  const petIdNumber: number = petid ? +petid : 0;

  const responseToken = await getToken();
  if (petIdNumber === 0) {
    return <div>ID INCORRECT</div>;
  }
  const petData = await getAnimal(responseToken.access_token, petIdNumber);

  return (
    <div>
      <PetDetail petData={petData?.animal} />
    </div>
  );
}
