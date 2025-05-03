import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function projects() {
  const projectData = {
    project1: {
      title: 'Dyanamic Data Extractor',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Enginner|Project Manager|Documentation|Maintenance
        Introduction: In this part there are 3 projects with the same mechanism but different processes and outputs
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project2: {
      title: 'Monev on Return',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Enginner|Technical Lead|Project Manager|Documentation|Presenting|Training
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project3: {
      title: 'Document Contract Management',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Technical Lead|Project Manager|Documentation|Presenting|Training|Maintenance
        Introduction: In this part there are 3 projects with the same mechanism
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project4: {
      title: 'Weekly & Daily Stock Distributor',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Technical Lead|Project Manager|Documentation|Maintenance
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project5: {
      title: 'Efaktur Ekstractor',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Technical Lead|Project Manager|Documentation|Maintenance
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project6: {
      title: 'Source Ekstractor',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Technical Lead|Project Manager|Documentation|Presenting|Maintenance
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project7: {
      title: 'Enterprise Resource Planning',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Documentation|Presenting|Maintenance
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project8: {
      title: 'Membership Redemption Points & Vouchers',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Project Manager|Documentation|Presenting|Maintenance
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project9: {
      title: 'Sales Tracking App',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Project Manager|Documentation|Presenting|Maintenance
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
    project10: {
      title: 'Dealer Management System',
      subTitle: 'Subtitle',
      desc:
        `Role: Software Engineer|Documentation|Maintenance
        Introduction: 
        Story:`,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Django', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'PostgreSQL', color: 'text-gray-200' },
        { title: 'DRF', color: 'text-yellow-200' },
        { title: 'Digital Ocean', color: 'text-green-200' },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Projects :: GitWind</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold my-4">
          Here's what I have worked on based on my experience...
        </h3>
        <div className="grid gap-4 mb-3">
          <ProjectCards
            title={projectData.project1.title}
            subTitle={projectData.project1.subTitle}
            desc={projectData.project1.desc}
            link={projectData.project1.link}
            linkText={projectData.project1.linkText}
            stacks={projectData.project1.stacks}
          />
          <ProjectCards
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
          />
          <ProjectCards
            title={projectData.project3.title}
            subTitle={projectData.project3.subTitle}
            desc={projectData.project3.desc}
            link={projectData.project3.link}
            linkText={projectData.project3.linkText}
            stacks={projectData.project3.stacks}
          />
          <ProjectCards
            title={projectData.project4.title}
            subTitle={projectData.project4.subTitle}
            desc={projectData.project4.desc}
            link={projectData.project4.link}
            linkText={projectData.project4.linkText}
            stacks={projectData.project4.stacks}
          />
          <ProjectCards
            title={projectData.project5.title}
            subTitle={projectData.project5.subTitle}
            desc={projectData.project5.desc}
            link={projectData.project5.link}
            linkText={projectData.project5.linkText}
            stacks={projectData.project5.stacks}
          />
          <ProjectCards
            title={projectData.project6.title}
            subTitle={projectData.project6.subTitle}
            desc={projectData.project6.desc}
            link={projectData.project6.link}
            linkText={projectData.project6.linkText}
            stacks={projectData.project6.stacks}
          />
          <ProjectCards
            title={projectData.project7.title}
            subTitle={projectData.project7.subTitle}
            desc={projectData.project7.desc}
            link={projectData.project7.link}
            linkText={projectData.project7.linkText}
            stacks={projectData.project7.stacks}
          />
          <ProjectCards
            title={projectData.project8.title}
            subTitle={projectData.project8.subTitle}
            desc={projectData.project8.desc}
            link={projectData.project8.link}
            linkText={projectData.project8.linkText}
            stacks={projectData.project8.stacks}
          />
          <ProjectCards
            title={projectData.project9.title}
            subTitle={projectData.project9.subTitle}
            desc={projectData.project9.desc}
            link={projectData.project9.link}
            linkText={projectData.project9.linkText}
            stacks={projectData.project9.stacks}
          />
          <ProjectCards
            title={projectData.project10.title}
            subTitle={projectData.project10.subTitle}
            desc={projectData.project10.desc}
            link={projectData.project10.link}
            linkText={projectData.project10.linkText}
            stacks={projectData.project10.stacks}
          />
        </div>
      </Layout>
    </>
  );
}
