// ===== BRAINTUBE NEURAL CANVAS ENGINE =====
// Creates the scrollytelling neural network animation

class NeuralCanvas {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.connections = [];
    this.scrollProgress = 0;
    this.phase = 'sphere'; // sphere, explode, assemble
    this.mouse = { x: 0, y: 0 };
    this.center = { x: 0, y: 0 };
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.animFrame = null;
    this.moduleLabels = [
      'Notes', 'PYQs', 'AI Tutor', 'Formulas',
      'Algorithms', 'Revision', 'Subjects', 'Concepts',
      'Diagrams', 'Solutions', 'Syllabus', 'Lab Manual'
    ];

    this.resize();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = this.width + 'px';
    this.canvas.style.height = this.height + 'px';
    this.ctx.scale(this.dpr, this.dpr);
    this.center = { x: this.width / 2, y: this.height / 2 };
  }

  createParticles() {
    this.particles = [];
    const count = window.innerWidth < 768 ? 60 : 120;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const radius = 120 + Math.random() * 40;

      this.particles.push({
        // Sphere positions
        sx: Math.sin(phi) * Math.cos(angle) * radius,
        sy: Math.sin(phi) * Math.sin(angle) * radius,
        sz: Math.cos(phi) * radius,
        // Exploded positions
        ex: (Math.random() - 0.5) * this.width * 0.7,
        ey: (Math.random() - 0.5) * this.height * 0.6,
        // Current positions
        x: 0,
        y: 0,
        z: 0,
        // Properties
        size: 1.5 + Math.random() * 2,
        alpha: 0.3 + Math.random() * 0.7,
        pulseSpeed: 0.5 + Math.random() * 2,
        pulseOffset: Math.random() * Math.PI * 2,
        label: i < this.moduleLabels.length ? this.moduleLabels[i] : null,
        isModule: i < this.moduleLabels.length,
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createParticles();
    });

    window.addEventListener('mousemove', (e) => {
      this.mouse.x = (e.clientX / this.width - 0.5) * 2;
      this.mouse.y = (e.clientY / this.height - 0.5) * 2;
    });
  }

  setProgress(progress) {
    this.scrollProgress = Math.max(0, Math.min(1, progress));
  }

  update(time) {
    const t = time * 0.001;
    const p = this.scrollProgress;

    // Phase transitions
    // 0-0.15: Sphere (hero)
    // 0.15-0.65: Explode (features)
    // 0.65-1.0: Reassemble (CTA)

    const rotY = t * 0.3 + this.mouse.x * 0.2;
    const rotX = this.mouse.y * 0.15;

    this.particles.forEach((particle, i) => {
      let targetX, targetY;

      if (p < 0.15) {
        // SPHERE phase - rotating sphere
        const cosY = Math.cos(rotY);
        const sinY = Math.sin(rotY);
        const cosX = Math.cos(rotX);
        const sinX = Math.sin(rotX);

        const x1 = particle.sx * cosY - particle.sz * sinY;
        const z1 = particle.sx * sinY + particle.sz * cosY;
        const y1 = particle.sy * cosX - z1 * sinX;

        targetX = this.center.x + x1;
        targetY = this.center.y + y1;
        particle.z = z1;

      } else if (p < 0.65) {
        // EXPLODE phase - spread out
        const explodeT = (p - 0.15) / 0.5;
        const easeT = 1 - Math.pow(1 - Math.min(explodeT, 1), 3);

        const cosY = Math.cos(rotY * 0.3);
        const sinY = Math.sin(rotY * 0.3);
        const x1 = particle.sx * cosY - particle.sz * sinY;
        const y1 = particle.sy;

        const sphereX = this.center.x + x1;
        const sphereY = this.center.y + y1;
        const explodeX = this.center.x + particle.ex;
        const explodeY = this.center.y + particle.ey;

        targetX = sphereX + (explodeX - sphereX) * easeT;
        targetY = sphereY + (explodeY - sphereY) * easeT;
        particle.z = 0;

        // Float animation when exploded
        if (explodeT > 0.5) {
          targetY += Math.sin(t * particle.pulseSpeed + particle.pulseOffset) * 8;
        }

      } else {
        // REASSEMBLE phase - come back together as brain
        const reassembleT = (p - 0.65) / 0.35;
        const easeT = reassembleT * reassembleT * (3 - 2 * reassembleT);

        const explodeX = this.center.x + particle.ex;
        const explodeY = this.center.y + particle.ey;

        const cosY2 = Math.cos(rotY * 0.5);
        const sinY2 = Math.sin(rotY * 0.5);
        const x2 = particle.sx * cosY2 - particle.sz * sinY2;
        const y2 = particle.sy;

        const brainX = this.center.x + x2 * 1.2;
        const brainY = this.center.y + y2 * 1.2;

        targetX = explodeX + (brainX - explodeX) * easeT;
        targetY = explodeY + (brainY - explodeY) * easeT;
        particle.z = 0;
      }

      // Smooth interpolation
      particle.x += (targetX - particle.x) * 0.08;
      particle.y += (targetY - particle.y) * 0.08;
    });
  }

  draw(time) {
    const t = time * 0.001;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // Draw connections
    const connectionDistance = this.scrollProgress > 0.15 && this.scrollProgress < 0.65 ? 150 : 100;
    
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectionDistance) {
          const alpha = (1 - dist / connectionDistance) * 0.15;
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(0, 150, 255, ${alpha})`;
          this.ctx.lineWidth = 0.5;
          this.ctx.stroke();
        }
      }
    }

    // Draw particles
    this.particles.forEach((p, i) => {
      const pulse = Math.sin(t * p.pulseSpeed + p.pulseOffset) * 0.3 + 0.7;
      const depthAlpha = p.z !== undefined ? (p.z + 200) / 400 : 1;
      const alpha = p.alpha * pulse * Math.max(0.3, depthAlpha);

      // Glow
      const glowSize = p.isModule ? 20 : 8;
      const gradient = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowSize);
      gradient.addColorStop(0, `rgba(0, 130, 255, ${alpha * 0.5})`);
      gradient.addColorStop(0.5, `rgba(0, 200, 255, ${alpha * 0.15})`);
      gradient.addColorStop(1, 'rgba(0, 130, 255, 0)');
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(p.x - glowSize, p.y - glowSize, glowSize * 2, glowSize * 2);

      // Dot
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.isModule ? p.size * 1.5 : p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = p.isModule
        ? `rgba(0, 214, 255, ${alpha})`
        : `rgba(100, 180, 255, ${alpha})`;
      this.ctx.fill();

      // Module labels (only during explode phase)
      if (p.label && this.scrollProgress > 0.2 && this.scrollProgress < 0.85) {
        const labelAlpha = Math.min(1, (this.scrollProgress - 0.2) / 0.1) *
                          (this.scrollProgress < 0.75 ? 1 : Math.max(0, 1 - (this.scrollProgress - 0.75) / 0.1));
        this.ctx.font = '500 11px Inter, sans-serif';
        this.ctx.fillStyle = `rgba(255, 255, 255, ${labelAlpha * 0.7})`;
        this.ctx.textAlign = 'center';
        this.ctx.fillText(p.label, p.x, p.y + p.size + 18);
      }
    });

    // Central glow during reassembly
    if (this.scrollProgress > 0.8) {
      const glowAlpha = (this.scrollProgress - 0.8) / 0.2;
      const gradient = this.ctx.createRadialGradient(
        this.center.x, this.center.y, 0,
        this.center.x, this.center.y, 200
      );
      gradient.addColorStop(0, `rgba(0, 80, 255, ${glowAlpha * 0.15})`);
      gradient.addColorStop(0.5, `rgba(0, 214, 255, ${glowAlpha * 0.05})`);
      gradient.addColorStop(1, 'rgba(0, 80, 255, 0)');
      this.ctx.fillStyle = gradient;
      this.ctx.fillRect(0, 0, this.width, this.height);
    }
  }

  animate(time = 0) {
    this.update(time);
    this.draw(time);
    this.animFrame = requestAnimationFrame((t) => this.animate(t));
  }

  destroy() {
    cancelAnimationFrame(this.animFrame);
  }
}

// Export for use
window.NeuralCanvas = NeuralCanvas;
