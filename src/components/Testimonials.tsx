/* eslint-disable jsx-a11y/no-redundant-roles */
import { Container } from '@/components/Container';

const testimonials = [
  [
    {
      content:
        "I'm glad I found MUZISCALE. Sajeev was indeed so smart in grabbing my daughter's attention and making her do the job. He gave my daughter a crystal clear idea about Music and playing piano made really easy by his concepts of teaching.",
      author: {
        name: 'Luhane Amari',
        role: 'USA',
      },
    },
    {
      content:
        'We are really happy with the course. My daughter is able to play Piano and can sing and perform to any song now.',
      author: {
        name: 'Sulagna Patra',
        role: 'USA',
      },
    },
    {
      content:
        "We always wanted to see my son playing in Church. Sajeev helped my son to play and sing in Church within just 3 months. My son is able to play any song just by hearing. He's still in touch with us though the course is done and shares tips to our son.",
      author: {
        name: 'Elias',
        role: 'USA',
      },
    },
  ],
  [
    {
      content:
        'Total personalized classes. Timings are totally according to our convenience though we alter them from time to time. He communicates with us all through the week whenever we have doubts and questions. He used to share class content with me as well so that I can follow up with my son.',
      author: {
        name: 'Arishton',
        role: 'UK',
      },
    },
    {
      content:
        "Sajeev was there for my son more than he promised. He got all the patience and skills to grab my son's attention and progression.",
      author: {
        name: 'Edward Ross',
        role: 'USA',
      },
    },
  ],
  [
    {
      content:
        "My daughter used to learn from a teacher for 7 years. She could only play the songs which her teacher used to teach her. I came to know about MUZISCALE through a colleague and I didn't believe what they told initially. Just after two sessions I saw the difference. In just 5 weeks my daughter is able to play any song and sing as well. Sajeev gave all the practical knowledge about music.",
      author: {
        name: 'Swetha',
        role: 'India',
      },
    },
    {
      content:
        'My son used to learn Piano from school and he used to go to take piano tuitions privately for 4 years. We thought music is a complicated slow learning process. Having our doubts, Yet we took the course with MUZISCALE. I am in awe by seeing my son performing in school events within just 2 months.',
      author: {
        name: 'Saachit',
        role: 'USA',
      },
    },
  ],
];

function QuoteIcon(props) {
  return (
    <svg aria-hidden="true" width={105} height={78} {...props}>
      <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl">
            Hear it Straight from Our Amazing Students!
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Discover how our friendly music classes have inspired and empowered
            students to unleash their creativity and achieve their goals. Join
            us today and be part of their amazing journey!
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute left-6 top-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        {/* <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div> */}
                      </figcaption>
                    </figure>
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
