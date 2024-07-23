import React from "react";
import Image from "next/image";

type Business = {
  name: string;
  url: string;
  logo: string;
  about: string;
  boycottSteps: string[];
};

type Stats = {
  energyProduced: string;
  capacityPayments: string;
  paymentsForProducedElectricity: string;
  extraPayments: string;
};

type IPP = {
  name: string;
  parentCompany: string;
  stats: Stats;
  businesses: Business[];
};

type IPPCardProps = {
  ipp: IPP;
};

const IPPCard = ({ ipp }: IPPCardProps) => {
  return (
    <div className="mb-8 p-4 border rounded shadow-md bg-gray-700">
      <h3 className="text-xl font-semibold mb-2 text-gray-100">{ipp.name}</h3>
      <p className="text-gray-300">
        <strong>Parent Company:</strong> {ipp.parentCompany}
      </p>
      <p className="text-gray-300">
        <strong>Energy Produced (Fiscal Year):</strong>{" "}
        {ipp.stats.energyProduced}
      </p>
      <p className="text-gray-300">
        <strong>Capacity Payments:</strong> {ipp.stats.capacityPayments}
      </p>
      <p className="text-gray-300">
        <strong>Payments for Produced Electricity:</strong>{" "}
        {ipp.stats.paymentsForProducedElectricity}
      </p>
      <p className="text-gray-300">
        <strong>Extra Payments:</strong> {ipp.stats.extraPayments}
      </p>
      <p className="text-gray-300">
        <strong>Associated Businesses:</strong>
      </p>
      <ul className="mt-2 text-gray-300 list-none">
        {ipp.businesses.map((business, idx) => (
          <li key={idx} className="mb-2">
            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
              <Image
                src={business.logo}
                alt={`${business.name} logo`}
                width={120}
                height={120}
                className="rounded"
              />
              <div>
                <a
                  href={business.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  {business.name}
                </a>
                <p className="text-sm text-gray-400">{business.about}</p>
                <p className="text-sm text-gray-400 mt-1">What to do ?</p>
                <ul className="list-disc ml-6 text-gray-400">
                  {business.boycottSteps.map((step, stepIndex) => (
                    <li key={stepIndex} className="text-sm">
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IPPCard;
