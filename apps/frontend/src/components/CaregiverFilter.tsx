import React, { ChangeEvent } from "react";

interface CaregiverFilterProps {
  onFilterChange: (filter: {
    gender: string;
    ageRange: [number, number];
    city: string;
  }) => void;
}

const CaregiverFilter: React.FC<CaregiverFilterProps> = ({
  onFilterChange,
}) => {
  // State for the filter values
  const [gender, setGender] = React.useState<string>("");
  const [ageRange, setAgeRange] = React.useState<[number, number]>([18, 100]);
  const [city, setCity] = React.useState<string>("");

  // Handle changes in filter inputs
  const handleGenderChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setGender(event.target.value);
    onFilterChange({ gender: event.target.value, ageRange, city });
  };

  const handleAgeRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newAgeRange = [...ageRange] as [number, number]; // Cast the array as a tuple
    if (event.target.name === "min") {
      newAgeRange[0] = parseInt(event.target.value);
    } else if (event.target.name === "max") {
      newAgeRange[1] = parseInt(event.target.value);
    }

    setAgeRange(newAgeRange); // Now it's treated as [number, number]
    onFilterChange({ gender, ageRange: newAgeRange, city });
  };

  const handleCityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCity(event.target.value);
    onFilterChange({ gender, ageRange, city: event.target.value });
  };

  return (
    <div className="filter-container">
      <label>
        Gender:
        <select value={gender} onChange={handleGenderChange}>
          <option value="">Any</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label>
        Age:
        <input
          type="number"
          name="min"
          value={ageRange[0]}
          onChange={handleAgeRangeChange}
          placeholder="Min age"
        />
        <input
          type="number"
          name="max"
          value={ageRange[1]}
          onChange={handleAgeRangeChange}
          placeholder="Max age"
        />
      </label>

      <label>
        City:
        <select value={city} onChange={handleCityChange}>
          <option value="">Any</option>
          <option value="Rio de Janeiro">Rio de Janeiro</option>
          <option value="São Paulo">São Paulo</option>
          <option value="Minas Gerais">Minas Gerais</option>
        </select>
      </label>
    </div>
  );
};

export default CaregiverFilter;
