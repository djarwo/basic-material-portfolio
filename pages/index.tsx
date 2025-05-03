import Head from 'next/head';
import {
  IoBasketballOutline,
  IoBanOutline,
  IoChatbubbleEllipsesOutline,
  IoMapOutline,
  IoSettingsSharp,
  IoCameraOutline,
  IoGridOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import { GiShuttlecock,GiArtificialIntelligence } from "react-icons/gi";
import { VscAzureDevops } from "react-icons/vsc";
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatDoing from '@/components/WhatDoing';

export default function Index() {
  const hobbyData = {
    bb: {
      title: 'Badminton',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    },
    pbs: {
      title: 'Learning',
      desc:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem fuga nemo ducimus quas unde fugit deleniti nulla, fuga adipisci!',
    }

  };
  const WDData = {
    wd: {
      title: 'Backend Development',
      desc:
        "I'm actively deepening my skills in building APIs, managing databases, and architecting scalable systems. I'm exploring new technologies and best practices to become more efficient and effective as a backend engineer.",
    },
    flc: {
      title: 'Freelancing',
      desc:
        "Some of my time i do freelance work and also open to freelance projects and collaboration opportunities. I enjoy working with others to bring ideas to life and solve real-world problems",
    },
    dat: {
      title: 'Data Engineer',
      desc:
        "I'm open to freelance projects and collaboration opportunities. I enjoy working with others to bring ideas to life and solve real-world problems",
    },
    devop: {
      title: 'Devops',
      desc:
        `I work on automating infrastructure, CI/CD pipelines, and ensuring scalable, reliable deployments. Additionally, I share insights and experiments related to artificial intelligence, especially where it intersects with backend and data systems.`,
    },
  };
  return (
    <>
      <Head>
        <title>Home :: Djarwo Prasojo</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4">What I'm Doing</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <WhatDoing title={WDData.wd.title} desc={WDData.wd.desc}>
            <IoCodeSlash className="text-green-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.flc.title} desc={WDData.flc.desc}>
            <IoGridOutline className="text-blue-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.dat.title} desc={WDData.dat.desc}>
            <GiArtificialIntelligence className="text-blue-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.devop.title} desc={WDData.devop.desc}>
            <VscAzureDevops className="text-blue-500 text-6xl" />
          </WhatDoing>
        </div>
        <h1 className="text-lg font-semibold my-4">Hobbies</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <Hobbies title={hobbyData.pbs.title} desc={hobbyData.pbs.desc}>
            <IoSettingsSharp className="text-yellow-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.bb.title} desc={hobbyData.bb.desc}>
            <GiShuttlecock className="text-red-500 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}
{
  /* <style>
ion-icon {
  --ionicon-stroke-width: 16px;
}
</style> */
}
