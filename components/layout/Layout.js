import { Container, Nav } from "react-bootstrap";
import { useRouter } from "next/router";

export default function ({ children }) {
  const router = useRouter();

  return (
    <>
      <Nav className="navbar-dark bg-dark">
        <Nav.Item>
          <Nav.Link href="/" className={router.pathname == "/" ? "nav-link nav-link-active" : "nav-link"}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/results" className={router.pathname == "/results" ? "nav-link nav-link-active" : "nav-link"}>
            Results
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/about-us"
            className={router.pathname == "/about-us" ? "nav-link nav-link-active" : "nav-link"}
          >
            About
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Container>{children}</Container>
    </>
  );
}
