"use client";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/button";

export default function ButtonAnimated() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduce ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: reduce ? 0 : 0.7, ease: "easeOut" }}
    >
      <Button buttontext={"Kom i gang"} />
    </motion.div>
  );
}
