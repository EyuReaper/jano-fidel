import React, { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Terminal, Code, Zap, ChevronRight, Info, ExternalLink, ClipboardList, BookText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from '../components/CodeBlock';
import { useTheme } from '../context/ThemeContext'; // Import useTheme

// Utility function to generate a slug from text
const generateSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove non-alphanumeric characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with a single dash
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing dashes
};

const sections = [
  { id: 'introduction', title: 'Introduction', icon: <BookOpen size={16} />, file: 'introduction.md' },
  { id: 'getting-started', title: 'Getting Started', icon: <Zap size={16} />, file: 'getting-started.md' },
  { id: 'language-reference', title: 'Language Reference', icon: <BookText size={16} />, file: 'language-reference.md' },
  { id: 'cheatsheet', title: 'Cheatsheet', icon: <ClipboardList size={16} />, file: 'cheatsheet.md' },
  { id: 'examples', title: 'Examples', icon: <Terminal size={16} />, file: 'examples.md' },
];

function MarkdownSection({ file, id, title, onHeadingsChange, active }: { file: string, id: string, title: string, onHeadingsChange: (headings: { id: string; text: string; level: number }[]) => void, active: boolean }) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/docs/${file}`)
      .then(res => res.text())
      .then(text => setMarkdown(text))
      .catch(err => console.error(`Failed to fetch ${file}`, err));
  }, [file]);

  useEffect(() => {
    if (active && markdown) {
      const headings: { id: string; text: string; level: number }[] = [];
      const headingRegex = /^(#{1,3})\s(.+)$/gm; // Only capture h1, h2, h3
      let match;
      while ((match = headingRegex.exec(markdown)) !== null) {
        const level = match[1].length;
        const text = match[2].trim();
        const headingId = generateSlug(text);
        headings.push({ id: headingId, text, level });
      }
      onHeadingsChange(headings);
    }
  }, [markdown, active, onHeadingsChange]);


  return (
    <section id={id} className="scroll-mt-32">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-jano-red/50 to-transparent" />
          <h2 className="text-3xl font-bold tracking-tighter text-white uppercase">{title}</h2>
        </div>
        <div className="prose prose-neutral max-w-none prose-pre:bg-transparent prose-pre:p-0 dark:prose-invert">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <CodeBlock code={String(children).replace(/\n$/, '')} language={match[1]} />
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h1: ({ node, ...props }) => {
                const children = React.Children.toArray(props.children);
                const text = children.map(child => typeof child === 'string' ? child : '').join('');
                const slug = generateSlug(text);
                return <h1 id={slug} {...props}>{children}</h1>;
              },
              h2: ({ node, ...props }) => {
                const children = React.Children.toArray(props.children);
                const text = children.map(child => typeof child === 'string' ? child : '').join('');
                const slug = generateSlug(text);
                return <h2 id={slug} {...props}>{children}</h2>;
              },
              h3: ({ node, ...props }) => {
                const children = React.Children.toArray(props.children);
                const text = children.map(child => typeof child === 'string' ? child : '').join('');
                const slug = generateSlug(text);
                return <h3 id={slug} {...props}>{children}</h3>;
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </motion.div>
    </section>
  );
}

// Sub-component for cleaner code
function ToCLink({ label, href, active = false }: { label: string; href: string; active?: boolean }) {
  return (
    <li className={`flex items-center gap-2 transition-all ${active ? 'text-jano-red' : 'text-gray-500 hover:text-white'}`}>
      {active && <div className="w-1 h-1 rounded-full bg-jano-red shadow-[0_0_8px_#DC2626]" />}
      <a href={href} className="block py-1">
        {label}
      </a>
    </li>
  );
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('introduction');
  const [currentSectionHeadings, setCurrentSectionHeadings] = useState< 
    { id: string; text: string; level: number }[] 
  >([]);
  const { theme } = useTheme(); // Use the theme context

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0% -35% 0%', threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleHeadingsChange = useCallback((headings: { id: string; text: string; level: number }[]) => {
    setCurrentSectionHeadings(headings);
  }, []); // Empty dependency array means this function is created once

  return (
    <div className={`min-h-screen pt-32 pb-20 selection:bg-jano-red/30 ${theme === 'dark' ? 'bg-[#050505] text-gray-300' : 'bg-white text-gray-800'}`}>
      <div className="fixed top-0 z-0 w-full h-full -translate-x-1/2 pointer-events-none left-1/2 opacity-20">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-jano-red rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <aside className="sticky hidden space-y-8 lg:block lg:col-span-3 top-32 h-fit">
          <div className="space-y-1">
            <h3 className="px-4 mb-4 text-xs font-bold tracking-widest text-gray-500 uppercase">Documentation</h3>
            {sections.map((s) => (
              <a 
                key={s.id} 
                href={`#${s.id}`}
                className={`flex items-center justify-between px-4 py-2.5 transition-all rounded-full group ${ 
                  activeSection === s.id ? 'bg-white/10 text-white shadow-lg' : 'hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`${activeSection === s.id ? 'text-jano-red' : 'text-gray-500 group-hover:text-jano-red'} transition-colors`}>
                    {s.icon}
                  </span>
                  <span className="text-sm font-medium">{s.title}</span>
                </div>
                <ChevronRight size={14} className={`transition-all ${activeSection === s.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
              </a>
            ))}
          </div>

          <div className="px-4 pt-6 border-t border-white/5">
            <a href="https://github.com/EyuReaper/jano-fidel" target="_blank" className="flex items-center gap-2 text-xs text-gray-500 transition-colors hover:text-white">
              View on GitHub <ExternalLink size={12} />
            </a>
          </div>
        </aside>

        <main className="space-y-24 lg:col-span-6">
          {sections.map((section) => (
            <MarkdownSection 
              key={section.id} 
              {...section} 
              onHeadingsChange={section.id === activeSection ? handleHeadingsChange : () => {}} 
              active={section.id === activeSection}
            />
          ))}
          <div className="relative p-6 transition-all border group rounded-3xl bg-blue-500/5 border-blue-500/20 hover:bg-blue-500/10">
            <div className="flex gap-4">
              <Info className="text-blue-400 shrink-0" size={20} />
              <div>
                <h4 className="mb-1 text-sm font-bold text-blue-400">Encoding Requirement</h4>
                <p className="text-sm leading-relaxed text-blue-100/60">
                  Always ensure your files use **UTF-8** encoding. Non-UTF-8 files will cause parsing errors for Ethiopic characters.
                </p>
              </div>
            </div>
          </div>
        </main>

        <aside className="sticky hidden pl-8 border-l lg:block lg:col-span-3 top-32 h-fit border-white/5">
          <h4 className="mb-6 text-[10px] font-black text-white uppercase tracking-widest opacity-50">On this page</h4>
          <ul className="space-y-4 text-xs font-medium">
            {currentSectionHeadings.map((heading) => (
              <ToCLink key={heading.id} label={heading.text} href={`#${heading.id}`} />
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
