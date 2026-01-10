import "./Lower.css";

function Lower() {
  return (
    <div className="lower-page">
      {/* ===== HERO SECTION ===== */}
      <section className="lower-hero">
        <h1>Miracle Destiny School</h1>
        <p>Nursery & Primary Section</p>
      </section>

      {/* ===== INTRO ===== */}
      <section className="lower-section">
        <h2>Welcome</h2>
        <p>
          Welcome to the Nursery and Primary School section of Miracle Destiny
          School. We are committed to nurturing young learners in a safe,
          caring, and supportive environment that inspires a love for learning
          and strong moral values.
        </p>
      </section>

      {/* ===== VALUES ===== */}
      <section className="lower-section">
        <h2>Our Core Values</h2>
        <p>
          At Miracle Destiny School, our foundation is built on academic
          excellence guided by our motto of imparting wisdom that comes from
          heaven — wisdom that is pure, peace-loving, considerate, submissive,
          full of mercy and good fruit, impartial and sincere.
        </p>

        <ul className="values-list">
          <li>Academic Excellence</li>
          <img className='img' src="images (5).jpg" alt="praying"></img>
          <li>Discipline and Integrity</li>
          <img  className='img' src="exercise.jpeg" alt="praying"></img>
          <li>Moral and Spiritual Growth</li>
          <img className='img' src="download (1).jpg" alt="praying"></img>
          <li>Respect and Responsibility</li>
          <img  className='img' src="images (2).jpg" alt="praying"></img>
        </ul>
      </section>

      {/* ===== CURRICULUM ===== */}
      <section className="lower-section">
        <h2>Curriculum</h2>
        <ul className="curriculum-list">
          <li>Early Childhood Development Learning Framework</li>
          <li>National Primary Curriculum</li>
          <li>Strong foundations in Literacy and Numeracy</li>
          <li>Computer Studies and Digital Skills</li>
          <li>Languages: English, Swahili & French</li>
        </ul>
      </section>

      {/* ===== CO-CURRICULAR ===== */}
      <section className="lower-section">
        <h2>Co-Curricular Activities</h2>
        <p>
          We encourage holistic development through a wide range of
          co-curricular activities that nurture talents, teamwork, and
          confidence.
        </p>

        <ul className="activities-list">
          <li>Sports and Physical Education</li>
          <li>Music, Dance and Drama</li>
          <li>Clubs and Educational Trips</li>
          <li>Creative Arts and Innovation</li>
        </ul>
      </section>

      {/* ===== FOOTER NOTE ===== */}
      <section className="lower-footer">
        <p>
          Miracle Destiny School — Imparting Wisdom, Shaping Destinies.
        </p>
      </section>
    </div>
  );
}

export default Lower;
