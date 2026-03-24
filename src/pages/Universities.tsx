import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, ArrowLeft, CheckCircle, GraduationCap, Building, Users, BookOpen } from "lucide-react";

const universitiesData = [
  {
    id: "kazan-federal",
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    established: 1804,
    ranking: "Top 10",
    description: "One of the oldest and most prestigious universities, offering world-class medical education with state-of-the-art facilities and a rich academic heritage.",
    highlights: ["WHO Recognized", "NMC Approved", "English Medium"],
    tuitionFee: "$4,500 - $6,000/year",
    duration: "6 Years (Including Internship)",
    medium: "English",
    hostel: "Yes, with Indian food available",
    detailedInfo: [
      "Kazan Federal University is one of the oldest universities abroad, founded in 1804. It is ranked among the top 10 universities abroad and is recognized by WHO, NMC, and other major medical bodies worldwide.",
      "The university offers a comprehensive MBBS program taught in English, specifically designed for international students. The curriculum follows international standards and includes both theoretical knowledge and extensive clinical training.",
      "Students benefit from modern laboratories, simulation centers, and access to multiple affiliated hospitals for hands-on clinical experience. The campus provides a safe and supportive environment with dedicated services for international students.",
    ],
    facilities: ["Modern Simulation Labs", "Digital Library", "Sports Complex", "Student Cafeteria with Indian Food", "24/7 Security", "Wi-Fi Campus"],
    eligibility: ["Minimum 50% in PCB (Physics, Chemistry, Biology) in Class 12", "NEET Qualification Required", "Minimum Age: 17 years on or before 31st December"],
  },
  {
    id: "peoples-friendship",
    name: "Peoples' Friendship University (RUDN)",
    location: "Moscow, Russia",
    established: 1960,
    ranking: "QS Top 300",
    description: "A truly international university in the heart of Moscow, known for its diverse student community and excellent clinical training programs.",
    highlights: ["100+ Nationalities", "Modern Campus", "Clinical Training"],
    tuitionFee: "$5,000 - $7,500/year",
    duration: "6 Years (Including Internship)",
    medium: "English / Local Language",
    hostel: "Yes, modern dormitories",
    detailedInfo: [
      "Peoples' Friendship University abroad (RUDN) is one of the most international universities in the world, located in Moscow. It welcomes students from over 100 countries, creating a truly multicultural learning environment.",
      "The medical faculty provides a rigorous MBBS program with strong emphasis on clinical practice. Students rotate through some of Moscow's best hospitals, gaining invaluable hands-on experience.",
      "RUDN's location in Moscow offers students access to world-class cultural, academic, and professional opportunities, making it an ideal choice for ambitious medical students.",
    ],
    facilities: ["University Hospitals", "Research Centers", "Modern Dormitories", "Cultural Centers", "Sports Facilities", "International Student Office"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "crimean-federal",
    name: "Crimean Federal University",
    location: "Simferopol, Russia",
    established: 1918,
    ranking: "Top Medical School",
    description: "Located in a safe and welcoming city, this university provides a supportive environment with familiar comforts for Indian students.",
    highlights: ["Affordable", "Safe City", "Indian Food Available"],
    tuitionFee: "$3,500 - $4,500/year",
    duration: "6 Years (Including Internship)",
    medium: "English",
    hostel: "Yes, affordable and comfortable",
    detailedInfo: [
      "Crimean Federal University offers one of the most affordable MBBS programs abroad without compromising on quality. The university has been educating medical professionals since 1918.",
      "Simferopol is known as one of the safest cities abroad, providing a peaceful environment for focused study. Indian students feel at home with readily available Indian food and a supportive Indian student community.",
      "The medical program is NMC approved and follows a structured curriculum that prepares students for licensing exams like FMGE/NEXT. Clinical rotations begin early in the program.",
    ],
    facilities: ["Affordable Hostels", "Indian Mess", "Clinical Hospitals", "Library", "Sports Ground", "Student Support Center"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "kursk-state",
    name: "Kursk State Medical University",
    location: "Kursk, Russia",
    established: 1935,
    ranking: "Pioneer in English",
    description: "The pioneer of English-medium medical education abroad, with decades of experience teaching international students.",
    highlights: ["First English Medium", "Strong Alumni", "Hospital Training"],
    tuitionFee: "$5,000 - $6,500/year",
    duration: "6 Years (Including Internship)",
    medium: "English",
    hostel: "Yes, on-campus",
    detailedInfo: [
      "Kursk State Medical University was the first medical university abroad to offer a full MBBS program in English, starting in 1992. This gives them unmatched experience in educating international medical students.",
      "The university boasts a strong global alumni network spanning over 90 countries. Graduates from Kursk have successfully passed licensing exams and practice medicine worldwide.",
      "With modern teaching hospitals and a well-structured clinical program, students gain extensive practical experience alongside their theoretical education.",
    ],
    facilities: ["Teaching Hospitals", "Anatomy Museum", "Modern Labs", "On-Campus Hostel", "Gym & Sports", "International Office"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "bashkir-state",
    name: "Bashkir State Medical University",
    location: "Ufa, Russia",
    established: 1932,
    ranking: "Top 15 Medical",
    description: "A research-focused institution with modern laboratories and emphasis on practical medical training.",
    highlights: ["NMC Approved", "Research Focus", "Modern Labs"],
    tuitionFee: "$4,000 - $5,500/year",
    duration: "6 Years (Including Internship)",
    medium: "English",
    hostel: "Yes, with canteen",
    detailedInfo: [
      "Bashkir State Medical University is a leading medical institution abroad, known for its strong research programs and modern facilities. Founded in 1932, it has trained thousands of successful doctors.",
      "The university places special emphasis on research and innovation, with well-equipped laboratories and active research programs that students can participate in from early years.",
      "NMC approved and WHO recognized, BSMU provides a comprehensive medical education that prepares students for global medical practice.",
    ],
    facilities: ["Research Labs", "University Hospital", "Digital Library", "Student Canteen", "Hostel", "Cultural Club"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "orenburg-state",
    name: "Orenburg State Medical University",
    location: "Orenburg, Russia",
    established: 1944,
    ranking: "Highly Rated",
    description: "Known for its supportive faculty and hands-on clinical approach, an excellent choice for aspiring medical professionals.",
    highlights: ["Most Affordable", "Clinical Focus", "Supportive Faculty"],
    tuitionFee: "$3,200 - $4,000/year",
    duration: "6 Years (Including Internship)",
    medium: "English",
    hostel: "Yes, very affordable",
    detailedInfo: [
      "Orenburg State Medical University offers one of the most affordable MBBS programs abroad, making quality medical education accessible to more students.",
      "The university is renowned for its supportive and approachable faculty who provide personalized attention to international students.",
      "With a focus on practical skills and clinical excellence, graduates from Orenburg are well-prepared for medical licensing exams worldwide.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Affordable Hostel", "Library", "Sports Complex", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "first-moscow-state",
    name: "First Moscow State Medical University (Sechenov)",
    location: "Moscow, Russia",
    established: 1758,
    ranking: "Top 3",
    description: "The oldest and most prestigious medical university, a global leader in medical education and research.",
    highlights: ["WHO Recognized", "NMC Approved", "Research Leader"],
    tuitionFee: "$7,000 - $10,000/year",
    duration: "6 Years",
    medium: "English / Local Language",
    hostel: "Yes",
    detailedInfo: [
      "Sechenov University is the oldest medical school abroad and one of the most respected medical institutions in the world.",
      "It offers cutting-edge research facilities and clinical training at Moscow's top hospitals.",
      "Graduates are highly sought after globally for their exceptional clinical skills and medical knowledge.",
    ],
    facilities: ["World-Class Hospitals", "Research Centers", "Modern Campus", "Library", "Sports Complex", "Student Dormitories"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "pirogov-moscow",
    name: "Pirogov National Research Medical University",
    location: "Moscow, Russia",
    established: 1906,
    ranking: "Top 5",
    description: "A leading research-oriented medical university known for producing top-tier physicians and medical scientists.",
    highlights: ["NMC Approved", "Research University", "Clinical Excellence"],
    tuitionFee: "$6,500 - $9,000/year",
    duration: "6 Years",
    medium: "English / Local Language",
    hostel: "Yes",
    detailedInfo: [
      "Pirogov RNRMU is one of Moscow's premier medical universities with a strong focus on research and clinical practice.",
      "Named after the legendary surgeon N.I. Pirogov, the university upholds a tradition of medical excellence.",
      "Students benefit from rotations at some abroad's best teaching hospitals.",
    ],
    facilities: ["Teaching Hospitals", "Research Labs", "Simulation Center", "Library", "Dormitories", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "saint-petersburg-state",
    name: "Saint Petersburg State Medical University (Pavlov)",
    location: "Saint Petersburg, Russia",
    established: 1897,
    ranking: "Top 5 Medical",
    description: "One abroad's finest medical schools located in the cultural capital, known for its strong clinical programs.",
    highlights: ["WHO Recognized", "Historic City", "Clinical Training"],
    tuitionFee: "$5,500 - $7,500/year",
    duration: "6 Years",
    medium: "English / Local Language",
    hostel: "Yes",
    detailedInfo: [
      "Pavlov Medical University in Saint Petersburg is renowned for its rigorous medical curriculum and excellent clinical training.",
      "Located in one of Europe's most beautiful cities, students enjoy a rich cultural experience alongside their studies.",
      "The university has strong international partnerships and exchange programs.",
    ],
    facilities: ["University Hospitals", "Research Labs", "Digital Library", "Dormitories", "Cafeteria", "Cultural Center"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "volgograd-state",
    name: "Volgograd State Medical University",
    location: "Volgograd, Russia",
    established: 1935,
    ranking: "Top 20 Medical",
    description: "A well-established medical university offering affordable and quality MBBS education for international students.",
    highlights: ["Affordable", "NMC Approved", "English Medium"],
    tuitionFee: "$3,800 - $5,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Volgograd State Medical University has been a trusted institution for medical education since 1935.",
      "It offers affordable tuition with no compromise on quality, attracting students from over 50 countries.",
      "The university provides comprehensive clinical training through its affiliated hospitals.",
    ],
    facilities: ["Clinical Hospitals", "Modern Labs", "Library", "Hostel", "Cafeteria", "Sports Ground"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "saratov-state",
    name: "Saratov State Medical University",
    location: "Saratov, Russia",
    established: 1909,
    ranking: "Top 15 Medical",
    description: "A century-old institution offering strong medical programs with a focus on practical skills and research.",
    highlights: ["NMC Approved", "Affordable", "Research Focus"],
    tuitionFee: "$3,500 - $4,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Saratov State Medical University is one of the oldest medical schools abroad with over a century of excellence.",
      "The university emphasizes hands-on clinical training and research opportunities for students.",
      "It provides a supportive environment with dedicated services for international students.",
    ],
    facilities: ["Teaching Hospitals", "Research Labs", "Library", "Hostel", "Sports Complex", "Student Center"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "tver-state",
    name: "Tver State Medical University",
    location: "Tver, Russia",
    established: 1936,
    ranking: "Well Recognized",
    description: "Located between Moscow and Saint Petersburg, offering quality medical education at affordable costs.",
    highlights: ["Strategic Location", "Affordable", "NMC Approved"],
    tuitionFee: "$3,500 - $4,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Tver State Medical University is strategically located between Moscow and Saint Petersburg, offering easy access to both cities.",
      "The university provides a quality medical education at one of the most competitive tuition rates abroad.",
      "Students benefit from a close-knit community and personalized faculty attention.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Library", "Hostel", "Cafeteria", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "smolensk-state",
    name: "Smolensk State Medical University",
    location: "Smolensk, Russia",
    established: 1920,
    ranking: "Top 20 Medical",
    description: "A reputable medical university with strong clinical training programs and a welcoming atmosphere for international students.",
    highlights: ["NMC Approved", "English Medium", "Affordable"],
    tuitionFee: "$3,800 - $5,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Smolensk State Medical University has been providing quality medical education since 1920.",
      "The university has a long history of training international students and offers dedicated support services.",
      "Clinical training is conducted at well-equipped affiliated hospitals.",
    ],
    facilities: ["Teaching Hospitals", "Modern Labs", "Library", "Hostel", "Cafeteria", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "ryazan-state",
    name: "Ryazan State Medical University (Pavlov)",
    location: "Ryazan, Russia",
    established: 1950,
    ranking: "Recognized",
    description: "A growing medical university known for its supportive environment and practical approach to medical training.",
    highlights: ["Affordable", "Safe City", "NMC Approved"],
    tuitionFee: "$3,200 - $4,200/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Ryazan State Medical University offers affordable MBBS programs with a strong emphasis on practical training.",
      "Located in a safe and quiet city, it provides an ideal environment for focused medical studies.",
      "The university has modern facilities and experienced faculty dedicated to student success.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Library", "Hostel", "Sports Ground", "Student Support"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "kazan-state-medical",
    name: "Kazan State Medical University",
    location: "Kazan, Russia",
    established: 1814,
    ranking: "Top 10 Medical",
    description: "One of the oldest dedicated medical universities abroad with a strong tradition of medical excellence.",
    highlights: ["WHO Recognized", "NMC Approved", "Historic"],
    tuitionFee: "$4,500 - $6,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes, with Indian food",
    detailedInfo: [
      "Kazan State Medical University is one of the oldest dedicated medical schools abroad, established in 1814.",
      "It has a distinguished history of producing excellent physicians and medical researchers.",
      "The university offers modern facilities while maintaining its rich academic traditions.",
    ],
    facilities: ["University Hospital", "Research Labs", "Anatomy Museum", "Library", "Hostel", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "novosibirsk-state",
    name: "Novosibirsk State Medical University",
    location: "Novosibirsk, Russia",
    established: 1935,
    ranking: "Top 15 in Siberia",
    description: "The leading medical university in Siberia with strong research programs and modern infrastructure.",
    highlights: ["Research Hub", "NMC Approved", "Modern Campus"],
    tuitionFee: "$4,000 - $5,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Novosibirsk State Medical University is the premier medical institution in Siberia and one abroad's top medical schools.",
      "Located abroad's third-largest city, it offers access to advanced research facilities and clinical centers.",
      "The university has strong ties to the Siberian Branch of the Academy of Sciences.",
    ],
    facilities: ["Research Centers", "Clinical Hospitals", "Modern Labs", "Library", "Dormitories", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "tomsk-state",
    name: "Siberian State Medical University (Tomsk)",
    location: "Tomsk, Russia",
    established: 1888,
    ranking: "Top 10 Medical",
    description: "One of the oldest medical schools in Siberia with a strong academic reputation and research output.",
    highlights: ["Historic", "Research Leader", "NMC Approved"],
    tuitionFee: "$4,200 - $5,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Siberian State Medical University in Tomsk is one of the oldest and most prestigious medical schools abroad.",
      "Tomsk is known as the 'student city' abroad, with a vibrant academic community.",
      "The university has strong research programs and modern clinical training facilities.",
    ],
    facilities: ["University Hospitals", "Research Labs", "Library", "Student Housing", "Cafeteria", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "samara-state",
    name: "Samara State Medical University",
    location: "Samara, Russia",
    established: 1919,
    ranking: "Top 20 Medical",
    description: "A well-respected medical university on the Volga River offering comprehensive medical programs.",
    highlights: ["NMC Approved", "Affordable", "Clinical Focus"],
    tuitionFee: "$3,800 - $5,200/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Samara State Medical University has over a century of experience in training medical professionals.",
      "Located on the beautiful Volga River, Samara is a vibrant city with a comfortable climate.",
      "The university offers extensive clinical rotations and practical training opportunities.",
    ],
    facilities: ["Teaching Hospitals", "Labs", "Library", "Hostel", "Sports Ground", "Student Center"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "rostov-state",
    name: "Rostov State Medical University",
    location: "Rostov-on-Don, Russia",
    established: 1930,
    ranking: "Top 15 Medical",
    description: "A leading medical university in the southern region with excellent clinical training and modern facilities.",
    highlights: ["NMC Approved", "Warm Climate", "Clinical Excellence"],
    tuitionFee: "$4,000 - $5,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Rostov State Medical University is one of the top medical schools in the southern region.",
      "Located in Rostov-on-Don, students enjoy a warmer climate compared to most other cities.",
      "The university has strong clinical programs with rotations at multiple affiliated hospitals.",
    ],
    facilities: ["Clinical Hospitals", "Modern Labs", "Library", "Dormitories", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "perm-state",
    name: "Perm State Medical University",
    location: "Perm, Russia",
    established: 1916,
    ranking: "Well Recognized",
    description: "A century-old medical institution in the Urals offering quality education at competitive prices.",
    highlights: ["Affordable", "NMC Approved", "English Medium"],
    tuitionFee: "$3,500 - $4,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Perm State Medical University has been educating medical professionals since 1916.",
      "Located in the Ural region, it offers a unique cultural experience along with quality medical training.",
      "The university provides affordable education without compromising on standards.",
    ],
    facilities: ["Teaching Hospitals", "Labs", "Library", "Hostel", "Cafeteria", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "north-ossetian",
    name: "North Ossetian State Medical Academy",
    location: "Vladikavkaz, Russia",
    established: 1939,
    ranking: "Recognized",
    description: "A well-known medical academy in the Caucasus region offering affordable medical education.",
    highlights: ["Most Affordable", "NMC Approved", "Scenic Location"],
    tuitionFee: "$3,000 - $4,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "North Ossetian State Medical Academy offers one of the most affordable MBBS programs abroad.",
      "Located in the beautiful Caucasus region, students enjoy a unique natural environment.",
      "The academy has a strong tradition of medical education with experienced faculty.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Library", "Affordable Hostel", "Cafeteria", "Sports Ground"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "stavropol-state",
    name: "Stavropol State Medical University",
    location: "Stavropol, Russia",
    established: 1938,
    ranking: "Top 25 Medical",
    description: "A respected medical university in the southern region with modern facilities and a diverse student body.",
    highlights: ["NMC Approved", "Warm Climate", "Affordable"],
    tuitionFee: "$3,500 - $4,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Stavropol State Medical University is a leading medical school in the North Caucasus region.",
      "The city enjoys a mild climate and is known for its safety and hospitality.",
      "The university offers well-structured medical programs with practical clinical training.",
    ],
    facilities: ["Teaching Hospitals", "Labs", "Library", "Dormitories", "Sports Facilities", "Student Center"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "kemerovo-state",
    name: "Kemerovo State Medical University",
    location: "Kemerovo, Russia",
    established: 1955,
    ranking: "Recognized",
    description: "A growing medical university in Western Siberia with a focus on practical medical training.",
    highlights: ["Affordable", "NMC Approved", "Practical Training"],
    tuitionFee: "$3,200 - $4,200/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Kemerovo State Medical University offers quality medical education at very affordable tuition rates.",
      "The university focuses on practical training with early clinical exposure.",
      "Students benefit from small class sizes and personalized attention from faculty.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Library", "Hostel", "Cafeteria", "Sports Ground"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "altai-state",
    name: "Altai State Medical University",
    location: "Barnaul, Russia",
    established: 1954,
    ranking: "Recognized",
    description: "A medical university in the Altai region known for its affordable programs and supportive environment.",
    highlights: ["Affordable", "Safe City", "NMC Approved"],
    tuitionFee: "$3,000 - $4,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Altai State Medical University provides quality medical education in the scenic Altai region.",
      "The university is known for its welcoming atmosphere and supportive faculty.",
      "Barnaul is a safe and affordable city, ideal for focused medical studies.",
    ],
    facilities: ["Teaching Hospitals", "Labs", "Library", "Hostel", "Cafeteria", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "omsk-state",
    name: "Omsk State Medical University",
    location: "Omsk, Russia",
    established: 1920,
    ranking: "Top 20 in Siberia",
    description: "A well-established medical university in Siberia with comprehensive medical programs.",
    highlights: ["NMC Approved", "Affordable", "English Medium"],
    tuitionFee: "$3,500 - $4,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Omsk State Medical University has over a century of experience in medical education.",
      "It offers comprehensive medical programs with strong clinical components.",
      "The university has modern facilities and a diverse international student community.",
    ],
    facilities: ["University Hospitals", "Research Labs", "Library", "Dormitories", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "ural-state",
    name: "Ural State Medical University",
    location: "Yekaterinburg, Russia",
    established: 1930,
    ranking: "Top 15 Medical",
    description: "A leading medical university in the Ural region, known for strong research and clinical programs.",
    highlights: ["Research Focus", "NMC Approved", "Modern Campus"],
    tuitionFee: "$4,000 - $5,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Ural State Medical University is one of the top medical institutions in the Ural Federal District.",
      "Yekaterinburg is The country's fourth-largest city, offering excellent infrastructure and opportunities.",
      "The university has strong research programs and modern clinical training facilities.",
    ],
    facilities: ["Teaching Hospitals", "Research Centers", "Modern Labs", "Library", "Dormitories", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "voronezh-state",
    name: "Voronezh State Medical University (Burdenko)",
    location: "Voronezh, Russia",
    established: 1918,
    ranking: "Top 15 Medical",
    description: "Named after the famous neurosurgeon Burdenko, this university offers excellent clinical training.",
    highlights: ["NMC Approved", "Clinical Excellence", "Historic"],
    tuitionFee: "$4,000 - $5,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Voronezh State Medical University is named after N.N. Burdenko, one of the founders abroadn neurosurgery.",
      "The university has a strong tradition of clinical excellence and research innovation.",
      "It offers comprehensive medical programs with extensive hospital rotations.",
    ],
    facilities: ["University Hospitals", "Research Labs", "Anatomy Museum", "Library", "Dormitories", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "nizhny-novgorod",
    name: "Privolzhsky Research Medical University",
    location: "Nizhny Novgorod, Russia",
    established: 1920,
    ranking: "Top 10 Medical",
    description: "A top-ranked research medical university offering advanced medical education and clinical training.",
    highlights: ["Research University", "NMC Approved", "Modern Facilities"],
    tuitionFee: "$4,500 - $6,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Privolzhsky Research Medical University is one of the leading medical research institutions abroad.",
      "Located in Nizhny Novgorod, the third-largest city on the Volga, students enjoy a vibrant urban environment.",
      "The university has cutting-edge research facilities and strong clinical training programs.",
    ],
    facilities: ["Research Centers", "Teaching Hospitals", "Modern Labs", "Library", "Dormitories", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "kuban-state",
    name: "Kuban State Medical University",
    location: "Krasnodar, Russia",
    established: 1920,
    ranking: "Top 20 Medical",
    description: "A well-regarded medical university in the sunny Krasnodar region with excellent clinical programs.",
    highlights: ["Warm Climate", "NMC Approved", "Clinical Training"],
    tuitionFee: "$4,000 - $5,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Kuban State Medical University is located in Krasnodar, one of the warmest and most pleasant cities abroad.",
      "The university offers comprehensive medical programs with strong clinical components.",
      "Students enjoy a comfortable climate and access to the Black Sea coast.",
    ],
    facilities: ["Clinical Hospitals", "Modern Labs", "Library", "Dormitories", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "dagestan-state",
    name: "Dagestan State Medical University",
    location: "Makhachkala, Russia",
    established: 1932,
    ranking: "Recognized",
    description: "An affordable medical university in the Caucasus with a strong tradition of medical education.",
    highlights: ["Most Affordable", "NMC Approved", "Coastal City"],
    tuitionFee: "$2,800 - $3,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Dagestan State Medical University offers some of the most affordable medical programs abroad.",
      "Located on the Caspian Sea coast, students enjoy a unique cultural and natural environment.",
      "The university has a long tradition of training competent medical professionals.",
    ],
    facilities: ["Teaching Hospitals", "Labs", "Library", "Affordable Hostel", "Cafeteria", "Sports Ground"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "yaroslavl-state",
    name: "Yaroslavl State Medical University",
    location: "Yaroslavl, Russia",
    established: 1944,
    ranking: "Well Recognized",
    description: "A respected medical university in the Golden Ring region with quality programs and affordable fees.",
    highlights: ["Historic City", "Affordable", "NMC Approved"],
    tuitionFee: "$3,500 - $4,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Yaroslavl State Medical University is located in one abroad's beautiful Golden Ring cities.",
      "The university offers quality medical education at competitive tuition rates.",
      "Students experience The country's rich cultural heritage while pursuing their medical studies.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Library", "Hostel", "Cafeteria", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "ivanovo-state",
    name: "Ivanovo State Medical Academy",
    location: "Ivanovo, Russia",
    established: 1930,
    ranking: "Recognized",
    description: "An affordable medical academy with a supportive learning environment and practical approach.",
    highlights: ["Affordable", "Supportive Faculty", "NMC Approved"],
    tuitionFee: "$3,000 - $4,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Ivanovo State Medical Academy provides affordable medical education with a focus on practical skills.",
      "The academy is known for its supportive and approachable faculty.",
      "Students benefit from small class sizes and hands-on clinical training.",
    ],
    facilities: ["Teaching Hospitals", "Labs", "Library", "Hostel", "Cafeteria", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "chuvash-state",
    name: "Chuvash State University (Medical Faculty)",
    location: "Cheboksary, Russia",
    established: 1967,
    ranking: "Recognized",
    description: "A university offering affordable medical education in a safe and welcoming Volga city.",
    highlights: ["Affordable", "Safe City", "NMC Approved"],
    tuitionFee: "$3,000 - $4,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Chuvash State University offers medical programs through its well-established medical faculty.",
      "Cheboksary is consistently ranked as one abroad's safest and cleanest cities.",
      "The university provides affordable education in a comfortable environment.",
    ],
    facilities: ["University Hospital", "Labs", "Library", "Hostel", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "mari-state",
    name: "Mari State University (Medical Faculty)",
    location: "Yoshkar-Ola, Russia",
    established: 1972,
    ranking: "Recognized",
    description: "An affordable university in one abroad's most beautiful small cities.",
    highlights: ["Most Affordable", "Beautiful City", "NMC Approved"],
    tuitionFee: "$2,800 - $3,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Mari State University offers medical programs at very affordable rates.",
      "Yoshkar-Ola is known for its stunning architecture and safe, welcoming environment.",
      "The university provides quality education with dedicated support for international students.",
    ],
    facilities: ["Teaching Hospital", "Labs", "Library", "Hostel", "Cafeteria", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "pacific-state",
    name: "Pacific State Medical University",
    location: "Vladivostok, Russia",
    established: 1958,
    ranking: "Far East Leader",
    description: "The leading medical university abroad's Far East with unique Asia-Pacific connections.",
    highlights: ["Asia-Pacific Hub", "NMC Approved", "Unique Location"],
    tuitionFee: "$3,800 - $5,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Pacific State Medical University is the premier medical institution abroad's Far East.",
      "Vladivostok's proximity to Asia offers unique cultural and professional opportunities.",
      "The university has strong international partnerships with Asian medical institutions.",
    ],
    facilities: ["University Hospital", "Research Labs", "Library", "Dormitories", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "krasnoyarsk-state",
    name: "Krasnoyarsk State Medical University (Voyno-Yasenetsky)",
    location: "Krasnoyarsk, Russia",
    established: 1942,
    ranking: "Top Siberian Medical",
    description: "A leading Siberian medical university named after the renowned surgeon and archbishop.",
    highlights: ["NMC Approved", "Research Focus", "Modern Campus"],
    tuitionFee: "$3,800 - $5,200/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Krasnoyarsk State Medical University is a top medical school in Central Siberia.",
      "Named after the legendary surgeon V.F. Voyno-Yasenetsky, the university upholds a tradition of excellence.",
      "Students benefit from modern facilities and clinical training at leading Siberian hospitals.",
    ],
    facilities: ["Teaching Hospitals", "Research Labs", "Modern Campus", "Library", "Dormitories", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "tyumen-state",
    name: "Tyumen State Medical University",
    location: "Tyumen, Russia",
    established: 1963,
    ranking: "Well Recognized",
    description: "A growing medical university in Western Siberia with modern infrastructure and research programs.",
    highlights: ["Modern Campus", "NMC Approved", "Affordable"],
    tuitionFee: "$3,500 - $4,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Tyumen State Medical University is a rapidly growing medical institution in Western Siberia.",
      "Tyumen is one abroad's fastest-developing cities with excellent modern infrastructure.",
      "The university offers well-structured medical programs with strong practical components.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Library", "Modern Dormitories", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "north-western",
    name: "North-Western State Medical University (Mechnikov)",
    location: "Saint Petersburg, Russia",
    established: 1907,
    ranking: "Top 10 Medical",
    description: "A prestigious medical university in Saint Petersburg named after the Nobel laureate I.I. Mechnikov.",
    highlights: ["Nobel Legacy", "NMC Approved", "Clinical Excellence"],
    tuitionFee: "$5,500 - $7,500/year",
    duration: "6 Years",
    medium: "English / Local Language",
    hostel: "Yes",
    detailedInfo: [
      "North-Western State Medical University is named after Nobel Prize winner Ilya Mechnikov.",
      "Located in Saint Petersburg, students have access to world-class medical facilities and cultural experiences.",
      "The university is renowned for its clinical training programs and research output.",
    ],
    facilities: ["University Hospitals", "Research Centers", "Library", "Dormitories", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "saint-petersburg-pediatric",
    name: "Saint Petersburg State Pediatric Medical University",
    location: "Saint Petersburg, Russia",
    established: 1925,
    ranking: "Pediatrics Leader",
    description: "The world's first pediatric medical university, a global leader in pediatric medicine education.",
    highlights: ["Unique Specialization", "NMC Approved", "Historic"],
    tuitionFee: "$5,000 - $7,000/year",
    duration: "6 Years",
    medium: "English / Local Language",
    hostel: "Yes",
    detailedInfo: [
      "Saint Petersburg State Pediatric Medical University is the world's first university dedicated to pediatric medicine.",
      "It offers unique programs in pediatric medicine alongside general medical education.",
      "Located in Saint Petersburg, students benefit from the city's rich cultural and academic environment.",
    ],
    facilities: ["Children's Hospitals", "Research Labs", "Library", "Dormitories", "Cafeteria", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "astrakhan-state",
    name: "Astrakhan State Medical University",
    location: "Astrakhan, Russia",
    established: 1918,
    ranking: "Well Recognized",
    description: "A historic medical university at the crossroads of Europe and Asia on the Caspian Sea.",
    highlights: ["Affordable", "NMC Approved", "Caspian Location"],
    tuitionFee: "$3,200 - $4,200/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Astrakhan State Medical University has been providing medical education since 1918.",
      "Located at the mouth of the Volga River on the Caspian Sea, it offers a unique geographic experience.",
      "The university is known for its affordable programs and supportive environment.",
    ],
    facilities: ["Teaching Hospitals", "Labs", "Library", "Hostel", "Cafeteria", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "irkutsk-state",
    name: "Irkutsk State Medical University",
    location: "Irkutsk, Russia",
    established: 1919,
    ranking: "Top in East Siberia",
    description: "The leading medical university near Lake Baikal, offering quality education in a stunning natural setting.",
    highlights: ["Near Lake Baikal", "NMC Approved", "Affordable"],
    tuitionFee: "$3,500 - $4,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Irkutsk State Medical University is the premier medical school in Eastern Siberia.",
      "Located near the world-famous Lake Baikal, students enjoy a stunning natural environment.",
      "The university offers comprehensive medical programs with strong clinical training.",
    ],
    facilities: ["University Hospitals", "Labs", "Library", "Dormitories", "Cafeteria", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "far-eastern",
    name: "Far Eastern Federal University (Medical School)",
    location: "Vladivostok, Russia",
    established: 1899,
    ranking: "QS Ranked",
    description: "A major federal university with a modern medical school on Russky Island.",
    highlights: ["Federal University", "Modern Campus", "NMC Approved"],
    tuitionFee: "$4,500 - $6,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes, modern campus",
    detailedInfo: [
      "Far Eastern Federal University has one abroad's most modern campuses, built on Russky Island.",
      "The medical school offers state-of-the-art facilities and a globally oriented curriculum.",
      "Students benefit from the university's strong connections with Asian-Pacific medical institutions.",
    ],
    facilities: ["Modern Campus", "University Hospital", "Research Labs", "Library", "Dormitories", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "southern-federal",
    name: "Southern Federal University (Medical Institute)",
    location: "Rostov-on-Don, Russia",
    established: 1915,
    ranking: "QS Ranked",
    description: "One abroad's leading federal universities with a strong medical institute.",
    highlights: ["Federal University", "Research Focus", "NMC Approved"],
    tuitionFee: "$4,200 - $5,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Southern Federal University is one abroad's leading federal universities with a well-established medical institute.",
      "Located in Rostov-on-Don, students enjoy a warm climate and vibrant city life.",
      "The university has strong research programs and modern clinical training facilities.",
    ],
    facilities: ["Teaching Hospitals", "Research Centers", "Library", "Dormitories", "Cafeteria", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "belgorod-state",
    name: "Belgorod State University (Medical Institute)",
    location: "Belgorod, Russia",
    established: 1876,
    ranking: "Well Recognized",
    description: "A respected national research university with a popular medical institute for international students.",
    highlights: ["NMC Approved", "Affordable", "Indian Community"],
    tuitionFee: "$3,500 - $4,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes, with Indian food",
    detailedInfo: [
      "Belgorod State University has a well-established medical institute popular among Indian students.",
      "The university has a large Indian student community, making it easier for new students to adapt.",
      "It offers quality medical education at affordable rates with good support services.",
    ],
    facilities: ["University Hospital", "Labs", "Library", "Hostel", "Indian Mess", "Sports Complex"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "ulyanovsk-state",
    name: "Ulyanovsk State University (Medical Faculty)",
    location: "Ulyanovsk, Russia",
    established: 1988,
    ranking: "Recognized",
    description: "A growing university on the Volga offering affordable medical programs.",
    highlights: ["Affordable", "NMC Approved", "Volga Location"],
    tuitionFee: "$3,000 - $4,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Ulyanovsk State University offers affordable medical programs through its medical faculty.",
      "Located on the Volga River, the city offers a peaceful environment for study.",
      "The university is continuously improving its facilities and programs for international students.",
    ],
    facilities: ["Teaching Hospital", "Labs", "Library", "Hostel", "Cafeteria", "Student Center"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "kabardino-balkarian",
    name: "Kabardino-Balkarian State University (Medical Faculty)",
    location: "Nalchik, Russia",
    established: 1957,
    ranking: "Recognized",
    description: "An affordable medical program in the scenic North Caucasus mountains.",
    highlights: ["Most Affordable", "Mountain Setting", "NMC Approved"],
    tuitionFee: "$2,500 - $3,500/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Kabardino-Balkarian State University offers one of the most affordable medical programs abroad.",
      "Nalchik is a beautiful city nestled in the Caucasus mountains with a pleasant climate.",
      "The university provides dedicated support for international medical students.",
    ],
    facilities: ["Teaching Hospital", "Labs", "Library", "Affordable Hostel", "Cafeteria", "Sports Ground"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "orenburg-state-uni",
    name: "Orenburg State University (Medical Institute)",
    location: "Orenburg, Russia",
    established: 1955,
    ranking: "Recognized",
    description: "A multi-disciplinary university with a growing medical institute offering affordable programs.",
    highlights: ["Affordable", "NMC Approved", "Multi-disciplinary"],
    tuitionFee: "$3,000 - $4,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Orenburg State University's medical institute offers affordable medical education.",
      "Being a multi-disciplinary university, students have access to a wide range of academic resources.",
      "The university provides a supportive environment for international students.",
    ],
    facilities: ["University Hospital", "Labs", "Library", "Hostel", "Cafeteria", "Sports Facilities"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "pskov-state",
    name: "Pskov State University (Medical Faculty)",
    location: "Pskov, Russia",
    established: 1932,
    ranking: "Recognized",
    description: "A historic university in one of The oldest cities offering medical programs.",
    highlights: ["Historic City", "Affordable", "NMC Approved"],
    tuitionFee: "$3,000 - $4,000/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Pskov State University is located in one of The oldest and most historic cities.",
      "The medical faculty offers affordable programs with a focus on practical training.",
      "Near the Estonian border, students have easy access to European travel.",
    ],
    facilities: ["Teaching Hospital", "Labs", "Library", "Hostel", "Cafeteria", "Student Services"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
  {
    id: "mordovia-state",
    name: "Mordovia State University (Medical Institute)",
    location: "Saransk, Russia",
    established: 1957,
    ranking: "Recognized",
    description: "A national research university with an affordable medical institute in the central region.",
    highlights: ["Affordable", "NMC Approved", "National Research Uni"],
    tuitionFee: "$3,000 - $3,800/year",
    duration: "6 Years",
    medium: "English",
    hostel: "Yes",
    detailedInfo: [
      "Mordovia State University is a national research university with a well-regarded medical institute.",
      "Saransk is a modern city that hosted FIFA World Cup 2018 matches, with excellent infrastructure.",
      "The university offers affordable medical programs with quality training.",
    ],
    facilities: ["University Hospital", "Modern Labs", "Library", "Hostel", "Sports Complex", "Student Center"],
    eligibility: ["Minimum 50% in PCB in Class 12", "NEET Qualification Required", "Minimum Age: 17 years"],
  },
];

const Universities = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="hero-gradient py-16 px-4">
        <div className="container-width">
          <Button
            variant="ghost"
            className="text-primary-foreground hover:bg-primary-foreground/10 mb-6"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Partner Universities
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Explore detailed information about our NMC-approved partner universities abroad. Find the perfect fit for your medical career.
          </p>
        </div>
      </div>

      {/* Universities List */}
      <div className="container-width py-12 space-y-12">
        {universitiesData.map((uni) => (
          <div
            key={uni.id}
            id={uni.id}
            className="bg-card rounded-xl card-elevated overflow-hidden scroll-mt-24"
          >
            {/* University Header */}
            <div className="hero-gradient p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-block bg-primary-foreground/20 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {uni.ranking}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                    {uni.name}
                  </h2>
                  <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{uni.location}</span>
                    <span className="mx-2">•</span>
                    <Calendar className="w-4 h-4" />
                    <span>Est. {uni.established}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {uni.highlights.map((h) => (
                    <span
                      key={h}
                      className="text-xs bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* University Body */}
            <div className="p-6 md:p-8">
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-muted rounded-lg p-4 text-center">
                  <GraduationCap className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Tuition Fee</p>
                  <p className="text-sm font-semibold text-foreground">{uni.tuitionFee}</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <BookOpen className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Duration</p>
                  <p className="text-sm font-semibold text-foreground">{uni.duration}</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <Users className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Medium</p>
                  <p className="text-sm font-semibold text-foreground">{uni.medium}</p>
                </div>
                <div className="bg-muted rounded-lg p-4 text-center">
                  <Building className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground">Hostel</p>
                  <p className="text-sm font-semibold text-foreground">{uni.hostel}</p>
                </div>
              </div>

              {/* About */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">About the University</h3>
                <div className="space-y-3">
                  {uni.detailedInfo.map((para, i) => (
                    <p key={i} className="text-muted-foreground leading-relaxed">{para}</p>
                  ))}
                </div>
              </div>

              {/* Facilities */}
              <div className="mb-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Facilities</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {uni.facilities.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>

              {/* Eligibility */}
              <div className="mb-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">Eligibility Criteria</h3>
                <ul className="space-y-2">
                  {uni.eligibility.map((e) => (
                    <li key={e} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button
                className="w-full md:w-auto"
                onClick={() => navigate("/#contact")}
              >
                Apply Now - Get Free Consultation
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;
