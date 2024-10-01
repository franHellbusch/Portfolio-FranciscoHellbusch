import { db } from "@/firebase/config";
import { ProyectCategory, ProyectModel } from "@/models";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getProyectsList = async (category: string | null): Promise<ProyectModel[]> => {
  try {
    const reference = collection(db, "proyects");
    const q = category ? query(reference, where("category", "==", category)) : reference;

    const querySnapshot = await getDocs(q);
    const proyectsList: ProyectModel[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<ProyectModel, "id">;
      proyectsList.push({ id: doc.id, ...data });
    });

    return proyectsList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProyectsCategoryList = async (): Promise<ProyectCategory[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "proyectsCategories"));
    const proyectsCategoryList: ProyectCategory[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<ProyectCategory, "id">;
      proyectsCategoryList.push({ id: doc.id, ...data });
    });

    return proyectsCategoryList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
