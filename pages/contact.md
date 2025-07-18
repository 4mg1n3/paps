---
layout: page
title: Contact
permalink: /contact/
---

<style>
.contact-page { max-width: 800px; margin: 0 auto; padding: 2rem; }
.contact-header { text-align: center; margin-bottom: 3rem; }
.contact-header h1 { font-size: 2.5rem; color: #1a1e22; margin: 0 0 1rem; }
.contact-header p { font-size: 1.1rem; color: #606669; line-height: 1.6; }
.contact-content { display: flex; flex-direction: column; gap: 3rem; }
.contact-form-section h2, .contact-info-section h2 { font-size: 1.6rem; color: #1a1e22; margin: 0 0 1.5rem; padding-bottom: 0.5rem; border-bottom: 3px solid #d3ccad; }
.contact-form { background: #e4bfa6; padding: 2.5rem; border-radius: 12px; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); }
.form-group { margin-bottom: 1.8rem; }
.form-group label { display: block; font-weight: bold; color: #1a1e22; margin-bottom: 0.5rem; font-size: 1rem; }
.form-group input, .form-group select, .form-group textarea { width: 100%; padding: 18px 22px; border: 2px solid transparent; border-radius: 8px; font-size: 1.1rem; background: #fff; transition: all 0.3s ease; font-family: inherit; min-height: 52px; box-sizing: border-box; }
.form-group input:focus, .form-group select:focus, .form-group textarea:focus { outline: none; border-color: #777158; box-shadow: 0 0 0 3px rgba(119, 113, 88, 0.1); }
.form-group textarea { resize: vertical; min-height: 140px; }
.submit-btn { background: #777158; color: #fff; border: none; padding: 18px 36px; border-radius: 8px; font-size: 1.1rem; font-weight: bold; cursor: pointer; transition: all 0.3s ease; display: inline-flex; align-items: center; gap: 8px; width: 100%; justify-content: center; }
.submit-btn:hover { background: #606669; transform: translateY(-2px); box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); }
.contact-item { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 1.5rem; padding: 1.5rem; background: #e4bfa6; border-radius: 8px; transition: transform 0.3s ease; }
.contact-item:hover { transform: translateY(-2px); }
.contact-icon { flex-shrink: 0; width: 48px; height: 48px; background: #777158; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; }
.contact-details h3 { font-size: 1.2rem; color: #1a1e22; margin: 0 0 0.5rem; }
.contact-details p { margin: 0; color: #30373d; line-height: 1.5; }
.contact-details a { color: #777158; text-decoration: none; font-weight: bold; }
.contact-details a:hover { color: #606669; text-decoration: underline; }
.social-contact { background: #e4bfa6; padding: 1.5rem; border-radius: 8px; margin-top: 1rem; }
.social-contact h3 { font-size: 1.2rem; color: #1a1e22; margin: 0 0 1rem; }
.social-links-contact { display: flex; flex-direction: column; gap: 12px; }
.social-links-contact a { display: flex; align-items: center; gap: 12px; color: #777158; text-decoration: none; font-weight: bold; padding: 8px 12px; border-radius: 6px; transition: all 0.3s ease; }
.social-links-contact a:hover { background: rgba(119, 113, 88, 0.1); color: #606669; transform: translateX(5px); }
@media (max-width: 768px) { .contact-page { padding: 1rem; } .contact-form { padding: 1.5rem; } .contact-header h1 { font-size: 2rem; } }
</style>

<div class="contact-page">
    <header class="contact-header">
        <h1>Contactez-nous</h1>
        <p>N'hésitez pas à nous contacter pour toute question concernant nos projets ou la psychomotricité au Sénégal.</p>
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
                        <option value="Demande d'information - PAPS">Demande d'information</option>
                        <option value="Proposition de collaboration - PAPS">Proposition de collaboration</option>
                        <option value="Soutenir l'association - PAPS">Soutenir l'association</option>
                        <option value="Autre demande - PAPS">Autre</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="message">Message *</label>
                    <textarea id="message" name="message" rows="6" required placeholder="Décrivez votre demande ou votre message..."></textarea>
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
                        <p><a href="mailto:asso.paps@gmail.com">asso.paps@gmail.com</a></p>
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
                        <p>Nantes, France<br>
                        <small></small></p>
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