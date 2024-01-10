import { useContext } from 'react';
import { ThemeContext } from '../App';

function Panel({ title, children }) {
  // children = props.children
  // title = props.title

  // context
  const theme = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
}

export default Panel;
