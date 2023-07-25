import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
// import img7 from "/assets/img7.jpg";

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="Parallettes" content="All about MiniFit Parallettes" />
      </Head>

      <main className="felx w-full flex-col items-center justify-center">
        <Layout className="py-16 px-4 ">
          <AnimatedText
            text="A Wooden Parallettes Manufacturing Company in India"
            className="mb-12"
          />
          <div className="md:grid w-full grid-cols-8 gap-16 ">
            <div className="col-span-5 flex flex-col items-start justify-start">
              <h2 className="mb-4 mt-4 text-lg underline text-teal-400 font-extrabold uppercase">
              Introduction to MiniFit's Parallettes
              </h2>

              <p className="justify-between font-medium mb-4">
                Welcome to MiniFit's Parallettes, your one-stop destination for high-quality,
                compact, and versatile parallettes designed to take your fitness journey to
                new heights. We understand that achieving your fitness goals requires
                dedication and the right equipment, which is why we are committed to providing
                you with top-notch parallettes that combine functionality and convenience.
                Whether you're a seasoned athlete or just starting your fitness adventure,
                our MiniFit's Parallettes are perfect for bodyweight exercises, calisthenics,
                and various strength training routines. Say goodbye to bulky gym equipment and
                embrace the power of compact parallettes that bring the gym experience to the
                comfort of your own home.

              </p>

              <h4 className="font-semibold  text-teal-400">
                The MiniFit Difference
              </h4>
              <p className="flex !justify-between font-medium mb-4">
                At MiniFit, we take pride in our commitment to excellence. Our parallettes are
                crafted with precision and attention to detail, using high-grade materials to
                ensure durability and stability during your workouts. With a compact design,
                MiniFit's Parallettes are not only easy to store but also travel-friendly,
                allowing you to maintain your fitness routine on-the-go. The non-slip rubber
                feet ensure a secure grip on various surfaces, offering added safety and
                zconfidence during your exercises. Whether you're focusing on push-ups,
                L-sits, handstands, or other calisthenics movements, MiniFit's Parallettes
                provide the support and comfort you need to achieve your fitness goals.
              </p>

              <h4 className="font-semibold  text-teal-400">
                Versatility and Benefits
              </h4>
              <p className="justify-between font-medium mb-4">
                MiniFit's Parallettes open up a world of possibilities for your fitness regimen.
                Strengthen your core, improve balance, and enhance upper body strength with a
                range of exercises that target multiple muscle groups simultaneously.
                Our parallettes enable progressive training, catering to both beginners and
                advanced fitness enthusiasts. By utilizing your body weight as resistance, you
                can sculpt a well-defined physique without the need for heavyweights.
                The versatility of MiniFit's Parallettes allows you to incorporate them into
                your existing workout routine or explore new challenges, making fitness not
                just a habit but an enjoyable journey of growth and achievement.
              </p>

              {/* <h4 className='font-semibold  text-teal-400'>Advanced Manufacturing Technology:</h4>
              <p className='justify-between font-medium mb-4'>At MiniFit Corporation, we leverage the latest manufacturing technologies and
                equipment to ensure superior quality and precision. Our cutting-edge machinery,
                combined with our skilled workforce, allows us to produce paralleletes with
                exceptional accuracy and durability.</p> */}

              <h4 className="font-semibold  text-teal-400">
                Join the MiniFit Community
              </h4>
              <p className="justify-between font-medium mb-4">
                Become a part of the MiniFit community and elevate your fitness game. Our
                mission is to empower individuals to achieve their health and wellness
                aspirations through our top-tier parallettes. As you invest in MiniFit's
                Parallettes, you're not just getting a piece of equipment; you're gaining
                access to a supportive community of like-minded fitness enthusiasts.
                We are here to provide guidance, share workout tips, and celebrate your
                progress every step of the way. Browse our selection of MiniFit's Parallettes
                today and take the first step towards a fitter and stronger you. Unleash your
                potential with MiniFit's Parallettes and embrace the transformative power of
                bodyweight training.
              </p>

              {/* <h4 className="font-semibold  text-teal-400">
                Customer Satisfaction:
              </h4>
              <p className="justify-between font-medium mb-4">
                Our customers are at the heart of everything we do. We strive to
                exceed their expectations by providing outstanding customer
                service and support. From the initial consultation to
                post-purchase assistance, we are dedicated to ensuring your
                satisfaction with our products and services.
              </p> */}
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 boeder-solid
             bg-light p-6 border-teal-400  items-center mt-8 "
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl 
                  bg-dark  "
              />
              <Image
                src="/assets/img5.jpg"
                alt="parallettes"
                width="400"
                height="400"
                className="w-full h-auto rounded-2xl "
              />
            </div>

            {/* <div className='col-span-2 flex flex-col items-end justify-between'>

              <div>
                <span>
                  100+
                </span>
                <h2>Satisfied Customers</h2>
              </div>

              <div>
                <span>
                  200+
                </span>
                <h2>Products Sell</h2>
              </div>

              <div>
                <span>
                  100+
                </span>
                <h2>Satisfied Customers</h2>
              </div>

            </div> */}
          </div>
              </Layout>
              
      </main>
    </>
  );
};

export default about;
