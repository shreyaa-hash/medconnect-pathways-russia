import { MapPin, Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
const UniversitiesSection = () => {
  const universities = [{
    name: "Kazan Federal University",
    location: "Kazan, Russia",
    established: 1804,
    ranking: "Top 10 in Russia",
    description: "One of Russia's oldest and most prestigious universities, offering world-class medical education with state-of-the-art facilities and a rich academic heritage.",
    highlights: ["WHO Recognized", "NMC Approved", "English Medium"]
  }, {
    name: "Peoples' Friendship University",
    location: "Moscow, Russia",
    established: 1960,
    ranking: "QS Top 300",
    description: "A truly international university in the heart of Moscow, known for its diverse student community and excellent clinical training programs.",
    highlights: ["100+ Nationalities", "Modern Campus", "Clinical Training"]
  }, {
    name: "Crimean Federal University",
    location: "Simferopol, Russia",
    established: 1918,
    ranking: "Top Medical School",
    description: "Located in a safe and welcoming city, this university provides a supportive environment with familiar comforts for Indian students.",
    highlights: ["Affordable", "Safe City", "Indian Food Available"]
  }, {
    name: "Kursk State Medical University",
    location: "Kursk, Russia",
    established: 1935,
    ranking: "Pioneer in English",
    description: "The pioneer of English-medium medical education in Russia, with decades of experience teaching international students and a strong global alumni network.",
    highlights: ["First English Medium", "Strong Alumni", "Hospital Training"]
  }, {
    name: "Bashkir State Medical University",
    location: "Ufa, Russia",
    established: 1932,
    ranking: "Top 15 Medical",
    description: "A research-focused institution with modern laboratories and a strong emphasis on practical medical training and scientific innovation.",
    highlights: ["NMC Approved", "Research Focus", "Modern Labs"]
  }, {
    name: "Orenburg State Medical University",
    location: "Orenburg, Russia",
    established: 1944,
    ranking: "Highly Rated",
    description: "Known for its supportive faculty and hands-on clinical approach, making it an excellent choice for aspiring medical professionals.",
    highlights: ["Most Affordable", "Clinical Focus", "Supportive Faculty"]
  }];
  return <section id="universities" className="section-padding bg-background">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Partner Universities
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Top Russian <span className="text-gradient">Medical Universities</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We partner with the best NMC-approved universities to ensure you get a globally recognized medical degree.
          </p>
        </div>

        {/* Universities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {universities.map(uni => <div key={uni.name} className="bg-card rounded-xl overflow-hidden card-elevated group">
              {/* Header */}
              <div className="hero-gradient p-6">
                <span className="inline-block bg-primary-foreground/20 text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {uni.ranking}
                </span>
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
                  {uni.name}
                </h3>
                <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
                  <MapPin className="w-4 h-4" />
                  <span>{uni.location}</span>
                </div>
                <p className="text-primary-foreground/90 text-sm mt-2">{uni.description}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Est. {uni.established}</span>
                  </div>
                  
                </div>

                <div className="border-t border-border pt-4 mb-4">
                  
                  
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {uni.highlights.map(highlight => <span key={highlight} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                      {highlight}
                    </span>)}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>)}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All 50+ Universities
            <ExternalLink className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>;
};
export default UniversitiesSection;