import React, { useEffect } from 'react';
import '../styles/PreHistoricEra.css';

const PreHistoricEra = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    // Apply observer to sections
    document.querySelectorAll('.preh-era-section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="preh-era-root">
      <div className="preh-era-header">
        <div className="preh-era-container">
          <h1 className="preh-era-title">The Prehistoric Era</h1>
          <p className="preh-era-subtitle">Dawn of Human Civilization</p>
        </div>
      </div>

      <div className="preh-era-nav">
        <div className="preh-era-container">
          <div className="preh-era-nav-links">
            <a href="#introduction">Introduction</a>
            <a href="#stages">Major Stages</a>
            <a href="#achievements">Key Achievements</a>
            <a href="#relevance">Modern Relevance</a>
          </div>
        </div>
      </div>

      <div className="preh-era-container preh-era-main">
        <div id="introduction" className="preh-era-section">
          <h2 className="preh-era-section-title">Introduction to Prehistory</h2>
          
          <div className="preh-era-image-gallery">
            <div className="preh-era-image-card">
              <div className="preh-era-image-placeholder"><img src='images/cave.jpeg'></img></div>
              <div className="preh-era-image-caption">Lascaux Cave paintings showing early human artistic expression, dating back 17,000 years</div>
            </div>
            <div className="preh-era-image-card">
              <div className="preh-era-image-placeholder"><img src='images/stone_tools.jpeg'></img></div>
              <div className="preh-era-image-caption">Evolution of stone tools from simple choppers to sophisticated hand axes</div>
            </div>
          </div>

          <p className="preh-era-paragraph">The Prehistoric era encompasses the vast span of human existence before the invention of writing systems, roughly from the emergence of the first hominins around 7 million years ago to the development of writing around 3200 BCE. This immense period represents over 99% of human history and witnessed the most fundamental developments in human evolution, culture, and technology.</p>

          <p className="preh-era-paragraph">During this era, our ancestors evolved from early hominins in Africa to modern humans who spread across the globe, developing language, art, religion, agriculture, and the foundations of civilization. The prehistoric period is traditionally divided into the Stone Age (with its Paleolithic, Mesolithic, and Neolithic subdivisions), Bronze Age, and Iron Age, each marked by distinctive technological and cultural achievements.</p>

          <p className="preh-era-paragraph">Understanding prehistory is crucial because it reveals the deep roots of human behavior, the origins of our most basic technologies, and the environmental and social challenges that shaped our species. Archaeological evidence from this period provides insights into human migration patterns, early social structures, artistic expression, and the gradual transformation from hunter-gatherer societies to agricultural communities that laid the groundwork for modern civilization.</p>
        </div>

        <div id="stages" className="preh-era-section">
          <h2 className="preh-era-section-title">Major Stages of Prehistory</h2>

          <div className="preh-era-timeline">
            <div className="preh-era-timeline-item">
              <div className="preh-era-timeline-date">7 million - 2.6 million years ago</div>
              <h3 className="preh-era-subheading">Early Hominins</h3>
              <p className="preh-era-paragraph">The first upright-walking ancestors emerge in Africa, including Sahelanthropus, Australopithecus, and other early hominins. Bipedalism develops as a key adaptation to changing African environments.</p>
            </div>

            <div className="preh-era-timeline-item">
              <div className="preh-era-timeline-date">2.6 million - 300,000 years ago</div>
              <h3 className="preh-era-subheading">Lower Paleolithic</h3>
              <p className="preh-era-paragraph">Homo habilis and later Homo erectus develop the first stone tools. Fire is controlled, and humans begin migrating out of Africa. The Acheulean hand axe becomes a widespread tool technology.</p>
            </div>

            <div className="preh-era-timeline-item">
              <div className="preh-era-timeline-date">300,000 - 30,000 years ago</div>
              <h3 className="preh-era-subheading">Middle Paleolithic</h3>
              <p className="preh-era-paragraph">Neanderthals and early modern humans develop sophisticated tool technologies like the Levallois technique. Evidence of symbolic behavior, burial practices, and possibly early language emerges.</p>
            </div>

            <div className="preh-era-timeline-item">
              <div className="preh-era-timeline-date">50,000 - 12,000 years ago</div>
              <h3 className="preh-era-subheading">Upper Paleolithic</h3>
              <p className="preh-era-paragraph">Modern humans spread globally and develop complex cultures. Cave art, sophisticated tools, jewelry, and musical instruments appear. The cognitive revolution transforms human society.</p>
            </div>

            <div className="preh-era-timeline-item">
              <div className="preh-era-timeline-date">12,000 - 8,000 years ago</div>
              <h3 className="preh-era-subheading">Mesolithic</h3>
              <p className="preh-era-paragraph">As the Ice Age ends, humans adapt to new environments. Microliths, composite tools, and more sophisticated hunting and gathering strategies develop. Early signs of plant and animal domestication appear.</p>
            </div>

            <div className="preh-era-timeline-item">
              <div className="preh-era-timeline-date">10,000 - 4,000 years ago</div>
              <h3 className="preh-era-subheading">Neolithic Revolution</h3>
              <p className="preh-era-paragraph">Agriculture and animal domestication transform human society. Permanent settlements, pottery, polished stone tools, and the first complex societies emerge. Population growth accelerates dramatically.</p>
            </div>

            <div className="preh-era-timeline-item">
              <div className="preh-era-timeline-date">3,500 - 1,200 years ago</div>
              <h3 className="preh-era-subheading">Bronze & Iron Ages</h3>
              <p className="preh-era-paragraph">Metallurgy revolutionizes tools and weapons. Complex civilizations, social hierarchies, trade networks, and the first writing systems emerge, marking the end of prehistory.</p>
            </div>
          </div>

          <div className="preh-era-image-gallery">
            <div className="preh-era-image-card">
              <div className="preh-era-image-placeholder"><img src='images/prehistoric_map.jpeg'></img></div>
              <div className="preh-era-image-caption">Global human migration patterns showing the spread of Homo sapiens from Africa</div>
            </div>
            <div className="preh-era-image-card">
              <div className="preh-era-image-placeholder"><img src='images/neolithic.jpeg'></img></div>
              <div className="preh-era-image-caption">Reconstruction of Çatalhöyük, one of the world's first major settlements</div>
            </div>
            <div className="preh-era-image-card">
              <div className="preh-era-image-placeholder"><img src='images/bronze_age.jpeg'></img></div>
              <div className="preh-era-image-caption">Bronze weapons and tools showing advances in metallurgy</div>
            </div>
          </div>
        </div>

        <div id="achievements" className="preh-era-section">
          <h2 className="preh-era-section-title">Key Achievements of Prehistoric Humans</h2>

          <div className="preh-era-achievements-grid">
            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">🔥</span>
              <div className="preh-era-achievement-title">Control of Fire</div>
              <p className="preh-era-paragraph">Mastery of fire around 1.8 million years ago revolutionized cooking, extended daylight hours, provided protection, and enabled expansion into colder climates.</p>
            </div>

            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">🪨</span>
              <div className="preh-era-achievement-title">Stone Tool Technology</div>
              <p className="preh-era-paragraph">Development of increasingly sophisticated stone tools, from simple choppers to complex composite tools, demonstrating growing cognitive abilities and technical skills.</p>
            </div>

            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">🗣️</span>
              <div className="preh-era-achievement-title">Language Development</div>
              <p className="preh-era-paragraph">Evolution of complex language systems enabled sophisticated communication, cultural transmission, and coordination of group activities.</p>
            </div>

            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">🎨</span>
              <div className="preh-era-achievement-title">Artistic Expression</div>
              <p className="preh-era-paragraph">Cave paintings, sculptures, jewelry, and musical instruments demonstrate the development of symbolic thinking and aesthetic sensibilities.</p>
            </div>

            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">🌾</span>
              <div className="preh-era-achievement-title">Agricultural Revolution</div>
              <p className="preh-era-paragraph">Independent development of agriculture in multiple regions led to food surpluses, permanent settlements, and population growth.</p>
            </div>

            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">🏺</span>
              <div className="preh-era-achievement-title">Pottery and Ceramics</div>
              <p className="preh-era-paragraph">Invention of pottery revolutionized food storage, cooking methods, and artistic expression, marking a major technological advancement.</p>
            </div>

            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">⚒️</span>
              <div className="preh-era-achievement-title">Metallurgy</div>
              <p className="preh-era-paragraph">Development of copper, bronze, and iron working techniques produced superior tools and weapons, spurring technological and social progress.</p>
            </div>

            <div className="preh-era-achievement-card">
              <span className="preh-era-achievement-icon">🏘️</span>
              <div className="preh-era-achievement-title">Complex Societies</div>
              <p className="preh-era-paragraph">Formation of organized communities with social hierarchies, specialized roles, trade networks, and early forms of governance.</p>
            </div>
          </div>

          <h3 className="preh-era-subheading">Technological Innovations</h3>
          <p className="preh-era-paragraph">Prehistoric humans demonstrated remarkable ingenuity in developing technologies that solved fundamental survival challenges. The progression from simple stone choppers to sophisticated composite tools reflects growing cognitive abilities and cultural learning. The development of techniques like pressure flaking, heat treatment of stones, and the creation of hafted tools shows increasing technical sophistication.</p>

          <h3 className="preh-era-subheading">Social and Cultural Developments</h3>
          <p className="preh-era-paragraph">Beyond material culture, prehistoric humans developed complex social structures, belief systems, and cultural practices. Evidence of ritual behavior, burial customs, and artistic expression indicates the emergence of symbolic thinking and shared cultural meanings that bind communities together. These developments laid the foundation for all subsequent human civilizations.</p>
        </div>

        <div id="relevance" className="preh-era-section">
          <h2 className="preh-era-section-title">Why Prehistory Matters Today</h2>

          <div className="preh-era-relevance-grid">
            <div className="preh-era-relevance-item">
              <h3 className="preh-era-subheading">Understanding Human Nature</h3>
              <p className="preh-era-paragraph">Prehistoric studies reveal the deep evolutionary roots of human behavior, cooperation, and social organization that still influence us today.</p>
            </div>

            <div className="preh-era-relevance-item">
              <h3 className="preh-era-subheading">Environmental Lessons</h3>
              <p className="preh-era-paragraph">How prehistoric humans adapted to climate change and environmental challenges offers insights for addressing modern environmental issues.</p>
            </div>

            <div className="preh-era-relevance-item">
              <h3 className="preh-era-subheading">Innovation and Problem-Solving</h3>
              <p className="preh-era-paragraph">The creative solutions developed by prehistoric humans demonstrate the power of human ingenuity in overcoming seemingly impossible challenges.</p>
            </div>

            <div className="preh-era-relevance-item">
              <h3 className="preh-era-subheading">Cultural Diversity</h3>
              <p className="preh-era-paragraph">Prehistoric cultures show the remarkable diversity of human societies and the many different ways humans have organized their communities.</p>
            </div>

            <div className="preh-era-relevance-item">
              <h3 className="preh-era-subheading">Health and Diet</h3>
              <p className="preh-era-paragraph">Understanding prehistoric diets and lifestyles provides insights into human nutrition and health that inform modern medical research.</p>
            </div>

            <div className="preh-era-relevance-item">
              <h3 className="preh-era-subheading">Art and Creativity</h3>
              <p className="preh-era-paragraph">Prehistoric art reveals that creativity and aesthetic expression are fundamental aspects of human nature, not modern luxuries.</p>
            </div>
          </div>

          <h3 className="preh-era-subheading">Modern Applications</h3>
          <p className="preh-era-paragraph">Archaeological insights from prehistory inform contemporary fields ranging from psychology and anthropology to urban planning and environmental science. Understanding how early humans formed social groups helps us design better communities. Studying prehistoric diets contributes to nutritional research. Analysis of ancient tool-making techniques inspires modern materials science and engineering.</p>

          <h3 className="preh-era-subheading">Preserving Our Heritage</h3>
          <p className="preh-era-paragraph">Prehistoric sites and artifacts represent irreplaceable records of human heritage. Their preservation is crucial not only for scientific research but also for maintaining cultural continuity and understanding our shared human story. Modern threats like climate change, development, and looting make the protection of prehistoric sites more urgent than ever.</p>

          <div className="preh-era-image-gallery">
            <div className="preh-era-image-card">
              <div className="preh-era-image-placeholder"><img src='images/exacavation.jpeg'></img></div>
              <div className="preh-era-image-caption">Modern archaeologists uncovering prehistoric remains using advanced scientific techniques</div>
            </div>
            <div className="preh-era-image-card">
              <div className="preh-era-image-placeholder"><img src='images/dna_research.jpeg'></img></div>
              <div className="preh-era-image-caption">Ancient DNA analysis revealing migration patterns and genetic relationships</div>
            </div>
          </div>

          <h3 className="preh-era-subheading">Future Discoveries</h3>
          <p className="preh-era-paragraph">New technologies like ground-penetrating radar, satellite imagery, and ancient DNA analysis continue to revolutionize our understanding of prehistory. Each year brings remarkable discoveries that rewrite textbooks and reveal new aspects of our ancient past. The story of prehistory is far from complete, and future findings will undoubtedly continue to surprise and illuminate the remarkable journey of human development.</p>
        </div>
      </div>
    </div>
  );
};

export default PreHistoricEra;