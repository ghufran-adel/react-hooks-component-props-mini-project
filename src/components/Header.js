// a <header> element with the following elements inside:
// an <h1> with the name of the blog, passed as a prop

export default function Header({ name }) {
    return (
      <header>
        <h1>{name}</h1>
      </header>
    )
  }