import { PagePropsInterface } from "./page-props.interface";
export interface PetidPropsInterface extends PagePropsInterface {
  params: {
    petid: string;
  };
}
