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
    description: "Experienced caregiver with a passion for elderly care.",
    image: "https://via.placeholder.com/150?text=Maria+Oliveira",
  },
  {
    id: 2,
    name: "Carlos Souza",
    gender: "male",
    age: 38,
    city: "Rio de Janeiro",
    description:
      "Certified caregiver, experienced in supporting people with dementia.",
    image: "https://via.placeholder.com/150?text=Carlos+Souza",
  },
  {
    id: 3,
    name: "Fernanda Costa",
    gender: "female",
    age: 30,
    city: "Minas Gerais",
    description: "Kind and attentive caregiver for elderly individuals.",
    image: "https://via.placeholder.com/150?text=Fernanda+Costa",
  },
  {
    id: 4,
    name: "João Pereira",
    gender: "male",
    age: 50,
    city: "São Paulo",
    description:
      "Caregiver specializing in elderly care and post-surgery recovery.",
    image: "https://via.placeholder.com/150?text=João+Pereira",
  },
  {
    id: 5,
    name: "Ana Ribeiro",
    gender: "female",
    age: 35,
    city: "Rio de Janeiro",
    description:
      "Bilingual caregiver offering support in Portuguese and English.",
    image: "https://via.placeholder.com/150?text=Ana+Ribeiro",
  },
  {
    id: 6,
    name: "Clara Almeida",
    gender: "female",
    age: 28,
    city: "São Paulo",
    description: "Compassionate caregiver with a focus on elderly well-being.",
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

      {/* Filters */}
      <div className="mb-6">
        {/* Age Range Filter */}
        <div className="mb-4">
          <label htmlFor="minAge" className="block text-lg">
            Age Range
          </label>
          <div className="flex gap-4 mt-2">
            <input
              id="minAge"
              type="number"
              placeholder="Min Age"
              value={age?.[0] || ""}
              onChange={(e) =>
                setAge([Number(e.target.value), age ? age[1] : 100])
              }
              className="p-2 border rounded"
            />
            <input
              id="maxAge"
              type="number"
              placeholder="Max Age"
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
            City
          </label>
          <input
            id="city"
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-2 p-2 border rounded"
          />
        </div>

        {/* Gender Filter */}
        <div className="mb-4">
          <span className="text-lg">Gender</span>
          <div className="mt-2 flex gap-4">
            <label>
              <input
                type="checkbox"
                value="female"
                checked={gender === "female"}
                onChange={() => setGender(gender === "female" ? "" : "female")}
                className="mr-2"
              />
              Female
            </label>
            <label>
              <input
                type="checkbox"
                value="male"
                checked={gender === "male"}
                onChange={() => setGender(gender === "male" ? "" : "male")}
                className="mr-2"
              />
              Male
            </label>
          </div>
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={handleFilterChange}
          className="px-4 py-2 bg-blue-500 text-white rounded mr-4"
        >
          Apply Filters
        </button>

        {/* Clear Filters Button */}
        <button
          onClick={clearFilters}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Clear Filters
        </button>
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
