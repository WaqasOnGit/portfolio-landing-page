
      function toggleFaq(index) {
        const faqItems = document.querySelectorAll('.bg-white.rounded-2xl');
        const faqContent = faqItems[index].querySelector('.faq-content');
        const faqIcon = faqItems[index].querySelector('.faq-icon');
        
        faqItems.forEach((item, i) => {
          if (i !== index) {
            item.querySelector('.faq-content').classList.add('hidden');
            item.querySelector('.faq-icon').textContent = '+';
            item.querySelector('.faq-icon').classList.remove('text-[#25a4ad]');
            item.querySelector('.faq-icon').classList.add('text-[#555555]');
          }
        });
        
        if (faqContent.classList.contains('hidden')) {
          faqContent.classList.remove('hidden');
          faqIcon.textContent = '−';
          faqIcon.classList.remove('text-[#555555]');
          faqIcon.classList.add('text-[#25a4ad]');
        } else {
          faqContent.classList.add('hidden');
          faqIcon.textContent = '+';
          faqIcon.classList.remove('text-[#25a4ad]');
          faqIcon.classList.add('text-[#555555]');
        }
      }

      let currentTestimonial = 0;
      let testimonialInterval;

      function showTestimonial(index) {
        const testimonials = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.testimonial-dot');
        
        testimonials.forEach((slide) => {
          slide.classList.remove('active');
        });
        
        if (testimonials[index]) {
          testimonials[index].classList.add('active');
        }
        
        dots.forEach((dot, i) => {
          if (i === index) {
            dot.classList.add('bg-[#25a4ad]');
            dot.classList.remove('border-2', 'border-[#25a4ad]', 'bg-transparent');
          } else {
            dot.classList.remove('bg-[#25a4ad]');
            dot.classList.add('border-2', 'border-[#25a4ad]', 'bg-transparent');
          }
        });
        
        currentTestimonial = index;
      }

      function startTestimonialSlider() {
        testimonialInterval = setInterval(() => {
          const testimonials = document.querySelectorAll('.testimonial-slide');
          currentTestimonial = (currentTestimonial + 1) % testimonials.length;
          showTestimonial(currentTestimonial);
        }, 5000);
      }

      function initTestimonialSlider() {
        const testimonials = document.querySelectorAll('.testimonial-slide');
        if (testimonials.length > 0) {
          showTestimonial(0);
          startTestimonialSlider();
        }
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTestimonialSlider);
      } else {
        initTestimonialSlider();
      }
    