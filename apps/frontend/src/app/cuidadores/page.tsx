"use client";
import { useState } from "react";
import Link from "next/link";
import { Caregiver } from "../types/caregiver";
import { FilterOptions } from "../types/filters";

const caregivers: Caregiver[] = [
  {
    id: 1,
    name: "Maria Oliveira",
    gender: "female",
    age: 45,
    city: "São Paulo",
    description:
      "Cuidadora comprometida com o cuidado e conforto dos idosos, com ampla experiência.",
    image: "https://via.placeholder.com/150?text=Maria+Oliveira",
  },
  {
    id: 2,
    name: "Carlos Souza",
    gender: "male",
    age: 38,
    city: "Rio de Janeiro",
    description:
      "Cuidador formado com grande experiência em pacientes com demência.",
    image: "https://via.placeholder.com/150?text=Carlos+Souza",
  },
  {
    id: 3,
    name: "Fernanda Costa",
    gender: "female",
    age: 30,
    city: "Minas Gerais",
    description:
      "Cuidadora atenciosa e gentil para pacientes totalmente dependentes.",
    image: "https://via.placeholder.com/150?text=Fernanda+Costa",
  },
  {
    id: 4,
    name: "João Pereira",
    gender: "male",
    age: 50,
    city: "São Paulo",
    description: "Cuidador especializado em recuperação pós cirurgia",
    image: "https://via.placeholder.com/150?text=João+Pereira",
  },
  {
    id: 5,
    name: "Ana Ribeiro",
    gender: "female",
    age: 35,
    city: "Rio de Janeiro",
    description:
      "Cuidadora bilíngue que oferece serviços em portugês e inglês.",
    image: "https://via.placeholder.com/150?text=Ana+Ribeiro",
  },
  {
    id: 6,
    name: "Clara Almeida",
    gender: "female",
    age: 28,
    city: "São Paulo",
    description: "Cuidadora apaixonada com foco em pacientes com Alzheimer.",
    image: "https://via.placeholder.com/150?text=Clara+Almeida",
  },
];

const CaregiversPage = () => {
  const [filteredCaregivers, setFilteredCaregivers] =
    useState<Caregiver[]>(caregivers);
  const [age, setAge] = useState<[number, number] | undefined>(undefined); // Age as a tuple for min and max
  const [city, setCity] = useState<string>("");
  const [gender, setGender] = useState<string>("");

  const handleFilterChange = () => {
    let filteredList = caregivers;

    // Age Filter
    if (age) {
      const [minAge, maxAge] = age; // Assuming `age` is an array with [minAge, maxAge]
      filteredList = filteredList.filter(
        (caregiver) => caregiver.age >= minAge && caregiver.age <= maxAge
      );
    }

    // City Filter
    if (city) {
      filteredList = filteredList.filter((caregiver) =>
        caregiver.city.toLowerCase().includes(city.toLowerCase())
      );
    }

    // Gender Filter
    if (gender) {
      filteredList = filteredList.filter(
        (caregiver) => caregiver.gender === gender
      );
    }

    setFilteredCaregivers(filteredList);
  };

  // Clear all filters
  const clearFilters = () => {
    setAge(undefined); // Reset age filter
    setCity(""); // Reset city filter
    setGender(""); // Reset gender filter
    setFilteredCaregivers(caregivers); // Reset filtered list to original caregivers list
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6">Cuidadores Disponíveis</h1>

      <div className="filters bg-gray-50 rounded-lg p-6 shadow-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="mb-6">
          {/* Age Range Filter */}
          <div className="mb-4">
            <label htmlFor="minAge" className="block text-lg">
              Idade
            </label>
            <div className="flex gap-4 mt-2">
              <input
                id="minAge"
                type="number"
                placeholder="Idade Mínima"
                value={age?.[0] || ""}
                onChange={(e) =>
                  setAge([Number(e.target.value), age ? age[1] : 100])
                }
                className="p-2 border rounded"
              />
              <input
                id="maxAge"
                type="number"
                placeholder="Idade Máxima"
                value={age?.[1] || ""}
                onChange={(e) =>
                  setAge([age ? age[0] : 0, Number(e.target.value)])
                }
                className="p-2 border rounded"
              />
            </div>
          </div>

          {/* City Filter */}
          <div className="mb-4">
            <label htmlFor="city" className="block text-lg">
              Cidade
            </label>
            <input
              id="city"
              type="text"
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="mt-2 p-2 border rounded"
            />
          </div>

          {/* Gender Filter */}
          <div className="mb-4">
            <span className="text-lg">Gênero</span>
            <div className="mt-2 flex gap-4">
              <label>
                <input
                  type="checkbox"
                  value="female"
                  checked={gender === "female"}
                  onChange={() =>
                    setGender(gender === "female" ? "" : "female")
                  }
                  className="mr-2"
                />
                Feminino
              </label>
              <label>
                <input
                  type="checkbox"
                  value="male"
                  checked={gender === "male"}
                  onChange={() => setGender(gender === "male" ? "" : "male")}
                  className="mr-2"
                />
                Masculino
              </label>
            </div>
          </div>

          {/* Apply Filters Button */}
          <button
            onClick={handleFilterChange}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
          >
            Aplicar Filtros
          </button>

          {/* Clear Filters Button */}
          <button
            onClick={clearFilters}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Limpar Filtros
          </button>
        </div>
      </div>

      {/* Caregivers List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 object-center">
        {filteredCaregivers.map((caregiver) => (
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
};

export default CaregiversPage;
