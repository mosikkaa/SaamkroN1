import { motion } from "framer-motion";

type RevealProps = {
    children: React.ReactNode;
};

const Reveal = ({ children }: RevealProps) => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {children}
        </motion.section>
    );
};

export default Reveal;