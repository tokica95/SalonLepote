/* =============================================
   Navbar - scroll shadow
   ============================================= */
(function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
})();

/* =============================================
   Hero - bg zoom on load
   ============================================= */
(function initHero() {
  const hero = document.querySelector('.hero');
  if (hero) requestAnimationFrame(() => hero.classList.add('loaded'));
})();

/* =============================================
   Hamburger menu toggle
   ============================================= */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });
}

/* =============================================
   Highlight today's working hours row
   ============================================= */
(function highlightToday() {
  const dayMap = ['ned', 'pon', 'uto', 'sre', 'cet', 'pet', 'sub'];
  const today = dayMap[new Date().getDay()];
  const todayRow = document.querySelector(`.hours-row[data-day="${today}"]`);
  if (todayRow) todayRow.classList.add('today');
})();

/* =============================================
   Services Accordion
   ============================================= */
(function initAccordion() {
  const items = document.querySelectorAll('.accordion-item');
  if (!items.length) return;
  items.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('accordion-item--open');
      items.forEach(i => {
        i.classList.remove('accordion-item--open');
        const t = i.querySelector('.accordion-trigger');
        if (t) t.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('accordion-item--open');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
})();

/* =============================================
   Scroll reveal
   ============================================= */
(function initScrollReveal() {
  const els = document.querySelectorAll(
    '.accordion-item, .highlight-card, .gallery-pair, .contact-item, .hours-row'
  );
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.5s ease ${i * 0.065}s, transform 0.5s ease ${i * 0.065}s`;
    observer.observe(el);
  });
})();

/* =============================================
   i18n - Translations
   ============================================= */
const TRANSLATIONS = {
  sr: {
    nav_home: 'Početna', nav_services: 'Usluge', nav_gallery: 'Galerija',
    nav_pricing: 'Cenovnik', nav_contact: 'Kontakt',
    hero_eyebrow: 'Vaša oaza lepote',
    hero_tagline: 'Više od tretmana - iskustvo posvećeno vama',
    hero_sub: 'Profesionalni tretmani lepote u srcu Beograda. Prepustite se negovanju tela i duha u Salonu Lotus.',
    btn_book: 'Zakaži termin', btn_view_services: 'Naše usluge',
    lbl_about: 'O nama', h2_about: 'Vaša lepota,<br>naša strast',
    about_p: 'U Salonu Lotus verujemo da je nega mnogo više od tretmana – to je vreme posvećeno vama. U prijatnom i sofisticiranom ambijentu pružamo usluge koje ističu vašu prirodnu lepotu i vraćaju osećaj harmonije. Svakom klijentu pristupamo individualno, kombinujući stručnost, pažnju i najkvalitetnije proizvode za rezultate koji se vide i osećaju.',
    about_quote: '„Nega nije luksuz, već izraz ljubavi prema sebi."',
    h3_hl1: 'Iskusni tim', p_hl1: 'Naši majstori poseduju višegodišnje iskustvo i kontinuirano se usavršavaju kroz obuke i sertifikate.',
    h3_hl2: 'Premium oprema', p_hl2: 'Koristimo isključivo profesionalnu opremu i visokokvalitetne proizvode renomiranih svetskih brendova.',
    h3_hl3: 'Prijatna atmosfera', p_hl3: 'Ambijent osmišljen da vam pruži potpuno opuštanje i uživanje tokom svakog tretmana.',
    lbl_our_services: 'Naše usluge', h1_services: 'Usluge',
    services_sub: 'Sve što vam je potrebno za savršen izgled - na jednom mestu.',
    svc_hair_name: 'Frizure', svc_hair_desc: 'Šišanje, bojenje, pramenovi, keratinski tretmani. Svaki stil prilagođen vašem licu i karakteru.',
    svc_hair_tagline: 'Transformišemo vašu kosu uz stručno šišanje, bojenje i negu.',
    svc_hair_detail: 'Naš frizerski tim prati najnovije trendove i tehnike kako bi svaki stil bio savršeno prilagođen vašem licu, tipu kose i karakteru. Koristimo isključivo profesionalne proizvode koji neguju kosu tokom i posle svakog tretmana. Bez obzira da li tražite dramatičnu promenu ili suptilno osveženje, tu smo za vas.',
    svc_manicure_name: 'Manikir', svc_manicure_desc: 'Klasični manikir, gel lak, trajni lak, produžavanje noktiju. Savršeni nokti svaki dan.',
    svc_manicure_tagline: 'Savršeni nokti svakog dana - od klasičnog do umetničkog dizajna.',
    svc_manicure_detail: 'Nega ruku i noktiju koja kombinuje preciznost i estetiku. Koristimo premium gel i akrilne materijale koji dugotrajno čuvaju lepotu vaših noktiju. Svaki tretman počinje negom ruku kako biste izašli sa potpuno odmorenim i prelepim rukama.',
    svc_pedicure_name: 'Pedikir', svc_pedicure_desc: 'Klasični i medicinski pedikir. Nežna nega stopala za bezbrižno hodanje.',
    svc_pedicure_tagline: 'Nežna i stručna nega stopala za vaš savršen korak.',
    svc_pedicure_detail: 'Vaša stopala zaslužuju jednaku pažnju kao i ostatak tela. Naši pedikir tretmani kombinuju medicinsku preciznost sa opuštajućom negom - savršena kombinacija zdravlja i lepote. Idealno pre letnje sezone, ali i tokom cele godine.',
    svc_makeup_name: 'Šminke', svc_makeup_desc: 'Svečana, naturalna i kreativna šminka. Savršen izgled za svaku priliku.',
    svc_makeup_tagline: 'Profesionalna šminka za svaku priliku - od prirodne do glamurozne.',
    svc_makeup_detail: 'Svaki make-up tretman počinje razgovorom o vašim željama i prigodom. Koristimo vrhunske profesionalne proizvode dugotrajne formule koji ostaju savršeni tokom celog dana i noći. Naše šminkerke prate aktuelne trendove i prilagođavaju ih vašem tipu lica.',
    svc_lashes_name: 'Trepavice i obrve', svc_lashes_desc: 'Lift i laminacija trepavica, produžavanje trepavica, laminacija i bojenje obrva.',
    svc_lashes_tagline: 'Upečatljiv pogled bez truda - svaki dan.',
    svc_lashes_detail: 'Oči govore više od reči - zato posvećujemo posebnu pažnju svakom detalju. Naši tretmani za trepavice i obrve dizajnirani su da naglase prirodnu lepotu vašeg pogleda i smanje dnevnu rutinu šminkanja. Rezultati traju nedeljama.',
    svc_facial_name: 'Tretmani lica', svc_facial_desc: 'Dubinsko čišćenje, hidratacija, hemijski piling, mezoterapija. Sijajuće lice svakog dana.',
    svc_facial_tagline: 'Sijajuća koža prilagođena upravo vašem tipu lica.',
    svc_facial_detail: 'Svaki tretman lica počinje analizom kože kako bismo izabrali protokol koji donosi vidljive rezultate. Kombinujemo savremenu opremu i aktivne sastojke koji deluju dubinski - od prvog tretmana osetićete razliku u teksturi, sjaju i elastičnosti kože.',
    svc_body_name: 'Tretmani tela', svc_body_desc: 'Kavitacija i radiofrekvencijsko lifting za oblikovanje tela i zatezanje kože.',
    svc_body_tagline: 'Oblikujte i zategnite telo uz savremene tehnologije.',
    svc_body_detail: 'Naši tretmani tela koriste najsavremenije aparature za neinvazivno oblikovanje i zatezanje. Kavitacija i radiofrekvencija deluju sinergistički - razlažu masno tkivo i istovremeno stimulišu produkciju kolagena za vidljivo zategnututu i glatkiju kožu već posle prvih tretmana.',
    svc_depil_name: 'Depilacija i laser', svc_depil_desc: 'Voštana depilacija i lasersko uklanjanje dlačica za dugotrajno glatku kožu.',
    svc_depil_tagline: 'Dugotrajno glatka koža uz bezbedne i efikasne metode.',
    svc_depil_detail: 'Od klasične voštane depilacije do laserskog uklanjanja dlačica - nudimo opcije za svaku potrebu i tip kože. Laser depilacija daje trajne rezultate već nakon nekoliko tretmana, dok voštana depilacija pruža trenutnu glatkoću. Svi tretmani se izvode u sterilnim uslovima sa najvećom pažnjom prema osetljivosti kože.',
    svc_massage_name: 'Masaža', svc_massage_desc: 'Relaksaciona, sportska i anticelulit masaža. Potpuno opuštanje tela i duha.',
    svc_massage_tagline: 'Potpuno opuštanje tela i duha uz stručne terapeutske masaže.',
    svc_massage_detail: 'Masaža nije luksuz - ona je neophodna nega tela i uma. Naši masažni terapeuti primenjuju različite tehnike prilagođene vašim potrebama - od dubokog otklanjanja napetosti do nežnog opuštanja uz aromaterapiju. Svaka sesija je personalizovano iskustvo.',
    svc_sauna_name: 'Sauna i solarijum', svc_sauna_desc: 'Finska sauna i moderni solarijum za opuštanje i savršen ten tokom cele godine.',
    svc_sauna_tagline: 'Opuštanje, detoksikacija i savršen ten - tokom cele godine.',
    svc_sauna_detail: 'Naša finska sauna i moderni solarijum savršeni su za detoksikaciju organizma, opuštanje mišića i pripremu kože. Preporučujemo kombinovani program - sauna otvara pore i priprema kožu, a naši stručnjaci pomažu u odabiru sigurnog programa za solarijum prilagođenog vašem fototipu.',
    svc_includes: 'Šta je uključeno:',
    btn_view_pricing: 'Pogledajte cenovnik →',
    lbl_gallery: 'Naši radovi', h1_gallery: 'Galerija',
    gal_subtitle: 'Pogledajte transformacije koje potvrđuju kvalitet našeg rada.',
    lbl_pre: 'Pre', lbl_posle: 'Posle',
    cat_hair: 'Frizura', cat_manicure: 'Manikir', cat_pedicure: 'Pedikir',
    cat_lashes: 'Trepavice', cat_makeup: 'Šminka', cat_facial: 'Tretman lica',
    lbl_pricing: 'Transparentne cene', h1_pricing: 'Cenovnik',
    pricing_sub: 'Jasne i poštene cene bez skrivenih troškova.',
    th_service: 'Usluga', th_price: 'Cena',
    cat_hair_title: 'Frizure', cat_manicure_title: 'Manikir',
    cat_pedicure_title: 'Pedikir', cat_lashes_title: 'Trepavice i obrve',
    cat_facial_title: 'Tretmani lica', cat_body_title: 'Tretmani tela',
    cat_depil_title: 'Depilacija', cat_massage_title: 'Masaža',
    cat_sauna_title: 'Sauna i solarijum',
    p_fen: 'Fen i oblikovanje', p_sisanje: 'Šišanje i feniranje',
    p_bojenje_k: 'Bojenje (kratka kosa)', p_bojenje_d: 'Bojenje (duga kosa)',
    p_pramenovi: 'Pramenovi', p_keratin: 'Keratinski tretman',
    p_manikir_k: 'Klasični manikir', p_gel_lak: 'Gel lak',
    p_trajni_lak: 'Trajni lak', p_skidanje: 'Skidanje gela', p_produzavanje: 'Produžavanje noktiju',
    p_pedikir_k: 'Klasični pedikir', p_pedikir_gel: 'Pedikir + gel lak', p_pedikir_med: 'Medicinski pedikir',
    p_lift: 'Lift trepavica', p_laminacija_trep: 'Laminacija trepavica',
    p_produz_klasik: 'Produžavanje (klasik)', p_produz_vol: 'Produžavanje (volumen)',
    p_laminacija_obrva: 'Laminacija obrva',
    p_cistenje: 'Dubinsko čišćenje lica', p_hidratacija: 'Hidratacija lica',
    p_piling: 'Hemijski piling', p_mezo: 'Mezoterapija',
    p_kav1: 'Kavitacija (1 tretman)', p_kav5: 'Kavitacija (5 tretmana)', p_rf1: 'Radiofrekvencija (1 tretman)',
    p_vosak_noge: 'Vosak - noge', p_vosak_bikini: 'Vosak - bikini',
    p_laser_mali: 'Laser - mali predeo', p_laser_veliki: 'Laser - veliki predeo',
    p_masaza_relax: 'Relaksaciona masaža (60 min)', p_masaza_ledja: 'Masaža leđa (30 min)',
    p_masaza_sport: 'Sportska masaža (60 min)', p_masaza_anti: 'Anticelulit masaža (60 min)',
    p_sauna_30: 'Sauna (30 min)', p_sauna_60: 'Sauna (60 min)',
    p_solar_10: 'Solarijum (10 min)', p_solar_20: 'Solarijum (20 min)',
    price_note: '💡 <strong>Napomena:</strong> Prikazane cene su informativne i mogu varirati. Za tačan cenovnik pozovite nas ili posetite salon. Plaćanje gotovinom ili karticom.',
    lbl_contact: 'Kontaktirajte nas', h1_contact: 'Kontakt',
    lbl_address: 'Adresa', lbl_phone: 'Telefon', lbl_email: 'Email',
    h3_hours: 'Radno vreme', hours_closed: 'Zatvoreno',
    map_note: '📌 Parking dostupan ispred salona.',
    day_mon: 'Ponedeljak', day_tue: 'Utorak', day_wed: 'Sreda',
    day_thu: 'Četvrtak', day_fri: 'Petak', day_sat: 'Subota', day_sun: 'Nedelja',
    lbl_book_cta: 'Zakažite termin', h2_book_cta: 'Otkrijte svoju najbolju verziju',
    p_book_cta: 'Zakažite svoj tretman već danas - kontaktirajte nas telefonom ili putem e-maila.',
    btn_call: 'Pozovite nas', btn_email: 'Pošaljite email',
    footer_tagline: 'Vaša oaza lepote u Beogradu.',
    footer_rights: '© 2026 Salon Lotus. Sva prava zadržana.',
  },
  en: {
    nav_home: 'Home', nav_services: 'Services', nav_gallery: 'Gallery',
    nav_pricing: 'Pricing', nav_contact: 'Contact',
    hero_eyebrow: 'Belgrade · Your beauty oasis',
    hero_tagline: 'Where beauty becomes art',
    hero_sub: 'Professional beauty treatments in the heart of Belgrade. Surrender to body and soul care at Salon Lotus.',
    btn_book: 'Book appointment', btn_view_services: 'Our services',
    lbl_about: 'About us', h2_about: 'Your beauty,<br>our passion',
    about_p: 'Salon Lotus is a place where expertise meets a relaxing atmosphere. Our team of experienced professionals is dedicated to ensuring every visitor leaves feeling beautiful and refreshed. We use only premium products and the latest treatment techniques.',
    about_quote: '"Every woman is a unique flower that deserves special care."',
    h3_hl1: 'Experienced team', p_hl1: 'Our stylists have years of experience and continuously improve through training and certifications.',
    h3_hl2: 'Premium equipment', p_hl2: 'We exclusively use professional equipment and high-quality products from renowned global brands.',
    h3_hl3: 'Pleasant atmosphere', p_hl3: 'A relaxing ambience designed to give you complete relaxation and enjoyment during every treatment.',
    lbl_our_services: 'Our services', h1_services: 'Services',
    services_sub: 'Everything you need for a perfect look - all in one place.',
    svc_hair_name: 'Hair styling', svc_hair_desc: 'Cuts, coloring, highlights, keratin treatments. Every style tailored to your face and character.',
    svc_hair_tagline: 'We transform your hair with expert cuts, coloring and care.',
    svc_hair_detail: 'Our hair team follows the latest trends and techniques to ensure every style perfectly suits your face, hair type and personality. We use only professional products that nourish your hair during and after every treatment. Whether you seek a dramatic change or a subtle refresh, we are here for you.',
    svc_manicure_name: 'Manicure', svc_manicure_desc: 'Classic manicure, gel polish, long-lasting polish, nail extensions. Perfect nails every day.',
    svc_manicure_tagline: 'Perfect nails every day - from classic to artistic design.',
    svc_manicure_detail: 'Hand and nail care that combines precision with aesthetics. We use premium gel and acrylic materials for long-lasting beauty. Every treatment begins with hand care, so you leave with both beautiful nails and relaxed hands.',
    svc_pedicure_name: 'Pedicure', svc_pedicure_desc: 'Classic and medical pedicure. Gentle foot care for effortless walking.',
    svc_pedicure_tagline: 'Gentle and expert foot care for your perfect step.',
    svc_pedicure_detail: 'Your feet deserve the same attention as the rest of your body. Our pedicure treatments combine medical precision with relaxing care - the perfect blend of health and beauty. Ideal before the summer season, and year-round.',
    svc_makeup_name: 'Makeup', svc_makeup_desc: 'Formal, natural and creative makeup. Perfect look for every occasion.',
    svc_makeup_tagline: 'Professional makeup for every occasion - from natural to glamorous.',
    svc_makeup_detail: 'Every makeup session begins with a conversation about your wishes and the occasion. We use premium professional products with long-lasting formulas that stay flawless all day and night. Our makeup artists follow current trends and adapt them to your face type.',
    svc_lashes_name: 'Lashes & brows', svc_lashes_desc: 'Lash lift and lamination, lash extensions, brow lamination and tinting.',
    svc_lashes_tagline: 'A striking gaze with no effort - every day.',
    svc_lashes_detail: 'Eyes speak louder than words - so we pay special attention to every detail. Our lash and brow treatments are designed to enhance the natural beauty of your gaze and reduce your daily makeup routine. Results last for weeks.',
    svc_facial_name: 'Facial treatments', svc_facial_desc: 'Deep cleansing, hydration, chemical peeling, mesotherapy. Glowing skin every day.',
    svc_facial_tagline: 'Glowing skin tailored to your specific skin type.',
    svc_facial_detail: 'Every facial treatment begins with a skin analysis to choose a protocol that delivers visible results. We combine modern equipment and active ingredients that work deeply - from the first treatment you will feel a difference in texture, radiance and skin elasticity.',
    svc_body_name: 'Body treatments', svc_body_desc: 'Cavitation and radiofrequency lifting for body shaping and skin tightening.',
    svc_body_tagline: 'Shape and firm your body with modern technologies.',
    svc_body_detail: 'Our body treatments use state-of-the-art devices for non-invasive shaping and tightening. Cavitation and radiofrequency work synergistically - breaking down fat tissue while stimulating collagen production for visibly firmer and smoother skin after just a few sessions.',
    svc_depil_name: 'Hair removal & laser', svc_depil_desc: 'Waxing and laser hair removal for long-lasting smooth skin.',
    svc_depil_tagline: 'Long-lasting smooth skin with safe and effective methods.',
    svc_depil_detail: 'From classic waxing to laser hair removal - we offer options for every need and skin type. Laser hair removal delivers permanent results after just a few sessions, while waxing provides instant smoothness. All treatments are performed in sterile conditions with the utmost care for skin sensitivity.',
    svc_massage_name: 'Massage', svc_massage_desc: 'Relaxation, sports and anti-cellulite massage. Complete body and mind relaxation.',
    svc_massage_tagline: 'Complete body and mind relaxation with expert therapeutic massages.',
    svc_massage_detail: 'Massage is not a luxury - it is essential care for body and mind. Our massage therapists apply various techniques tailored to your needs - from deep tension relief to gentle relaxation with aromatherapy. Every session is a personalised experience.',
    svc_sauna_name: 'Sauna & solarium', svc_sauna_desc: 'Finnish sauna and modern solarium for relaxation and a perfect tan year-round.',
    svc_sauna_tagline: 'Relaxation, detox and a perfect tan - all year round.',
    svc_sauna_detail: 'Our Finnish sauna and modern solarium are ideal for detoxifying the body, relaxing muscles and preparing the skin. We recommend the combined programme - the sauna opens pores and prepares the skin, and our experts help you choose a safe solarium programme suited to your skin type.',
    svc_includes: 'What is included:',
    btn_view_pricing: 'View pricing →',
    lbl_gallery: 'Our work', h1_gallery: 'Gallery',
    gal_subtitle: 'Results speak for themselves - before and after our treatments.',
    lbl_pre: 'Before', lbl_posle: 'After',
    cat_hair: 'Hair', cat_manicure: 'Manicure', cat_pedicure: 'Pedicure',
    cat_lashes: 'Lashes', cat_makeup: 'Makeup', cat_facial: 'Facial',
    lbl_pricing: 'Transparent pricing', h1_pricing: 'Pricing',
    pricing_sub: 'Clear and fair prices with no hidden costs.',
    th_service: 'Service', th_price: 'Price',
    cat_hair_title: 'Hair styling', cat_manicure_title: 'Manicure',
    cat_pedicure_title: 'Pedicure', cat_lashes_title: 'Lashes & brows',
    cat_facial_title: 'Facial treatments', cat_body_title: 'Body treatments',
    cat_depil_title: 'Hair removal', cat_massage_title: 'Massage',
    cat_sauna_title: 'Sauna & solarium',
    p_fen: 'Blowout & styling', p_sisanje: 'Haircut + blowout',
    p_bojenje_k: 'Color (short hair)', p_bojenje_d: 'Color (long hair)',
    p_pramenovi: 'Highlights', p_keratin: 'Keratin treatment',
    p_manikir_k: 'Classic manicure', p_gel_lak: 'Gel polish',
    p_trajni_lak: 'Long-lasting polish', p_skidanje: 'Gel removal', p_produzavanje: 'Nail extensions',
    p_pedikir_k: 'Classic pedicure', p_pedikir_gel: 'Pedicure + gel polish', p_pedikir_med: 'Medical pedicure',
    p_lift: 'Lash lift', p_laminacija_trep: 'Lash lamination',
    p_produz_klasik: 'Extensions (classic)', p_produz_vol: 'Extensions (volume)',
    p_laminacija_obrva: 'Brow lamination',
    p_cistenje: 'Deep facial cleansing', p_hidratacija: 'Facial hydration',
    p_piling: 'Chemical peeling', p_mezo: 'Mesotherapy',
    p_kav1: 'Cavitation (1 session)', p_kav5: 'Cavitation (5 sessions)', p_rf1: 'Radiofrequency (1 session)',
    p_vosak_noge: 'Wax - legs', p_vosak_bikini: 'Wax - bikini',
    p_laser_mali: 'Laser - small area', p_laser_veliki: 'Laser - large area',
    p_masaza_relax: 'Relaxation massage (60 min)', p_masaza_ledja: 'Back massage (30 min)',
    p_masaza_sport: 'Sports massage (60 min)', p_masaza_anti: 'Anti-cellulite massage (60 min)',
    p_sauna_30: 'Sauna (30 min)', p_sauna_60: 'Sauna (60 min)',
    p_solar_10: 'Solarium (10 min)', p_solar_20: 'Solarium (20 min)',
    price_note: '💡 <strong>Note:</strong> Prices shown are informational and may vary. For exact pricing call us or visit the salon. Cash or card payment.',
    lbl_contact: 'Get in touch', h1_contact: 'Contact',
    lbl_address: 'Address', lbl_phone: 'Phone', lbl_email: 'Email',
    h3_hours: 'Working hours', hours_closed: 'Closed',
    map_note: '📌 Parking available in front of the salon.',
    day_mon: 'Monday', day_tue: 'Tuesday', day_wed: 'Wednesday',
    day_thu: 'Thursday', day_fri: 'Friday', day_sat: 'Saturday', day_sun: 'Sunday',
    lbl_book_cta: 'Book an appointment', h2_book_cta: 'Start glowing today',
    p_book_cta: "Contact us by phone or email - we'll be happy to schedule your appointment.",
    btn_call: 'Call us', btn_email: 'Send email',
    footer_tagline: 'Your beauty oasis in Belgrade.',
    footer_rights: '© 2026 Salon Lotus. All rights reserved.',
  },
  ru: {
    nav_home: 'Главная', nav_services: 'Услуги', nav_gallery: 'Галерея',
    nav_pricing: 'Цены', nav_contact: 'Контакт',
    hero_eyebrow: 'Белград · Ваш оазис красоты',
    hero_tagline: 'Где красота становится искусством',
    hero_sub: 'Профессиональные процедуры красоты в сердце Белграда. Доверьтесь уходу за телом и душой в Salon Lotus.',
    btn_book: 'Записаться', btn_view_services: 'Наши услуги',
    lbl_about: 'О нас', h2_about: 'Ваша красота,<br>наша страсть',
    about_p: 'Salon Lotus - место, где профессионализм встречается с расслабляющей атмосферой. Наша команда опытных специалистов посвящена тому, чтобы каждый посетитель уходил красивым и отдохнувшим. Мы используем только премиальные продукты и новейшие техники.',
    about_quote: '"Каждая женщина - уникальный цветок, заслуживающий особого ухода."',
    h3_hl1: 'Опытная команда', p_hl1: 'Наши мастера имеют многолетний опыт и постоянно совершенствуются через обучение и сертификаты.',
    h3_hl2: 'Премиум оборудование', p_hl2: 'Мы используем исключительно профессиональное оборудование и высококачественные продукты известных мировых брендов.',
    h3_hl3: 'Приятная атмосфера', p_hl3: 'Расслабляющая обстановка, созданная для полного отдыха и удовольствия во время каждой процедуры.',
    lbl_our_services: 'Наши услуги', h1_services: 'Услуги',
    services_sub: 'Всё необходимое для безупречного вида - в одном месте.',
    svc_hair_name: 'Прически', svc_hair_desc: 'Стрижки, окрашивание, мелирование, кератиновые процедуры. Каждый стиль подбирается под ваше лицо.',
    svc_hair_tagline: 'Преображаем ваши волосы с помощью профессиональной стрижки, окрашивания и ухода.',
    svc_hair_detail: 'Наша команда парикмахеров следит за последними тенденциями и техниками, чтобы каждый стиль идеально подходил вашему лицу, типу волос и характеру. Мы используем только профессиональные продукты, которые питают волосы во время и после каждой процедуры.',
    svc_manicure_name: 'Маникюр', svc_manicure_desc: 'Классический маникюр, гель-лак, стойкий лак, наращивание ногтей.',
    svc_manicure_tagline: 'Идеальные ногти каждый день - от классики до арт-дизайна.',
    svc_manicure_detail: 'Уход за руками и ногтями, сочетающий точность и эстетику. Мы используем премиальные гелевые и акриловые материалы для долговременной красоты ваших ногтей. Каждая процедура начинается с ухода за руками.',
    svc_pedicure_name: 'Педикюр', svc_pedicure_desc: 'Классический и медицинский педикюр. Нежный уход за ногами.',
    svc_pedicure_tagline: 'Нежный и профессиональный уход за ногами для вашего идеального шага.',
    svc_pedicure_detail: 'Ваши ноги заслуживают того же внимания, что и остальное тело. Наши процедуры педикюра сочетают медицинскую точность с расслабляющим уходом - идеальное сочетание здоровья и красоты.',
    svc_makeup_name: 'Макияж', svc_makeup_desc: 'Вечерний, натуральный и творческий макияж. Безупречный вид для любого случая.',
    svc_makeup_tagline: 'Профессиональный макияж для любого случая - от натурального до гламурного.',
    svc_makeup_detail: 'Каждый сеанс макияжа начинается с обсуждения ваших пожеланий и повода. Мы используем профессиональные продукты с долговременными формулами, которые остаются безупречными весь день и ночь.',
    svc_lashes_name: 'Ресницы и брови', svc_lashes_desc: 'Лифтинг и ламинирование ресниц, наращивание ресниц, ламинирование и окраска бровей.',
    svc_lashes_tagline: 'Выразительный взгляд без усилий - каждый день.',
    svc_lashes_detail: 'Глаза говорят больше слов - поэтому мы уделяем особое внимание каждой детали. Наши процедуры для ресниц и бровей разработаны для подчёркивания естественной красоты вашего взгляда и сокращения ежедневного макияжа. Результаты держатся неделями.',
    svc_facial_name: 'Уход за лицом', svc_facial_desc: 'Глубокое очищение, увлажнение, химический пилинг, мезотерапия.',
    svc_facial_tagline: 'Сияющая кожа, подобранная именно под ваш тип лица.',
    svc_facial_detail: 'Каждая процедура начинается с анализа кожи, чтобы подобрать протокол, дающий видимые результаты. Мы сочетаем современное оборудование и активные ингредиенты глубокого действия - уже с первой процедуры вы почувствуете разницу.',
    svc_body_name: 'Уход за телом', svc_body_desc: 'Кавитация и радиочастотный лифтинг для моделирования тела и подтяжки кожи.',
    svc_body_tagline: 'Моделируйте и подтягивайте тело с помощью современных технологий.',
    svc_body_detail: 'Наши процедуры для тела используют передовые аппараты для неинвазивного моделирования и подтяжки. Кавитация и радиочастота действуют синергетически - разрушают жировую ткань и одновременно стимулируют выработку коллагена.',
    svc_depil_name: 'Депиляция и лазер', svc_depil_desc: 'Восковая депиляция и лазерное удаление волос для долгосрочной гладкости.',
    svc_depil_tagline: 'Долговременно гладкая кожа безопасными и эффективными методами.',
    svc_depil_detail: 'От классической восковой депиляции до лазерного удаления волос - мы предлагаем варианты для любых потребностей и типов кожи. Лазерная депиляция даёт постоянные результаты уже через несколько сеансов. Все процедуры проводятся в стерильных условиях.',
    svc_massage_name: 'Массаж', svc_massage_desc: 'Расслабляющий, спортивный и антицеллюлитный массаж.',
    svc_massage_tagline: 'Полное расслабление тела и духа с профессиональным терапевтическим массажем.',
    svc_massage_detail: 'Массаж - это не роскошь, а необходимый уход за телом и разумом. Наши массажисты применяют различные техники, подобранные под ваши потребности - от глубокого снятия напряжения до нежного расслабления с ароматерапией.',
    svc_sauna_name: 'Сауна и солярий', svc_sauna_desc: 'Финская сауна и современный солярий для отдыха и красивого загара круглый год.',
    svc_sauna_tagline: 'Отдых, детоксикация и красивый загар - круглый год.',
    svc_sauna_detail: 'Наша финская сауна и современный солярий идеально подходят для детоксикации организма, расслабления мышц и подготовки кожи. Рекомендуем комбинированную программу - сауна открывает поры и готовит кожу, а наши специалисты помогут выбрать безопасную программу солярия.',
    svc_includes: 'Что включено:',
    btn_view_pricing: 'Посмотреть цены →',
    lbl_gallery: 'Наши работы', h1_gallery: 'Галерея',
    gal_subtitle: 'Результаты говорят сами за себя - до и после наших процедур.',
    lbl_pre: 'До', lbl_posle: 'После',
    cat_hair: 'Прическа', cat_manicure: 'Маникюр', cat_pedicure: 'Педикюр',
    cat_lashes: 'Ресницы', cat_makeup: 'Макияж', cat_facial: 'Уход за лицом',
    lbl_pricing: 'Прозрачные цены', h1_pricing: 'Цены',
    pricing_sub: 'Чёткие и справедливые цены без скрытых доплат.',
    th_service: 'Услуга', th_price: 'Цена',
    cat_hair_title: 'Прически', cat_manicure_title: 'Маникюр',
    cat_pedicure_title: 'Педикюр', cat_lashes_title: 'Ресницы и брови',
    cat_facial_title: 'Уход за лицом', cat_body_title: 'Уход за телом',
    cat_depil_title: 'Депиляция', cat_massage_title: 'Массаж',
    cat_sauna_title: 'Сауна и солярий',
    p_fen: 'Фен и укладка', p_sisanje: 'Стрижка + укладка',
    p_bojenje_k: 'Окрашивание (короткие)', p_bojenje_d: 'Окрашивание (длинные)',
    p_pramenovi: 'Мелирование', p_keratin: 'Кератиновое выпрямление',
    p_manikir_k: 'Классический маникюр', p_gel_lak: 'Гель-лак',
    p_trajni_lak: 'Стойкий лак', p_skidanje: 'Снятие гель-лака', p_produzavanje: 'Наращивание ногтей',
    p_pedikir_k: 'Классический педикюр', p_pedikir_gel: 'Педикюр + гель-лак', p_pedikir_med: 'Медицинский педикюр',
    p_lift: 'Лифтинг ресниц', p_laminacija_trep: 'Ламинирование ресниц',
    p_produz_klasik: 'Наращивание (классика)', p_produz_vol: 'Наращивание (объём)',
    p_laminacija_obrva: 'Ламинирование бровей',
    p_cistenje: 'Глубокое очищение лица', p_hidratacija: 'Увлажнение лица',
    p_piling: 'Химический пилинг', p_mezo: 'Мезотерапия',
    p_kav1: 'Кавитация (1 сеанс)', p_kav5: 'Кавитация (5 сеансов)', p_rf1: 'Радиочастотный лифтинг (1 сеанс)',
    p_vosak_noge: 'Воск - ноги', p_vosak_bikini: 'Воск - бикини',
    p_laser_mali: 'Лазер - малая зона', p_laser_veliki: 'Лазер - большая зона',
    p_masaza_relax: 'Расслабляющий массаж (60 мин)', p_masaza_ledja: 'Массаж спины (30 мин)',
    p_masaza_sport: 'Спортивный массаж (60 мин)', p_masaza_anti: 'Антицеллюлитный массаж (60 мин)',
    p_sauna_30: 'Сауна (30 мин)', p_sauna_60: 'Сауна (60 мин)',
    p_solar_10: 'Солярий (10 мин)', p_solar_20: 'Солярий (20 мин)',
    price_note: '💡 <strong>Примечание:</strong> Указанные цены ориентировочные и могут варьироваться. Для точных цен позвоните нам или посетите салон. Оплата наличными или картой.',
    lbl_contact: 'Свяжитесь с нами', h1_contact: 'Контакт',
    lbl_address: 'Адрес', lbl_phone: 'Телефон', lbl_email: 'Email',
    h3_hours: 'Часы работы', hours_closed: 'Закрыто',
    map_note: '📌 Парковка доступна перед салоном.',
    day_mon: 'Понедельник', day_tue: 'Вторник', day_wed: 'Среда',
    day_thu: 'Четверг', day_fri: 'Пятница', day_sat: 'Суббота', day_sun: 'Воскресенье',
    lbl_book_cta: 'Запишитесь', h2_book_cta: 'Начните сиять сегодня',
    p_book_cta: 'Свяжитесь с нами по телефону или email - мы с удовольствием запишем вас.',
    btn_call: 'Позвонить', btn_email: 'Написать email',
    footer_tagline: 'Ваш оазис красоты в Белграде.',
    footer_rights: '© 2026 Salon Lotus. Все права защищены.',
  }
};

const LANG_META = {
  sr: { flag: '🇷🇸', code: 'SR', htmlLang: 'sr' },
  en: { flag: '🇬🇧', code: 'EN', htmlLang: 'en' },
  ru: { flag: '🇷🇺', code: 'RU', htmlLang: 'ru' }
};

function applyTranslations(lang) {
  const t = TRANSLATIONS[lang];
  if (!t) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  if (LANG_META[lang]) document.documentElement.lang = LANG_META[lang].htmlLang;
}

function updateSwitcherUI(lang) {
  const meta = LANG_META[lang];
  if (!meta) return;
  const codeEl = document.getElementById('langBtnCode');
  if (codeEl) codeEl.textContent = meta.code;
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

function setLang(lang) {
  localStorage.setItem('lotus_lang', lang);
  applyTranslations(lang);
  updateSwitcherUI(lang);
  if (typeof window._refreshShowcase === 'function') window._refreshShowcase(lang);
  const switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.classList.remove('open');
    const btn = document.getElementById('langBtn');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
}

(function initLang() {
  const saved = localStorage.getItem('lotus_lang') || 'sr';
  applyTranslations(saved);
  updateSwitcherUI(saved);

  const switcher = document.getElementById('langSwitcher');
  const btn = document.getElementById('langBtn');

  if (btn && switcher) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = switcher.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }

  document.querySelectorAll('.lang-option[data-lang]').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      setLang(opt.dataset.lang);
    });
  });

  document.addEventListener('click', () => {
    if (switcher) {
      switcher.classList.remove('open');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* =============================================
   Service Cards Modal
   ============================================= */
const SERVICE_DATA = {
  hair: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>',
    nameKey: 'svc_hair_name', detailKey: 'svc_hair_detail',
    items: { sr: ['Šišanje i stilizovanje','Bojenje - jednobojno i pramenovi','Balayage i ombre tehnika','Keratinski tretman','Proteinski tretman','Feniranje i oblikovanje','Svečane i venčane frizure'], en: ['Haircut & styling','Coloring - solid and highlights','Balayage & ombre technique','Keratin treatment','Protein treatment','Blowout & shaping','Formal & bridal styles'], ru: ['Стрижка и укладка','Окрашивание - сплошное и мелирование','Балаяж и омбре','Кератиновый уход','Протеиновый уход','Укладка и оформление','Праздничные и свадебные прически'] }
  },
  manicure: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c-1.2 5.4-5 7-5 11a5 5 0 0 0 10 0c0-4-3.8-5.6-5-11z"/><path d="M12 17v1"/></svg>',
    nameKey: 'svc_manicure_name', detailKey: 'svc_manicure_detail',
    items: { sr: ['Klasični manikir','Gel lak','Trajni lak','Produžavanje noktiju - gel i akril','Skidanje gela i akrilika','Nail art i ukrašavanje','French i baby boomer'], en: ['Classic manicure','Gel polish','Long-lasting polish','Nail extensions - gel & acrylic','Gel & acrylic removal','Nail art','French & baby boomer'], ru: ['Классический маникюр','Гель-лак','Стойкий лак','Наращивание - гель и акрил','Снятие гель-лака','Nail art','Френч и беби-бумер'] }
  },
  pedicure: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
    nameKey: 'svc_pedicure_name', detailKey: 'svc_pedicure_detail',
    items: { sr: ['Klasični pedikir','Medicinski pedikir','Gel lak na stopalima','Spa pedikir sa kupkom i peelingom','Uklanjanje žuljeva i kurjeg oka'], en: ['Classic pedicure','Medical pedicure','Gel polish on feet','Spa pedicure with soak & peeling','Callus & corn removal'], ru: ['Классический педикюр','Медицинский педикюр','Гель-лак на ногах','Спа-педикюр с ванночкой и пилингом','Удаление мозолей'] }
  },
  makeup: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>',
    nameKey: 'svc_makeup_name', detailKey: 'svc_makeup_detail',
    items: { sr: ['Svečana šminka','Naturalna i dnevna šminka','Venčana šminka (bridal)','Kreativna i editorijalna šminka','Airbrush šminka'], en: ['Formal makeup','Natural & everyday makeup','Bridal makeup','Creative & editorial makeup','Airbrush makeup'], ru: ['Вечерний макияж','Натуральный и дневной макияж','Свадебный макияж','Креативный и редакционный макияж','Аэрограф-макияж'] }
  },
  lashes: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    nameKey: 'svc_lashes_name', detailKey: 'svc_lashes_detail',
    items: { sr: ['Lift trepavica','Laminacija trepavica','Produžavanje trepavica - classic','Produžavanje trepavica - volume','Bojenje trepavica','Laminacija i bojenje obrva','Dizajn i korekcija oblika obrva'], en: ['Lash lift','Lash lamination','Lash extensions - classic','Lash extensions - volume','Lash tinting','Brow lamination & tinting','Brow design & correction'], ru: ['Лифтинг ресниц','Ламинирование ресниц','Наращивание - классика','Наращивание - объём','Окрашивание ресниц','Ламинирование и окрашивание бровей','Дизайн и коррекция бровей'] }
  },
  facial: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12"/><path d="M12 8v4l3 3"/></svg>',
    nameKey: 'svc_facial_name', detailKey: 'svc_facial_detail',
    items: { sr: ['Dubinsko čišćenje lica','Hidratacijski tretman','Hemijski piling','Anti-age tretman','Mezoterapija','Mikrodermoabrazija','Tretman za pigmentaciju i bore'], en: ['Deep facial cleansing','Hydration treatment','Chemical peeling','Anti-age treatment','Mesotherapy','Microdermabrasion','Pigmentation & wrinkle treatment'], ru: ['Глубокое очищение','Увлажняющий уход','Химический пилинг','Антивозрастной уход','Мезотерапия','Микродермабразия','Уход от пигментации и морщин'] }
  },
  body: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    nameKey: 'svc_body_name', detailKey: 'svc_body_detail',
    items: { sr: ['Kavitacija - ultrazvučno razlaganje masti','Radiofrekvencijsko zatezanje tela','RF lifting lica i vrata','Anti-celulit program','Oblikovanje struka, trbuha i butina'], en: ['Cavitation - ultrasonic fat breakdown','Radiofrequency body tightening','RF face & neck lifting','Anti-cellulite programme','Waist, abdomen & thigh shaping'], ru: ['Кавитация - ультразвуковое расщепление жира','Радиочастотное подтягивание тела','РЧ-лифтинг лица и шеи','Антицеллюлитная программа','Коррекция талии, живота и бёдер'] }
  },
  depil: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    nameKey: 'svc_depil_name', detailKey: 'svc_depil_detail',
    items: { sr: ['Voštana depilacija - svi delovi tela','Brazilska depilacija','Šećerna depilacija (sugaring)','Laser depilacija lica','Laser depilacija tela'], en: ['Waxing - all body areas','Brazilian wax','Sugar waxing (sugaring)','Laser hair removal - face','Laser hair removal - body'], ru: ['Восковая депиляция - все зоны','Бразильская депиляция','Сахарная депиляция (шугаринг)','Лазерная эпиляция лица','Лазерная эпиляция тела'] }
  },
  massage: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>',
    nameKey: 'svc_massage_name', detailKey: 'svc_massage_detail',
    items: { sr: ['Relaksaciona masaža','Sportska masaža','Anti-celulit masaža','Masaža leđa i ramena','Masaža stopala - refleksologija','Masaža lica i glave','Aromaterapija'], en: ['Relaxation massage','Sports massage','Anti-cellulite massage','Back & shoulder massage','Foot massage - reflexology','Face & head massage','Aromatherapy'], ru: ['Расслабляющий массаж','Спортивный массаж','Антицеллюлитный массаж','Массаж спины и плеч','Массаж ног - рефлексология','Массаж лица и головы','Ароматерапия'] }
  },
  sauna: {
    iconSvg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>',
    nameKey: 'svc_sauna_name', detailKey: 'svc_sauna_detail',
    items: { sr: ['Finska sauna - individualna sesija','Kombinovani program - sauna i masaža','Solarijum - po minutu ili paket','Savet za pripremu i zaštitu kože'], en: ['Finnish sauna - individual session','Combined programme - sauna & massage','Solarium - per minute or package','Skin prep & protection advice'], ru: ['Финская сауна - индивидуальный сеанс','Комбинированная программа - сауна и массаж','Солярий - поминутно или пакет','Консультация по уходу за кожей'] }
  }
};

(function initServiceModal() {
  const modal   = document.getElementById('svcModal');
  if (!modal) return;
  const backdrop = document.getElementById('svcModalBackdrop');
  const closeBtn = document.getElementById('svcModalClose');
  const iconEl   = document.getElementById('svcModalIcon');
  const titleEl  = document.getElementById('svcModalTitle');
  const detailEl = document.getElementById('svcModalDetail');
  const listEl   = document.getElementById('svcModalList');

  function openModal(key) {
    const data = SERVICE_DATA[key];
    if (!data) return;
    const lang = localStorage.getItem('lotus_lang') || 'sr';
    const t = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) ? TRANSLATIONS[lang] : {};

    iconEl.innerHTML  = data.iconSvg;
    titleEl.textContent = t[data.nameKey] || data.nameKey;
    detailEl.textContent = t[data.detailKey] || '';
    listEl.innerHTML = (data.items[lang] || data.items.sr)
      .map(item => `<li>${item}</li>`).join('');

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.service-card-btn').forEach(btn => {
    btn.addEventListener('click', () => openModal(btn.dataset.service));
  });

  window._openSvcModal = openModal;

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
})();

/* =============================================
   Pricing Tabs
   ============================================= */
(function initPricingTabs() {
  const tabs = document.querySelectorAll('.price-tab');
  const panels = document.querySelectorAll('.price-panel');
  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const panel = document.querySelector(`.price-panel[data-panel="${target}"]`);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* =============================================
   Services Showcase
   ============================================= */
(function initServicesShowcase() {
  const menuItems = document.querySelectorAll('.showcase-menu-item');
  if (!menuItems.length) return;

  const svcKeys = Array.from(menuItems).map(m => m.dataset.svcKey);
  let currentKey = svcKeys[0];
  let isAnimating = false;
  let autoTimer = null;
  let userInteracted = false;

  const counterEl = document.getElementById('spCounter');
  const titleEl   = document.getElementById('spTitle');
  const descEl    = document.getElementById('spDesc');
  const btnDetail = document.getElementById('spBtnDetail');

  function getLang() { return localStorage.getItem('lotus_lang') || 'sr'; }

  function getT(lang) {
    return (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang])
      ? TRANSLATIONS[lang]
      : (typeof TRANSLATIONS !== 'undefined' ? TRANSLATIONS.sr : {});
  }

  function animateEl(el) {
    if (!el) return;
    el.classList.remove('sp-anim');
    void el.offsetWidth;
    el.classList.add('sp-anim');
    el.addEventListener('animationend', () => el.classList.remove('sp-anim'), { once: true });
  }

  function updatePanel(key, animate) {
    const data = typeof SERVICE_DATA !== 'undefined' ? SERVICE_DATA[key] : null;
    if (!data) return;
    const t = getT(getLang());
    const idx = svcKeys.indexOf(key);
    const total = svcKeys.length;

    if (counterEl) counterEl.textContent = `${String(idx + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
    if (titleEl) { titleEl.textContent = t[data.nameKey] || ''; if (animate) animateEl(titleEl); }
    if (descEl)  { descEl.textContent  = t[data.detailKey] || ''; if (animate) animateEl(descEl); }
    if (btnDetail) btnDetail.dataset.service = key;
  }

  function activateSvc(key, animate) {
    if (isAnimating || key === currentKey) return;
    isAnimating = true;

    menuItems.forEach(item => {
      const selected = item.dataset.svcKey === key;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
    });

    const prevImg = document.querySelector('.stage-img.active');
    const nextImg = document.querySelector(`.stage-img[data-svc-key="${key}"]`);

    if (prevImg) prevImg.classList.remove('active');

    if (nextImg) {
      nextImg.classList.remove('stage-entering');
      void nextImg.offsetWidth;
      nextImg.classList.add('stage-entering', 'active');

      const done = () => {
        nextImg.classList.remove('stage-entering');
        nextImg.removeEventListener('animationend', done);
        isAnimating = false;
      };
      nextImg.addEventListener('animationend', done);
      setTimeout(() => { nextImg.classList.remove('stage-entering'); isAnimating = false; }, 900);
    } else {
      isAnimating = false;
    }

    updatePanel(key, animate !== false);
    currentKey = key;
  }

  function startAuto() {
    stopAuto();
    autoTimer = setInterval(() => {
      if (!userInteracted) {
        const idx = svcKeys.indexOf(currentKey);
        activateSvc(svcKeys[(idx + 1) % svcKeys.length]);
      }
    }, 6000);
  }

  function stopAuto() { if (autoTimer) { clearInterval(autoTimer); autoTimer = null; } }

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      userInteracted = true;
      stopAuto();
      activateSvc(item.dataset.svcKey);
    });
    item.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        userInteracted = true;
        stopAuto();
        activateSvc(item.dataset.svcKey);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const idx = svcKeys.indexOf(currentKey);
        if (idx < svcKeys.length - 1) { menuItems[idx + 1].focus(); activateSvc(svcKeys[idx + 1]); }
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        const idx = svcKeys.indexOf(currentKey);
        if (idx > 0) { menuItems[idx - 1].focus(); activateSvc(svcKeys[idx - 1]); }
      }
    });
  });

  if (btnDetail) {
    btnDetail.addEventListener('click', () => {
      if (typeof window._openSvcModal === 'function') window._openSvcModal(btnDetail.dataset.service || currentKey);
    });
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto();
    else if (!userInteracted) startAuto();
  });

  updatePanel(currentKey, false);
  startAuto();

  window._refreshShowcase = function(lang) { updatePanel(currentKey, false); };
})();

/* =============================================
   Lightbox
   ============================================= */
(function initLightbox() {
  const lb      = document.getElementById('lightbox');
  const lbImg   = document.getElementById('lightboxImg');
  const lbClose = document.getElementById('lightboxClose');
  const lbPrev  = document.getElementById('lightboxPrev');
  const lbNext  = document.getElementById('lightboxNext');
  if (!lb) return;

  let images = [];
  let current = 0;

  function open(index) {
    current = index;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    lb.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigate(dir) {
    current = (current + dir + images.length) % images.length;
    lbImg.src = images[current].src;
    lbImg.alt = images[current].alt;
  }

  document.addEventListener('click', (e) => {
    const item = e.target.closest('.gallery-item');
    if (!item) return;
    images = Array.from(document.querySelectorAll('.gallery-item .gallery-img'));
    const idx = images.indexOf(item.querySelector('.gallery-img'));
    open(idx);
  });

  lbClose.addEventListener('click', close);
  lbPrev.addEventListener('click', () => navigate(-1));
  lbNext.addEventListener('click', () => navigate(1));

  lb.addEventListener('click', (e) => {
    if (e.target === lb) close();
  });

  document.addEventListener('keydown', (e) => {
    if (!lb.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  });
})();
