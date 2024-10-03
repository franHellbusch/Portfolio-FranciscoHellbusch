import { db } from "@/firebase/config";
import { ProjectCategory, ProjectModel } from "@/models";
import { collection, getDocs, query, where } from "firebase/firestore";

export const getProjectsList = async (category: string | null): Promise<ProjectModel[]> => {
  try {
    const reference = collection(db, "proyects");
    const q = category ? query(reference, where("category", "==", category)) : reference;

    const querySnapshot = await getDocs(q);
    const projectsList: ProjectModel[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<ProjectModel, "id">;
      projectsList.push({ id: doc.id, ...data });
    });

    return projectsList;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getProjectsCategoryList = async (): Promise<ProjectCategory[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "proyectsCategories"));
    const projectsCategoryList: ProjectCategory[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<ProjectCategory, "id">;
      projectsCategoryList.push({ id: doc.id, ...data });
    });

    return projectsCategoryList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
