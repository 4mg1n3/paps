---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-page">
    <header class="contact-header">
        <h1>Contactez-nous</h1>
        <p>Nous serions ravis d'avoir de vos nouvelles. N'hésitez pas à nous contacter pour toute question concernant nos projets ou la psychomotricité au Sénégal.</p>
    </header>

    <div class="contact-content">
        <div class="contact-form-section">
            <h2>Envoyez-nous un message</h2>
            
            <!-- Formspree Form (perfect for GitHub Pages) -->
            <form action="https://formspree.io/f/mdkdojed" method="POST" class="contact-form">
                <!-- Hidden honeypot field for spam protection -->
                <input type="text" name="_gotcha" style="display:none" />
                
                <div class="form-group">
                    <label for="name">Nom complet *</label>
                    <input type="text" id="name" name="name" required>
                </div>
                
                <div class="form-group">
                    <label for="email">Adresse e-mail *</label>
                    <input type="email" id="email" name="_replyto" required>
                </div>
                
                <div class="form-group">
                    <label for="phone">Téléphone</label>
                    <input type="tel" id="phone" name="phone">
                </div>
                
                <div class="form-group">
                    <label for="subject">Sujet *</label>
                    <select id="subject" name="_subject" required>
                        <option value="">Choisissez un sujet</option>
                        <option value="Demande d'information - PAP'S">Demande d'information</option>
                        <option value="Proposition de collaboration - PAP'S">Proposition de collaboration</option>
                        <option value="Soutenir l'association - PAP'S">Soutenir l'association</option>
                        <option value="Formation en psychomotricité - PAP'S">Formation en psychomotricité</option>
                        <option value="Autre demande - PAP'S">Autre</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" rows="6" required placeholder="Décrivez votre demande ou votre message..."></textarea>
                </div>
                
                <div class="form-group checkbox-group">
                    <label class="checkbox-label">
                        <input type="checkbox" name="newsletter" value="Oui, je souhaite recevoir la newsletter">
                        <span class="checkmark"></span>
                        Je souhaite recevoir la newsletter de PAP'S
                    </label>
                </div>
                
                <!-- Hidden field to customize the thank you page -->
                <input type="hidden" name="_next" value="{{ site.baseurl }}/contact/?success=true">
                
                <button type="submit" class="submit-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                    Envoyer le message
                </button>
            </form>
        </div>
        
        <div class="contact-info-section">
            <h2>Autres moyens de nous contacter</h2>
            
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                        </svg>
                    </div>
                    <div class="contact-details">
                        <h3>E-mail</h3>
                        <p><a href="mailto:contact@assopaps.org">contact@assopaps.org</a></p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                        </svg>
                    </div>
                    <div class="contact-details">
                        <h3>Téléphone</h3>
                        <p><a href="tel:+221123456789">+221 12 345 67 89</a></p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <div class="contact-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                    </div>
                    <div class="contact-details">
                        <h3>Adresse</h3>
                        <p>Dakar, Sénégal<br>
                        <small>Adresse complète à préciser</small></p>
                    </div>
                </div>
            </div>
            
            <div class="social-contact">
                <h3>Suivez-nous</h3>
                <div class="social-links-contact">
                    {% if site.facebook_username %}
                    <a href="https://facebook.com/{{ site.facebook_username }}" target="_blank" rel="noopener">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                    </a>
                    {% endif %}
                    {% if site.instagram_username %}
                    <a href="https://instagram.com/{{ site.instagram_username }}" target="_blank" rel="noopener">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Instagram
                    </a>
                    {% endif %}
                    {% if site.linkedin_username %}
                    <a href="https://linkedin.com/company/{{ site.linkedin_username }}" target="_blank" rel="noopener">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                    </a>
                    {% endif %}
                </div>
            </div>
        </div>
    </div>
</div>