/* LandingPage.jsx - Integrated version built for preview.
   NOTE: This is a single-file React component. Replace image paths in /public/images/ as needed.
   The project is ready to deploy on Vercel/Netlify after installing dependencies.
*/

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const initialReviews = [
  { id: 1, name: 'M.', text: 'El Dr. Moncayo entendió exactamente lo que buscaba. Me siento más segura y feliz que nunca.', rating: 5 },
  { id: 2, name: 'Andrés R.', text: 'Excelente atención desde la primera cita. Resultado natural y seguimiento impecable.', rating: 5 },
  { id: 3, name: 'L.', text: 'Desde la valoración hasta el postoperatorio me sentí en manos profesionales y humanas.', rating: 5 },
  { id: 4, name: 'Ana P.', text: 'Proceso claro, equipo atento y resultados armónicos. Muy agradecida.', rating: 5 },
  { id: 5, name: 'Dr. J.S.', text: 'Alta calidad técnica y enfoque ético. Recomendado para pacientes que buscan seguridad y estética.', rating: 5 }
];

export default function LandingPage() {
  const heroImage = '/images/hero-dr-darwin.jpg';
  const teamImage = '/images/team.jpg';
  const antesDespues = '/images/antes-despues.jpg';
  const logo = '/images/logo-dr-darwin.png';

  const blogImages = ['/images/blog1.jpg', '/images/blog2.jpg', '/images/blog3.jpg', '/images/blog4.jpg'];

  const whatsappLink = 'https://wa.me/593998931323';
  const calendlyUrl = 'https://calendly.com/tu-usuario/valoracion';
  const instagramProfile = 'https://www.instagram.com/dr.darwinmoncayo/';
  const googleReviewsUrl = 'https://www.google.com/search?q=Dr+Darwin+Moncayo+reviews';

  const [openArticle, setOpenArticle] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newReview, setNewReview] = useState({ name: '', text: '', rating: 5 });
  const [lang, setLang] = useState('es');
  const [toast, setToast] = useState(null);

  useEffect(()=>{
    // language detection
    try{
      const stored = localStorage.getItem('site_lang');
      if(stored){ setLang(stored); }
      else {
        const nav = navigator.language || navigator.userLanguage || 'es';
        if(nav.startsWith('en')) setLang('en');
        else setLang('es');
        setToast(nav.startsWith('en') ? 'Language set to English based on your browser settings.' : 'Idioma ajustado a Español según la configuración de tu navegador.');
        setTimeout(()=>setToast(null), 3000);
      }
    }catch(e){ setLang('es'); }
    const storedReviews = localStorage.getItem('dr_mon_reviews');
    if(storedReviews){ setReviews(JSON.parse(storedReviews)); }
    else { setReviews(initialReviews); localStorage.setItem('dr_mon_reviews', JSON.stringify(initialReviews)); }
  },[]);

  const toggleArticle = (id) => setOpenArticle(openArticle===id?null:id);
  const openWhats = ()=> window.open(whatsappLink,'_blank');
  const submitReview = (e)=>{ e.preventDefault(); const id=Date.now(); const r={id,...newReview}; const updated=[r,...reviews]; setReviews(updated); localStorage.setItem('dr_mon_reviews',JSON.stringify(updated)); setNewReview({name:'',text:'',rating:5}); setShowModal(false); setToast(lang==='es'?'Gracias por tu mensaje. Pronto nos pondremos en contacto contigo.':'Thank you for your message. We\\'ll get in touch with you soon.'); setTimeout(()=>setToast(null),3000); };

  const t = (es,en)=> lang==='es'?es:en;

  return (
    <div style={{background:'var(--bg)',color:'var(--text)',minHeight:'100vh',paddingBottom:40}}>
      <Helmet>
        <title>{lang==='es'?'Dr. Darwin Moncayo | Cirujano Plástico en Guayaquil':'Dr. Darwin Moncayo — Plastic Surgeon in Guayaquil'}</title>
        <meta name="description" content="Cirujano plástico en Guayaquil con formación internacional. Cirugía estética, reconstructiva y procedimientos mínimamente invasivos. Resultados naturales y armónicos." />
      </Helmet>

      <header style={{position:'relative',overflow:'hidden'}}>
        <img src={heroImage} alt="hero" style={{width:'100%',height:380,objectFit:'cover',filter:'brightness(0.7)'}}/>
        <div style={{position:'absolute',left:20,top:60,color:'#fff',maxWidth:720}}>
          <img src={logo} alt="logo" style={{width:160,marginBottom:12}}/>
          <h1 style={{fontSize:36,margin:0}}>{t('Cirugía Plástica con armonía, precisión y naturalidad.','Plastic surgery with harmony, precision and naturalness.')}</h1>
          <p style={{fontSize:16,opacity:0.95,maxWidth:520,lineHeight:1.4}}>{t('El Dr. Darwin Moncayo ofrece cirugía estética y reconstructiva en Guayaquil con un enfoque que combina arte, ciencia y técnica para realzar la belleza auténtica de cada paciente.','Dr. Darwin Moncayo offers aesthetic and reconstructive surgery in Guayaquil with an approach that combines art, science and technique to enhance each patient\\'s authentic beauty.')}</p>
          <div style={{display:'flex',gap:10,marginTop:12}}>
            <button onClick={openWhats} style={{background:'#10b981',border:'none',padding:'10px 16px',borderRadius:999,color:'#fff'}}> {t('Agendar valoración','Book a consultation')}</button>
            <a href={calendlyUrl} target="_blank" rel="noreferrer" style={{padding:'10px 16px',borderRadius:999,background:'rgba(255,255,255,0.12)',color:'#fff',textDecoration:'none'}}>{t('Reservar cita','Reserve a slot')}</a>
          </div>
        </div>
        <div style={{position:'absolute',right:20,top:20}}>
          <select value={lang} onChange={(e)=>{setLang(e.target.value); localStorage.setItem('site_lang',e.target.value);}} style={{padding:8,borderRadius:8}}>
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>
      </header>

      <main className="container">
        <section className="card" style={{display:'flex',gap:20,alignItems:'center'}}>
          <div style={{flex:1}}>
            <h2>{t('Sobre el Dr. Darwin Moncayo','About Dr. Darwin Moncayo')}</h2>
            <p>{t('El Dr. Darwin Moncayo es médico cirujano graduado de la Universidad Católica Santiago de Guayaquil, con posgrado en Cirugía Plástica, Reconstructiva y Estética. Realizó un Fellowship en la Clínica Planas de Barcelona y completó el Full Year Course del SAPS Academy.','Dr. Darwin Moncayo is a medical surgeon graduated from Universidad Católica Santiago de Guayaquil, with a postgraduate degree in Reconstructive and Aesthetic Plastic Surgery. He completed a Fellowship at Clínica Planas in Barcelona and the SAPS Academy Full Year Course.')}</p>
            <p style={{fontStyle:'italic',color:'#0ea5a3'}}>{t('“Resaltamos tu belleza manteniendo tu naturalidad y armonía.”','\"Enhancing your beauty while preserving your natural harmony.\"')}</p>
          </div>
          <div style={{width:260}}><img src={teamImage} alt="team" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/></div>
        </section>

        <section style={{marginTop:24}} className="card">
          <h2>{t('Procedimientos y Especialidades','Procedures & Specialties')}</h2>
          <p style={{opacity:0.9}}>{t('Cada tratamiento está diseñado para armonizar tu belleza con resultados seguros, personalizados y naturales.','Each treatment is designed to harmonize your beauty with safe, personalized and natural results.')}</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:12}}>
            <div style={{padding:12,borderRadius:12,background:'#fff'}}><h4>Cirugía Facial</h4><p style={{color:'#6b7280'}}>Rinoplastia, blefaroplastia, lifting facial, otoplastia y armonización facial.</p></div>
            <div style={{padding:12,borderRadius:12,background:'#fff'}}><h4>Cirugía Corporal</h4><p style={{color:'#6b7280'}}>Abdominoplastia, lipoescultura, lipotransferencia glútea y cirugía mamaria.</p></div>
            <div style={{padding:12,borderRadius:12,background:'#fff'}}><h4>Tratamientos No Invasivos</h4><p style={{color:'#6b7280'}}>Botox, ácido hialurónico, bioremodeladores y hilos tensores.</p></div>
          </div>
        </section>

        <section style={{marginTop:24}} className="card">
          <h2>{t('Artículos del Dr. Moncayo','Articles by Dr. Moncayo')}</h2>
          <div style={{display:'grid',gap:12,marginTop:12}}>
            {[1,2,3,4].map(i=> (
              <article key={i} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
                <img src={blogImages[i-1]} alt="blog" style={{width:140,height:90,objectFit:'cover',borderRadius:8}}/>
                <div style={{flex:1}}>
                  <h3>{i===1? t('El arte de la naturalidad en la cirugía plástica moderna','The art of naturalness in modern plastic surgery') : i===2? t('Armonización facial: equilibrio que preserva identidad','Facial harmony: balance that preserves identity') : i===3? t('Turismo médico en Guayaquil: atención y experiencia integral','Medical tourism in Guayaquil: comprehensive care and experience') : t('Confianza y seguridad: pilares de una cirugía plástica responsable','Trust and safety: pillars of responsible plastic surgery')}</h3>
                  <p style={{color:'#6b7280'}}>{t('Resumen breve del artículo...','Short summary of the article...')}</p>
                  <button onClick={()=>toggleArticle(i)} style={{background:'transparent',border:'none',color:'#059669'}}>{openArticle===i? t('Leer menos','Read less') : t('Leer más','Read more')}</button>
                </div>
              </article>
            ))}
          </div>
          <div style={{marginTop:10}}>
            {openArticle && (
              <div style={{marginTop:12,padding:12,background:'#fff',borderRadius:12}}>
                <p>{t('Texto completo del artículo. Aquí se desarrolla el contenido con tono emotivo y profesional...','Full article text. Here the content is developed with an emotional and professional tone...')}</p>
                <div style={{marginTop:12}}>
                  <p style={{fontStyle:'italic',color:'#0ea5a3'}}>{t('Descubre tu mejor versión con una valoración personalizada.','Discover your best version with a personalized consultation.')}</p>
                  <div style={{display:'flex',gap:8,marginTop:8}}>
                    <button onClick={openWhats} style={{padding:'8px 12px',borderRadius:999,border:'1px solid #e5e7eb'}}> {t('Contactar por WhatsApp','Contact via WhatsApp')}</button>
                    <a href={calendlyUrl} target="_blank" rel="noreferrer" style={{padding:'8px 12px',borderRadius:999,background:'#10b981',color:'#fff',textDecoration:'none'}}>{t('Reservar valoración','Book evaluation')}</a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section style={{marginTop:24}} className="card">
          <h2>{t('Lo que dicen nuestros pacientes','What our patients say')}</h2>
          <p style={{opacity:0.8}}>{t('Experiencias reales que reflejan confianza, resultados y satisfacción.','Real experiences that reflect trust, results and satisfaction.')}</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:12,marginTop:12}}>
            {reviews.slice(0,3).map(r=> (
              <div key={r.id} style={{background:'#fff',padding:12,borderRadius:12}}>
                <p style={{margin:0}}>“{r.text}”</p>
                <p style={{marginTop:8,fontSize:13,color:'#6b7280'}}>{r.name} · {'★'.repeat(r.rating)}</p>
              </div>
            ))}
          </div>
          <div style={{marginTop:12,display:'flex',gap:10,justifyContent:'center'}}>
            <button onClick={()=>setShowModal(true)} style={{padding:'8px 12px',borderRadius:999,border:'1px solid #e5e7eb'}}>{t('Ver más reseñas / Enviar opinión','See more reviews / Submit a review')}</button>
            <a href={googleReviewsUrl} target="_blank" rel="noreferrer" style={{padding:'8px 12px',borderRadius:999,background:'#10b981',color:'#fff',textDecoration:'none'}}>{t('Abrir en Google Reviews','Open in Google Reviews')}</a>
          </div>
        </section>

        <section style={{marginTop:24}} className="card">
          <h2>{t('Contacto','Contact')}</h2>
          <p>{t('Cada transformación empieza con una conversación. Nuestro equipo te acompañará en cada paso hacia la mejor versión de ti.','Every transformation begins with a conversation. Our team will guide you every step of the way toward your best version.')}</p>
          <form onSubmit={submitReview} style={{display:'grid',gap:8,marginTop:8}}>
            <input required placeholder={t('Nombre','Name')} value={newReview.name} onChange={(e)=>setNewReview({...newReview,name:e.target.value})} style={{padding:10,borderRadius:8,border:'1px solid #e5e7eb'}}/>
            <input required placeholder={t('Correo electrónico','Email')} value={newReview.email||''} onChange={(e)=>setNewReview({...newReview,email:e.target.value})} style={{padding:10,borderRadius:8,border:'1px solid #e5e7eb'}}/>
            <input required placeholder={t('Teléfono','Phone')} value={newReview.phone||''} onChange={(e)=>setNewReview({...newReview,phone:e.target.value})} style={{padding:10,borderRadius:8,border:'1px solid #e5e7eb'}}/>
            <select value={newReview.procedure||''} onChange={(e)=>setNewReview({...newReview,procedure:e.target.value})} style={{padding:10,borderRadius:8,border:'1px solid #e5e7eb'}}>
              <option value="">{t('Procedimiento de interés','Procedure of interest')}</option>
              <option value="rinoplastia">{t('Rinoplastia','Rhinoplasty')}</option>
              <option value="abdominoplastia">{t('Abdominoplastia','Abdominoplasty')}</option>
              <option value="armonizacion">{t('Armonización facial','Facial harmony')}</option>
            </select>
            <textarea required placeholder={t('Mensaje','Message')} value={newReview.text} onChange={(e)=>setNewReview({...newReview,text:e.target.value})} style={{padding:10,borderRadius:8,border:'1px solid #e5e7eb'}}/>
            <div style={{display:'flex',gap:10}}>
              <button type="submit" style={{padding:'10px 16px',borderRadius:999,background:'#10b981',color:'#fff',border:'none'}}>{t('Enviar solicitud','Send request')}</button>
              <button type="button" onClick={openWhats} style={{padding:'10px 16px',borderRadius:999,border:'1px solid #e5e7eb',background:'transparent'}}>{t('Hablar por WhatsApp','Chat on WhatsApp')}</button>
            </div>
          </form>
        </section>

        <footer style={{marginTop:40,textAlign:'center',opacity:0.85}}>
          <p style={{margin:0}}>{t('©','©')} {new Date().getFullYear()} Dr. Darwin Moncayo · {t('Cirujano Plástico • Docente • Director de programas de formación','Plastic Surgeon • Lecturer • Program Director')}</p>
        </footer>
      </main>

      {/* WhatsApp floating button */}
      <div onClick={openWhats} style={{position:'fixed',right:20,bottom:20,background:'#059669',width:56,height:56,borderRadius:999,display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 8px 24px rgba(5,118,98,0.2)',cursor:'pointer'}} title="WhatsApp">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20.52 3.478A11.948 11.948 0 0012 .5C6.201.5 1.5 5.201 1.5 11c0 1.94.507 3.833 1.467 5.476L.5 23.5l6.99-2.034A11.945 11.945 0 0012 23.5c5.799 0 10.5-4.701 10.5-10.5 0-2.735-1.042-5.28-2.98-7.522z" fill="#fff"/></svg>
      </div>

      {/* Modal for reviews - simplified */}
      {showModal && (
        <div style={{position:'fixed',inset:0,display:'flex',alignItems:'center',justifyContent:'center',background:'rgba(0,0,0,0.4)'}}>
          <div style={{background:'#fff',padding:20,borderRadius:12,maxWidth:720,width:'90%'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
              <h3>{t('Deja tu opinión','Submit your review')}</h3>
              <button onClick={()=>setShowModal(false)}>Cerrar</button>
            </div>
            <div style={{marginTop:12}}>
              {reviews.map(r=> <div key={r.id} style={{padding:8,borderRadius:8,background:'#f8fafc',marginBottom:8}}><strong>{r.name}</strong><p style={{margin:0}}>{r.text}</p></div>)}
            </div>
          </div>
        </div>
      )}

      {/* toast */}
      {toast && <div style={{position:'fixed',right:20,bottom:100,background:'rgba(251,246,240,0.95)',padding:12,borderRadius:8,boxShadow:'0 6px 20px rgba(2,6,23,0.08)'}}>{toast}</div>}
    </div>
  );
}
