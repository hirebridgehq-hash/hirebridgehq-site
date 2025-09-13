import React, {useState, useEffect} from 'react';
import logo from './assets/logo.png';
import Careers from './careers';

const Nav = ({setRoute}) => (
  <nav className="space-x-6 text-sm">
    <button onClick={()=>setRoute('home')} className="hover:text-blue-700">Home</button>
    <button onClick={()=>setRoute('about')} className="hover:text-blue-700">About</button>
    <button onClick={()=>setRoute('services')} className="hover:text-blue-700">Services</button>
    <button onClick={()=>setRoute('careers')} className="hover:text-blue-700">Careers</button>
    <button onClick={()=>setRoute('contact')} className="hover:text-blue-700">Contact</button>
  </nav>
)

export default function App() {
  const [route, setRoute] = useState('home');
  useEffect(()=>{
    // simple hash-based navigation support
    const onHash = ()=>{
      const h = window.location.hash.replace('#','');
      if(h) setRoute(h);
    }
    window.addEventListener('hashchange', onHash);
    onHash();
    return ()=> window.removeEventListener('hashchange', onHash);
  },[]);

  useEffect(()=>{
    window.location.hash = route;
  },[route]);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img src={logo} alt="HireBridgeHQ" className="w-12 h-12 object-contain"/>
            <div>
              <h1 className="text-xl font-bold text-blue-700">HireBridgeHQ</h1>
              <p className="text-xs text-gray-500">Your bridge to career success</p>
            </div>
          </div>
          <Nav setRoute={setRoute} />
        </div>
      </header>

      <main className="flex-1">
        {route === 'home' && (
          <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-24 text-center">
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-4xl font-bold mb-4">Bridging Talent with Opportunity</h2>
              <p className="mb-6">We connect skilled professionals with career opportunities that fit their goals, while helping companies find the right talent faster.</p>
              <a href="#contact" onClick={()=>setRoute('contact')} className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg">Get Started</a>
            </div>
          </section>
        )}

        {route === 'about' && (
          <section id="about" className="py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold mb-4">About HireBridgeHQ</h3>
              <p className="text-lg text-gray-700">HireBridgeHQ is a professional recruitment and talent solutions company dedicated to making hiring simple, transparent, and effective. We partner with organizations and job seekers to create long-term career success.</p>
            </div>
          </section>
        )}

        {route === 'services' && (
          <section id="services" className="bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4">
              <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 bg-white rounded-2xl shadow">
                  <h4 className="font-semibold text-lg mb-2">Career Matching</h4>
                  <p className="text-gray-600">We match professionals with roles that fit their skills, experience, and aspirations.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow">
                  <h4 className="font-semibold text-lg mb-2">Interview Preparation</h4>
                  <p className="text-gray-600">We provide coaching and resources to help candidates succeed in the hiring process.</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow">
                  <h4 className="font-semibold text-lg mb-2">Exclusive Opportunities</h4>
                  <p className="text-gray-600">Gain access to roles that aren’t publicly listed, giving you a competitive edge.</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {route === 'careers' && <Careers />}

        {route === 'contact' && (
          <section id="contact" className="py-16">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold mb-4">Contact Us</h3>
              <p className="mb-6 text-gray-700">Ready to take the next step? Share your resume or send us a message and we'll follow up.</p>
              <form className="grid gap-3" onSubmit={(e)=>{e.preventDefault(); alert('Form is a demo: please email careers@hirebridgehq.com or configure a form service.')}}>
                <input className="p-3 border rounded" placeholder="Your name" required />
                <input className="p-3 border rounded" placeholder="Your email" type="email" required />
                <input className="p-3 border rounded" placeholder="Link to resume (or paste)" required />
                <button className="mt-2 bg-blue-700 text-white px-4 py-2 rounded">Send</button>
              </form>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto text-center text-sm">© HireBridgeHQ {new Date().getFullYear()}. All rights reserved.</div>
      </footer>
    </div>
  )
}
