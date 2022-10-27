import { Container, Layout } from "../../components";

export default function ProfilePage() {
  return (
    <Layout middleware="auth" title="Update Profile Information">
      <Container>
        <h1 className="text-xl font-semibold mb-2">
          Update Profile Information
        </h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugit
        voluptatibus maiores esse porro facere nihil sit nobis aut autem id
        consectetur, at architecto, voluptates, ut voluptas! Amet, saepe fugiat.
      </Container>
    </Layout>
  );
}
