import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/ui/Button";
import { Mail, MapPin, Phone } from "lucide-react";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Link } from "react-router-dom";

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              신입개발자 황대웅 입니다.
              <span className="block text-[var(--primary)] mt-2">
                항상 배우고 도전하는 프론트엔드 개발자
              </span>
            </h1>
            <p className="text-gray-400 mb-8">
              항상 배우고 도전하는 자세로 새로운 기술과 문제 해결에 열정을 가진
              신입개발자입니다.
              <br />
              팀워크와 소통을 바탕으로 효율적인 개발을 추구합니다.
            </p>
            <div className="flex gap-4">
              <Link to="https://github.com/eddyhwang97">
                <Button
                  size="lg"
                  className="bg-[var(--primary)] hover:bg-[var(--primary/90)] hover:ring-2 hover:ring-primary hover:ring-offset-2 hover:ring-offset-black transition-all duration-300"
                >
                  Github
                </Button>
              </Link>
              <Link to="https://velog.io/@eddyhwang97">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--primary)] bg-white text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--white)] hover:ring-2"
                >
                  Velog
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square max-w-[400px] mx-auto">
              <img
                src="./profile-image.jpeg"
                alt="Profile"
                fill="true"
                className="rounded-2xl object-cover"
                priority="true"
              />
            </div>
          </div>
        </div>

        {/* <Stats /> */}
      </section>

      {/* Other Sections */}
      <div className="container mx-auto px-4">
        <Services />
        <Projects />
        <Skills />

        {/* Contact Section */}
        <section className="py-16" id="contact">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Let's Get In Touch</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Phone className="text-[var(--primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-400">+82 1079997539</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <Mail className="text-[var(--primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-400">hwangdw1997@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <MapPin className="text-[var(--primary)]" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-gray-400">경기도 광명시 금당로</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
