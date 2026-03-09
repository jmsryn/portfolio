'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const bootLines = [
    '> Initializing systems...',
    '> Loading portfolio modules...',
    '> Establishing secure connection...',
    '> Ready.',
];

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        const intervals: NodeJS.Timeout[] = [];

        bootLines.forEach((_, i) => {
            const timer = setTimeout(() => {
                setVisibleLines(i + 1);
            }, 200 + i * 300);
            intervals.push(timer);
        });

        const completeTimer = setTimeout(() => {
            setIsLoading(false);
        }, 200 + bootLines.length * 300 + 400);
        intervals.push(completeTimer);

        return () => intervals.forEach(clearTimeout);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && (
                    <motion.div
                        key="loader"
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-background"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                    >
                        <div className="w-full max-w-md px-6">
                            <div className="border-2 border-border bg-card shadow-[8px_8px_0px_0px_var(--primary)]">
                                {/* Title bar */}
                                <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
                                    <div className="w-2.5 h-2.5 bg-red-500" />
                                    <div className="w-2.5 h-2.5 bg-yellow-500" />
                                    <div className="w-2.5 h-2.5 bg-green-500" />
                                    <span className="text-[10px] font-mono text-muted-foreground ml-2 uppercase tracking-widest">system boot</span>
                                </div>

                                {/* Boot lines */}
                                <div className="p-4 font-mono text-sm space-y-1 min-h-[120px]">
                                    {bootLines.slice(0, visibleLines).map((line, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -5 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className={i === bootLines.length - 1 ? 'text-primary font-bold' : 'text-muted-foreground'}
                                        >
                                            {line}
                                        </motion.div>
                                    ))}
                                    {visibleLines < bootLines.length && (
                                        <span className="inline-block animate-pulse bg-primary w-2 h-4" />
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </>
    );
}
