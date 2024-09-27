import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { EducationModel, TechnologieModel } from "@/models";

export const getEducationList = async (): Promise<EducationModel[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "education"));
    const educationList: EducationModel[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<EducationModel, "id">;
      educationList.push({ id: doc.id, ...data });
    });

    return educationList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getTechnologiesList = async (): Promise<TechnologieModel[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "technologies"));
    const technologieList: TechnologieModel[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<TechnologieModel, "id">;
      technologieList.push({ id: doc.id, ...data });
    });

    return technologieList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
