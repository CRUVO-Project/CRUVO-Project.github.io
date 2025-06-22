import Link from "next/link";
import { FaDiscord, FaTelegram, FaVk, FaGithub } from "react-icons/fa";
import Head from "next/head";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typewriter from "typewriter-effect";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: { value: ["#6b7280", "#9ca3af", "#d1d5db"] },
        links: {
          color: "#6b7280",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-purple-900 text-white">
      <Head>
        <title>CRUVO IT Community</title>
        <meta
          name="description"
          content="CRUVO IT Community - A hub for IT enthusiasts"
        />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 select-none">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("CRUVO IT Community")
                .pauseFor(2500)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
              cursor: '<span class="animate-blink">|</span>',
            }}
          />
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">
          Welcome to <span className="text-cyan-400">CRUVO IT Community</span>,
          a vibrant hub for IT enthusiasts, developers, and innovators. Join us
          to share knowledge, build projects, and connect with like-minded
          individuals in the ever-evolving world of IT.
        </p>

        <div className="flex gap-6 mb-12">
          <Link
            href="https://discord.gg/v6cymA2GNu"
            className="transform hover:scale-110 transition duration-300 animate-fade-in"
            aria-label="Join our Discord"
          >
            <FaDiscord className="text-4xl text-cyan-400 hover:text-cyan-300" />
          </Link>
          <Link
            href="https://t.me/+qT5hn9vO7QplYjI6"
            className="transform hover:scale-110 transition duration-300 animate-fade-in"
            aria-label="Join our Telegram"
          >
            <FaTelegram className="text-4xl text-cyan-400 hover:text-cyan-300" />
          </Link>
          <Link
            href="https://vk.com/cruvo_it_community/"
            className="transform hover:scale-110 transition duration-300 animate-fade-in"
            aria-label="Join our VK"
          >
            <FaVk className="text-4xl text-cyan-400 hover:text-cyan-300" />
          </Link>
          <Link
            href="https://github.com/CRUVO-Project/"
            className="transform hover:scale-110 transition duration-300 animate-fade-in"
            aria-label="Visit our GitHub"
          >
            <FaGithub className="text-4xl text-cyan-400 hover:text-cyan-300" />
          </Link>
        </div>



        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            At CRUVO, we believe in the power of community-driven innovation.
            Our mission is to create a space where developers, designers, and
            tech enthusiasts can collaborate, learn, and grow together.
          </p>
        </div>
      </div>

      <footer className="text-center py-6">
        <p>© 2025 CRUVO IT Community. All rights reserved.</p>
      </footer>
    </div>
  );
}
