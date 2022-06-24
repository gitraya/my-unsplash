const Footer = () => (
  <footer className="flex flex-col mt-auto">
    <small className="max-w-full mx-auto my-6 text-center text-sm font-medium copyright">
      {`created by `}
      <b>
        <a
          href="https://github.com/gitraya"
          target="_blank"
          rel="noreferrer"
          className="no-underline"
        >
          gitraya
        </a>
      </b>
      {`- devChallenges.io`}
    </small>
  </footer>
);

export default Footer;
