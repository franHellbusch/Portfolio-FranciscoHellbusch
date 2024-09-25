import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { Experience } from "@/models";

export const getExperienceList = async (): Promise<Experience[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "work"));
    const experienceList: Experience[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data() as Omit<Experience, "id">;
      experienceList.push({ id: doc.id, ...data });
    });

    // Función para convertir la fecha en formato "Month Year" a un objeto Date
    const parseStartDate = (dateString: string) => {
      const [startDate] = dateString.split(" - "); // Toma solo la parte antes de " - "
      const [month, year] = startDate.split(" ");
      const monthIndex = new Date(Date.parse(month + " 1, 2021")).getMonth(); // Usamos un año arbitrario
      return new Date(parseInt(year), monthIndex); // Año y mes
    };

    // Ordenar el array por fecha
    experienceList.sort((a, b) => {
      const dateA = parseStartDate(a.date); // Asegúrate de que 'date' es el campo correcto
      const dateB = parseStartDate(b.date); // Asegúrate de que 'date' es el campo correcto

      // Manejar el caso de "Present"
      const isPresentA = a.date.includes("Present");
      const isPresentB = b.date.includes("Present");

      // Si ambos son "Present", son iguales en términos de orden
      if (isPresentA && isPresentB) return 0;

      // Si A es "Present", debe ir al final
      if (isPresentA) return 1;
      // Si B es "Present", debe ir al final
      if (isPresentB) return -1;

      return dateA.getTime() - dateB.getTime(); // Ordena de más antiguo a más reciente
    });

    return experienceList;
  } catch (error) {
    console.error(error);
    return [];
  }
};
