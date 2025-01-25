"use client";
import React, { useState } from "react";
import { GiPhotoCamera } from "react-icons/gi";
import { FaCamera } from "react-icons/fa";
import { CiCamera } from "react-icons/ci";

interface CardProps {
  type: string;
  icon: React.ComponentType;
  price: number;
  features: string[];
  isSelected: boolean;
  onSelect: () => void;
}

const Card: React.FC<CardProps> = ({
  type,
  icon: Icon,
  price,
  features,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 border p-6 rounded-2xl shadow-md transition-all cursor-pointer ${
        isSelected ? "bg-[#E8E4F4] text-[#6138BD]" : "hover:shadow-lg"
      }`}
      onClick={onSelect}
    >
      <div
        className={`text-4xl ${
          isSelected ? "text-[#6138BD]" : "text- text-[#11204D]"
        }`}
      >
        <Icon />
      </div>
      <h3 className="text-xl text-[#11204D] font-medium capitalize">{type}</h3>
      <p className="text-4xl text-[#11204D] font-semibold">${price}</p>
      <span>includes:</span>
      <ul className="list-inside space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="text-[#11204D] text-sm text-center border-b border-gray-200"
          >
            {feature}
          </li>
        ))}
      </ul>
      <button
        className={`mt-4 px-6 py-2 rounded-xl transition-all ${
          isSelected
            ? "bg-[#6138BD] text-white"
            : "bg-[#11204D] text-white hover:bg-blue-600"
        }`}
      >
        Contact Me
      </button>
    </div>
  );
};

const Plans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(
    "Gold Package"
  );

  const plans = [
    {
      type: "Silver Package",
      icon: CiCamera,
      price: 29,
      features: [
        "1 Hour Photography",
        "60 - 100 images per shoot",
        "Password protected gallery",
        "Personalized website",
      ],
    },
    {
      type: "Gold Package",
      icon: GiPhotoCamera,
      price: 49,
      features: [
        "5 Hour Photography",
        "100 - 200 images per shoot",
        "Password protected gallery",
        "Personalized website",
      ],
    },
    {
      type: "Platinum Package",
      icon: FaCamera,
      price: 99,
      features: [
        "10 Hour Photography",
        "200 - 400 images per shoot",
        "Password protected gallery",
        "Personalized website",
      ],
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto p-3 sm:p-6 md:p-8 flex flex-col justify-center items-center md:py-16 jost-font gap-6">
      <h1 className="text-2xl md:text-4xl">Plans & Pricing</h1>
      <h2 className="text-lg md:text-xl text-gray-500">
        Tailored Packages to Fit Your Vision
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.type}
            type={plan.type}
            icon={plan.icon}
            price={plan.price}
            features={plan.features}
            isSelected={selectedPlan === plan.type}
            onSelect={() => setSelectedPlan(plan.type)}
          />
        ))}
      </div>
    </section>
  );
};

export default Plans;
