import { useState } from 'react';

export default function Faqs() {
  const [faqOpen, setFaqOpen] = useState(0);

  const questions = [
    {
      q: "¿Qué camionetas no son compatibles con la rampa?",
      a: "Vans o cajas tipo pickups no son compatibles con la rampa hidráulica ya que no cuentan con rieles expuestos. Nuestra rampa solo es compatible con cajas secas, redilas y plataformas."
    },
    {
      q: "¿Cuánto tiempo dura la instalación?",
      a: "La instalación se realiza en un máximo de 5 días hábiles, garantizando eficiencia y mínima interrupción en tus operaciones."
    },
    {
      q: "¿Cuál es el proceso de compra?",
      a: "Agendamos una cita, hacemos una cotización, y tras el pago inicial del 60%, fabricamos e instalamos la rampa en un plazo de 15 días hábiles."
    },
    {
      q: "¿Cuánto peso va a soportar mi rampa?",
      a: "Tenemos 3 modelos que soportan 600kg, 800kg y 1 tonelada."
    },
    {
      q: "¿Cómo es el mantenimiento de la rampa?",
      a: "La rampa requiere un mantenimiento mínimo y ofrecemos servicios regulares para asegurar su durabilidad y funcionamiento óptimo."
    }
  ]

  return (
    <section className='bg-gray-100 py-12'>
      <div className='container'>
        {questions.map((q, i) =>
          <div className="w-full shadow-sm mb-2">
            <p
              id={i}
              className="w-full p-4 font-bold bg-white mb-0 cursor-pointer rounded-lg border border-gray-200"
              onClick={(e) => setFaqOpen(e.target.id)}
            >
              <span className="font-bold mr-4 text-brand-1">›</span>{q.q}
            </p>
            <p className={`${faqOpen == i ? 'flex' : 'hidden'} bg-gray-200 p-12`}>
              {q.a}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}