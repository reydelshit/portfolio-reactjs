import './css/contact.css'

const Contact = () => {
    return ( 
        <div className="contact__form">
            <div className="contact__container">
                <div className="contact__header">
                    <h2>Let's talk</h2>
                    <p>Have a question? or Just want to say hi?</p>
                </div>
                <label for="name">Name</label>
                    <input type="text" placeholder="Snail Man" />
                <label for="email">Email</label>
                    <input type="email" placeholder="snail@something.com" />
                <label for="message">Message</label>
                    <textarea
                    name="message"
                    placeholder="Your question, feedback or message goes here"
                    ></textarea>
                <div className="submit__btn">
                    <button>Submit</button>
                </div>
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
            </div>
    </div>
     );
}
 
export default Contact;