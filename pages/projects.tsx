import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

export default function projects() {
  const projectData = {
    project1: {
      title: 'Dyanamic Data Extractor',
      subTitle: 'This project is from one of the global food and beverage companies engaged in essential dairy and plant-based products, water, and specialized nutrition.',
      desc:
        `
        Role: Software Enginner | Project Manager | Documentation | Maintenance
        Introduction: In this part there are 3 projects with the same mechanism but different processes and outputs`,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: '.Net', color: 'text-red-200' },
        { title: '.Git', color: 'text-blue-200' },
        { title: 'SQL Server', color: 'text-gray-200' },
        { title: 'Tailwind', color: 'text-yellow-200' },
        { title: 'Azure', color: 'text-green-200' },
      ],
    },
    project2: {
      title: 'Monev on Return',
      subTitle: 'This project is from one of the state-owned enterprises (SOEs), operating in the energy sector with an integrated business from upstream to downstream in Indonesia',
      desc:
        `
        Role: Software Enginner | Technical Lead | Project Manager | Documentation | Presenting | Training
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: '.NET', color: 'text-red-200' },
        { title: 'Tailwind', color: 'text-blue-200' },
        { title: 'SQL Server', color: 'text-gray-200' },
        { title: 'Power BI Server', color: 'text-yellow-200' },
        { title: 'Data Lake', color: 'text-green-200' },
      ],
    },
    project3: {
      title: 'Document Contract Management',
      subTitle: 'This project is from one of the global food and beverage companies engaged in essential dairy and plant-based products, water, and specialized nutrition.',
      desc:
        `
        Role: Software Engineer | Technical Lead | Project Manager | Documentation | Presenting | Training | Maintenance
        Introduction: In this part there are 3 projects with the same mechanism`,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Golang', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'Docker', color: 'text-gray-200' },
        { title: 'Postgres', color: 'text-yellow-200' },
        { title: 'AWS', color: 'text-green-200' },
        { title: 'Microsoft SSO', color: 'text-gray-200' },
        { title: 'Laravel & Tailwind', color: 'text-gray-200' },
      ],
    },
    project4: {
      title: 'Weekly & Daily Stock Distributor',
      subTitle: 'This project is from one of the global food and beverage companies engaged in essential dairy and plant-based products, water, and specialized nutrition.',
      desc:
        `
        Role: Software Engineer | Technical Lead | Project Manager | Documentation | Maintenance
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Golang', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'Docker', color: 'text-gray-200' },
        { title: 'MySQL', color: 'text-yellow-200' },
        { title: 'LDAP', color: 'text-green-200' },
        { title: 'Laravel & Tailwind', color: 'text-gray-200' },
      ],
    },
    project5: {
      title: 'Efaktur Ekstractor',
      subTitle: 'This project is from one of the global food and beverage companies engaged in essential dairy and plant-based products, water, and specialized nutrition.',
      desc:
        `
        Role: Software Engineer | Technical Lead | Project Manager | Documentation | Maintenance
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: '.NET', color: 'text-red-200' },
        { title: 'SQL Server', color: 'text-gray-200' },
      ],
    },
    project6: {
      title: 'Source Ekstractor',
      subTitle: 'This project is from one of the global food and beverage companies engaged in essential dairy and plant-based products, water, and specialized nutrition.',
      desc:
        `
        Role: Software Engineer | Technical Lead | Project Manager | Documentation | Presenting | Maintenance
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: '.Net', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'SQL Server', color: 'text-gray-200' },
        { title: 'Tailwind', color: 'text-yellow-200' },
        { title: 'Azure', color: 'text-green-200' },
      ],
    },
    project7: {
      title: 'Enterprise Resource Planning',
      subTitle: 'This Project is from one of the packaging factory',
      desc:
        `
        Role: Software Engineer | Documentation | Presenting | Maintenance
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Golang', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'Docker', color: 'text-gray-200' },
        { title: 'MySQL', color: 'text-yellow-200' },
        { title: 'Laravel & Tailwind', color: 'text-gray-200' },
      ],
    },
    project8: {
      title: 'Membership Redemption Points & Vouchers',
      subTitle: 'This project comes from one of the big restaurants in Jakarta.',
      desc:
        `
        Role: Software Engineer | Project Manager | Documentation | Presenting | Maintenance
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Golang', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'Docker', color: 'text-gray-200' },
        { title: 'MySQL', color: 'text-yellow-200' },
        { title: 'Laravel & Tailwind', color: 'text-gray-200' },
        { title: 'Flutter', color: 'text-green-200' },
      ],
    },
    project9: {
      title: 'Sales Tracking App',
      subTitle: 'This project comes from one of the largest spice factory in jakarta.',
      desc:
        `
        Role: Software Engineer | Project Manager | Documentation | Presenting | Maintenance
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Golang', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'Docker', color: 'text-gray-200' },
        { title: 'MySQL', color: 'text-yellow-200' },
        { title: 'Laravel & Tailwind', color: 'text-gray-200' },
        { title: 'Flutter', color: 'text-green-200' },
      ],
    },
    project10: {
      title: 'Dealer Management System',
      subTitle: 'This project comes from one of the largest car dealer',
      desc:
        `
        Role: Software Engineer | Documentation | Maintenance
        Introduction: `,
      story:`Story: `,
      link: '#',
      linkText: '#',
      stacks: [
        { title: 'Golang', color: 'text-red-200' },
        { title: 'Git', color: 'text-blue-200' },
        { title: 'Docker', color: 'text-gray-200' },
        { title: 'MySQL', color: 'text-yellow-200' },
        { title: 'Laravel & Tailwind', color: 'text-gray-200' },
        { title: 'Flutter', color: 'text-green-200' },
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
            story={projectData.project1.story}
          />
          <ProjectCards
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
            story={projectData.project2.story}
          />
          <ProjectCards
            title={projectData.project3.title}
            subTitle={projectData.project3.subTitle}
            desc={projectData.project3.desc}
            link={projectData.project3.link}
            linkText={projectData.project3.linkText}
            stacks={projectData.project3.stacks}
            story={projectData.project3.story}
          />
          <ProjectCards
            title={projectData.project4.title}
            subTitle={projectData.project4.subTitle}
            desc={projectData.project4.desc}
            link={projectData.project4.link}
            linkText={projectData.project4.linkText}
            stacks={projectData.project4.stacks}
            story={projectData.project4.story}
          />
          <ProjectCards
            title={projectData.project5.title}
            subTitle={projectData.project5.subTitle}
            desc={projectData.project5.desc}
            link={projectData.project5.link}
            linkText={projectData.project5.linkText}
            stacks={projectData.project5.stacks}
            story={projectData.project5.story}
          />
          <ProjectCards
            title={projectData.project6.title}
            subTitle={projectData.project6.subTitle}
            desc={projectData.project6.desc}
            link={projectData.project6.link}
            linkText={projectData.project6.linkText}
            stacks={projectData.project6.stacks}
            story={projectData.project6.story}
          />
          <ProjectCards
            title={projectData.project7.title}
            subTitle={projectData.project7.subTitle}
            desc={projectData.project7.desc}
            link={projectData.project7.link}
            linkText={projectData.project7.linkText}
            stacks={projectData.project7.stacks}
            story={projectData.project7.story}
          />
          <ProjectCards
            title={projectData.project8.title}
            subTitle={projectData.project8.subTitle}
            desc={projectData.project8.desc}
            link={projectData.project8.link}
            linkText={projectData.project8.linkText}
            stacks={projectData.project8.stacks}
            story={projectData.project8.story}
          />
          <ProjectCards
            title={projectData.project9.title}
            subTitle={projectData.project9.subTitle}
            desc={projectData.project9.desc}
            link={projectData.project9.link}
            linkText={projectData.project9.linkText}
            stacks={projectData.project9.stacks}
            story={projectData.project9.story}
          />
          <ProjectCards
            title={projectData.project10.title}
            subTitle={projectData.project10.subTitle}
            desc={projectData.project10.desc}
            link={projectData.project10.link}
            linkText={projectData.project10.linkText}
            stacks={projectData.project10.stacks}
            story={projectData.project10.story}
          />
        </div>
      </Layout>
    </>
  );
}
