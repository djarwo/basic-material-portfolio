import React from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import Pills from '@/components/Pills';
import {
  IoDiceOutline,
  IoLayersOutline,
  IoPersonOutline,
  IoServerOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import Head from 'next/head';

export default function education() {
  const eduData = {
    version: {
      degree: 'Bachelor’s Degree',
      major: 'Information Technology Engineering',
      institute: 'Univercity 17 Agustus Surabaya',
      year: '2014 – 2017',
      grade: '3.11',
    },
  };

  return (
    <>
      <Head>
        <title>Education & Skills :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Educational Background</h3>
        <div className="flex flex-col gap-4">
          <EducationCard
            degree={eduData.version.degree}
            major={eduData.version.major}
            institute={eduData.version.institute}
            year={eduData.version.year}
            grade={eduData.version.grade}
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Skills </h3>
        <div className="px-4">
          <div className="flex gap-2 items-center mt-6">
            <IoServerOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Backend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Golang" cname="bg-blue-100 py-1" />
            <Pills text="Python" cname="bg-gray-100 py-1" />
            <Pills text="Laravel" cname="bg-blue-100 py-1" />
            <Pills text=".NET & C#" cname="bg-red-100 py-1" />
            <Pills text="Node JS" cname="bg-yellow-100 py-1 " />
            <Pills text="Yii" cname="bg-purple-100 py-1 " />
            <Pills text="CI" cname="bg-gray-100 py-1 " />

            <Pills text="Microservices" cname="bg-pink-100 py-1 " />
            <Pills text="REST API" cname="bg-green-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoLayersOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Frontend & Mobile </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML" cname="bg-green-100 py-1 " />
            <Pills text="Tailwind" cname="bg-blue-100 py-1" />
            <Pills text="CSS/SCSS" cname="bg-purple-100 py-1" />

            <Pills text="Vue JS" cname="bg-indigo-100 py-1" />
            <Pills text="NextJS" cname="bg-pink-100 py-1" />
            <Pills text="React" cname="bg-yellow-100 py-1 " />
            <Pills text="Dart" cname="bg-yellow-100 py-1 " />
            <Pills text="Flutter" cname="bg-indigo-100 py-1 " />
            <Pills text="Bootstrap" cname="bg-gray-100 py-1 " />
            <Pills text="Javascript & JQuery" cname="bg-indigo-100 py-1" />
          </div>


          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Tools & Database </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Github / Gitlab" cname="bg-red-100 py-1 " />
            <Pills text="Docker" cname="bg-purple-100 py-1 " />
            <Pills text="Linux Ubuntu/Debian/Rhell" cname="bg-pink-100 py-1 " />
            <Pills text="Sonar Qube" cname="bg-gray-100 py-1 " />
            <Pills text="Jenkins" cname="bg-green-100 py-1 " />
            <Pills text="GCP" cname="bg-pink-100 py-1 " />
            <Pills text="Microsoft" cname="bg-yellow-100 py-1 " />
            <Pills text="AWS" cname="bg-indigo-100 py-1 " />
            <Pills text="Firebase" cname="bg-blue-100 py-1 " />
            <Pills text="Azure Tools" cname="bg-red-100 py-1 " />
            <Pills text="RDBMS" cname="bg-pink-100 py-1 " />
            <Pills text="NoSQL" cname="bg-yellow-100 py-1 " />
            <Pills text="SQL Server" cname="bg-green-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoDiceOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Others </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Data Engineer*" cname="bg-blue-100 py-1 " />
            <Pills text="Machine Learning*" cname="bg-red-100 py-1 " />
            <Pills text="LLM & Generic AI*" cname="bg-pink-100 py-1 " />
            <Pills text="Power BI" cname="bg-gray-100 py-1 " />
            <Pills text="Tableau" cname="bg-yellow-100 py-1 " />
            <Pills text="Ms Office" cname="bg-green-100 py-1 " />
            <Pills text="Canva & Draw IO" cname="bg-red-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Personal </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Project Management" cname="bg-blue-100 py-1 " />
            <Pills text="Technical Lead" cname="bg-pink-100 py-1 " />
            <Pills text="Leadership" cname="bg-yellow-100 py-1 " />
            <Pills text="Public Speaking" cname="bg-red-100 py-1 " />
            <Pills text="Documentation" cname="bg-blue-100 py-1 " />
            <Pills text="Team Work" cname="bg-green-100 py-1 " />
            <Pills text="Badminton" cname="bg-gray-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
