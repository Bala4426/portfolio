export type Role = {
  company: string;
  place: string;
  title: string;
  period: string;
  points: string[];
};

export const experience: Role[] = [
  {
    company: 'Integra Software Services',
    place: 'Pondicherry',
    title: 'Senior Programmer',
    period: 'Feb 2026 – now',
    points: [
      'Built the SFTP QC automation service and its monitoring dashboard.',
      'File-comparison and text-processing utilities for production teams; legacy manual steps moved into Python and Perl scripts.',
      'Use AI coding agents to design, test and ship tools faster.',
    ],
  },
  {
    company: 'TNQ Tech',
    place: 'Chennai',
    title: 'Software Engineer',
    period: 'May 2022 – Feb 2026',
    points: [
      'Word-to-XML conversion, XML validation and XSLT transformation scripts in Python, Perl, XSLT and VBA.',
      'Ran a BITS-to-SCBITS XML conversion tool on a Linux server; handled patch releases and server maintenance.',
      'Agile sprints: bug fixes, testing, UAT and live releases.',
    ],
  },
  {
    company: 'diacriTech',
    place: 'Madurai',
    title: 'Team Leader, XML & EPUB',
    period: 'Jan 2014 – May 2022',
    points: [
      'Led a 20-person production team: allocation, tracking and delivery against the roadmap.',
      'Trained the team on XML, XSLT and automation scripts; escalation point and client contact.',
    ],
  },
  {
    company: 'diacriTech',
    place: 'Madurai',
    title: 'XML QC',
    period: 'Jan 2011 – Jan 2014',
    points: ['Checked XML, EPUB, HTML and CSS for books and journals against publisher specifications.'],
  },
];

export const education = {
  qualification: 'Diploma in Computer Engineering',
  institution: 'K.L.N. Polytechnic College, Madurai',
  period: '2008 – 2010',
};
