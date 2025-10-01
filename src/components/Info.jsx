export default function Info() {
    return (
        <>
        <img src="./src/assets/myself.png" alt="my photo" className="my-image" />
        <section>
            <header className="details">
                <h2 className="name">Mmakgwale Lebogo</h2>
                <span className="role">Frontend Developer</span>
                <h6 className="website">mmakgwale.website</h6>
            </header>
            <div className="buttons">
                <button className="email-btn" onClick={(e) => {
                    e.preventDefault();
                    window.open("mailto:placeholder.email@gmail.com");
                }}>
                    <i className="fas fa-envelope"></i>
                    Email
                </button>
                <button className="linkedin-btn" onClick={(e) => {
                    e.preventDefault();
                    window.open("https://www.linkedin.com/in/mmakgwale-lebogo-855a0934/","_blank")}}>
                    <i class="fa-brands fa-linkedin"></i>
                    LinkedIn
                </button>
            </div>
        </section>
        </>
    )
}