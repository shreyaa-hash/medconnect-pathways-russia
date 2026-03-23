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
    ranking: "Top 10 in Russia",
    description: "One of Russia's oldest and most prestigious universities, offering world-class medical education with state-of-the-art facilities and a rich academic heritage.",
    highlights: ["WHO Recognized", "NMC Approved", "English Medium"],
    tuitionFee: "$4,500 - $6,000/year",
    duration: "6 Years (Including Internship)",
    medium: "English",
    hostel: "Yes, with Indian food available",
    detailedInfo: [
      "Kazan Federal University is one of the oldest universities in Russia, founded in 1804. It is ranked among the top 10 universities in Russia and is recognized by WHO, NMC, and other major medical bodies worldwide.",
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
    medium: "English / Russian",
    hostel: "Yes, modern dormitories",
    detailedInfo: [
      "Peoples' Friendship University of Russia (RUDN) is one of the most international universities in the world, located in Moscow. It welcomes students from over 100 countries, creating a truly multicultural learning environment.",
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
      "Crimean Federal University offers one of the most affordable MBBS programs in Russia without compromising on quality. The university has been educating medical professionals since 1918.",
      "Simferopol is known as one of the safest cities in Russia, providing a peaceful environment for focused study. Indian students feel at home with readily available Indian food and a supportive Indian student community.",
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
    description: "The pioneer of English-medium medical education in Russia, with decades of experience teaching international students.",
    highlights: ["First English Medium", "Strong Alumni", "Hospital Training"],
    tuitionFee: "$5,000 - $6,500/year",
    duration: "6 Years (Including Internship)",
    medium: "English",
    hostel: "Yes, on-campus",
    detailedInfo: [
      "Kursk State Medical University was the first medical university in Russia to offer a full MBBS program in English, starting in 1992. This gives them unmatched experience in educating international medical students.",
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
      "Bashkir State Medical University is a leading medical institution in Russia, known for its strong research programs and modern facilities. Founded in 1932, it has trained thousands of successful doctors.",
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
      "Orenburg State Medical University offers one of the most affordable MBBS programs in Russia, making quality medical education accessible to more students.",
      "The university is renowned for its supportive and approachable faculty who provide personalized attention to international students. The clinical training program is hands-on from the early semesters.",
      "With a focus on practical skills and clinical excellence, graduates from Orenburg are well-prepared for medical licensing exams and clinical practice anywhere in the world.",
    ],
    facilities: ["Clinical Hospitals", "Labs", "Affordable Hostel", "Library", "Sports Complex", "Student Services"],
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
            Explore detailed information about our NMC-approved partner universities in Russia. Find the perfect fit for your medical career.
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
