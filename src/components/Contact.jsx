import './css/contact.css'
import { LightSpeed, Bounce } from 'react-reveal';

const Contact = () => {
    return ( 
        <div className="contact__form">
            <div className="contact__container">
                <div className="contact__header">
                                        
                <Bounce left>
                    <h2>Let's talk</h2>
                    <p>Have a question? or Just want to say hi?</p>                     
                </Bounce>
                </div>
                <label>Name</label>
                <Bounce left delay={350}>
                <input type="text" placeholder="Snail Man" />
                </Bounce>
                <label>Email</label>
                <Bounce left delay={450}>
                    <input type="email" placeholder="snail@something.com" />
                </Bounce>
                <label>Message</label>
                <Bounce left delay={570}>
                    <textarea
                    name="message"
                    placeholder="Your question, feedback or message goes here"
                    ></textarea>
                </Bounce>
                <LightSpeed delay={600}>
                <div className="submit__btn">
                    <button>Submit</button>
                </div>
                </LightSpeed>
                <Bounce>
                    <span className="projects__footer"
                    >or just contact me directly at
                    <span>
                        <a
                        href="mailto:reydel321@gmail.com"
                        target="_blank"
                        className="projects__footer__github"
                        rel='noreferrer'
                        > reydel@snail.com</a
                        ></span></span>
                                        
                </Bounce>
            </div>
    </div>
     );
}
 
export default Contact;