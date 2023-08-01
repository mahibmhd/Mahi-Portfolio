import motion from "framer-motion";

function MyComponent() {
    return (
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 2,
        }}
      >
        <h1>Hello World</h1>
      </motion.div>
    );
  }

