import React, { useState, memo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check, Terminal } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

// Move static style objects outside the component to prevent re-creation on every render
const customCodeBlockStyle = {
  margin: 0,
  padding: '1.5rem 1rem',
  background: 'transparent',
  lineHeight: '1.7',
};

const lineNumberStyle = { minWidth: '3em', paddingRight: '1em', color: '#333', textAlign: 'right' };


function CodeBlock({ code, language = 'javascript', title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative my-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      {/* Subtle Glow Accent */}
      <div className="absolute top-0 left-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-jano-red to-transparent opacity-50" />

      {/* Window Header */}
      <div className="flex items-center justify-between px-5 py-3 border-b bg-white/[0.03] backdrop-blur-md border-white/10">
        <div className="flex items-center gap-4">
          {/* Mac-style Buttons */}
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#ff5f56] transition-colors duration-300" />
            <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#ffbd2e] transition-colors duration-300" />
            <div className="w-3 h-3 rounded-full bg-white/10 group-hover:bg-[#27c93f] transition-colors duration-300" />
          </div>

          <div className="flex items-center gap-2 px-3 py-1 border rounded-full bg-white/5 border-white/5">
            <Terminal size={12} className="text-jano-red" />
            <span className="text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest">
              {title || language}
            </span>
          </div>
        </div>

        <button
          onClick={copyToClipboard}
          className="relative flex items-center justify-center p-2 transition-all rounded-lg active:scale-90 hover:bg-white/10"
          title="Copy Code"
        >
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <Check size={16} className="text-green-500" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
              >
                <Copy size={16} className="text-gray-400 group-hover:text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Code Area */}
      <div className="relative font-mono text-[13px] md:text-sm leading-relaxed overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          showLineNumbers={true}
          lineNumberStyle={lineNumberStyle}
          customStyle={customCodeBlockStyle}
        >
          {code}
        </SyntaxHighlighter>
      </div>

      {/* Footer Language Badge (Optional) */}
      <div className="absolute transition-opacity pointer-events-none bottom-2 right-4 opacity-20 group-hover:opacity-40">
         <span className="text-[40px] font-black italic select-none text-white/5 uppercase">
           {language}
         </span>
      </div>
    </motion.div>
  );
}

export default memo(CodeBlock);
