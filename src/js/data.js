/* =============================================
   SKILLFORGE — data.js
   Single source of truth for services, blog posts,
   pricing plans, team, testimonials and FAQs.
============================================ */
window.SF_DATA = (function () {
  /* ─────────── SERVICES / TRADE COURSES ─────────── */
  var services = [
    {
      id: 'electrical',
      name: 'Electrical Technician',
      category: 'Electrical',
      tagline: 'Wire it. Test it. Power it.',
      duration: '6 Months',
      level: 'Beginner to Intermediate',
      batch: 'Day & Evening',
      cert: 'SkillForge Certified Electrical Technician',
      fee: 899,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85&auto=format&fit=crop',
      summary: 'Domestic and industrial wiring, panel installation, testing, fault-finding and electrical safety to national standards.',
      overview: [
        'The Electrical Technician program takes you from the fundamentals of electricity to confident, code-compliant installation and fault-finding. You spend the majority of every week on live boards and real circuits, guided by working electricians.',
        'By the end you will be able to interpret wiring diagrams, install and test circuits safely, wire distribution boards, and diagnose faults methodically — the exact skills employers ask for on day one.'
      ],
      modules: [
        'Electrical safety, tools and test instruments',
        'Cable types, terminations and enclosure work',
        'Lighting and power circuit installation',
        'Distribution boards and protective devices',
        'Motor control basics and three-phase systems',
        'Inspection, testing and certification'
      ],
      features: [
        '80% practical time on live equipment',
        'Personal tool kit issued for the course',
        'Small batches with a 1:12 instructor ratio',
        'Placement support and interview coaching'
      ],
      faqs: [
        { q: 'Do I need any electrical background?', a: 'No. The course starts from first principles and assumes no prior experience. All safety and theory basics are covered in the first weeks.' },
        { q: 'Will I be able to work on live systems?', a: 'You will train on energised demonstration boards under supervision. Live-site work is introduced only once all safety assessments are passed.' },
        { q: 'Is certification included?', a: 'Yes. The course fee includes all assessments and your SkillForge certificate on successful completion.' }
      ]
    },
    {
      id: 'welding',
      name: 'Welding & Fabrication',
      category: 'Fabrication',
      tagline: 'Join metal. Build structures.',
      duration: '5 Months',
      level: 'Beginner',
      batch: 'Day & Weekend',
      cert: 'Certified Welder (Multi-Process)',
      fee: 799,
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85&auto=format&fit=crop',
      summary: 'MIG, TIG and arc welding plus cutting, joining and metal fabrication for construction and industrial work.',
      overview: [
        'This hands-on program develops the eye, hand and safety discipline of a professional welder. You will practise each process until your beads are consistent and inspection-ready.',
        'You also learn to read fabrication drawings, measure, cut and assemble metal components — turning raw stock into finished, accurate parts.'
      ],
      modules: [
        'Workshop safety, PPE and fire awareness',
        'Manual metal arc (stick) welding',
        'MIG/MAG welding techniques',
        'TIG welding on steel and aluminium',
        'Cutting, grinding, measuring and assembly',
        'Reading fabrication drawings and quality checks'
      ],
      features: [
        'Dedicated welding booths for every learner',
        'Consumables and metal stock provided',
        'Weld quality and inspection training',
        'Portfolio of test pieces for employers'
      ],
      faqs: [
        { q: 'Which welding processes will I learn?', a: 'You will learn stick, MIG/MAG and TIG welding, plus cutting and fabrication fundamentals.' },
        { q: 'Is the equipment provided?', a: 'Yes. All welding machines, PPE and consumables are supplied during training.' },
        { q: 'Can I specialise later?', a: 'Absolutely. Many graduates return for advanced pipe or aluminium welding short courses.' }
      ]
    },
    {
      id: 'plumbing',
      name: 'Plumbing & Pipefitting',
      category: 'Construction',
      tagline: 'Flow, fit and fix with confidence.',
      duration: '4 Months',
      level: 'Beginner',
      batch: 'Day & Evening',
      cert: 'Certified Plumber & Pipefitter',
      fee: 699,
      image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=900&q=85&auto=format&fit=crop',
      summary: 'Pipe systems, fittings, drainage, water supply installation, maintenance and sanitary plumbing practice.',
      overview: [
        'Learn the complete plumbing trade on realistic rigs: hot and cold water supply, waste and drainage, and the fittings and tools that make each job reliable.',
        'You will assemble, pressure-test and troubleshoot full systems, developing the diagnostic habits that keep customers calling you back.'
      ],
      modules: [
        'Plumbing tools, materials and safety',
        'Measuring, cutting and joining pipework',
        'Cold and hot water supply systems',
        'Waste, soil and drainage installation',
        'Sanitaryware fitting and maintenance',
        'Leak detection, testing and repair'
      ],
      features: [
        'Full-size working plumbing rigs',
        'Pressure testing and fault diagnosis practice',
        'Customer-facing service skills',
        'Self-employment and pricing basics'
      ],
      faqs: [
        { q: 'Is plumbing a good career in 2026?', a: 'Yes. Skilled plumbers remain in high demand, and self-employment options are strong once you are certified.' },
        { q: 'How much practical time do I get?', a: 'Around 75% of the course is hands-on assembly, testing and repair on live rigs.' },
        { q: 'Do you cover gas work?', a: 'This program covers water and drainage. Gas is a separate, regulated certification offered as an advanced add-on.' }
      ]
    },
    {
      id: 'hvac',
      name: 'HVAC & Refrigeration',
      category: 'Mechanical',
      tagline: 'Keep buildings comfortable.',
      duration: '6 Months',
      level: 'Beginner to Intermediate',
      batch: 'Day & Evening',
      cert: 'HVAC/R Service Technician',
      fee: 949,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85&auto=format&fit=crop',
      summary: 'Install, service and troubleshoot heating, ventilation, air conditioning and refrigeration systems.',
      overview: [
        'HVAC technicians keep offices, homes and cold chains running. This course teaches you the mechanical and electrical skills needed to install, maintain and repair these systems.',
        'You will work on split and central units, learn refrigerant handling safely, and practise the systematic fault-finding that defines a professional service technician.'
      ],
      modules: [
        'HVAC safety, tools and thermodynamics basics',
        'Refrigeration cycle and refrigerant handling',
        'Split and central AC installation',
        'Electrical control circuits and diagnostics',
        'Preventive maintenance and servicing',
        'Fault-finding and system commissioning'
      ],
      features: [
        'Live AC and refrigeration training units',
        'Refrigerant handling and safety certification',
        'Electrical diagnostics built in',
        'Manufacturer-aligned service procedures'
      ],
      faqs: [
        { q: 'Does the course cover electrical work?', a: 'Yes. HVAC is part electrical, so control circuits, motors and diagnostics are core modules.' },
        { q: 'Is refrigerant handling included?', a: 'Yes, safe refrigerant handling and recovery are covered and assessed.' },
        { q: 'Where do HVAC graduates work?', a: 'Graduates work in facilities management, construction, refrigeration, and building services.' }
      ]
    },
    {
      id: 'solar',
      name: 'Solar PV Installation',
      category: 'Renewable',
      tagline: 'Power the future with the sun.',
      duration: '3 Months',
      level: 'Beginner',
      batch: 'Evening & Weekend',
      cert: 'Solar PV Installer',
      fee: 649,
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85&auto=format&fit=crop',
      summary: 'Design, install, wire and commission solar photovoltaic systems for homes and businesses.',
      overview: [
        'Renewable energy is one of the fastest-growing trades. This focused program teaches you to safely design and install solar photovoltaic systems from the roof to the inverter and the grid connection.',
        'You will size systems for real demand, mount and wire panels, and commission installations — skills in demand across residential and commercial projects.'
      ],
      modules: [
        'Solar fundamentals and system components',
        'Site assessment and system sizing',
        'Roof mounting and mechanical installation',
        'DC and AC wiring, inverters and protection',
        'Commissioning, monitoring and handover',
        'Safety, fall protection and electrical standards'
      ],
      features: [
        'Hands-on roof and ground mount practice',
        'System sizing and design exercises',
        'Grid-tie and battery storage introduction',
        'Industry-recognised installer certificate'
      ],
      faqs: [
        { q: 'Is a 3-month course enough to start work?', a: 'Yes. The program is intensive and focused specifically on installation, which is where most entry-level roles sit.' },
        { q: 'Do you cover battery storage?', a: 'Yes, an introduction to battery and hybrid systems is included, with an advanced add-on available.' },
        { q: 'Will I need to work at height?', a: 'Some installations are on roofs, so fall-protection and safe working-at-height are taught and assessed.' }
      ]
    },
    {
      id: 'automotive',
      name: 'Automotive Repair',
      category: 'Automotive',
      tagline: 'Diagnose. Repair. Get them moving.',
      duration: '6 Months',
      level: 'Beginner to Intermediate',
      batch: 'Day & Weekend',
      cert: 'Automotive Service Technician',
      fee: 899,
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=900&q=85&auto=format&fit=crop',
      summary: 'Engine systems, diagnostics, brakes, suspension, electricals and routine vehicle servicing.',
      overview: [
        'Modern vehicles are computers on wheels. This program blends mechanical skill with diagnostic thinking so you can service and repair a wide range of vehicles confidently.',
        'Using real vehicles and diagnostic tools, you will work through engines, brakes, suspension and automotive electrics, learning a structured diagnostic process.'
      ],
      modules: [
        'Workshop safety and vehicle lifting',
        'Engine systems and servicing',
        'Brakes, steering and suspension',
        'Automotive electrical and electronics',
        'Diagnostic tools and fault codes',
        'Routine maintenance and inspection workflow'
      ],
      features: [
        'Training on real vehicles and lifts',
        'Hands-on use of diagnostic scan tools',
        'Service-advisor communication skills',
        'Preparation for garage and dealership roles'
      ],
      faqs: [
        { q: 'Do I need to own tools?', a: 'No. A shared, fully equipped tool set is available. Many graduates buy their own kit as they progress.' },
        { q: 'Is diesel covered?', a: 'Diesel fundamentals are introduced; there is an advanced diesel diagnostics add-on.' },
        { q: 'Can I work in a dealership after this?', a: 'Yes. The course prepares you for garage, dealership and fleet-maintenance entry roles.' }
      ]
    }
  ];

  /* ─────────── BLOG POSTS ─────────── */
  var posts = [
    {
      id: 'how-to-choose-a-trade',
      title: 'How to Choose the Right Trade for Your Future',
      category: 'Career',
      date: '12 Jan 2026',
      author: 'Admissions Team',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=85&auto=format&fit=crop',
      excerpt: 'Unsure where to start? Here is a practical framework for matching your interests, strengths and local job demand to a trade that pays.',
      tags: ['Career', 'Beginners', 'Advice'],
      content: [
        'Choosing a trade is one of the highest-return decisions you can make. With the right fit, training leads quickly to steady work; with the wrong fit, motivation fades. This guide walks you through a simple, practical framework.',
        '## Start with what you enjoy doing',
        'Think about the tasks you naturally gravitate towards. Do you enjoy fixing things with your hands, working outdoors, solving electrical puzzles, or organising systems? Your answer narrows the field quickly.',
        '## Match strengths, not just dreams',
        'Physical stamina, attention to detail and comfort with numbers all matter. Be honest about your strengths, and pick a trade where your natural abilities give you an early advantage.',
        '## Check local demand and pay',
        'Look at job listings in your area. Which trades appear most often? What are entry-level wages? Training in a high-demand trade means faster placement and more negotiating power.',
        '## Try before you commit',
        'Visit a campus, sit in on a workshop, or take a short taster course. A single afternoon can tell you more than months of guessing.',
        '## Talk to people already working',
        'Ask technicians what a normal day looks like, what they wish they had learned earlier, and what employers look for. Their answers are gold.',
        'Whatever you choose, remember that skills compound. Pick a direction, start training, and refine as you go.'
      ]
    },
    {
      id: 'electrical-safety-basics',
      title: '10 Electrical Safety Rules Every Beginner Must Know',
      category: 'Electrical',
      date: '05 Jan 2026',
      author: 'Marcus Reid',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=900&q=85&auto=format&fit=crop',
      excerpt: 'Electricity does not give second chances. These ten rules keep trainees safe from day one and build habits employers respect.',
      tags: ['Electrical', 'Safety', 'Beginners'],
      content: [
        'Safety is not a module you pass once — it is a habit you build. These ten rules form the backbone of every safe electrician.',
        '## 1. Isolate before you touch',
        'Never work on a circuit you have not isolated, locked off and proved dead. Treat every conductor as live until you personally confirm otherwise.',
        '## 2. Prove your tester',
        'Test your voltage tester on a known live source before and after you check a circuit. A faulty tester is more dangerous than none.',
        '## 3. Wear the right PPE',
        'Insulated gloves, safety glasses and flame-resistant clothing are non-negotiable when working near live equipment.',
        '## 4. Keep one hand in your pocket',
        'Where live work cannot be avoided, using one hand reduces the risk of current crossing your heart.',
        '## 5. Respect water and electricity',
        'Damp conditions turn ordinary materials into conductors. Dry your workspace and use RCD protection.',
        '## 6. Use the right tool for the job',
        'Insulated tools, correct cable ratings and proper terminations prevent both shocks and fires.',
        '## 7. Never rush a termination',
        'Loose connections overheat. Take the extra minute to torque and re-check every termination.',
        '## 8. Label everything',
        'Clear labelling protects the next person — including future you — from surprise circuits.',
        '## 9. Plan the work, then work the plan',
        'A short written method statement prevents the improvisation that causes most accidents.',
        '## 10. Speak up',
        'If something feels unsafe, stop. No deadline is worth an injury.',
        'Master these ten rules and you will already stand out in any workshop.'
      ]
    },
    {
      id: 'welding-career-guide',
      title: 'The Complete Welding Career Guide for 2026',
      category: 'Welding',
      date: '28 Dec 2025',
      author: 'Zoe Almeira',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=900&q=85&auto=format&fit=crop',
      excerpt: 'From your first bead to a six-figure offshore role, here is how a welding career can grow — and what to learn at each stage.',
      tags: ['Welding', 'Career', 'Salary'],
      content: [
        'Welding is one of the most portable, in-demand skills in the world. Here is how to build a career, not just a job.',
        '## Stage 1 — Learn the core processes',
        'Start with stick, MIG and TIG welding. Consistency matters more than speed. Build a portfolio of test pieces.',
        '## Stage 2 — Get certified and get hired',
        'Certification opens doors. Entry-level fabrication and maintenance roles build site experience.',
        '## Stage 3 — Specialise',
        'Pipe welding, aluminium, stainless and coded welding attract premium pay. Choose a niche that suits your market.',
        '## Stage 4 — Grow into leadership',
        'Welding inspectors, supervisors and workshop owners all started at the bench. Leadership pays more and spares your body.',
        '## What employers look for',
        'Reliability, safety awareness and the ability to read drawings consistently beat raw speed.',
        'Treat every job as a portfolio piece and your career will compound.'
      ]
    },
    {
      id: 'hvac-summer-checklist',
      title: 'The HVAC Summer Readiness Checklist',
      category: 'HVAC',
      date: '18 Dec 2025',
      author: 'James Okafor',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&q=85&auto=format&fit=crop',
      excerpt: 'Peak season makes or breaks an HVAC technician. Use this checklist to keep systems running — and customers happy.',
      tags: ['HVAC', 'Maintenance', 'Checklist'],
      content: [
        'When temperatures rise, HVAC calls flood in. Preparation is what separates a smooth season from a stressful one.',
        '## Before peak season',
        'Clean coils, check refrigerant charge, test capacitors and inspect drain lines across your client base.',
        '## During a service call',
        'Follow a consistent sequence: power, thermostat, airflow, refrigerant, controls. Consistency prevents missed faults.',
        '## Document everything',
        'Photos and readings protect you and build customer trust. Good records also sell maintenance contracts.',
        '## Stock the van',
        'The most common failure parts should never be more than an arm reach away.',
        'A calm, structured technician earns more referrals than a fast one.'
      ]
    },
    {
      id: 'solar-career-outlook',
      title: 'Why Solar Skills Are the Fastest Route into Renewable Energy',
      category: 'Renewable',
      date: '09 Dec 2025',
      author: 'Admissions Team',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=900&q=85&auto=format&fit=crop',
      excerpt: 'Solar installation is booming. Here is why it is one of the quickest, most accessible renewable careers to enter right now.',
      tags: ['Renewable', 'Solar', 'Career'],
      content: [
        'Solar is growing faster than the workforce can keep up. That gap is an opportunity for anyone willing to learn the trade.',
        '## Short training, fast entry',
        'A focused installation course can get you site-ready in months, not years.',
        '## Broad job market',
        'Residential, commercial, utility and battery-storage projects all need installers.',
        '## The skill stack',
        'System sizing, safe mounting, DC/AC wiring and commissioning form the core employer requirement.',
        '## Where it leads',
        'Installers grow into lead technicians, designers, and business owners. The ceiling is high.',
        'Renewables are not a fad — they are the next infrastructure build-out.'
      ]
    },
    {
      id: 'interview-tips-for-trades',
      title: 'Interview Tips That Get Trade Graduates Hired',
      category: 'Placement',
      date: '01 Dec 2025',
      author: 'Placement Team',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85&auto=format&fit=crop',
      excerpt: 'You have the skills. These practical interview habits turn a good candidate into the one who gets the offer.',
      tags: ['Placement', 'Interview', 'Jobs'],
      content: [
        'Technical skill gets you the interview; preparation gets you the job. Here is how to stand out.',
        '## Bring proof of work',
        'Photos, test pieces and a tidy portfolio immediately separate you from candidates who only talk.',
        '## Know the safety answer',
        'Every trade interview includes a safety question. Have a concrete, specific answer ready.',
        '## Show you can learn',
        'Employers hire attitude and train skill. Demonstrate curiosity and reliability.',
        '## Ask good questions',
        'Ask about tools, progression and training. It shows long-term intent.',
        '## Follow up',
        'A short thank-you message keeps your name at the top of the pile.',
        'Preparation is the cheapest career investment you will ever make.'
      ]
    },
    {
      id: 'cnc-career-path',
      title: 'From Operator to Programmer: The CNC Career Path',
      category: 'Manufacturing',
      date: '22 Nov 2025',
      author: 'Marcus Reid',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=900&q=85&auto=format&fit=crop',
      excerpt: 'CNC machining offers a clear ladder from machine operator to programmer. Here is how to climb it.',
      tags: ['Manufacturing', 'CNC', 'Career'],
      content: [
        'CNC machining rewards precision and patience — and it offers one of the clearest promotion paths in manufacturing.',
        '## Start as an operator',
        'Learn setup, loading, measuring and quality checks. This builds the shop-floor intuition you will need later.',
        '## Move into setup',
        'Tooling, offsets and fixture knowledge turn you into the person the line depends on.',
        '## Learn to program',
        'CAD/CAM and G-code unlock the higher-paid, higher-skill roles.',
        '## Specialise',
        'Multi-axis, prototyping and high-precision work command premium pay.',
        'Every stage builds on the last. Start at the machine and never stop learning.'
      ]
    },
    {
      id: 'apprenticeship-guide',
      title: 'Apprenticeships vs Full-Time Courses: Which Is Right for You?',
      category: 'Career',
      date: '14 Nov 2025',
      author: 'Admissions Team',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=900&q=85&auto=format&fit=crop',
      excerpt: 'Both routes lead to a trade career. The right choice depends on your time, income needs and learning style.',
      tags: ['Career', 'Apprenticeship', 'Advice'],
      content: [
        'There is no single route into a trade. Understanding the trade-offs helps you choose with confidence.',
        '## Full-time courses',
        'Faster, intensive and workshop-focused. Ideal if you can study before you earn.',
        '## Apprenticeships',
        'Earn while you learn, but progress more slowly and depend on finding a willing employer.',
        '## The hybrid path',
        'Many learners take a short intensive course, then enter an apprenticeship with a head start.',
        '## What matters most',
        'Consistency of practice. Whichever route you choose, hands-on hours are what build skill.',
        'Pick the route that fits your life — then commit fully.'
      ]
    }, 
     {
      id: 'how-to-choose-a-trade',
      title: 'How to Choose the Right Trade for Your Future',
      category: 'Career',
      date: '12 Jan 2026',
      author: 'Admissions Team',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=85&auto=format&fit=crop',
      excerpt: 'Unsure where to start? Here is a practical framework for matching your interests, strengths and local job demand to a trade that pays.',
      tags: ['Career', 'Beginners', 'Advice'],
      content: [
        'Choosing a trade is one of the highest-return decisions you can make. With the right fit, training leads quickly to steady work; with the wrong fit, motivation fades. This guide walks you through a simple, practical framework.',
        '## Start with what you enjoy doing',
        'Think about the tasks you naturally gravitate towards. Do you enjoy fixing things with your hands, working outdoors, solving electrical puzzles, or organising systems? Your answer narrows the field quickly.',
        '## Match strengths, not just dreams',
        'Physical stamina, attention to detail and comfort with numbers all matter. Be honest about your strengths, and pick a trade where your natural abilities give you an early advantage.',
        '## Check local demand and pay',
        'Look at job listings in your area. Which trades appear most often? What are entry-level wages? Training in a high-demand trade means faster placement and more negotiating power.',
        '## Try before you commit',
        'Visit a campus, sit in on a workshop, or take a short taster course. A single afternoon can tell you more than months of guessing.',
        '## Talk to people already working',
        'Ask technicians what a normal day looks like, what they wish they had learned earlier, and what employers look for. Their answers are gold.',
        'Whatever you choose, remember that skills compound. Pick a direction, start training, and refine as you go.'
      ]
    }
  ];

  /* ─────────── PRICING PLANS (pricing.html) ─────────── */
  var plans = [
    {
      name: 'Foundation',
      tag: 'Try it free',
      price: '$0',
      period: 'free taster workshop',
      desc: 'For anyone exploring a trade before committing.',
      highlight: false,
      cta: 'Book Free Session',
      features: [
        '1 free taster workshop',
        'Career counselling session',
        'Campus tour & workshop access',
        'Skills assessment',
        'Course recommendation report'
      ]
    },
    {
      name: 'Career Pro',
      tag: 'Most Popular',
      price: '$249',
      period: 'per month',
      desc: 'Our flagship path from beginner to certified and employed.',
      highlight: true,
      cta: 'Enroll Now',
      features: [
        'Full certification course (any trade)',
        'All tools, materials & PPE',
        'Day, evening or weekend batches',
        'Placement assistance & interview coaching',
        'Resume and portfolio building',
        'Recognised certificate on completion'
      ]
    },
    {
      name: 'Masterclass',
      tag: 'Advanced',
      price: '$449',
      period: 'per month',
      desc: 'For learners who want advanced specialisation and priority support.',
      highlight: false,
      cta: 'Talk to Admissions',
      features: [
        'Everything in Career Pro',
        'Advanced specialisation module',
        'One-to-one mentoring sessions',
        'Priority placement referrals',
        'Business & self-employment coaching',
        'Lifetime alumni network access'
      ]
    }
  ];

  var planComparison = [
    { feature: 'Hands-on workshop hours', foundation: 'Taster only', pro: 'Full course', master: 'Full + advanced' },
    { feature: 'Tools & materials provided', foundation: 'No', pro: 'Yes', master: 'Yes' },
    { feature: 'Certification', foundation: 'No', pro: 'Yes', master: 'Yes + advanced' },
    { feature: 'Placement assistance', foundation: 'No', pro: 'Yes', master: 'Priority' },
    { feature: 'One-to-one mentoring', foundation: 'No', pro: 'Group', master: 'Unlimited' },
    { feature: 'Alumni network', foundation: 'No', pro: 'Yes', master: 'Lifetime' }
  ];

  /* ─────────── TEAM (about.html) ─────────── */
  var team = [
    { name: 'Marcus Reid', role: 'Founder & Head of Training', image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&q=85&auto=format&fit=crop', bio: '20 years on the tools and in technical education, Marcus built SkillForge around one belief: skills should lead directly to work.' },
    { name: 'Zoe Almeira', role: 'Director of Curriculum', image: 'https://images.unsplash.com/photo-1609899464264-4afbdca4a1ac?w=600&q=85&auto=format&fit=crop', bio: 'A former vocational assessor, Zoe designs our competency-based programs with employers, not for them.' },
    { name: 'James Okafor', role: 'Head of Placement', image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=85&auto=format&fit=crop', bio: 'James leads our employer partnerships and coaches every graduate through interviews until they are hired.' },
    { name: 'Priya Nair', role: 'Lead Instructor — Mechanical', image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=85&auto=format&fit=crop', bio: 'Priya trains our HVAC and mechanical cohorts, and writes the fault-finding drills learners love.' }
  ];

  /* ─────────── TESTIMONIALS ─────────── */
  var testimonials = [
    { quote: 'I walked in with no trade experience. Six months later I was wiring houses on a paid apprenticeship. The workshop hours made all the difference.', name: 'Daniel Mensah', role: 'Electrical Technician Graduate' },
    { quote: 'The placement team set up three interviews for me. I had a job offer before my certificate even arrived.', name: 'Priya Nair', role: 'HVAC & Refrigeration Graduate' },
    { quote: 'Practical, no-nonsense training. I now run my own small fabrication workshop and take on my own apprentices.', name: 'Kwame Otieno', role: 'Welding & Fabrication Graduate' }
  ];

  /* ─────────── SITE-WIDE FAQS (faq.html) ─────────── */
  var faqs = [
    { q: 'Do I need prior experience to enroll?', a: 'No. Most programs start from the fundamentals and are designed for complete beginners. Advanced modules list any recommended background.' },
    { q: 'How do I choose the right trade?', a: 'Book a free counselling session or taster workshop. Our advisors match your interests and local job demand to a trade.' },
    { q: 'What are the fees and payment options?', a: 'Fees vary by trade and duration. We offer monthly instalments, and the Foundation taster workshop is completely free.' },
    { q: 'Will I receive a certificate?', a: 'Yes. Every course ends with practical and written assessment, and a recognised SkillForge certificate on completion.' },
    { q: 'Do you really help with job placement?', a: 'Absolutely. Placement support is included in every certified course — resumes, interview coaching and employer introductions.' },
    { q: 'Can I visit the campus before enrolling?', a: 'Yes, campus tours run every weekday from 9:00 AM to 5:00 PM. No appointment is needed.' },
    { q: 'Are there flexible class schedules?', a: 'Yes. We offer weekday morning, weekday evening and weekend batches across most trades.' },
    { q: 'What language are classes taught in?', a: 'All core training is delivered in English, with instructors able to support learners in additional local languages.' },
    { q: 'What support is available after I finish?', a: 'You join our alumni network with lifetime access to job leads, refresher workshops and career mentoring.' },
    { q: 'How long until I can start working?', a: 'Most graduates enter work within 30 days of completing their course, supported by our placement team.' }
  ];

  return {
    services: services,
    posts: posts,
    plans: plans,
    planComparison: planComparison,
    team: team,
    testimonials: testimonials,
    faqs: faqs,
    getService: function (id) {
      for (var i = 0; i < services.length; i++) { if (services[i].id === id) return services[i]; }
      return null;
    },
    getPost: function (id) {
      for (var i = 0; i < posts.length; i++) { if (posts[i].id === id) return posts[i]; }
      return null;
    }
  };
})();
