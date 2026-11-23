/** Core profile. Kept in sync with resume/Balamurugan-V-Resume.html. */
export const profile = {
  name: 'Balamurugan V',
  role: 'Python Backend & Automation Engineer',
  location: 'Madurai, Tamil Nadu',
  availability: 'Open to roles in Madurai or remote',
  email: 'muruganbala407@gmail.com',
  /** Hidden on the public site unless set to true. */
  showPhone: false,
  phone: '+91 99946 12300',
  linkedin: 'https://www.linkedin.com/in/balamuruganlavan',
  github: 'https://github.com/Bala4426',
  resumeFile: `${import.meta.env.BASE_URL}Balamurugan-V-Resume.pdf`,
  resumeDownloadName: 'Balamurugan-V-Resume.pdf',

  intro:
    'I build the tools that sit between messy input files and a clean production pipeline: services that pull vendor files off SFTP and validate them, agents that fix broken XML, converters that turn Word equations into something editable.',

  about: [
    'I spent my first decade in digital publishing on the production floor. Three years checking XML and EPUB by hand, then eight years leading a 20-person team producing books and journals. That is where I learned what goes wrong with structured content, and how much of the fixing is repetitive.',
    'Since 2022 I have been writing the software instead: Word-to-XML conversion and XSLT at TNQ Tech, and now SFTP QC automation and validation tooling at Integra. Most of it is Python, with Perl, XSLT and C# where they fit.',
    'Lately I put LLMs to work where rules alone run out, always behind a check the model cannot skip: a DTD validator, an SSIM score, a human review step.',
  ],

  pullQuote: 'The model can suggest a fix. The validator decides if it ships.',

  facts: [
    { value: '15', label: 'years in XML and digital publishing' },
    { value: '4+', label: 'years writing production software' },
    { value: '20', label: 'people led on an XML and EPUB team' },
  ],
} as const;
