'use client';

import React from 'react';
import {
  BrainCircuit,
  Cpu,
  Cloud,
  Database,
  GitCompare,
  ShieldCheck,
  Code2,
  Globe,
  Users,
  Languages,
  Handshake,
  Mic,
  UserCheck,
  Megaphone,
  ClipboardList,
  Presentation,
} from 'lucide-react';
import ConnectSection from '@/components/ConnectSection';

const technicalTrainings = [
  { label: 'Artificial Intelligence', icon: BrainCircuit },
  { label: 'Machine Learning & IoT', icon: Cpu },
  { label: 'Cloud Computing', icon: Cloud },
  { label: 'Big Data & Analytics', icon: Database },
  { label: 'DevOps', icon: GitCompare },
  { label: 'Networking & Security', icon: ShieldCheck },
  { label: 'Programming & Testing', icon: Code2 },
  { label: 'Databases', icon: Database },
  { label: 'ISTM', icon: Globe },
];

const nonTechnicalTrainings = [
  { label: 'Leadership', icon: Users },
  { label: 'POSH', icon: ShieldCheck },
  { label: 'Recruitment', icon: UserCheck },
  { label: 'Campus to Corporate', icon: Globe },
  { label: 'Language Enhancement', icon: Languages },
  { label: 'Team Building', icon: Handshake },
  { label: 'Customer Handling', icon: Mic },
  { label: 'Communication', icon: ClipboardList },
  { label: 'Sales', icon: Megaphone },
  { label: 'Presentation Skills', icon: Presentation },
];

const services = [
  {
    title: 'Training',
    description:
      'Whether you’re a start-up or an established enterprise looking to upskill your team, Omkkar Innovations can help your workforce prepare for tomorrow through our revolutionary and outcome-centric cloud corporate training programs. Corporate Training Solutions for employees that guarantee higher ROI. Increase your business ROI without burdening your training budget with Omkkar Innovations customized employee training and development programs. Omkkar innovations provides live instructor led online and classroom training in information technology areas. The course curriculum has been created and curated by industry experts, and delivered live by instructors with the objective to ensure that once the course is completed, learners achieve deep expertise in the chosen technology.',
    image: '/team3.jpg',
  },
  {
    title: 'Technologies We Cover',
    description:
      'We deliver best-in-class corporate training for employees working at different levels on emerging technologies like Cloud, AI & ML, Big Data, Blockchain, etc. Our team of expert trainers will empower your employees to upskill depending on the business needs in both Technical and Non-Technical space. Training has proven to be the way forward for career progression across verticals. It will also act as a motivating factor to retain talent within your organisation. We design bespoke training sessions to exactly meet your requirements and in turn help you drive productivity.',
    image: '/tech.jpg',
  },
];

const TrainingCard = ({ Icon, label }) => (
  <div className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
    <div className="bg-green-500 text-white rounded-full p-4 mb-4">
      <Icon size={28} />
    </div>
    <p className="text-sm font-medium text-gray-700">{label}</p>
  </div>
);

const OmkkarTrainingPage = () => {
  return (
    <div className="font-sans">
      {/* Banner */}
      <div className="relative mt-20 h-[300px] md:h-[400px] w-full">
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat z-0"
          style={{ backgroundImage: `url('/website-bg.jpg')` }}
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 flex flex-col justify-center items-center h-full text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-semibold">Omkkar Training</h1>
          <p className="mt-4 md:mt-8 text-sm md:text-base">Omkkar Innovations / Omkkar Training</p>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-12 px-4 sm:px-8 md:px-16 space-y-16">
        {services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              idx % 2 === 1 ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="w-full md:w-1/2">
              <img
                src={service.image}
                alt={service.title}
                className="w-full rounded-xl object-cover aspect-video"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Technical Training Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Technical Training
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {technicalTrainings.map(({ label, icon: Icon }, index) => (
            <TrainingCard key={index} Icon={Icon} label={label} />
          ))}
        </div>
      </section>

      {/* Non-Technical Training Section */}
      <section className="bg-white py-16 px-4 sm:px-8 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-10">
          Non-Technical Training
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {nonTechnicalTrainings.map(({ label, icon: Icon }, index) => (
            <TrainingCard key={index} Icon={Icon} label={label} />
          ))}
        </div>
      </section>

      <ConnectSection />
    </div>
  );
};

export default OmkkarTrainingPage;
