import { Link } from 'react-router-dom';


const Landingpage = () => {
  return (
    
      <div>
      <main>
        <section className="hero">
     
	    
	 <img src={require('./images/img1.jpg')} />
	    
	   <p>A fun and interactive way for kids to learn and grow together is essential in today’s digital age. By engaging children with educational content in a playful and stimulating environment, we can foster a love for learning that lasts a lifetime. This approach not only makes education more enjoyable but also helps in developing crucial social and collaborative skills. Through interactive activities, games, and challenges, children are encouraged to work together, exchange ideas, and learn from one another, which enhances their overall learning experience and builds a sense of community.</p>
	<img src={require('./images/img3.png')} />
<p>A web application designed for this purpose allows users to create, share, and collaborate on various learning resources, making education a more dynamic and personalized experience. Users can generate notes, quizzes, and flashcards tailored to their individual learning needs and preferences. This flexibility ensures that each child can learn at their own pace and in their preferred style, making the educational process more effective and enjoyable. The platform can incorporate multimedia elements such as videos, images, and audio to make the learning materials more engaging and easier to understand.</p>
	<img src={require('./images/img2.png')} />
<p>Collaboration is at the heart of this web application, enabling children to work together on projects and study groups. They can share their learning resources with peers, provide feedback, and help each other understand difficult concepts. This collaborative environment not only improves academic performance but also teaches valuable life skills such as communication, teamwork, and problem-solving. By fostering a supportive and interactive online community, the platform empowers kids to take charge of their education and develop a lifelong passion for learning.</p>
	<Link to="/Signup"> 
		<button className="landingButton">Get Started</button>
        </Link>
        </section>
	
        
      </main>
      
      <footer>
        <p>&copy; 2024 BCE StudyLite. All rights reserved.</p>
      </footer>
    </div>
 
  );
};

export default Landingpage;


