const Error = () => {
  return (
    <div style={styles.container}>
      <h1>404 </h1>
      <h1 style={styles.header}>Oops! Page not found.</h1>
      <p style={styles.message}>
        We Are sorry, the page you requested could not be found. Please check
        the URL and try again.
      </p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50vh",
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: "3rem",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.5rem",
    textAlign: "center",
    maxWidth: "80%",
  },
};

export default Error;
