import React from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import CertificationCard from '@/components/CertificationCard';
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

  const certData = {
    mlUdemy: {
      title: 'Machine Learning, Data Science and Generative AI with Python',
      date: '2024',
      place: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-55f31aab-b58c-4cbe-9ba0-d486145736de',
      linkText: 'Blog',
    },
    ml2Udemy: {
      title: 'Machine Learning A-Z: AI, Python & R + ChatGPT',
      date: '2024',
      place: 'Udemy',
      link: 'https://www.udemy.com/certificate/UC-fcd40879-f39b-4c13-9ca4-9c58f4e07363/',
      linkText: 'Blog',
    },
  };

  return (
    <>
      <Head>
        <title>Education & Skills :: Djarwo Prasojo | Software Engineer Portfolio</title>
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

        <h3 className="text-lg font-semibold mt-3">Certificate</h3>
        <div className="flex flex-col gap-4">
          <CertificationCard
            title={certData.mlUdemy.title}
            date={certData.mlUdemy.date}
            place={certData.mlUdemy.place}
            link={certData.mlUdemy.link}
            linkText={certData.mlUdemy.linkText}
          />
        </div>

        <div className="flex flex-col gap-4">
          <CertificationCard
            title={certData.ml2Udemy.title}
            date={certData.ml2Udemy.date}
            place={certData.ml2Udemy.place}
            link={certData.ml2Udemy.link}
            linkText={certData.ml2Udemy.linkText}
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Skills </h3>
        <div className="px-4">
          <div className="flex gap-2 items-center mt-6">
            <IoServerOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Backend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Golang" cname="bg-gray-100 py-1" />
            <Pills text="Python" cname="bg-gray-100 py-1" />
            <Pills text="Laravel" cname="bg-gray-100 py-1" />
            <Pills text=".NET & C#" cname="bg-gray-100 py-1" />
            <Pills text="Node JS" cname="bg-gray-100 py-1 " />
            <Pills text="Yii" cname="bg-gray-100 py-1 " />
            <Pills text="CI" cname="bg-gray-100 py-1 " />

            <Pills text="Microservices" cname="bg-gray-100 py-1 " />
            <Pills text="REST API" cname="bg-gray-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoLayersOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Frontend & Mobile </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML" cname="bg-gray-100 py-1 " />
            <Pills text="Tailwind" cname="bg-gray-100 py-1" />
            <Pills text="CSS/SCSS" cname="bg-gray-100 py-1" />

            <Pills text="Vue JS" cname="bg-gray-100 py-1" />
            <Pills text="NextJS" cname="bg-gray-100 py-1" />
            <Pills text="React" cname="bg-gray-100 py-1 " />
            <Pills text="Dart" cname="bg-gray-100 py-1 " />
            <Pills text="Flutter" cname="bg-gray-100 py-1 " />
            <Pills text="Bootstrap" cname="bg-gray-100 py-1 " />
            <Pills text="Javascript & JQuery" cname="bg-gray-100 py-1" />
          </div>


          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Tools & Database </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Github / Gitlab" cname="bg-gray-100 py-1 " />
            <Pills text="Docker" cname="bg-gray-100 py-1 " />
            <Pills text="Linux Ubuntu/Debian/Rhell" cname="bg-gray-100 py-1 " />
            <Pills text="Sonar Qube" cname="bg-gray-100 py-1 " />
            <Pills text="Jenkins" cname="bg-gray-100 py-1 " />
            <Pills text="GCP" cname="bg-gray-100 py-1 " />
            <Pills text="Microsoft" cname="bg-gray-100 py-1 " />
            <Pills text="AWS" cname="bg-gray-100 py-1 " />
            <Pills text="Firebase" cname="bg-gray-100 py-1 " />
            <Pills text="Azure Tools" cname="bg-gray-100 py-1 " />
            <Pills text="RDBMS" cname="bg-gray-100 py-1 " />
            <Pills text="NoSQL" cname="bg-gray-100 py-1 " />
            <Pills text="SQL Server" cname="bg-gray-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoDiceOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Others </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Data Engineer*" cname="bg-gray-100 py-1 " />
            <Pills text="Machine Learning*" cname="bg-gray-100 py-1 " />
            <Pills text="LLM & Generic AI*" cname="bg-gray-100 py-1 " />
            <Pills text="Power BI" cname="bg-gray-100 py-1 " />
            <Pills text="Tableau" cname="bg-gray-100 py-1 " />
            <Pills text="Ms Office" cname="bg-gray-100 py-1 " />
            <Pills text="Canva & Draw IO" cname="bg-gray-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Personal </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Project Management" cname="bg-gray-100 py-1 " />
            <Pills text="Technical Lead" cname="bg-gray-100 py-1 " />
            <Pills text="Leadership" cname="bg-gray-100 py-1 " />
            <Pills text="Public Speaking" cname="bg-gray-100 py-1 " />
            <Pills text="Documentation" cname="bg-gray-100 py-1 " />
            <Pills text="Team Work" cname="bg-gray-100 py-1 " />
            <Pills text="Badminton" cname="bg-gray-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
