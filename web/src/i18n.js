// web/src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them via a translation management system like Locize)
const resources = {
  en: {
    translation: {
      "navigation.version": "version 1.0.0",
      "navigation.docs": "Docs",
      "navigation.playground": "Playground",
      "navigation.dictionary": "Dictionary",
      "github.star": "Star on GitHub",
      "features.powerful_features": "Powerful Features",
      "features.subtitle": "Everything you need to build modern applications in your native language",
      "features.native_geez_support.title": "Native Ge'ez Support",
      "features.native_geez_support.description": "Write code in Amharic using the ancient and beautiful Ge'ez script. Every keyword, every function name feels natural.",
      "features.ethiopic_numerals.title": "Ethiopic Numerals",
      "features.ethiopic_numerals.description": "Full support for traditional Ethiopic numerals alongside modern numbers. Honor your heritage while coding.",
      "features.nodejs_power.title": "Node.js Power",
      "features.nodejs_power.description": "Built on top of Node.js ecosystem. Access millions of npm packages and use familiar JavaScript tools.",
      "features.type_safe.title": "Type Safe",
      "features.type_safe.description": "Optional type checking ensures your code is robust and maintainable. Catch errors before runtime.",
      "features.universal_output.title": "Universal Output",
      "features.universal_output.description": "Compiles to standard JavaScript that runs everywhere. Deploy to browsers, servers, and mobile apps.",
      "features.modern_syntax.title": "Modern Syntax",
      "features.modern_syntax.description": "Clean, expressive syntax that combines the best of modern JavaScript with Amharic linguistic patterns.",
      "playground.edit_instruction": "Try editing the Jano code above. The JavaScript translation updates automatically!",
      "playground.title": "Interactive Playground",
      "playground.description": "Experience Jano Fidel directly in your browser. Write Jano code and see its JavaScript equivalent instantly.",
      "playground.jano_code": "Jano Code",
      "playground.run": "Run",
      "playground.javascript_output": "JavaScript Output",
      "dictionary.search_placeholder": "Search keywords...",
      "dictionary.no_keywords": "No keywords found matching \"{searchTerm}\"",
      "dictionary.title": "Language Dictionary",
      "dictionary.description": "Explore all Jano Fidel keywords and their JavaScript equivalents",
      "hero.tagline": "Write code that feels like home.",
      "hero.code_in": "Code in",
      "hero.amharic": "Amharic",
      "hero.build_for_the": "Build for the",
      "hero.world": "World",
      "hero.main_description": "The first programming language that brings the power of Ge'ez script to modern development.",
      "hero.terminal": "Terminal",
      "hero.try_playground": "Try Playground",
      "hero.read_docs": "Read Docs"
    }
  },
  am: {
    translation: {
      "navigation.version": "ስሪት 1.0.0",
      "navigation.docs": "ሰነዶች",
      "navigation.playground": "የሙከራ ቦታ",
      "navigation.dictionary": "መዝገበ ቃላት",
      "github.star": "በ GitHub ኮከብ ይስጡ",
      "features.powerful_features": "ኃይለኛ ባህሪያት",
      "features.subtitle": "ዘመናዊ መተግበሪያዎችን በአፍ መፍቻ ቋንቋዎ ለመገንባት የሚያስፈልግዎ ነገር ሁሉ",
      "features.native_geez_support.title": "የተወላጁ የጊዝ ድጋፍ",
      "features.native_geez_support.description": "በጥንታዊ እና ውብ በሆነው የጊዝ ስክሪፕት ኮድ በአማርኛ ይጻፉ። እያንዳንዱ ቁልፍ ቃል፣ እያንዳንዱ የተግባር ስም ተፈጥሮአዊ ስሜት ይፈጥራል።",
      "features.ethiopic_numerals.title": "የኢትዮጵያ ቁጥሮች",
      "features.ethiopic_numerals.description": "ኮድ በሚሰሩበት ጊዜ ቅርስዎን ያክብሩ። ከዘመናዊ ቁጥሮች ጎን ለጎን ለባህላዊ የኢትዮጵያ ቁጥሮች ሙሉ ድጋፍ።",
      "features.nodejs_power.title": "የ Node.js ኃይል",
      "features.nodejs_power.description": "በ Node.js ሥነ-ምህዳር ላይ የተገነባ። በሚሊዮን የሚቆጠሩ የ npm ፓኬጆችን ይድረሱ እና የተለመዱ የጃቫስክሪፕት መሳሪያዎችን ይጠቀሙ።",
      "features.type_safe.title": "ዓይነት አስተማማኝ",
      "features.type_safe.description": "አማራጭ የዓይነት ማረጋገጫ ኮድዎ ጠንካራ እና ሊቆይ የሚችል መሆኑን ያረጋግጣል። ከስራ ሰዓት በፊት ስህተቶችን ይያዙ።",
      "features.universal_output.title": "ሁለንተናዊ ውፅዓት",
      "features.universal_output.description": "በሁሉም ቦታ ወደሚሰራ መደበኛ ጃቫስክሪፕት ያጠናቅራል። ለአሳሾች፣ ለአገልጋዮች እና ለሞባይል መተግበሪያዎች ያሰማሩ።",
      "features.modern_syntax.title": "ዘመናዊ አገባብ",
      "features.modern_syntax.description": "የዘመናዊ ጃቫስክሪፕት ምርጡን ከአማርኛ የቋንቋ ዘይቤዎች ጋር የሚያጣምር ንጹህ፣ ገላጭ አገባብ።",
      "playground.edit_instruction": "ከላይ ያለውን የጃኖ ኮድ ለመቀየር ይሞክሩ። የጃቫስክሪፕት ትርጉም በራስ-ሰር ይዘምናል።",
      "playground.title": "በይነተገናኝ መጫወቻ ስፍራ",
      "playground.description": "ጃኖ ፊደልን በቀጥታ በአሳሽዎ ውስጥ ይለማመዱ። የጃኖ ኮድ ይጻፉ እና የጃቫስክሪፕት አቻውን ወዲያውኑ ይመልከቱ።",
      "playground.jano_code": "ጃኖ ኮድ",
      "playground.run": "አሂድ",
      "playground.javascript_output": "ጃቫስክሪፕት ውጤት",
      "dictionary.search_placeholder": "ቁልፍ ቃላትን ይፈልጉ...",
      "dictionary.no_keywords": "ከ\"{searchTerm}\" ጋር የሚዛመድ ቁልፍ ቃል አልተገኘም።",
      "dictionary.title": "ቋንቋ መዝገበ ቃላት",
      "dictionary.description": "ሁሉንም የጃኖ ፊደል ቁልፍ ቃላት እና የጃቫስክሪፕት አቻዎቻቸውን ያስሱ",
      "hero.tagline": "እንደ ቤት የሚሰማዎትን ኮድ ይጻፉ።",
      "hero.code_in": "ኮድ በ",
      "hero.amharic": "አማርኛ",
      "hero.build_for_the": "ለ",
      "hero.world": "ዓለም",
      "hero.main_description": "የጊዝ ስክሪፕትን ኃይል ወደ ዘመናዊ ልማት የሚያመጣ የመጀመሪያው የፕሮግራም አወጣጥ ቋንቋ።",
      "hero.terminal": "ተርሚናል",
      "hero.try_playground": "የሙከራ ቦታውን ይሞክሩ",
      "hero.read_docs": "ሰነዶችን ያንብቡ"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language fastly
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
