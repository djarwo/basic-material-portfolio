import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import ProfessionalWorkCard from '@/components/ProfessionalWorkCard';
import VolunteerCard from '@/components/VolunteerCard';
import Head from 'next/head';

export default function skillsAndExperience() {
  // const internData = {
  //   celebmark: {
  //     title: 'CelebMark (Event & Celebrity Management Platform)',
  //     date: 'Feb 2019 – May 2019',
  //     place: 'Mumbai, India',
  //     desc:
  //       'Developed React and Django based web application with CRUD API, user signup, bookings, registration and event listing, etc.',
  //     link: 'https://github.com/dntandan/celebmark',
  //     linkText: 'Github Repository',
  //   },
  // };
  const mentData = {
    atomic: {
      org: 'Atomic Indonesia',
      date: '2019 - Present',
      desig: 'Senior Engineer',
      desc:
        `Responsible for driving the development efforts to meet customer requirements and ensure that projects are completed on time and within budget. This article will provide a thorough outline of the job responsibilities, qualifications, and expectations associated with the lead developer position.
        
        my responsibility include:
        - Working closely with senior stakeholders to understand business requirements and help translate these into technical requirements for the development team.
        - Planning and documenting technical specifications for features or system design.
        - Designing, building, and configuring applications to meet business process and application requirements.
        - Directing the development team in the design, development, coding, testing, and debugging of applications.
        - Writing testable, scalable, and efficient code and leading code reviews.
        - Mentoring junior team members and ensuring they adhere to determining software quality standards.
        `,
      link: 'https://gitlab.com/djarwoatomic',
      linkText: 'Gitlab Organization',
    },
    twiscode: {
      org: 'Twiscode',
      date: 'Aug 2018 - Feb 2019',
      desig: 'Software Engineer',
      desc:
        `1. Build an app called Wahyoo
        2. Build Wahyoo’s Dashboard Admin
        3. Wahyoo has 5 path of its part (Store, Sales, Courier, B2B and Customer parts). Ensure each part was build perfectly`,

      link: '#',
      linkText: 'Github Organization',
    },
    kuryotech: {
      org: 'Kuryotech',
      date: 'Jan 2018 - Aug 2018',
      desig: 'Software Engineer',
      desc:
        `Development Application E-Commerce and Company Profile application
        www.beoku.com, Yii2 Based Framework with Postgres and Silverstripe databases.
        Kuryotech in addition to being a start up company is also engaged in SoftwareHouse, so for orders and workmanship of the startup application, web profile.`,

      link: '#',
      linkText: 'Github Organization',
    },
    kokek: {
      org: 'PT Kokek',
      date: 'Sept 2017 - Jan 209',
      desig: 'Fullstack Developer',
      desc:
        `Creating a WEB-Admin Internal Consultant Application
        Using PHP CI Framework, With Template Bootstrap, Jquery, Ajax & Mysql `,

      link: '#',
      linkText: 'Github Organization',
    },
  };
  const volData = {
    space: {
      title: '....',
      desig: 'Event',
      year: '2018',
      place: 'Jakarta, Indonesia',
    },
  };

  return (
    <>
      <Head>
        <title>Expereience :: Djarwo Prasojo | Software Engineer Portfolio</title>
      </Head>
      <Layout border="border-2">
        {/* <h3 className="text-lg font-semibold mt-3">Internships</h3>
        <InternshipCard
          title={internData.celebmark.title}
          date={internData.celebmark.date}
          place={internData.celebmark.place}
          desc={internData.celebmark.desc}
          link={internData.celebmark.link}
          linkText={internData.celebmark.linkText}
        /> */}

        <h3 className="text-lg font-semibold mt-3">Professional work</h3>
        <ProfessionalWorkCard
          org={mentData.atomic.org}
          date={mentData.atomic.date}
          desig={mentData.atomic.desig}
          desc={mentData.atomic.desc}
          link={mentData.atomic.link}
          linkText={mentData.atomic.linkText}
        />
        <ProfessionalWorkCard
          org={mentData.twiscode.org}
          date={mentData.twiscode.date}
          desig={mentData.twiscode.desig}
          desc={mentData.twiscode.desc}
          link={mentData.twiscode.link}
          linkText={mentData.twiscode.linkText}
        />
        <ProfessionalWorkCard
          org={mentData.kuryotech.org}
          date={mentData.kuryotech.date}
          desig={mentData.kuryotech.desig}
          desc={mentData.kuryotech.desc}
          link={mentData.kuryotech.link}
          linkText={mentData.kuryotech.linkText}
        />
        <ProfessionalWorkCard
          org={mentData.kokek.org}
          date={mentData.kokek.date}
          desig={mentData.kokek.desig}
          desc={mentData.kokek.desc}
          link={mentData.kokek.link}
          linkText={mentData.kokek.linkText}
        />
        {/* <h3 className="text-lg font-semibold mt-3">Volunteer Experience</h3>
        <VolunteerCard
          title={volData.space.title}
          desig={volData.space.desig}
          year={volData.space.year}
          place={volData.space.place}
        /> */}
      </Layout>
    </>
  );
}
