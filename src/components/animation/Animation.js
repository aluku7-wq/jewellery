/** @format */

// drop down-sidebar animation
export const sideAnimation = {
  parent: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    hide: { opacity: 0, transition: { duration: 0.5 } },
  },
  search: {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hide: { opacity: 0.5, scale: 0.75, transition: { duration: 0.5 } },
  },
  links: {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: [-200, 200, 0],
      transition: { duration: 1 },
    },
    hide: { opacity: 0, scale: 0.75, transition: { duration: 0.5 } },
  },
};

// landing page animation

export const landingAnimation = {
  parent: {
    visible: { transition: { duration: 0.1 } },
  },

  //hero
  hero: {
    hidden: { opacity: 0, scaleY: 1.5 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.5, delayChildren: 0.5 },
    },
  },
  heroText: {
    hidden: { opacity: 0, scale: 0.25 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  heroButton: {
    hidden: {
      opacity: 0,
      scale: 0.75,
      x: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,

      transition: { duration: 0.5 },
    },
  },

  //recent products section
  recent: {
    hidden: { opacity: 0, scale: 0.75 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  },
};

// all products animation

export const allproAnimation = {
  parent: {
    visible: { transition: { duration: 0.5 } },
  },
  header: {
    hidden: { opacity: 0, scaleY: 1.5 },
    visible: {
      opacity: [0, 0, 1],
      scaleY: 1,
      transition: { duration: 0.5, delayChildren: 0.4 },
    },
  },
  headerText: {
    hidden: { opacity: 0, scale: 0.2 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  innavAnimation: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 0.5 } },
  },
};

//grid animation

export const gridAnimation = {
  parent: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  },
  card: {
    hidden: { opacity: 0, x: 0, y: 50, scale: 0.5 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
};

// list animation
export const listAnimation = {
  parent: {
    // visible: { transition: { staggerChildren: 0.2 } },
    hide: { opacity: 0, transition: { duration: 0.5 } },
  },

  card: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  image: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
  text: {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 0, 0.2, 1],
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
};

//contact animation

export const contactAnimation = {
  details: {
    visible: { transition: { staggerChildren: 0.1 } },
  },
  section: {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: [100, -100, 0], transition: { duration: 0.5 } },
  },
  message: {
    closed: { opacity: 0, y: 200, scale: 0 },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.7, duration: 0.5 },
    },
  },
  parts: {
    closed: {
      opacity: 0,
      scale: 0.75,
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
};

// cart animation

export const cartAnimation = {
  empty: {
    hidden: {
      opacity: 0,
      scale: 0,
      y: 200,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  },
  cart: { visible: { transition: { staggerChildren: 0.1 } } },
  card: {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: [0, 0.5, 0.2, 0.1, 1],
      x: [200, -200, 0],
      transition: {
        duration: 0.5,
      },
    },
  },
  checkout: {
    closed: {
      scale: 0,
      opacity: 0,
      y: 100,
    },
    open: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
};
//  single page animation

export const singleAnimation = {
  image: {
    hidden: {
      opacity: 0,
      x: 250,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
  text: {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
  related: {
    hidden: {
      opacity: 0,
      scale: 0.3,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  },
};
export const footerAnimation = {
  parent: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, staggerChildren: 0.2, delay: 0.5 },
    },
  },
  section: {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  },
};

// pagination animation

export const paginateAnimation = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};
