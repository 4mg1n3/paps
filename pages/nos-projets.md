---
layout: default
title: Nos projets
permalink: /nos-projets/
---

<style>
.projects-page { max-width: 1200px; margin: 0 auto; padding: 2rem; }
.page-header { text-align: center; margin-bottom: 4rem; }
.page-title { font-size: 2rem; color: #2c3e3a; margin: 0 0 1rem; }
.page-description { font-size: 1.2rem; color: #606669; line-height: 1.6; max-width: 700px; margin: 0 auto; }
.projects-list { display: flex; flex-direction: column; gap: 4rem; margin-top: 3rem; }
.project-item { display: flex; align-items: center; gap: 3rem; background:rgba(145, 175, 169, 0.47); border-radius: 16px; padding: 2rem; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; }
.project-item:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15); }
.project-item.reverse { flex-direction: row-reverse; }
.project-image { flex: 0 0 300px; height: 250px; border-radius: 12px; overflow: hidden; background: #e4bfa6; display: flex; align-items: center; justify-content: center; }
.project-image img { width: 100%; height: 100%; object-fit: cover; }
.project-image-placeholder { width: 100%; height: 100%; background: linear-gradient(135deg, #e4bfa6 0%, #d3ccad 100%); display: flex; align-items: center; justify-content: center; color: #777158; font-size: 1.2rem; text-align: center; }
.project-content { flex: 1; }
.project-card-icon { width: 60px; height: 60px; background: #e4bfa6; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-bottom: 1.5rem; color: #777158; }
.project-card-title { font-size: 1.8rem; color: #1a1e22; margin: 0 0 0.5rem; font-weight: bold; line-height: 1.3; }
.project-card-subtitle { font-size: 1.1rem; color:rgb(29, 36, 54); margin: 0 0 1.5rem; font-weight: 500; font-style: italic; }
.project-card-description { color: #606669; line-height: 1.7; margin-bottom: 1.5rem; font-size: 1.05rem; text-align: justify; text-justify: inter-word; }
.project-card-features { list-style: none; padding: 0; margin: 0 0 1.5rem 0; }
.project-card-features li { padding: 0.5rem 0; color: #30373d; position: relative; padding-left: 1.8rem; font-size: 1rem; line-height: 1.4; }
.project-card-features li:before { content: "•"; position: absolute; left: 0; color:rgb(80, 131, 138); font-weight: bold; font-size: 1.2rem; }
@media (max-width: 960px) { 
  .projects-page { padding: 1.5rem; } 
  .projects-list { gap: 2.5rem; } 
  .project-item, .project-item.reverse { flex-direction: column-reverse; gap: 1.5rem; text-align: center; } 
  .project-image { flex: none; width: 100%; max-width: 300px; margin: 0 auto; } 
  .page-title { font-size: 2rem; } 
  .project-card-title { font-size: 1.6rem; } 
}
@media (max-width: 480px) { 
  .projects-page { padding: 1rem; } 
  .project-item { padding: 1.5rem; } 
  .project-image { height: 200px; } 
  .project-card-title { font-size: 1.4rem; } 
  .project-card-subtitle { font-size: 1rem; } 
}
</style>

<div class="projects-page">
  <header class="page-header">
    <h1 class="page-title">Nos projets</h1>
    <p class="page-description">Découvrez nos partenariats et initiatives pour développer la psychomotricité au Sénégal.</p>
  </header>
  <div class="projects-list">
    <!-- Project 1: Image on left, content on right -->
    <div class="project-item">
      <div class="project-image">
        <img src="{{ site.baseurl }}/images/image_ctd.jpg" alt="Centre Talibou Dabo">
      </div>
      <div class="project-content">
        <h2 class="project-card-title">Centre Talibou Dabo</h2>
        <h3 class="project-card-subtitle">En partenariat depuis 2021</h3>
        <ul class="project-card-features">
          <li>Lieu: Dakar (Quartier Grand Yoff)</li>
          <li>Période de mission: Octobre à juin</li>
          <li>Durée: Un mois minimum</li>
          <li>Profil recherché: Psychomotricien.ne D.E.</li>
        </ul>
        <p class="project-card-description">
          Le centre Talibou Dabo accueille des enfants en situation de handicap à partir de 3 ans. Il est composé d'une école maternelle, d'une école primaire et d'une unité spécialisée dans le polyhandicap. Le rôle du bénévole consiste en l'évaluation des besoins psychomoteurs des enfants, l'accompagnement des professionnels dans le suivi des enfants et la sensibilisation des professionnels aux méthodes psychomotrices.
        </p>
      </div>
    </div>

    <!-- Project 2: Content on left, image on right (reverse) -->
    <div class="project-item reverse">
      <div class="project-image">
        <img src="{{ site.baseurl }}/images/image_es.jpg" alt="Association Enfants Soleil">
      </div>
      <div class="project-content">
        <h2 class="project-card-title">Association Enfants Soleil</h2>
        <h3 class="project-card-subtitle">En partenariat depuis 2024</h3>
        <ul class="project-card-features">
          <li>Lieu: Dakar, Mbour, Thies, Velingara, Kaolack, Saint-Louis</li>
          <li>Période de mission: Octobre à juin</li>
          <li>Durée: Deux mois minimum</li>
          <li>Profil recherché: Psychomotricien.ne D.E.</li>
        </ul>
        <p class="project-card-description">
          L'Association Enfants Soleil œuvre pour l'inclusion et l'accompagnement des enfants en situation de handicap dans plusieurs régions du Sénégal. Notre partenariat permet d'apporter une expertise psychomotrice dans leurs différents centres d'accueil.
        </p>
      </div>
    </div>

    <!-- Project 3: Image on left, content on right -->
    <div class="project-item">
      <div class="project-image">
        <img src="{{ site.baseurl }}/images/image_mdr.jpg" alt="La Maison Des Rois">
      </div>
      <div class="project-content">
        <h2 class="project-card-title">La Maison Des Rois</h2>
        <h3 class="project-card-subtitle">En partenariat depuis 2024</h3>
        <ul class="project-card-features">
          <li>Lieu: Pout</li>
          <li>Période de mission: Toute l'année</li>
          <li>Durée: Deux mois minimum</li>
          <li>Profil recherché: Psychomotricien.ne D.E.</li>
        </ul>
        <p class="project-card-description">
          La Maison Des Rois est un centre d'accueil spécialisé situé à Pout qui accompagne des enfants en situation de polyhandicap. Notre collaboration permet d'intégrer des approches psychomotrices innovantes dans leur programme d'accompagnement thérapeutique et éducatif.
        </p>
      </div>
    </div>
  </div>
</div>