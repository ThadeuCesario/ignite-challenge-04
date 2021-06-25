
interface HeaderProps {
    selectedGenre: {
        title: string,
    }
}

const Header: React.FC<HeaderProps> = props => {
    const {selectedGenre} = props;
    return (
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
    )
}

export default Header;