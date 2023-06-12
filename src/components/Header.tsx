import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

import Logo from '@/public/assets/images/muziscale-logo.svg';
import styles from '@/styles';
import { navVariants } from '@/utils/motion';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Resources', href: '#' },
  { name: 'Classes', href: '#' },
  { name: 'About', href: '#' },
];
// function MobileNavLink({ href, children }: any) {
//   return (
//     <Popover.Button as={Link} href={href} className="block w-full p-2">
//       {children}
//     </Popover.Button>
//   );
// }

// function MobileNavIcon({ open }: any) {
//   return (
//     <svg
//       aria-hidden="true"
//       className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
//       fill="none"
//       strokeWidth={2}
//       strokeLinecap="round"
//     >
//       <path
//         d="M0 1H14M0 7H14M0 13H14"
//         className={clsx(
//           'origin-center transition',
//           open && 'scale-90 opacity-0'
//         )}
//       />
//       <path
//         d="M2 2L12 12M12 2L2 12"
//         className={clsx(
//           'origin-center transition',
//           !open && 'scale-90 opacity-0'
//         )}
//       />
//     </svg>
//   );
// }

// function MobileNavigation() {
//   return (
//     <Popover>
//       <Popover.Button
//         className="relative z-10 flex h-8 w-8 items-center justify-center [&:not(:focus-visible)]:focus:outline-none"
//         aria-label="Toggle Navigation"
//       >
//         {({ open }) => <MobileNavIcon open={open} />}
//       </Popover.Button>
//       <Transition.Root>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0"
//           enterTo="opacity-100"
//           leave="duration-150 ease-in"
//           leaveFrom="opacity-100"
//           leaveTo="opacity-0"
//         >
//           <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
//         </Transition.Child>
//         <Transition.Child
//           as={Fragment}
//           enter="duration-150 ease-out"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="duration-100 ease-in"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
//           <Popover.Panel
//             as="div"
//             className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
//           >
//             <MobileNavLink href="#features">Features</MobileNavLink>
//             <MobileNavLink href="#testimonials">Testimonials</MobileNavLink>
//             <MobileNavLink href="#pricing">Pricing</MobileNavLink>
//             <hr className="m-2 border-slate-300/40" />
//             <MobileNavLink href="/login">Sign in</MobileNavLink>
//           </Popover.Panel>
//         </Transition.Child>
//       </Transition.Root>
//     </Popover>
//   );
// }

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <header className="py-10">
    //   <Container>
    //     <nav className="relative z-50 flex justify-between">
    //       <div className="flex items-center md:gap-x-12">
    //         <Link href="/" aria-label="Home">
    //           <Image
    //             src={Logo}
    //             alt="Muziscale Logo"
    //             sizes="(min-width: 60em) 24vw, (min-width: 28em) 45vw, 100vw"
    //           />
    //         </Link>
    //         <div className="hidden md:flex md:gap-x-6">
    //           <NavLink href="#features">Courses</NavLink>
    //           <NavLink href="#testimonials">Resources</NavLink>
    //           <NavLink href="#testimonials">Testimonials</NavLink>
    //           <NavLink href="#contact">Contact</NavLink>
    //           <NavLink href="#pricing">About</NavLink>
    //         </div>
    //       </div>
    //       <div className="flex items-center gap-x-5 md:gap-x-8">
    //         <Button href="/register" color="blue">
    //           <span>
    //             Get started <span className="hidden lg:inline">today</span>
    //           </span>
    //         </Button>
    //         <div className="-mr-1 md:hidden">
    //           <MobileNavigation />
    //         </div>
    //       </div>
    //     </nav>
    //   </Container>
    // </header>
    <header className="absolute inset-x-0 top-0 z-50">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.xPaddings} mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8`}
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" aria-label="Home">
            <Image
              src={Logo}
              alt="Muziscale Logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Contact <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </motion.nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" aria-label="Home">
              <Image
                src={Logo}
                alt="Muziscale Logo"
                sizes="(min-width: 320px) 2vw, (min-width: 480px) 5vw, 100vw"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
