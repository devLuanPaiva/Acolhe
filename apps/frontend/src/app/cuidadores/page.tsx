import Link from "next/link";
import CaregiverFilter from "@/components/CaregiverFilter";
import { Caregiver } from "../types/caregiver";
import { FilterOptions } from "../types/filters";

const caregivers = [
  {
    id: 1,
    name: "Lucas Oliveira",
    description:
      "Especializado em reabilitação física para idosos após cirurgias ou lesões.",
    image:
      "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gender: "masculino",
    age: "23",
  },
  {
    id: 2,
    name: "Beatriz Santos",
    description:
      "Cuidadora experiente em acompanhar pacientes com diabetes e hipertensão.",
    image:
      "https://images.pexels.com/photos/8560209/pexels-photo-8560209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gender: "feminino",
    age: "33",
  },
  {
    id: 3,
    name: "Carlos Mendes",
    description:
      "Oferece suporte para idosos com deficiência visual ou auditiva.",
    image:
      "https://images.pexels.com/photos/8942093/pexels-photo-8942093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    gender: "masculino",
    age: "25",
  },
  {
    id: 4,
    name: "Fernanda Costa",
    description:
      "Especialista em proporcionar companhia e suporte emocional para idosos.",
    image: "https://via.placeholder.com/150",
    gender: "feminino",
    age: "37",
  },
  {
    id: 5,
    name: "Rafael Lima",
    description:
      "Experiência com cuidados paliativos e suporte emocional para famílias.",
    image: "https://via.placeholder.com/150",
    gender: "masculino",
    age: "25",
  },
  {
    id: 6,
    name: "Clara Almeida",
    description:
      "Cuidadora bilíngue para famílias que necessitam de suporte em português e inglês.",
    image: "https://via.placeholder.com/150",
    gender: "feminino",
    age: "28",
  },
];

const handleFilterChange = (filters: FilterOptions) => {
  const { gender, ageRange, city } = filters;

  const filteredList = caregivers.filter((caregiver: Caregiver) => {
    const isGenderMatch = gender ? caregiver.genero === gender : true;
    const isAgeMatch =
      caregiver.idade >= ageRange[0] && caregiver.idade <= ageRange[1];
    const isCityMatch = city ? caregiver.cidade === city : true;

    return isGenderMatch && isAgeMatch && isCityMatch;
  });

  setFilteredCaregivers(filteredList);
};

export default function CaregiversPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Cuidadores Disponíveis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 object-center">
        {caregivers.map((caregiver) => (
          <Link
            key={caregiver.id}
            href={`/cuidadores/${caregiver.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={caregiver.image}
              alt={caregiver.name}
              className="w-full h-52 object-cover object-center rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{caregiver.name}</h2>
              <p className="text-gray-600">{caregiver.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
