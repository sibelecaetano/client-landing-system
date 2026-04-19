import React from "react";
import { Heart, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";
import Cadastroemail from "./Cadastroemail";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.container}>

        {/* NEWSLETTER */}
        <div className={styles.newsletterSection}>
          <Cadastroemail />
        </div>

        {/* COLUNAS */}
        <div className={styles.columnsWrapper}>

          {/* COLUNA 1 */}
          <div className={styles.column}>
            <div className={styles.logoSection}>
              <Heart className={styles.heartIcon} size={28} />
              <h2 className={styles.logoTitle}>Instituto Ver&Viver</h2>
            </div>

            <p className={styles.bioText}>
              Promovendo inclusão, cuidado e transformação social através de ações comunitárias.
            </p>

            {/* REDES SOCIAIS */}
            <div className={styles.socials}>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>

              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://wa.me/5585999832504"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2 */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contato</h3>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={18} />
                <a
                  href="tel:+5585999832504"
                  aria-label="Ligar para o Instituto"
                  className={styles.link}
                >
                  (85) 9 9983-2504
                </a>
              </div>

              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={18} />
                <a
                  href="mailto:projetosocialvereviver01@gmail.com"
                  aria-label="Enviar email"
                  className={styles.link}
                >
                  projetosocialvereviver01@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* COLUNA 3 */}
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Links Rápidos</h3>

            <ul className={styles.linksList}>
              <li><a href="#sobre" className={styles.link}>Sobre o Instituto</a></li>
              <li><a href="#missao-visao-valores" className={styles.link}>Missão, Visão e Valores</a></li>
              <li><a href="#servicos" className={styles.link}>Nossos Serviços</a></li>
              <li><a href="#nossa-galeria" className={styles.link}>Galeria</a></li>
              <li><a href="#contato" className={styles.link}>Contato</a></li>
              <li><a href="/login" className={styles.link}>Painel Administrativo</a></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>© {currentYear} Instituto Ver&Viver</p>
            <p>
              Desenvolvido por <strong>ELSI Digital</strong>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}