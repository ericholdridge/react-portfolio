/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Container from "../../components/Global/Container";

const Contact = () => {
  return (
    <div className="contact" id="contact" css={styles}>
      <h2>Contact</h2>
      <Container>
        {/* <form method="POST" name="contact" data-netlify="true">
          <label>Name:</label>
          <input type="text" name="name" placeholder="Name" />
          <label>Email:</label>
          <input type="email" name="email" placeholder="Email" />
          <label>Message:</label>
          <textarea rows="8" cols="50" name="message"></textarea>
          <input type="submit" class="sendMessage" value="Send message" />
        </form>
        <p>You can also email me at <span>eholdridge2@gmail.com</span></p> */}
        <form
        // onSubmit={handleSubmit}
        name="contact"
        method="post"
        action="/contact"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          // value={name}
          // onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Name"
        />
        <input
          // value={email}
          // onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          // value={message}
          // onChange={(e) => setMessage(e.target.value)}
          name="message"
          placeholder="I have an idea for a project..."
        ></textarea>
      </form>
      </Container>
    </div>
  );
};

const styles = css`
  width: 100%;
  padding: 80px 0;
  h2 {
    text-align: center;
    font-size: 3rem;
  }
  form {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    label {
      display: block;
      padding: 0 0 4px 0;
    }
    input {
      width: 100%;
      display: block;
      height: 42px;
      border-radius: 4px;
      border: 1px solid #ccc;
      padding: 0 0 0 10px;
      margin: 0 0 20px 0;
      &:nth-last-of-type(1) {
        margin: 20px auto 0 auto;
        cursor: pointer;
        width: 25%;
        background: transparent;
        border: 1px solid #000;
        font-size: 1rem;
        letter-spacing: .8px;
        outline: none;
        transition: box-shadow .4s ease-in-out;
        &:hover {
          box-shadow: 0 4px 10px -6px black;
        }
      }
      &:focus {
        outline: 1px solid black;
      }
    }
    textarea {
      border: 1px solid #ccc;
      &:focus {
        outline: 1px solid black;
      }
    }
  }
  p {
    text-align: center;
    padding: 20px 0 0 0;
    opacity: .5;
  }
  @media(max-width: 950px) {
    form {
      input {
        &:nth-last-of-type(1) {
          width: 100%;
          max-width: 125px;
          font-size: .8rem;
          padding: 0;
          font-size: .8rem;
        }
      }
    }
    p {
      font-size: .9rem;
    }
  }
`;

export default Contact;
