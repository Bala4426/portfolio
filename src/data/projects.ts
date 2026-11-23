/**
 * Selected work. Work projects are described in general terms only:
 * no client names, internal URLs, code or screenshots.
 */
export type Project = {
  id: string;
  title: string;
  kind: string;
  summary: string;
  problem: string;
  built: string[];
  result?: string;
  stack: string[];
  link?: { href: string; label: string };
  image?: { src: string; alt: string; caption: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    id: 'mathmorph',
    title: 'MathMorph',
    kind: 'Personal project · Open source',
    summary: 'Turns equation pictures and MathType objects in Word files into native, editable Word equations. Fully offline.',
    problem:
      'Manuscripts arrive with equations pasted as images or embedded as old MathType objects. Nobody can edit them, search them, or read them with a screen reader, and retyping them by hand is slow and error-prone.',
    built: [
      'Own OLE compound-file and MTEF v5 parsers read MathType equations exactly from the binary data. No OCR, no guessing.',
      'Image equations go through a local OCR model. Each result is re-rendered and scored against the original with SSIM before anything is replaced; low scores are marked NEEDS_REVIEW.',
      'Only the changed XML runs are spliced back in. A post-save gate checks byte identity, re-inventories the file and validates it with the Open XML SDK.',
      'WinForms review screen: original next to converted, with corrections cached and re-applied in seconds.',
    ],
    result: '123 of 123 MathType equations converted on a real manuscript. 99 unit tests and a 12-document synthetic test corpus.',
    stack: ['C# / .NET 8', 'Python workers', 'pix2text (ONNX)', 'Pandoc', 'scikit-image', 'WinForms'],
    link: { href: 'https://github.com/Bala4426/mathmorph', label: 'github.com/Bala4426/mathmorph' },
    image: {
      src: `${import.meta.env.BASE_URL}mathmorph-review.png`,
      alt: 'MathMorph review screen listing each original equation picture next to the converted Word equation and its LaTeX.',
      caption: 'The review screen: original picture, converted Word equation and LaTeX side by side.',
      width: 1946,
      height: 1226,
    },
  },
  {
    id: 'xml-agent',
    title: 'XML Validation & Auto-Fix Agent',
    kind: 'Personal project · Used in production',
    summary: 'An AI agent that reads DTD validation errors, plans a fix, applies it safely and re-validates until the file passes.',
    problem:
      'Invalid XML comes back from validation with a list of errors, and someone has to read each one, find the cause and fix it by hand. Most fixes follow the same handful of patterns.',
    built: [
      'Loop: validate against the DTD, collect evidence from the XML and DTD, ask an LLM for a diagnosis and a fix plan, apply, validate again.',
      'The model only reasons. It never edits the file; a safety validator and a bounded fix engine apply each operation, with atomic writes and the root element protected.',
      'Review mode prints the plan without touching the file. Every iteration is saved with a JSON history and a final report.',
      'Runs on Gemini or a local Qwen 2.5 model through llama.cpp, for networks that block external APIs.',
    ],
    result: 'Built on my own time and handed over to production to cut manual XML correction work.',
    stack: ['Python', 'lxml', 'Gemini API', 'llama.cpp', 'Linux'],
  },
  {
    id: 'sftp-qc',
    title: 'SFTP QC Automation',
    kind: 'Work · Integra',
    summary: 'A service that watches vendor SFTP folders, validates every upload and routes it to production or back to the vendor.',
    problem:
      'Vendors upload ZIPs of XML and EPUB files every day. Each one had to be downloaded, run through the right validator for that customer, and sorted by hand.',
    built: [
      'Polls date-based folders per customer, waits until an upload is complete, downloads in parallel with resume support.',
      'Runs the customer-specific XML or EPUB validator on every file. Pass goes to production, fail goes back with an emailed QC report.',
      'Monitoring dashboard: live log, hang detection, capped auto-restart, SMTP health checks and alerts on failure and recovery.',
    ],
    result: 'All validation tools run from one place, so only valid files are accepted from vendors.',
    stack: ['Python', 'Paramiko', 'ThreadPoolExecutor', 'SMTP', 'PyInstaller'],
  },
  {
    id: 'ai-qa',
    title: 'AI QA Assistant',
    kind: 'Personal project',
    summary: 'Generates test cases from a JIRA story and a GitLab merge request with Claude, then checks every acceptance criterion is covered.',
    problem: 'Writing test cases from a story and a code diff is slow, and it is easy to miss an acceptance criterion.',
    built: [
      'Builds context from the story and the MR diff, masks secrets and trims to a token budget before calling Claude with a strict JSON schema.',
      'Validates output with pydantic, maps every acceptance criterion to at least one test case, and gives each case a stable ID so reruns do not duplicate.',
      'Human review sheet, then export to Excel layouts for Xray, Zephyr and TestRail. Ships as a Windows installer that needs no admin rights.',
    ],
    stack: ['Python', 'Claude API', 'pydantic', 'JIRA & GitLab APIs', 'Docker'],
  },
  {
    id: 'equationsnap',
    title: 'EquationSnap',
    kind: 'Personal project',
    summary: 'Press a hotkey, drag over an equation anywhere on screen, and get LaTeX, MathML and a clean image.',
    problem: 'Copying an equation out of a PDF or web page usually means retyping it.',
    built: [
      'Screen snip with per-monitor DPI handling, recognition offline (pix2tex) or through the Claude API.',
      'Edit the LaTeX and the MathML and rendered image update live. Copy any format or save them all.',
    ],
    stack: ['Python', 'Tkinter', 'pix2tex', 'Claude API'],
  },
];
