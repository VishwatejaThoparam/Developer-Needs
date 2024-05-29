import React from 'react';
import './index.css';

const FeaturesSection = () => {
  return (
 <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-12">
          <div className="space-y-2 text-center">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Streamline Your Development Workflow
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Developer Needs offers a suite of powerful tools and resources to help you become more productive, efficient, and successful in your full-stack development projects.
            </p>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Integrated Development Environment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Our powerful IDE provides a seamless coding experience with built-in tools and features to boost your productivity.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Full-Stack Development Toolkit</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Access a comprehensive suite of tools and resources for building robust full-stack applications.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Accelerated Deployment</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Streamline your deployment process with our automated CI/CD pipelines and cloud hosting solutions.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Gather Insights</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Explore the latest trends and best practices to inform your development decisions.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Implement Ideas</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Bring your vision to life with efficient and scalable code.
              </p>
            </div>
            <div className="grid gap-1">
              <h3 className="text-lg font-bold">Build Your Dream Website</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
              Deploy your project and showcase your skills to the world.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;


    // <>
 
    //   <section  className='section-middle-jsfd'>
    //     <div className='middle-main-jsfd'>
    //       <p1>Key Features</p1>
    //       <h1>Streamline Your Development Workflow</h1>
    //      <p>Developer Needs offers a suite of powerful tools and resources to help you become more productive, efficient, and successful in your full-stack development projects.</p>
    //     </div>
    //     <div className='middle-bottom-jsfd'>
    //       <div className='inner-middle-jsfd'>
    //           <div>
    //               {/* <FaJava className='icon-style-jsfd'/> */}
    //               <h1>Integrated Development Environment</h1>
    //              <p> Our powerful IDE provides a seamless coding experience with built-in tools and features to boost your productivity.</p>
    //           </div>
    //           <div>
    //           {/* <BiLogoSpringBoot  className='icon-style-jsfd' /> */}
    //               <h1>Full-Stack Development Toolkit</h1>
    //             <p> Access a comprehensive suite of tools and resources for building robust full-stack applications.</p>
    //           </div>
    //           <div>
    //           {/* <BiLogoReact  className='icon-style-jsfd'/> */}
    //               <h1>Accelerated Deployment</h1>
    //             <p> Streamline your deployment process with our automated CI/CD pipelines and cloud hosting solutions.</p>
    //           </div>
    //       </div>
    //       <div className='inner-middle-jsfd'>
    //           <div>
    //           {/* <BsDatabaseFill className='icon-style-jsfd' /> */}
    //               <h1>Gather Insights</h1>
    //               <p> Explore the latest trends and best practices to inform your development decisions.</p>
    //           </div>
    //           <div>
    //           {/* <FaCloud  className='icon-style-jsfd'/> */}
    //               <h1>Implement Ideas</h1>
    //               <p> Bring your vision to life with efficient and scalable code.</p>
    //           </div>
    //           <div>
    //           {/* <VscAzureDevops  className='icon-style-jsfd'/> */}
    //               <h1>Build Your Dream Website</h1>
    //              <p>Deploy your project and showcase your skills to the world.</p>
    //           </div>
    //       </div>
    //     </div>
    //   </section>
    //   /</>