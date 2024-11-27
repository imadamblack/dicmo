import Image from 'next/image';
import Blockbuster from '../components/blockbuster';
import Link from 'next/link';
import OptInForm from '../components/form/opt-in-form';
import { useEffect, useState } from 'react';
import scrollDepth from '../utils/scrollDepth';
import i00 from '../../public/landing/000.png';
import i01 from '../../public/landing/01.jpeg';
import i02 from '../../public/landing/02.png';
import i03 from '../../public/landing/03.jpeg';
import i04 from '../../public/landing/04.jpeg';
import ib01 from '../../public/landing/ib01.png';
import ib02 from '../../public/landing/ib02.png';
import ib03 from '../../public/landing/ib03.png';
import ie01 from '../../public/landing/ie01.jpg'
import ie02 from '../../public/landing/ie02.png'
import ie03 from '../../public/landing/ie03.jpg'
import ie04 from '../../public/landing/ie04.jpg'
import iec01 from '../../public/landing/iec01.png';
import iec02 from '../../public/landing/iec02.webp';
import iec03 from '../../public/landing/iec03.jpg';
import Faqs from '../components/faqs';

export default function Home() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const cta = {
    main: 'Cotiza tu rampa hoy',
    description: 'Conoce si tu vehículo es compatible y solicita una cotización',
  };

  return (
    <>
      <section className="relative min-h-[80vh] w-full flex flex-col md:justify-end items-center bg-brand-1">

        <div className="relative min-h-[24rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-full absolute bg-gradient-to-t from-brand-1 md:from-black via-transparent to-transparent md:opacity-60 z-10"/>
          <Image src={i00} layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container w-full text-left text-white z-10 p-8">
          <h1
            className="md:w-2/3 relative font-medium ft-9 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]">
            Carga y descarga tus mercancías sin arriesgar a tus trabajadores
          </h1>
          <p className="ft-1 mt-4">Compatible con Nissan NP 300, Toyota Hilux, Hino 100 y similares con rieles
            expuestos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 my-8 md:w-2/3">
            <div className="flex flex-col">
              <p className="-ft-2 md:text-left">Capacidad</p>
              <p className="ft-3 md:text-left">Hasta 600kg</p>
            </div>
            <div className="flex flex-col">
              <p className="-ft-2 md:text-left">Instalación</p>
              <p className="ft-3 md:text-left">15 días</p>
            </div>
            <div className="flex flex-col">
              <p className="-ft-2 md:text-left">Desde</p>
              <p className="ft-3 md:text-left">$65,540</p>
            </div>
          </div>
          {/*<p>* Precio neto, ya incluye IVA e instalación</p>*/}
          <div className="flex flex-col justify-start items-start mt-12">
            {/*<Link href="#contact">*/}
            {/*  <a onClick={() => setLastClick('hero')} className="button mb-4">{cta.main}</a>*/}
            {/*</Link>*/}
            <p className="-ft-2 md:text-left">{cta.description}</p>
          </div>
          <p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>

        </div>
      </section>

      <section className="container grid grid-cols-1 md:grid-cols-2 my-16">
        <div>
          <video controls muted autoPlay playsInline preload="none" className="w-full h-full">
            <source src="/landing/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="reading-container">
          <p>
            Diseñamos una rampa hidráulica oculta que optimiza tu tiempo de trabajo y
            reduce los costos operativos.<br/><br/>
            Nuestra meta es que puedas manejar cargas pesadas de manera eficiente,
            para que te centres en hacer crecer tu negocio.<br/><br/>
            Imagina tener más tiempo para enfocarte en lo que realmente importa y
            lleves tu operación a un nuevo nivel de productividad y seguridad.
          </p>
          {/*<div className="flex flex-col justify-center items-center">*/}
          {/*  <Link href="#contact">*/}
          {/*    <a onClick={() => setLastClick('story')} className="button mb-4">{cta.main}</a>*/}
          {/*  </Link>*/}
          {/*  <p className="-ft-2 text-center">{cta.description}</p>*/}
          {/*</div>*/}
        </div>
      </section>

      <Blockbuster
        overhead="Beneficios"
        title="3 razones por las que tus camionetas de carga necesitan una rampa hidráulica"
        image={i01}
      />
      <section className="my-16">
        <div className="container grid grid-cols-1 md:grid-cols-3 md:gap-16">
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Vas a optimizar tiempo</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={ib01} className="object-cover"/>
            </div>
            <p className="order-3">La carga y descarga se realizan en una fracción del tiempo, permitiéndote completar
              más tareas.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">Tus costos van a bajar</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={ib02} className="object-cover"/>
            </div>
            <p className="order-3">Solo necesitas una persona para operar la rampa, disminuyendo significativamente los
              gastos en mano de obra.</p>
          </div>
          <div className="flex flex-col">
            <h3 className="order-1 md:order-2 mb-8">La seguridad de tus empleados</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8">
              <Image src={ib03} className="object-cover"/>
            </div>
            <p className="order-3">Nuestra tecnología avanzada reduce el riesgo de lesiones laborales, creando un
              ambiente de trabajo seguro y eficiente</p>
          </div>
        </div>
        {/*<div className="reading-container">*/}
        {/*  <div className="flex flex-col justify-center items-center">*/}
        {/*    <Link href="#contact">*/}
        {/*      <a onClick={() => setLastClick('testimonials')} className="button mb-4">{cta.main}</a>*/}
        {/*    </Link>*/}
        {/*    <p className="-ft-2 text-center">{cta.description}</p>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </section>

      <Blockbuster
        overhead="Especificaciones"
        title="Reducir tiempos de carga y aumentar la seguridad de tus trabajadores son solo algunos de los beneficios"
        image={i02}
      />
      <section className="container my-16 space-y-32">

        <div className="items-stretch">
          <div className="w-full flex flex-col justify-center">
            <h3>Somos compatibles</h3>
            <p>Si las camionetas de tu negocio son NISSAN NP 300, Hilux, Hino 100 o alguna similar
              con rieles expuestos. <br/>Estamos listos para trabajar contigo.</p>
          </div>
          <div className="w-full grid md:grid-cols-3">
            <div className="relative pt-[70%]">
              <Image src={iec01} layout="fill" objectFit="contain"/>
            </div>
            <div className="relative pt-[70%]">
              <Image src={iec02} layout="fill" objectFit="contain"/>
            </div>
            <div className="relative pt-[70%]">
              <Image src={iec03} layout="fill" objectFit="contain"/>
            </div>
          </div>
          {/*<div className="relative h-[32rem]">*/}
          {/*  <div className="material-icons ft-6 absolute right-0 bottom-0 w-8 h-8 z-10">*/}
          {/*    arrow_forward*/}
          {/*  </div>*/}
          {/*  <div className="-ft-2 ft-6 absolute w-full text-center bottom-0 h-8 z-10">*/}
          {/*    Desliza*/}
          {/*  </div>*/}
          {/*  <div className="material-icons ft-6 absolute left-0 bottom-0 w-8 h-8 z-10">*/}
          {/*    arrow_back*/}
          {/*  </div>*/}
          {/*  <div className="h-full flex gap-8 overflow-scroll snap-x snap-mandatory justify-start">*/}
          {/*    <div className="relative min-w-[28rem] md:min-w-[40rem] snap-center">*/}
          {/*      <Image src={iec01} layout="fill" objectFit="contain"/>*/}
          {/*    </div>*/}
          {/*    <div className="relative min-w-[28rem] md:min-w-[40rem] snap-center">*/}
          {/*      <Image src={iec02} layout="fill" objectFit="contain"/>*/}
          {/*    </div>*/}
          {/*    <div className="relative min-w-[28rem] md:min-w-[40rem] snap-center">*/}
          {/*      <Image src={iec03} layout="fill" objectFit="contain"/>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="hidden md:flex relative h-[32rem]">
            <Image src={ie01} className="object-cover object-bottom"/>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="order-1 md:order-2 mb-8">Diseñada para no obstruir las puertas de la caja</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8 md:hidden">
              <Image src={ie01} className="object-cover"/>
            </div>
            <p className="order-3">Diseñada con un motor hidráulico con pistones de fuerza y una extensión de piso que
              se coloca en la camioneta para poder transportar la carga de la plataforma a la caja de la camioneta.
              <br/>
              Esta hecha de acero, es oculta, no obstruye las puertas y te ahorra las adecuaciones que tendrías que
              hacer con una rampa convencional.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center">
            <h3 className="order-1 md:order-2 mb-8">La más liviana, pequeña e innovadora del mercado</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8 md:hidden">
              <Image src={ie02} className="object-cover"/>
            </div>
            <p className="order-3">
              <b>Rampa Hidráulica Oculta</b>
              <br/>
              Largo plataforma: 1.60 m
              <br/>
              Ancho plataforma: 0.8 m
              <br/>
              Largo extensión: 1.80 m
              <br/>
              Ancho extensión: 0.25 m</p>
          </div>
          <div className="hidden md:flex relative h-[32rem]">
            <Image src={ie02} className="object-cover"/>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="hidden md:flex relative h-[32rem]">
            <Image src={ie03} className="object-cover"/>
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="order-1 md:order-2 mb-8">Evita lesiones por manejar cargas pesadas</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8 md:hidden">
              <Image src={ie03} className="object-cover"/>
            </div>
            <p className="order-3">Optimiza los tiempos de carga y descarga y evita lesiones en tu equipo de trabajo.
              Nuestras rampas soportan 600kg, 800kg y 1 tonelada.<br/>
              No hay excusas para incrementar tu productividad.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          <div className="flex flex-col justify-center">
            <h3 className="order-1 md:order-2 mb-8">La protección que tus camionetas necesitan</h3>
            <div className="relative h-[56%] overflow-hidden flex items-center order-2 md:order-1 mb-8 md:hidden">
              <Image src={ie04} className="object-cover"/>
            </div>
            <p className="order-3">
              Incluye un disyuntor de energía que funciona con una pastilla de corriente.
              <br/>
              En caso de que la rampa se force de más, se bota la pastilla y corta la corriente.
              <br/>
              Logrando proteger la batería de tu camioneta y el motor de la rampa hidráulica.</p>
          </div>
          <div className="hidden md:flex relative h-[32rem]">
            <Image src={ie04} className="object-cover"/>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('specs')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>
      </section>

      <Blockbuster
        overhead="Target"
        title="Si lo que buscas es más eficiencia, seguridad y ganancias, entonces nuestras rampas son para ti"
        image={i03}
      />
      <section className="reading-container my-16">
        <p className="ft-2">
          Seguramente llegaste aquí por 3 razones:
          <br/><br/>
          1. Tu logística ha sido un dolor de cabeza por el tiempo que se pierde en la carga y descarga de
          mercancías.
          <br/><br/>
          2. Se te han ido clientes porque no tienes “capacidad” para mercancías pesadas.
          <br/><br/>
          3. Tus trabajadores se han tenido que incapacitar por alguna lesión por cargar tanto.
          <br/><br/>
          A nosotros nos importa que puedas incrementar las ganancias de tu negocio,
          que ahorres tiempo, que evites accidentes en tu personal y
          disminuyas tus gastos operativos.
          <br/><br/>
          Andas gastando mucha lana en chalanes, cuando nuestra rampa <b>DC-500 N</b> tiene un costo de <b>$65,540</b>.
          <br/><br/>
          Además de que no vas a tener que gastar ni un peso más en instalación o en adecuar tu camioneta.
          <br/><br/>
          Te aseguro que vas a mejorar tu capacidad de transporte.
        </p>

        <div className="flex flex-col justify-center items-center mt-16">
          <Link href="#contact">
            <a onClick={() => setLastClick('price')} className="button mb-4">{cta.main}</a>
          </Link>
          <p className="-ft-2 text-center">{cta.description}</p>
        </div>

      </section>

      <Blockbuster
        overhead="Preguntas frecuentes"
        title="Si tienes dudas, probablemente estén aquí"
        image={i04}
      />
      <section className="container py-8">
        <Faqs/>
      </section>

      {/* Contacto  */}
      <section id="contact" className="border-t border-brand-1 bg-brand-1 py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="font-semibold text-white tracking-wide">
              Listo, es momento de cotizar tu rampa hidráulica
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 text-white">
                Por favor llena el siguiente formulario para recibir una cotización a medida de tu unidad.
              </p>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>
    </>
  );
}
