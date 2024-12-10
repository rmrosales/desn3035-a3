import React from "react";
export default function Reviews() {
    return <>

        <section className="reviews-section-wrapper">
            <div className="reviews-section-container">
                <div className="hero-review-block">
                    <h3>“Romeo&apos;s ability to blend functionality with aesthetic appeal <strong> ensured that our vision
                        was not only realized but enhanced.</strong> Will work with Romeo again.”</h3>
                    <div className="client">
                        <div className="client-thumbnail">
                            <img src="./images/client-photo-1.webp" alt="" />
                        </div>
                        <p>Elon Musk <br /> <span className="company">The Boring Company</span></p>
                    </div>
                </div>
                <div className="hero-review-block">
                    <h3>“Working with Romeo as our product designer was an exceptional experience. He has an awesome work
                        ethic. <strong>Super-duper highly recommend!</strong>”</h3>
                    <div className="client">
                        <div className="client-thumbnail">
                            <img src="./images/client-photo-2.webp" alt="" />
                        </div>
                        <p>Sabrina Carpenter <br /> <span className="company">Cadillac Fairview</span></p>
                    </div>
                </div>

            </div>
        </section>

    </>
}