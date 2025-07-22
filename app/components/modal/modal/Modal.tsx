"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  center?: boolean;
}

const Modal = ({ isOpen, onClose, children, center }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 bg-black/50 flex items-center justify-center z-10 " initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} exit={{ opacity: 0.25 }} onClick={onClose}>
          <motion.div className={` z-1 ${center ? "bg-white w-28 mt-4 rounded-2xl" : "bg-white h-full overflow-y-auto border-r-2 border-r-red-500 mr-auto shadow-xl p-4 w-96"}   `} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ duration: 0.2 }} onClick={(e) => e.stopPropagation()}>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
