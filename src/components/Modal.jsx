import { useEffect } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div  className="fixed inset-0 z-1001 backdrop-blur-xs flex items-center justify-center bg-black/50 p-4" 
          onClick={onClose}>
      <div className="bg-[#FBF9F9] flex flex-col items-center justify-center rounded-[16px] max-w-2xl w-full max-h-[80vh] overflow-hidden py-10 px-8" 
           onClick={(e) => e.stopPropagation()}>
        <div className="p-6 bg-white overflow-y-auto h-[452px] rounded-[16px]">
          {children}
        </div>
        <button onClick={onClose} className="p-4 w-[300px] hover:bg-[#05444F] text-white text-[20px] font-medium leading-[125%] 
                                             cursor-pointer bg-[#02302A] rounded-[16px] transition mt-10">
          Закрити
        </button>
      </div>
    </div>
  );
};

export default Modal;