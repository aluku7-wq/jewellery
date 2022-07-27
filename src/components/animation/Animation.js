/** @format */

// navigation bar animation

export const navAnimation = {
  parent: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
        staggerChildren: 0.05,
      },
    },
  },
  children: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    hide: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  },
};

// drop down animation

export const dropAnimation = {
  parent: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    hide: { opacity: 0, transition: { duration: 2 } },
  },

  containers: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.5,
        staggerChildren: 0.05,
        // when: "beforeChildren",
      },
    },
  },
  links: {
    hidden: { opacity: 0, x: 300 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  },
};
