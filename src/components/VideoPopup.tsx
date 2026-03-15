import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const VideoPopup = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    // Check if the popup has been shown in this session
    const hasBeenShown = sessionStorage.getItem('videoPopupShown');
    
    if (!hasBeenShown) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  React.useEffect(() => {
    if (isVisible && videoRef.current) {
      // Primary attempt: Play with sound
      videoRef.current.muted = false;
      videoRef.current.volume = 1;
      
      videoRef.current.play().catch((error) => {
        console.log("Unmuted autoplay blocked by browser, playing muted as fallback:", error);
        // Fallback to muted so the video at least starts playing visually
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(console.error);
        }
      });
    }
  }, [isVisible]);

  // Invisible Sound Unlocker: Unmutes the video as soon as the user interacts with the page
  React.useEffect(() => {
    const unlockAudio = () => {
      if (videoRef.current && videoRef.current.muted) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', unlockAudio);
    window.addEventListener('touchstart', unlockAudio);
    window.addEventListener('keydown', unlockAudio);

    return () => {
      window.removeEventListener('click', unlockAudio);
      window.removeEventListener('touchstart', unlockAudio);
      window.removeEventListener('keydown', unlockAudio);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('videoPopupShown', 'true');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-[2px]"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-4xl bg-black aspect-video shadow-2xl border border-white/10 overflow-hidden rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/40 p-2 rounded-full backdrop-blur-md transition-colors group"
            >
              <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            <div className="w-full h-full">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="assets/popupVideo/popupVideo.MP4"
                loop
                playsInline
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/50 mb-2 block">
                The Experience
              </span>
              <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">
                Welcome to <span className="italic font-serif font-light lowercase">Xavaroo</span>
              </h2>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
