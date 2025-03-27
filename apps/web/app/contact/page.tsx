import React from "react";
import Image from "next/image";
import Classes from "./page.module.css";

export const metadata = {
  title: "Contact",
};

const Contact = () => {
  return (
    <div className={Classes.container}>
      <article className={Classes.card__article}>
        <div className={Classes.card__profile}>
          <Image
            src={"/image.jpg"}
            alt="Picture of the author"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>

        <div className={Classes.card__tooltip}>
          <div className={Classes.card__content}>
            <header className={Classes.card__header}>
              <div className={Classes.card__social}>
                <a
                  href="https://www.linkedin.com/in/khushbu-kumari-a3b933254/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    style={{ backgroundColor: "skyblue" }}
                    src={"/linkedin.svg"}
                    alt="LinkedIn"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </a>

                <a href="https://github.com/khushbukumari01" target="_blank" rel="noopener noreferrer">
                  <Image
                    style={{ backgroundColor: "white" }}
                    src={"/github.svg"}
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </a>

                <a href="https://www.instagram.com/_khushbu_203/" target="_blank" rel="noopener noreferrer">
                  <Image
                    style={{ backgroundColor: "lightpink" }}
                    src={"/instagram.svg"}
                    alt="Instagram"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                </a>
              </div>
            </header>

            <div className={Classes.card__data}>
              <div className={Classes.card__image}>
                <div className={Classes.card__mask}>
                  <Image
                    src={"/image.jpg"}
                    alt="Profile Image"
                    width={200}
                    height={200}
                    className="rounded-full"
                  />
                </div>
              </div>

              <h2 className={Classes.card__name}>Khushbu Kumari</h2>
              <h3 className={Classes.card__profession}>Software Development Enthusiast</h3>

              <a href="mailto:khushbu.kumari.ece22@itbhu.ac.in" className={Classes.card__button}>
                <span>Send Message</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Contact;
