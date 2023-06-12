import Image from 'next/image';

import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-faqs.jpg';

const faqs = [
  [
    {
      question: 'How does online music learning work?',
      answer:
        'Online music learning allows you to receive personalized instruction from professional instructors through video lessons and interactive platforms. You can connect with your instructor in real-time, access learning materials, and participate in virtual practice sessions.',
    },
    {
      question: 'What instruments do you offer lessons for?',
      answer:
        'We offer lessons for a wide range of instruments, including piano, guitar and more. Please reach out to us for specific instrument availability.',
    },
    {
      question: 'Are the online music lessons suitable for beginners?',
      answer:
        'Absolutely! Our online music lessons cater to students of all levels, including beginners. Our instructors will guide you through the fundamentals and help you build a solid musical foundation.',
    },
  ],
  [
    {
      question: 'How long are the music lessons?',
      answer:
        "The duration of each music lesson typically ranges from 30 minutes to 1 hour, depending on your preference and the instructor's recommendations. Longer sessions can also be arranged if needed.",
    },
    {
      question: "What if I don't own the instrument for the lessons?",
      answer:
        "While it's beneficial to have your own instrument, we understand that some students may not have one initially. Our instructors can guide you in choosing the right instrument and provide recommendations for rentals or purchases.",
    },
    {
      question: 'Can I schedule lessons at a time convenient for me?',
      answer:
        'Yes! We offer flexible scheduling options to accommodate your availability. Our instructors will work with you to find mutually convenient lesson times.',
    },
  ],
  [
    {
      question:
        'How do I communicate with my instructor during online lessons?',
      answer:
        'We utilize video conferencing platforms that allow you to have real-time, face-to-face interaction with your instructor. Additionally, messaging platforms may be available for any queries or doubts between lessons.',
    },
    {
      question: 'What if I need to reschedule a lesson?',
      answer:
        'We understand that unforeseen circumstances may arise. Simply inform your instructor in advance, and they will work with you to reschedule the lesson at the earliest convenient time for both parties.',
    },
    {
      question: 'Are there performance opportunities for students?',
      answer:
        'Yes! We organize virtual recitals and showcases where students can showcase their progress and perform for their peers, friends, and family members. These events help foster a supportive community and boost confidence.',
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
