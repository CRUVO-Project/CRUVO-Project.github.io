import Link from "next/link";
import { FaDiscord, FaTelegram, FaVk, FaGithub } from "react-icons/fa";
import Head from "next/head";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Typewriter from "typewriter-effect";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
  const [init, setInit] = useState(false);
  const [isRussian, setIsRussian] = useState(false);

  useEffect(() => {
    const userLanguage = navigator.language || 'en';
    setIsRussian(userLanguage.startsWith('ru'));

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
          onclick: {
            enable: !0,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          grab: {
            distance: 100,
            line_linked: {
              opacity: 1,
            },
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
          distance: 160,
          enable: true,
          opacity: 0.5,
          width: 2,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 0.8,
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
          value: { min: 1, max: 2 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const content = {
    title: isRussian ? "CRUVO ИТ Сообщество" : "CRUVO IT Community",
    welcome: isRussian ? (
      <>
        Добро пожаловать в <span className="text-cyan-400">CRUVO IT Сообщество</span>,
        активный центр для IT-энтузиастов, разработчиков и новаторов. Присоединяйтесь к нам,
        чтобы делиться знаниями, создавать проекты и общаться с единомышленниками
        в постоянно развивающемся мире IT.
      </>
    ) : (
      <>
        Welcome to <span className="text-cyan-400">CRUVO IT Community</span>,
        a vibrant hub for IT enthusiasts, developers, and innovators. Join us
        to share knowledge, build projects, and connect with like-minded
        individuals in the ever-evolving world of IT.
      </>
    ),
    joinUs: isRussian ? "Присоединяйтесь к нам" : "Join us",
    missionTitle: isRussian ? "Наша миссия" : "Our Mission",
    missionText: isRussian ? (
      <>
        В CRUVO мы верим в силу инноваций, создаваемых сообществом.
        Наша миссия - создать пространство, где разработчики, дизайнеры и
        технологические энтузиасты могут сотрудничать, учиться и расти вместе.
      </>
    ) : (
      <>
        At CRUVO, we believe in the power of community-driven innovation.
        Our mission is to create a space where developers, designers, and
        tech enthusiasts can collaborate, learn, and grow together.
      </>
    ),
    copyright: isRussian ? (
      "© 2025 CRUVO ИТ Сообщество. Все права защищены."
    ) : (
      "© 2025 CRUVO IT Community. All rights reserved."
    )
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black to-purple-900 text-white relative">
      <Head>
        <title>{isRussian ? "CRUVO ИТ Сообщество" : "CRUVO IT Community"}</title>
        <html lang={isRussian ? 'ru' : 'en'} />
        <meta property="og:locale" content={isRussian ? 'ru_RU' : 'en_US'} />
        <meta
          name="description"
          content={isRussian ? "CRUVO ИТ Сообщество - Центр для ИТ-энтузиастов" : "CRUVO IT Community - A hub for IT enthusiasts"}
        />
        <link rel="icon" href="/favicon.ico?v=2" />
      </Head>

      {init && (
        <div className="absolute inset-0 z-0">
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        </div>
      )}

      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 select-none relative z-10">
        <div className="min-h-[150px] flex items-center justify-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold px-4 relative ">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(content.title)
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
        </div>

        <div className="max-w-2xl mb-10 px-4">
          <p className="text-lg md:text-xl">
            {isRussian ? (
              <>
                Добро пожаловать в{' '}
                <span className="text-cyan-400 font-medium drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
                  CRUVO ИТ Сообщество
                </span>
                , активный центр для ИТ-энтузиастов, разработчиков и новаторов.
              </>
            ) : (
              <>
                Welcome to{' '}
                <span className="text-cyan-400 font-medium drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]">
                  CRUVO IT Community
                </span>
                , a vibrant hub for IT enthusiasts, developers, and innovators.
              </>
            )}
          </p>
        </div>

        <div className="w-full flex flex-col items-center mb-10">
          <div className="mb-2">
            <h2 className="text-xl md:text-2xl font-bold text-cyan-400 animate-glow">
              {content.joinUs}
            </h2>
          </div>
          
          <div className="flex gap-6 justify-center">
            <Link
              href="https://discord.gg/v6cymA2GNu"
              className="transform hover:scale-110 transition duration-300 animate-fade-in"
              aria-label={isRussian ? "Присоединиться к нашему Discord" : "Join our Discord"}
            >
              <FaDiscord className="text-4xl text-cyan-400 hover:text-cyan-300" />
            </Link>
            <Link
              href="https://t.me/+qT5hn9vO7QplYjI6"
              className="transform hover:scale-110 transition duration-300 animate-fade-in"
              aria-label={isRussian ? "Присоединиться к нашему Telegram" : "Join our Telegram"}
            >
              <FaTelegram className="text-4xl text-cyan-400 hover:text-cyan-300" />
            </Link>
            <Link
              href="https://vk.com/cruvo_it_community/"
              className="transform hover:scale-110 transition duration-300 animate-fade-in"
              aria-label={isRussian ? "Присоединиться к нашему VK" : "Join our VK"}
            >
              <FaVk className="text-4xl text-cyan-400 hover:text-cyan-300" />
            </Link>
            <Link
              href="https://github.com/CRUVO-Project/"
              className="transform hover:scale-110 transition duration-300 animate-fade-in"
              aria-label={isRussian ? "Посетить наш GitHub" : "Visit our GitHub"}
            >
              <FaGithub className="text-4xl text-cyan-400 hover:text-cyan-300" />
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4">{content.missionTitle}</h2>
          <p className="text-lg mb-6">
            {content.missionText}
          </p>
        </div>
      </main>

      <footer className="py-4 relative z-10 text-center">
        <p>{content.copyright}</p>
      </footer>
    </div>
  );
}