"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0.25 }} onClick={onClose}>
          <motion.div className="bg-white  h-full border-r-[2px] border-r-red-500 mr-auto shadow-xl p-6 max-w-md w-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
