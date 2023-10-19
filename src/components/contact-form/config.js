export const validationRegex = {
  phone: /^\d{10}$/,
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
};

export const messageBody = (
  fName = "",
  lName = "",
  email,
  phone,
  industry = "",
  description = ""
) => {
  return `<table>
      <tr><td><strong>Name:</strong></td><td>${fName + lName}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${email}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Industry:</strong></td><td>${industry}</td></tr>
       <tr><td><strong>Project Description:</strong></td><td>${description}</td></tr>
       <tr><td><strong>From Website:</strong></td><td>Innow8 UK</td></tr>
     <table>`;
};
