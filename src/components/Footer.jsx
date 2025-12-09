import { useState } from 'react';
import footerLogo from '../assets/images/logo--footer.svg';
import Modal from './Modal';
import { termsOfService, privacyPolicy } from '../data/legalTexts';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (type) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <footer className="footer py-14 max-md:py-11">
      <div className="footer__container flex flex-col items-center gap-2">
        <img className="h-4" src={footerLogo} alt="Healthy mind logo" />
        <div className="flex gap-[14px] max-md:flex-col max-md:gap-2">
          <button className="text-white text-[14px] leading-[125%] hover:underline" onClick={() => openModal('terms')}>
            Умови використання
          </button>
          <button className="text-white text-[14px] leading-[125%] hover:underline" onClick={() => openModal('privacy')}>
            Політика конфіденційності
          </button>
        </div>
        © 2025 Healthy Mind. Розроблено в Україні з любов'ю 🇺🇦
      </div>

      <Modal isOpen={activeModal === 'terms'} onClose={closeModal} title="Умови використання">
        {termsOfService}
      </Modal>

      <Modal isOpen={activeModal === 'privacy'} onClose={closeModal} title="Політика конфіденційності">
        {privacyPolicy}
      </Modal>
    </footer>
  );
};

export default Footer;