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
    sp: {
      title: 'Sports',
      desc:
        `And also If I'm bored in my free time, I usually play badminton.`,
    },
    pbs: {
      title: 'Learning',
      desc:
        'Learn and Research is my daily routine in my free time, right now I am currently building a portfolio by writing, documenting, and studying to develop a portfolio.',
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
        `I apply data analysis and machine learning to solve business problems and uncover insights from complex datasets. My work spans from exploratory data analysis to predictive modeling and data visualization.
        Key areas I'm working on:

        - Data preprocessing and cleaning using Pandas and NumPy
        - Exploratory data analysis (EDA) and visualization using Matplotlib, Seaborn, or Plotly
        - Training and evaluating machine learning models with scikit-learn, XGBoost, or TensorFlow
        - Deploying models as APIs using Flask or FastAPI
        - Communicating insights with dashboards or reports
`,
    },
    devop: {
      title: 'Devops',
      desc:
        `I’m currently working on building reliable, scalable infrastructure with a strong focus on automation, deployment, and monitoring. 
        My DevOps work includes managing CI/CD pipelines, container orchestration using Docker and Kubernetes, infrastructure as code (IaC) 
        and optimizing system performance in both staging and production environments.
        
        I'm passionate about streamlining development workflows and improving collaboration between development and operations teams. 
        I’m also exploring cloud platforms like AWS and GCP to scale services efficiently.`,
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
          <Hobbies title={hobbyData.sp.title} desc={hobbyData.sp.desc}>
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
