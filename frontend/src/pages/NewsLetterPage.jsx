import NewsletterSignup from "../components/NewsLetterSignup";

function NewsletterPage() {
  return <NewsletterSignup />;
}

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  return { message: "Signup successful!" };
}
