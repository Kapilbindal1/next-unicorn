const Mailer = async (data) => {
  try {
    if (!data) return;

    // Wrap the fetch call in a Promise
    return new Promise((resolve, reject) => {
      fetch(
        "https://k8oj9rn6h1.execute-api.ap-south-1.amazonaws.com/test/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: ["kapilbindal1@gmail.com"],
            from: "contact@innow8apps.com",
            subject: "Contact form enquiry from Unicorn website",
            text: data,
            htmlText: data,
          } || ""),
        }
      )
        .then((res) => {
          if (res.ok) {
            resolve(res.status); // Resolve the promise with the status code
          } else {
            reject(`Failed to send email. Status code: ${res.status}`);
          }
        })
        .catch((error) => {
          reject(`Error sending email: ${error}`);
        });
    });
  } catch (error) {
    console.log("send mail try-catch error", error);
    throw error; // Throw the error to be caught in the calling function
  }
};

export default Mailer;