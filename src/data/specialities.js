export const specialities = [
  {
    id: 1,
    name: 'Cardiology',
    slug: 'cardiology',
    tagline: 'Advanced Heart Care',
    description: 'Our Institute of Cardiology provides comprehensive preventive, diagnostic, and therapeutic services. From routine check-ups to complex interventions, our team ensures your heart is in the best hands.',
    longDescription: [
      'The Institute of Cardiology at Novara Hospital represents the pinnacle of cardiovascular care. Our multidisciplinary team of board-certified cardiologists, cardiovascular surgeons, and specialized nursing staff work collaboratively to deliver personalized, evidence-based treatments.',
      'Equipped with the latest in diagnostic and interventional technology, we are capable of handling the most complex cardiac emergencies 24/7. Our commitment extends beyond treatment to comprehensive cardiac rehabilitation, ensuring a full return to a healthy, active life.'
    ],
    image: 'https://images.unsplash.com/photo-1628348070889-cb656235b4eb?q=80&w=1170&auto=format&fit=crop',
    icon: 'Heart',
    conditions: ['Heart Failure', 'Coronary Artery Disease', 'Arrhythmia', 'Hypertension', 'Valvular Heart Disease'],
    procedures: ['Coronary Angiography & Angioplasty', 'Pacemaker Implantation', 'Coronary Artery Bypass Grafting (CABG)', 'Heart Valve Replacement', 'Electrophysiology Study (EPS)'],
    facilities: [
      { name: 'State-of-the-Art Cath Lab', description: 'Advanced flat-panel biplane cardiac catheterization lab for pinpoint accuracy.' },
      { name: 'Non-Invasive Cardiology Suite', description: 'Featuring 3D Echocardiography, TMT, and Holter monitoring systems.' },
      { name: 'Dedicated Cardiac ICU', description: '24/7 intensive care unit fully equipped with advanced hemodynamic monitoring.' }
    ],
    faqs: [
      { question: 'What should I bring to my first cardiology appointment?', answer: 'Please bring your previous medical records, past ECGs or echocardiograms, a list of your current medications, and your insurance information.' },
      { question: 'How quickly can I get an appointment for chest pain?', answer: 'For severe, acute chest pain, please visit our 24/7 Emergency Department immediately. For consultative appointments, we typically offer slots within 24 to 48 hours.' },
      { question: 'Do you offer cardiac rehabilitation programs?', answer: 'Yes, we have a comprehensive cardiac rehabilitation program tailored to patients recovering from heart attacks, surgeries, or managing chronic heart disease.' }
    ]
  },
  {
    id: 2,
    name: 'Neurology',
    slug: 'neurology',
    tagline: 'Expert Care for Brain & Spine',
    description: 'The Neurology department offers state-of-the-art care for entire spectrum of neurological disorders. We provide an integrated approach to treatment relying on advanced neuro-imaging and therapies.',
    longDescription: [
      'The Department of Neurology at Novara Hospital provides world-class care for conditions affecting the brain, spinal cord, and nervous system. Our internationally recognized neurologists and neurosurgeons utilize advanced diagnostic protocols to bring clarity to complex neurological conditions.',
      'From stroke management to neurodegenerative disorders, we employ a holistic, patient-centered approach. Our facility integrates physical therapy, neuro-rehabilitation, and psychological support to ensure comprehensive care.'
    ],
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=1200&auto=format&fit=crop&q=80',
    icon: 'Brain',
    conditions: ['Stroke', 'Epilepsy', 'Multiple Sclerosis', 'Parkinson\'s Disease', 'Migraines'],
    procedures: ['Deep Brain Stimulation (DBS)', 'Endovascular Coiling', 'Neuro-Rehabilitation', 'EEG & EMG Monitoring', 'Spine Decompression Surgery'],
    facilities: [
      { name: 'Advanced 3T MRI Suite', description: 'Ultra-high-resolution imaging for precise neurological diagnosis and surgical planning.' },
      { name: 'Stroke Unit', description: 'Specialized 24/7 acute stroke ready unit for immediate intervention.' },
      { name: 'Neurophysiology Lab', description: 'Comprehensive diagnostic services including EEG, EMG, and nerve conduction studies.' }
    ],
    faqs: [
      { question: 'What are the early signs of a stroke?', answer: 'Remember FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency services. Seek immediate care if these occur.' },
      { question: 'How do you diagnose chronic headaches?', answer: 'We conduct a thorough clinical evaluation, reviewing your medical history, followed by advanced imaging or neurodiagnostic tests if required.' },
      { question: 'Is Parkinson’s disease curable?', answer: 'While there is currently no cure for Parkinson’s, our advanced treatments, including medication and Deep Brain Stimulation (DBS), can effectively manage symptoms and improve quality of life.' }
    ]
  },
  {
    id: 3,
    name: 'Orthopaedics',
    slug: 'orthopaedics',
    tagline: 'Restoring Mobility',
    description: 'Dedicated to bone and joint health, our Orthopaedics center specializes in joint replacements, sports injuries, and complex trauma surgeries to help you get back to your active life.',
    longDescription: [
      'The Novara Centre for Orthopaedics and Joint Reconstruction is dedicated to restoring mobility and eliminating pain. Our experts specialize in conditions of the bones, joints, ligaments, tendons, and muscles, helping patients safely return to their active lifestyles.',
      'We combine minimally invasive surgical techniques with tailored physiotherapy to ensure faster recovery times. Whether it is a sports injury, complex trauma, or advanced joint replacement, our team offers precision and compassionate care at every step.'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80',
    icon: 'Bone',
    conditions: ['Arthritis', 'Sports Injuries', 'Fractures', 'Spinal Disorders', 'Joint Replacements'],
    procedures: ['Total Knee Replacement', 'Hip Resurfacing', 'Arthroscopic Surgery', 'Spinal Fusion', 'Ligament Reconstruction'],
    facilities: [
      { name: 'Class 100 Operation Theatres', description: 'Ultra-clean laminar flow theaters designed specifically to prevent surgical infections.' },
      { name: 'Sports Medicine & Rehab Center', description: 'Advanced physiotherapy and rehabilitation gym for active recovery.' },
      { name: 'Bone Mineral Density Lab', description: 'Specialized diagnostic facility for osteoporosis screening and bone health assessment.' }
    ],
    faqs: [
      { question: 'How long is the recovery from a knee replacement?', answer: 'Most patients begin walking with support the day after surgery. Full recovery takes 3 to 6 months, supported by our continuous physiotherapy.' },
      { question: 'Do I need surgery for a sports injury?', answer: 'Not always. We prioritize non-invasive treatments like rest, physical therapy, and medication. Surgery is only recommended when conservative methods are insufficient.' },
      { question: 'What should I wear to my orthopaedic appointment?', answer: 'Wear loose, comfortable clothing that allows the doctor to easily examine the joint or area causing you pain.' }
    ]
  },
  {
    id: 4,
    name: 'Gastroenterology',
    slug: 'gastroenterology',
    tagline: 'Digestive Health Excellence',
    description: 'We offer advanced medical care for the digestive system. Equipped with modern endoscopy suites, we provide precise diagnosis and treatment for all GI and liver conditions.',
    longDescription: [
      'The Department of Gastroenterology at Novara Hospital specializes in the diagnosis, treatment, and prevention of diseases of the digestive tract and liver. Our board-certified gastroenterologists provide expert care tailored to each patient\'s unique anatomical and lifestyle needs.',
      'With state-of-the-art endoscopy suites and advanced imaging capabilities, we investigate and manage complex conditions safely and effectively. We prioritize patient comfort and employ minimally invasive therapeutic techniques whenever possible.'
    ],
    image: 'https://images.unsplash.com/photo-1743767587835-7a80fe384236?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2FzdHJvZW50ZXJvbG9neXxlbnwwfHwwfHx8Mg%3D%3D',
    icon: 'FlaskConical',
    conditions: ['Acid Reflux', 'Liver Disease', 'Irritable Bowel Syndrome', 'Pancreatitis', 'Gallstones'],
    procedures: ['Diagnostic Endoscopy', 'Colonoscopy', 'ERCP', 'Liver Biopsy', 'Polypectomy'],
    facilities: [
      { name: 'Advanced Endoscopy Suite', description: 'Fully equipped rooms for both diagnostic and therapeutic gastrointestinal procedures.' },
      { name: 'GI Motility Lab', description: 'For comprehensive evaluation of esophageal, gastric, and anorectal function.' },
      { name: 'Hepatology Clinic', description: 'Dedicated center for the multidisciplinary management of acute and chronic liver diseases.' }
    ],
    faqs: [
      { question: 'Is a colonoscopy painful?', answer: 'No, the procedure is performed under conscious sedation or light anesthesia. You will be asleep or very relaxed and should feel no pain.' },
      { question: 'What causes Irritable Bowel Syndrome (IBS)?', answer: 'The exact cause is unknown, but it is often linked to diet, stress, and gut motility issues. We provide comprehensive management strategies to alleviate symptoms.' },
      { question: 'How can I prepare for an endoscopy?', answer: 'You generally need to fast for 6 to 8 hours before the procedure. Our clinical team will provide detailed instructions tailored to your specific test.' }
    ]
  },
  {
    id: 5,
    name: 'Oncology',
    slug: 'oncology',
    tagline: 'Compassionate Cancer Care',
    description: 'Our Oncology wing brings together leading oncologists and advanced technology to provide holistic cancer care, focusing on both curing the disease and maintaining quality of life.',
    longDescription: [
      'The Novara Cancer Institute is committed to providing compassionate, evidence-based cancer care. We believe that fighting cancer requires not just advanced medical technology, but also immense human support. Our multidisciplinary tumor board customizes a distinct treatment strategy for each patient.',
      'From targeted chemotherapy and advanced radiation techniques to psychological counseling and nutritional support, we walk beside you through every step of your journey. At Novara, we treat the patient, not just the disease.'
    ],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&auto=format&fit=crop&q=80',
    icon: 'Microscope',
    conditions: ['Breast Cancer', 'Lung Cancer', 'Gastrointestinal Cancers', 'Leukemia', 'Head & Neck Cancers'],
    procedures: ['Chemotherapy & Immunotherapy', 'Radiation Therapy (LINAC)', 'Onco-Surgery', 'Bone Marrow Biopsy', 'Targeted Therapy'],
    facilities: [
      { name: 'Comprehensive Chemotherapy Day Care', description: 'A calming, supportive environment designed for patient comfort during infusion treatments.' },
      { name: 'Advanced Radiation Oncology Center', description: 'Equipped with the latest linear accelerators for precise, targeted tumor treatment.' },
      { name: 'Oncology Support Services', description: 'Includes onco-psychology, pain management, and specialized nutritional counseling.' }
    ],
    faqs: [
      { question: 'What is a multidisciplinary tumor board?', answer: 'A tumor board is a team of specialists (surgeons, medical oncologists, radiation oncologists, and pathologists) who review complex cases together to recommend the best treatment plan.' },
      { question: 'Are there support groups available?', answer: 'Yes, we facilitate regular support groups and offer one-on-one counseling for our patients and their families to help navigate the emotional challenges of cancer.' },
      { question: 'How do I manage the side effects of chemotherapy?', answer: 'Our care team includes specialized oncological nurses and pain management experts who provide proactive strategies and medications to minimize discomfort during treatment.' }
    ]
  }
];
