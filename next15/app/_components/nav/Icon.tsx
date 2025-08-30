import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Icon() {
  return (
    <motion.div
      initial={{ translateY: -100 }}
      animate={{ translateY: 0 }}
      whileHover={{ translateY: [null, 3, 0, 3, 0] }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <Link href="/">{`<Developer />`}</Link>
    </motion.div>
  );
}
